/**
 * Adds 1920w WebP variants to <picture> srcset attributes in HTML files.
 * Finds WebP source lines ending at 1024w and appends the 1920w variant.
 */

import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
import { readdirSync } from 'fs'

const templateFiles = readdirSync(path.join(ROOT, 'templates'))
  .filter(f => f.endsWith('.html'))
  .map(f => `templates/${f}`)

const FILES = ['index.html', ...templateFiles]

// Pattern A: Liquid-style paths  {{ '/path/base-1024.webp' | relative_url }} 1024w
const LIQUID_PATTERN = /(<source srcset="[^"]*)([-\w]+)-1024\.webp(' \| relative_url \}\} 1024w)(\" sizes="[^"]*" type="image\/webp">)/g

// Pattern B: Relative paths  ../assets/path/base-1024.webp 1024w
const RELATIVE_PATTERN = /(srcset="[^"]*?)(\/[-\w/.]+)-1024\.webp( 1024w)(" sizes="[^"]*" type="image\/webp">)/g

for (const file of FILES) {
  const filePath = path.join(ROOT, file)
  let html = readFileSync(filePath, 'utf8')
  let count = 0

  // Handle Liquid-style paths (index.html, Jekyll content files)
  html = html.replace(LIQUID_PATTERN, (match, prefix, baseName, mid, suffix) => {
    const lastBrace = prefix.lastIndexOf("{{ '")
    const pathPrefix = prefix.slice(lastBrace + 4)
    const fullPath1920 = pathPrefix + baseName + '-1920.webp'
    const addition = `, {{ '${fullPath1920}' | relative_url }} 1920w`
    count++
    return prefix + baseName + '-1024.webp' + mid + addition + suffix
  })

  // Handle direct relative paths (templates using ../assets/)
  html = html.replace(RELATIVE_PATTERN, (match, prefix, basePath, w, suffix) => {
    const addition = `, ${basePath}-1920.webp 1920w`
    count++
    return prefix + basePath + '-1024.webp' + w + addition + suffix
  })

  if (count > 0) {
    writeFileSync(filePath, html)
    console.log(`${file}: updated ${count} srcset(s) with 1920w variant`)
  } else {
    console.log(`${file}: no updates needed`)
  }
}
