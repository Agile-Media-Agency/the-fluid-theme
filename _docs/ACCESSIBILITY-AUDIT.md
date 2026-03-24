# Accessibility Audit Report

**Date:** 2026-03-24
**Tool:** axe-core (WCAG 2.1 AA)
**Version:** @fluid-theme/core@0.4.5

## Context

Example pages (`examples/*.html`, `index.html`) are **Jekyll partial fragments** — in production they are wrapped by `_layouts/default.html` which provides `<html lang="en">`, `<title>`, `<meta>`, and the `<main>` landmark. The audit runs files directly, bypassing the Jekyll layout, which produces false positives for:

- `document-title` — title injected by Jekyll layout
- `html-has-lang` — `lang="en"` on `<html>` in Jekyll layout
- `landmark-one-main` — `<main>` wrapper in Jekyll layout

These are **not real violations** in the deployed site.

## Real Fixes Applied (2026-03-24)

- Spinners: Added `role="status"` to all `.spinner` and `.spinner-dots` elements (required for `aria-label` on `<div>`)
- Card ratings: Added `role="img"` to `.card__rating` elements (required for `aria-label` on `<div>`)
- Interactive card: Removed invalid `role="button"` from `<article>` element
- Updated `loading.css` usage comment to include `role="status"` in code examples

---

## Foundation

| Metric | Count |
|--------|-------|
| Passes | 31 |
| Violations | 4 |
| — Critical | 0 |
| — Serious | 2 |
| — Moderate | 2 |
| — Minor | 0 |
| Incomplete (needs review) | 0 |

### Violations

#### [SERIOUS] document-title

Ensure each HTML document contains a non-empty <title> element

**Help:** https://dequeuniversity.com/rules/axe/4.11/document-title?application=axeAPI

**Nodes affected:** 1

<details><summary>Show affected elements</summary>

```html
<html>
```

Fix any of the following:
  Document does not have a non-empty <title> element


</details>

#### [SERIOUS] html-has-lang

Ensure every HTML document has a lang attribute

**Help:** https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=axeAPI

**Nodes affected:** 1

<details><summary>Show affected elements</summary>

```html
<html>
```

Fix any of the following:
  The <html> element does not have a lang attribute


</details>

#### [MODERATE] landmark-one-main

Ensure the document has a main landmark

**Help:** https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=axeAPI

**Nodes affected:** 1

<details><summary>Show affected elements</summary>

```html
<html>
```

Fix all of the following:
  Document does not have a main landmark


</details>

#### [MODERATE] region

Ensure all page content is contained by landmarks

**Help:** https://dequeuniversity.com/rules/axe/4.11/region?application=axeAPI

**Nodes affected:** 13

<details><summary>Show affected elements</summary>

```html
<section class="demo-section" id="typography">
```

Fix any of the following:
  Some page content is not contained by landmarks

```html
<section class="demo-section" id="lists">
```

Fix any of the following:
  Some page content is not contained by landmarks

```html
<h2>Form Elements</h2>
```

Fix any of the following:
  Some page content is not contained by landmarks

```html
<div class="element-group">
```

Fix any of the following:
  Some page content is not contained by landmarks

```html
<div class="element-group">
```

Fix any of the following:
  Some page content is not contained by landmarks


…and 8 more.

</details>

---

## Components

| Metric | Count |
|--------|-------|
| Passes | 44 |
| Violations | 2 |
| — Critical | 0 |
| — Serious | 2 |
| — Moderate | 0 |
| — Minor | 0 |
| Incomplete (needs review) | 1 |

### Violations

#### [SERIOUS] document-title

Ensure each HTML document contains a non-empty <title> element

**Help:** https://dequeuniversity.com/rules/axe/4.11/document-title?application=axeAPI

**Nodes affected:** 1

<details><summary>Show affected elements</summary>

```html
<html>
```

Fix any of the following:
  Document does not have a non-empty <title> element


</details>

#### [SERIOUS] html-has-lang

Ensure every HTML document has a lang attribute

**Help:** https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=axeAPI

**Nodes affected:** 1

<details><summary>Show affected elements</summary>

```html
<html>
```

Fix any of the following:
  The <html> element does not have a lang attribute


</details>

---

## Homepage

| Metric | Count |
|--------|-------|
| Passes | 18 |
| Violations | 4 |
| — Critical | 0 |
| — Serious | 2 |
| — Moderate | 2 |
| — Minor | 0 |
| Incomplete (needs review) | 1 |

### Violations

#### [SERIOUS] document-title

Ensure each HTML document contains a non-empty <title> element

**Help:** https://dequeuniversity.com/rules/axe/4.11/document-title?application=axeAPI

**Nodes affected:** 1

<details><summary>Show affected elements</summary>

```html
<html>
```

Fix any of the following:
  Document does not have a non-empty <title> element


</details>

#### [SERIOUS] html-has-lang

Ensure every HTML document has a lang attribute

**Help:** https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=axeAPI

**Nodes affected:** 1

<details><summary>Show affected elements</summary>

```html
<html>
```

Fix any of the following:
  The <html> element does not have a lang attribute


</details>

#### [MODERATE] landmark-one-main

Ensure the document has a main landmark

**Help:** https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=axeAPI

**Nodes affected:** 1

<details><summary>Show affected elements</summary>

```html
<html>
```

Fix all of the following:
  Document does not have a main landmark


</details>

#### [MODERATE] region

Ensure all page content is contained by landmarks

**Help:** https://dequeuniversity.com/rules/axe/4.11/region?application=axeAPI

**Nodes affected:** 5

<details><summary>Show affected elements</summary>

```html
<h2>Choose Your Theme</h2>
```

Fix any of the following:
  Some page content is not contained by landmarks

```html
<p style="color: var(--color-text-muted); max-inline-size: 40rem; margin-inline: auto; margin-block-end: var(--space-6);">
      Ten complete themes with motion, colors, fonts, and layout.
    </p>
```

Fix any of the following:
  Some page content is not contained by landmarks

```html
<section class="section" data-layout="center" data-padding="md">
```

Fix any of the following:
  Some page content is not contained by landmarks

```html
<section class="section" data-layout="center" data-padding="md">
```

Fix any of the following:
  Some page content is not contained by landmarks

```html
<section class="section" data-layout="center" data-padding="lg" style="background: var(--color-surface);">
```

Fix any of the following:
  Some page content is not contained by landmarks


</details>

---

## Summary

| | Count |
|--|--|
| Total violations | 10 |
| Critical | 0 |
| Serious | 6 |

**Action required: 0 critical and 6 serious violations need fixing.**
