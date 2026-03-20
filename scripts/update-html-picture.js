#!/usr/bin/env node

/**
 * Fluid Theme — Update HTML to use <picture> elements
 *
 * Finds <img> tags referencing PNG/JPG files that have optimized WebP/AVIF
 * variants, and wraps them in <picture> elements with appropriate sources.
 *
 * Handles:
 * - Jekyll liquid tags: {{ '/path' | relative_url }}
 * - Relative paths: ../assets/images/...
 * - Absolute paths: /assets/images/...
 * - Cards in grids (sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw")
 * - Hero/full-width images (sizes="100vw")
 * - Avatar images (skipped — too small for srcset)
 *
 * Usage:
 *   node scripts/update-html-picture.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

/**
 * For a given original PNG path, find what optimized files exist on disk.
 */
function findOptimizedVariants(pngRelPath) {
  // Normalize: strip leading /, ../, and Jekyll tags
  let cleaned = pngRelPath
    .replace(/\{\{\s*'([^']*)'\s*\|\s*relative_url\s*\}\}/g, '$1')
    .replace(/^\.\.\//, '')
    .replace(/^\//, '');

  const absPath = path.join(ROOT, cleaned);
  if (!fs.existsSync(absPath)) return null;

  const dir = path.dirname(absPath);
  const ext = path.extname(absPath);
  const base = path.basename(absPath, ext);

  // Look for webp and avif variants
  const webps = [];
  const avifs = [];

  for (const file of fs.readdirSync(dir)) {
    if (file.startsWith(base + '-') && file.endsWith('.webp')) {
      const widthMatch = file.match(/-(\d+)\.webp$/);
      if (widthMatch) webps.push({ file, width: parseInt(widthMatch[1]) });
    }
    if (file.startsWith(base + '-') && file.endsWith('.avif')) {
      const widthMatch = file.match(/-(\d+)\.avif$/);
      if (widthMatch) avifs.push({ file, width: parseInt(widthMatch[1]) });
    }
  }

  if (webps.length === 0 && avifs.length === 0) return null;

  webps.sort((a, b) => a.width - b.width);
  avifs.sort((a, b) => a.width - b.width);

  return { dir: path.dirname(cleaned), base, ext, webps, avifs };
}

/**
 * Build the path prefix to use in HTML (preserves ../assets or Jekyll tags).
 */
function getPathPrefix(originalSrc) {
  // Jekyll liquid tag
  const jekyllMatch = originalSrc.match(/\{\{\s*'([^']*)'\s*\|\s*relative_url\s*\}\}/);
  if (jekyllMatch) {
    const innerPath = jekyllMatch[1];
    const dir = path.dirname(innerPath);
    return { prefix: `{{ '${dir}/`, suffix: `' | relative_url }}`, isJekyll: true };
  }

  // Regular relative path
  const dir = originalSrc.substring(0, originalSrc.lastIndexOf('/'));
  return { prefix: `${dir}/`, suffix: '', isJekyll: false };
}

/**
 * Determine the sizes attribute based on context.
 */
function getSizesAttr(imgTag) {
  // Avatar images — skip entirely
  if (/class="avatar/.test(imgTag)) return null;

  // Hero background images — full viewport width
  if (/hero__background/.test(imgTag) || /hero__media/.test(imgTag)) return '100vw';

  // Blog post inline images
  if (/blog-post/.test(imgTag) || /prose/.test(imgTag)) return '(max-width: 768px) 100vw, 720px';

  // Card media in a grid
  if (/card__media/.test(imgTag)) return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

  // Demo images
  if (/demo-image/.test(imgTag)) return '(max-width: 640px) 100vw, 50vw';

  // Search results
  if (/search-result/.test(imgTag)) return '200px';

  // Default: assume full-width-ish
  return '100vw';
}

/**
 * Process a single HTML file.
 */
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changeCount = 0;

  // Match <img> tags with PNG sources (both direct paths and Jekyll liquid tags)
  const imgPattern = /<img\s([^>]*?)src="([^"]*\.png[^"]*)"([^>]*?)>/g;
  const replacements = [];

  let match;
  while ((match = imgPattern.exec(content)) !== null) {
    const fullMatch = match[0];
    const before = match[1];
    const src = match[2];
    const after = match[3];

    // Check if already inside a <picture> element (scan back to find unclosed <picture>)
    const textBefore = content.substring(0, match.index);
    const lastPictureOpen = textBefore.lastIndexOf('<picture>');
    const lastPictureClose = textBefore.lastIndexOf('</picture>');
    if (lastPictureOpen > lastPictureClose) continue;

    const variants = findOptimizedVariants(src);
    if (!variants) continue;

    const sizes = getSizesAttr(fullMatch);
    if (sizes === null) continue; // skip avatars

    const { prefix, suffix } = getPathPrefix(src);

    // Build AVIF source
    let avifSource = '';
    if (variants.avifs.length > 0) {
      const avifSrcset = variants.avifs.map(a => `${prefix}${a.file}${suffix} ${a.width}w`).join(', ');
      avifSource = `\n    <source srcset="${avifSrcset}" sizes="${sizes}" type="image/avif">`;
    }

    // Build WebP source with srcset
    let webpSource = '';
    if (variants.webps.length > 0) {
      const webpSrcset = variants.webps.map(w => `${prefix}${w.file}${suffix} ${w.width}w`).join(', ');
      webpSource = `\n    <source srcset="${webpSrcset}" sizes="${sizes}" type="image/webp">`;
    }

    // Keep the original <img> as fallback (with all its attributes intact)
    const pictureHtml = `<picture>${avifSource}${webpSource}\n    ${fullMatch}\n  </picture>`;

    replacements.push({ from: fullMatch, to: pictureHtml, index: match.index });
    changeCount++;
  }

  // Apply replacements in reverse order to preserve indices
  for (let i = replacements.length - 1; i >= 0; i--) {
    const r = replacements[i];
    content = content.substring(0, r.index) + r.to + content.substring(r.index + r.from.length);
  }

  if (changeCount > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ${path.relative(ROOT, filePath)}: ${changeCount} images wrapped in <picture>`);
  }

  return changeCount;
}

// Main
console.log('=== Updating HTML to use <picture> elements ===\n');

const htmlFiles = [];
for (const dir of ['templates', 'examples']) {
  const dirPath = path.join(ROOT, dir);
  if (!fs.existsSync(dirPath)) continue;
  for (const f of fs.readdirSync(dirPath)) {
    if (f.endsWith('.html')) htmlFiles.push(path.join(dirPath, f));
  }
}
// Root index.html
const rootIndex = path.join(ROOT, 'index.html');
if (fs.existsSync(rootIndex)) htmlFiles.push(rootIndex);

let total = 0;
for (const f of htmlFiles) {
  total += processFile(f);
}

console.log(`\nDone. ${total} images updated across ${htmlFiles.length} files.`);
