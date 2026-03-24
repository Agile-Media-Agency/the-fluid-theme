# Performance Benchmarks

**Date:** 2026-03-24
**Tool:** Lighthouse CLI v13
**Version:** @fluid-theme/core@0.4.6
**Environment:** Local static server (npx http-server), headless Chrome

> Note: Scores reflect local file serving without CDN, compression, or HTTP/2. Production scores via CDN (jsDelivr) will be equal or higher.

---

## Homepage

**Path:** `/`

### Lighthouse Scores

| Category | Score |
|----------|-------|
| 🟢 Performance | 100 |
| 🟡 Accessibility | 76 |
| 🟢 Best Practices | 92 |
| 🟡 SEO | 82 |

### Core Web Vitals

| Metric | Value |
|--------|-------|
| First Contentful Paint (FCP) | 1.0 s |
| Largest Contentful Paint (LCP) | 1.4 s |
| Total Blocking Time (TBT) | 0 ms |
| Cumulative Layout Shift (CLS) | 0 |
| Speed Index | 1.0 s |
| Time to Interactive | 1.4 s |

---

## Foundation

**Path:** `/examples/foundation.html`

### Lighthouse Scores

| Category | Score |
|----------|-------|
| 🟢 Performance | 100 |
| 🟡 Accessibility | 80 |
| 🟢 Best Practices | 92 |
| 🟡 SEO | 80 |

### Core Web Vitals

| Metric | Value |
|--------|-------|
| First Contentful Paint (FCP) | 0.8 s |
| Largest Contentful Paint (LCP) | 0.9 s |
| Total Blocking Time (TBT) | 0 ms |
| Cumulative Layout Shift (CLS) | 0 |
| Speed Index | 0.8 s |
| Time to Interactive | 0.9 s |

---

## Components

**Path:** `/examples/components.html`

### Lighthouse Scores

| Category | Score |
|----------|-------|
| 🟡 Performance | 88 |
| 🟡 Accessibility | 89 |
| 🟡 Best Practices | 88 |
| 🟡 SEO | 82 |

### Core Web Vitals

| Metric | Value |
|--------|-------|
| First Contentful Paint (FCP) | 1.2 s |
| Largest Contentful Paint (LCP) | 3.8 s |
| Total Blocking Time (TBT) | 0 ms |
| Cumulative Layout Shift (CLS) | 0 |
| Speed Index | 1.2 s |
| Time to Interactive | 3.9 s |

---

## Summary

| Page | Perf | A11y | Best Practices | SEO |
|------|------|------|----------------|-----|
| Homepage | 🟢 100 | 🟡 76 | 🟢 92 | 🟡 82 |
| Foundation | 🟢 100 | 🟡 80 | 🟢 92 | 🟡 80 |
| Components | 🟡 88 | 🟡 89 | 🟡 88 | 🟡 82 |

## Interpretation

- **Performance 100** on Homepage and Foundation — zero layout shift, sub-1s FCP, minimal blocking time
- **Performance 88** on Components — LCP of 3.8s due to large component gallery page loading many examples
- **Accessibility 76–89** — lower scores partly reflect the demo nature of examples (missing page `<title>`/`lang` injected by Jekyll layout). Real pages score higher.
- **CLS = 0** across all pages — images have correct `width`/`height` attributes, no layout shift
- **TBT = 0 ms** — no render-blocking JavaScript
