/**
 * Performance benchmarks for @fluid-theme/core
 * Uses Lighthouse CLI to score key pages
 */

import { execFileSync } from 'child_process'
import { createServer } from 'http'
import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

const PORT = 8098
const PAGES = [
  { path: '/',                         label: 'Homepage' },
  { path: '/examples/foundation.html', label: 'Foundation' },
  { path: '/examples/components.html', label: 'Components' },
]

function serve() {
  const server = createServer((req, res) => {
    const safePath = req.url === '/' ? '/index.html' : req.url.split('?')[0]
    const filePath = path.join(ROOT, safePath)
    try {
      const ext = path.extname(filePath)
      const mime = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.webp': 'image/webp',
        '.png': 'image/png',
        '.avif': 'image/avif',
        '.svg': 'image/svg+xml',
      }[ext] || 'text/plain'
      const content = readFileSync(filePath)
      res.writeHead(200, { 'Content-Type': mime })
      res.end(content)
    } catch {
      res.writeHead(404)
      res.end('Not found')
    }
  })
  server.listen(PORT)
  return server
}

function runLighthouse(url, label) {
  console.log(`Running Lighthouse: ${label} (${url})`)
  try {
    // Call lighthouse binary directly with args array (no shell, no injection risk)
    const lighthouseBin = new URL('../node_modules/.bin/lighthouse', import.meta.url).pathname
    const result = execFileSync(
      lighthouseBin,
      [
        url,
        '--output=json',
        '--quiet',
        '--chrome-flags=--headless=new --no-sandbox --disable-gpu',
        '--only-categories=performance,accessibility,best-practices,seo',
      ],
      { maxBuffer: 10 * 1024 * 1024, timeout: 180000 }
    )

    const report = JSON.parse(result.toString())
    const cats = report.categories
    const scores = {
      performance:   Math.round((cats.performance?.score        ?? 0) * 100),
      accessibility: Math.round((cats.accessibility?.score      ?? 0) * 100),
      bestPractices: Math.round((cats['best-practices']?.score  ?? 0) * 100),
      seo:           Math.round((cats.seo?.score                ?? 0) * 100),
    }

    const audits = report.audits
    const metrics = {
      fcp: audits['first-contentful-paint']?.displayValue    ?? 'N/A',
      lcp: audits['largest-contentful-paint']?.displayValue  ?? 'N/A',
      tbt: audits['total-blocking-time']?.displayValue       ?? 'N/A',
      cls: audits['cumulative-layout-shift']?.displayValue   ?? 'N/A',
      si:  audits['speed-index']?.displayValue               ?? 'N/A',
      tti: audits['interactive']?.displayValue               ?? 'N/A',
    }

    console.log(`  Perf: ${scores.performance} | A11y: ${scores.accessibility} | BP: ${scores.bestPractices} | SEO: ${scores.seo}`)
    console.log(`  FCP: ${metrics.fcp} | LCP: ${metrics.lcp} | CLS: ${metrics.cls}`)

    return { label, url, scores, metrics, error: null }
  } catch (err) {
    const msg = (err.message || String(err)).slice(0, 500)
    console.error(`  Error: ${msg}`)
    return { label, url, scores: null, metrics: null, error: msg }
  }
}

function scoreEmoji(score) {
  if (score >= 90) return '🟢'
  if (score >= 50) return '🟡'
  return '🔴'
}

async function benchmark() {
  const server = serve()
  await new Promise(r => setTimeout(r, 500))

  const results = []
  for (const page of PAGES) {
    const result = runLighthouse(`http://localhost:${PORT}${page.path}`, page.label)
    results.push(result)
  }

  server.close()

  const version = JSON.parse(readFileSync(path.join(ROOT, 'package.json'), 'utf8')).version
  const now = new Date().toISOString().split('T')[0]

  let md = `# Performance Benchmarks\n\n`
  md += `**Date:** ${now}\n`
  md += `**Tool:** Lighthouse CLI v13\n`
  md += `**Version:** @fluid-theme/core@${version}\n`
  md += `**Environment:** Local static server, headless Chrome\n\n`
  md += `> Note: Scores reflect local file serving without CDN, compression, or HTTP/2. Production scores via CDN will be higher.\n\n`
  md += `---\n\n`

  for (const result of results) {
    md += `## ${result.label}\n\n`
    md += `**URL:** \`${result.url}\`\n\n`

    if (result.error) {
      md += `**Error running Lighthouse:** See terminal output for details.\n\n`
      md += `---\n\n`
      continue
    }

    const { scores, metrics } = result

    md += `### Lighthouse Scores\n\n`
    md += `| Category | Score |\n|----------|-------|\n`
    md += `| ${scoreEmoji(scores.performance)} Performance | ${scores.performance} |\n`
    md += `| ${scoreEmoji(scores.accessibility)} Accessibility | ${scores.accessibility} |\n`
    md += `| ${scoreEmoji(scores.bestPractices)} Best Practices | ${scores.bestPractices} |\n`
    md += `| ${scoreEmoji(scores.seo)} SEO | ${scores.seo} |\n\n`

    md += `### Core Web Vitals\n\n`
    md += `| Metric | Value |\n|--------|-------|\n`
    md += `| First Contentful Paint (FCP) | ${metrics.fcp} |\n`
    md += `| Largest Contentful Paint (LCP) | ${metrics.lcp} |\n`
    md += `| Total Blocking Time (TBT) | ${metrics.tbt} |\n`
    md += `| Cumulative Layout Shift (CLS) | ${metrics.cls} |\n`
    md += `| Speed Index | ${metrics.si} |\n`
    md += `| Time to Interactive | ${metrics.tti} |\n\n`

    md += `---\n\n`
  }

  md += `## Summary\n\n`
  md += `| Page | Perf | A11y | Best Practices | SEO |\n`
  md += `|------|------|------|----------------|-----|\n`
  for (const r of results) {
    if (r.error) {
      md += `| ${r.label} | Error | — | — | — |\n`
    } else {
      const { scores } = r
      md += `| ${r.label} | ${scoreEmoji(scores.performance)} ${scores.performance} | ${scoreEmoji(scores.accessibility)} ${scores.accessibility} | ${scoreEmoji(scores.bestPractices)} ${scores.bestPractices} | ${scoreEmoji(scores.seo)} ${scores.seo} |\n`
    }
  }

  const outPath = path.join(ROOT, '_docs/PERFORMANCE-BENCHMARKS.md')
  writeFileSync(outPath, md)
  console.log('\nReport written to _docs/PERFORMANCE-BENCHMARKS.md')
}

benchmark().catch(err => {
  console.error(err)
  process.exit(1)
})
