#!/usr/bin/env node

/**
 * Fluid Theme — Image Optimization Script
 *
 * Finds all PNG/JPG images referenced in templates/ and examples/ HTML files,
 * then generates optimized WebP (3 sizes) and AVIF (1 size) variants.
 *
 * Usage:
 *   node scripts/optimize-images.js          # optimize all referenced images
 *   node scripts/optimize-images.js --dry-run # show what would be done
 *
 * Originals are NOT deleted — they serve as source files and PNG fallbacks.
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const DRY_RUN = process.argv.includes('--dry-run');

// Responsive breakpoints
const WIDTHS = [640, 1024, 1920];

// Quality settings (tuned for photography)
const WEBP_QUALITY = 80;
const AVIF_QUALITY = 65; // AVIF is more efficient, lower number = same visual quality

/**
 * Scan HTML files for image references, return unique resolved paths.
 */
function findReferencedImages() {
  const htmlDirs = ['templates', 'examples'];
  const rootHtmlFiles = ['index.html'];
  const imgPattern = /src="([^"]*\.(png|jpe?g))"/gi;
  const seen = new Set();

  function extractFromFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    let match;
    while ((match = imgPattern.exec(content)) !== null) {
      let imgPath = match[1];
      // Strip Jekyll liquid tags
      imgPath = imgPath.replace(/\{\{\s*'([^']*)'\s*\|\s*relative_url\s*\}\}/g, '$1');
      // Resolve relative paths
      imgPath = imgPath.replace(/^\.\.\//, '');
      imgPath = imgPath.replace(/^\//, '');
      const absPath = path.join(ROOT, imgPath);
      if (fs.existsSync(absPath) && !seen.has(imgPath)) {
        seen.add(imgPath);
      }
    }
  }

  for (const dir of htmlDirs) {
    const dirPath = path.join(ROOT, dir);
    if (!fs.existsSync(dirPath)) continue;
    for (const file of fs.readdirSync(dirPath)) {
      if (file.endsWith('.html')) {
        extractFromFile(path.join(dirPath, file));
      }
    }
  }

  for (const file of rootHtmlFiles) {
    const filePath = path.join(ROOT, file);
    if (fs.existsSync(filePath)) {
      extractFromFile(filePath);
    }
  }

  return Array.from(seen).sort();
}

/**
 * Get file size in bytes.
 */
function fileSize(filePath) {
  try {
    return fs.statSync(filePath).size;
  } catch {
    return 0;
  }
}

/**
 * Format bytes as human-readable string.
 */
function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

/**
 * Generate optimized variants for a single image.
 */
async function optimizeImage(relPath) {
  const absPath = path.join(ROOT, relPath);
  const dir = path.dirname(absPath);
  const ext = path.extname(absPath);
  const base = path.basename(absPath, ext);
  const originalSize = fileSize(absPath);

  const results = { original: originalSize, optimized: 0, files: [] };

  // Get image metadata to know its actual dimensions
  const metadata = await sharp(absPath).metadata();
  const srcWidth = metadata.width || 1920;

  // Generate WebP at 3 sizes
  for (const w of WIDTHS) {
    if (w > srcWidth) continue; // skip sizes larger than source
    const outName = `${base}-${w}.webp`;
    const outPath = path.join(dir, outName);

    if (!DRY_RUN && !fs.existsSync(outPath)) {
      await sharp(absPath)
        .resize(w, null, { withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY, effort: 4 })
        .toFile(outPath);
    }

    const sz = DRY_RUN ? 0 : fileSize(outPath);
    results.optimized += sz;
    results.files.push({ name: outName, size: sz });
  }

  // Generate AVIF at largest size (1920 or source width)
  const avifWidth = Math.min(1920, srcWidth);
  const avifName = `${base}-${avifWidth}.avif`;
  const avifPath = path.join(dir, avifName);

  if (!DRY_RUN && !fs.existsSync(avifPath)) {
    await sharp(absPath)
      .resize(avifWidth, null, { withoutEnlargement: true })
      .avif({ quality: AVIF_QUALITY, effort: 4 })
      .toFile(avifPath);
  }

  const avifSize = DRY_RUN ? 0 : fileSize(avifPath);
  results.optimized += avifSize;
  results.files.push({ name: avifName, size: avifSize });

  return results;
}

/**
 * Main entry point.
 */
async function main() {
  console.log('=== Fluid Theme Image Optimization ===\n');

  if (DRY_RUN) {
    console.log('DRY RUN — no files will be written\n');
  }

  const images = findReferencedImages();
  console.log(`Found ${images.length} unique images referenced in HTML files.\n`);

  if (images.length === 0) {
    console.log('Nothing to optimize.');
    return;
  }

  let totalOriginal = 0;
  let totalOptimized = 0;
  let totalFiles = 0;

  for (const img of images) {
    process.stdout.write(`Processing: ${path.basename(img)}... `);

    try {
      const result = await optimizeImage(img);
      totalOriginal += result.original;
      totalOptimized += result.optimized;
      totalFiles += result.files.length;

      if (DRY_RUN) {
        console.log(`${formatBytes(result.original)} → would generate ${result.files.length} variants`);
      } else {
        const bestWebp = result.files.find(f => f.name.endsWith('-1920.webp') || f.name.endsWith('-1024.webp'));
        const ratio = bestWebp ? ((1 - bestWebp.size / result.original) * 100).toFixed(0) : '?';
        console.log(`${formatBytes(result.original)} → ${result.files.length} files (${ratio}% smaller)`);
      }
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
    }
  }

  console.log('\n=== Summary ===');
  console.log(`Images processed: ${images.length}`);
  console.log(`Files generated:  ${totalFiles}`);
  console.log(`Original total:   ${formatBytes(totalOriginal)}`);
  if (!DRY_RUN) {
    console.log(`Optimized total:  ${formatBytes(totalOptimized)}`);
    console.log(`Savings:          ${formatBytes(totalOriginal - totalOptimized)} (${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%)`);
  }
  console.log('\nOriginals have been preserved. You can archive them separately if needed.');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
