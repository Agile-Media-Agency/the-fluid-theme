/**
 * Accessibility audit for @fluid-theme/core
 * Uses axe-core + puppeteer to test HTML example pages
 */

import puppeteer from 'puppeteer'
import { createServer } from 'http'
import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

// Inline axe-core source
const axeSource = readFileSync(path.join(ROOT, 'node_modules/axe-core/axe.min.js'), 'utf8')

// Pages to audit
const PAGES = [
  { file: 'examples/foundation.html', label: 'Foundation' },
  { file: 'examples/components.html', label: 'Components' },
  { file: 'index.html',               label: 'Homepage' },
]

// Simple static file server
function serve(port) {
  const server = createServer((req, res) => {
    const safePath = req.url === '/' ? '/index.html' : req.url
    const filePath = path.join(ROOT, safePath)
    try {
      const ext = path.extname(filePath)
      const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript' }[ext] || 'text/plain'
      const content = readFileSync(filePath)
      res.writeHead(200, { 'Content-Type': mime })
      res.end(content)
    } catch {
      res.writeHead(404)
      res.end('Not found')
    }
  })
  server.listen(port)
  return server
}

async function audit() {
  const PORT = 8099
  const server = serve(PORT)
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
  const results = []

  for (const { file, label } of PAGES) {
    const url = `http://localhost:${PORT}/${file}`
    console.log(`Auditing: ${label} (${url})`)

    const page = await browser.newPage()
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 })
      await page.evaluate(axeSource)

      const axeResults = await page.evaluate(async () => {
        return await window.axe.run(document, {
          runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'],
        })
      })

      results.push({
        label,
        url: file,
        violations: axeResults.violations,
        passes: axeResults.passes.length,
        incomplete: axeResults.incomplete.length,
      })

      const vCount = axeResults.violations.length
      const critical = axeResults.violations.filter(v => v.impact === 'critical').length
      const serious  = axeResults.violations.filter(v => v.impact === 'serious').length
      console.log(`  ✓ ${axeResults.passes.length} passes | ${vCount} violations (${critical} critical, ${serious} serious)`)
    } catch (err) {
      console.error(`  ✗ Error: ${err.message}`)
      results.push({ label, url: file, error: err.message })
    } finally {
      await page.close()
    }
  }

  await browser.close()
  server.close()

  // Generate report
  const now = new Date().toISOString().split('T')[0]
  let md = `# Accessibility Audit Report\n\n`
  md += `**Date:** ${now}\n`
  md += `**Tool:** axe-core (WCAG 2.1 AA)\n`
  md += `**Version:** @fluid-theme/core@${JSON.parse(readFileSync(path.join(ROOT, 'package.json'), 'utf8')).version}\n\n`
  md += `---\n\n`

  for (const result of results) {
    md += `## ${result.label}\n\n`

    if (result.error) {
      md += `**Error:** ${result.error}\n\n`
      continue
    }

    const critical = result.violations.filter(v => v.impact === 'critical')
    const serious  = result.violations.filter(v => v.impact === 'serious')
    const moderate = result.violations.filter(v => v.impact === 'moderate')
    const minor    = result.violations.filter(v => v.impact === 'minor')

    md += `| Metric | Count |\n|--------|-------|\n`
    md += `| Passes | ${result.passes} |\n`
    md += `| Violations | ${result.violations.length} |\n`
    md += `| — Critical | ${critical.length} |\n`
    md += `| — Serious | ${serious.length} |\n`
    md += `| — Moderate | ${moderate.length} |\n`
    md += `| — Minor | ${minor.length} |\n`
    md += `| Incomplete (needs review) | ${result.incomplete} |\n\n`

    if (result.violations.length === 0) {
      md += `**No violations found.**\n\n`
    } else {
      md += `### Violations\n\n`
      for (const v of result.violations) {
        md += `#### [${v.impact.toUpperCase()}] ${v.id}\n\n`
        md += `${v.description}\n\n`
        md += `**Help:** ${v.helpUrl}\n\n`
        md += `**Nodes affected:** ${v.nodes.length}\n\n`
        if (v.nodes.length > 0) {
          md += `<details><summary>Show affected elements</summary>\n\n`
          for (const node of v.nodes.slice(0, 5)) {
            md += `\`\`\`html\n${node.html}\n\`\`\`\n`
            if (node.failureSummary) md += `\n${node.failureSummary}\n\n`
          }
          if (v.nodes.length > 5) md += `\n…and ${v.nodes.length - 5} more.\n`
          md += `\n</details>\n\n`
        }
      }
    }
    md += `---\n\n`
  }

  // Summary
  const allViolations = results.flatMap(r => r.violations || [])
  const critical = allViolations.filter(v => v.impact === 'critical').length
  const serious  = allViolations.filter(v => v.impact === 'serious').length
  md += `## Summary\n\n`
  md += `| | Count |\n|--|--|\n`
  md += `| Total violations | ${allViolations.length} |\n`
  md += `| Critical | ${critical} |\n`
  md += `| Serious | ${serious} |\n\n`

  if (critical + serious === 0) {
    md += `**No critical or serious violations found. Accessibility is in good shape.**\n`
  } else {
    md += `**Action required: ${critical} critical and ${serious} serious violations need fixing.**\n`
  }

  const outPath = path.join(ROOT, '_docs/ACCESSIBILITY-AUDIT.md')
  writeFileSync(outPath, md)
  console.log(`\nReport written to _docs/ACCESSIBILITY-AUDIT.md`)

  return { critical, serious, total: allViolations.length }
}

audit().then(({ critical, serious }) => {
  process.exit(critical + serious > 0 ? 1 : 0)
}).catch(err => {
  console.error(err)
  process.exit(1)
})
