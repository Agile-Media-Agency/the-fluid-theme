# Pre-Release Deep Dive Audit — Fluid Theme v0.3.4

Read CLAUDE.md, then .agent/ARCHITECTURE.md, then .agent/rules/core.md first.

This is a comprehensive pre-release audit. Work through ALL sections autonomously. Write findings to `_docs/PRE-RELEASE-AUDIT.md` as you go. Fix everything you can. Note anything you can't fix.

---

## PHASE 1: CSS VALIDITY & SYNTAX

For every CSS file in `src/` (core, components, sections, layouts, animations):

1. Check for syntax errors: unclosed brackets, missing semicolons, malformed selectors
2. Check every `@import` in `fluid.css` resolves to a real file
3. Check every `@layer` declaration is one of: reset, tokens, base, layouts, components, themes, utilities
4. Check for duplicate selectors within the same file (exact same selector appearing twice)
5. Check for `!important` anywhere — should not exist in a well-layered system
6. Check for any CSS that's outside of an `@layer` block (except in fluid.css utilities/layouts sections)
7. Verify every `var(--token)` references a token that actually exists in `tokens.css`
8. Check for any hex colors, rgb(), hsl() used directly instead of tokens (except in tokens.css itself)
9. Check for any hardcoded `px` values that should be tokens (ignore 0, 1px border-width, and values in tokens.css)
10. Check for any `width`, `height`, `top`, `left`, `right`, `bottom` that should be logical properties

Report format per file:
```
### src/components/button.css
- ✅ Syntax valid
- ✅ All in @layer components
- ⚠️ Line 45: hardcoded `2px` — should this be a token?
- ❌ Line 102: `margin-left` — should be `margin-inline-start`
```

---

## PHASE 2: BROWSER COMPATIBILITY

The framework uses modern CSS. Verify each feature is safe for the browserslist target (last 2 versions of Chrome, Firefox, Safari, Edge).

Check that the following features are used correctly:

| Feature | Check |
|---------|-------|
| `@layer` | Supported in all targets since 2022. ✅ if used correctly. |
| `@container` queries | Supported since Chrome 105, Safari 16, Firefox 110. Check no deprecated syntax. |
| `:has()` selector | Supported since Safari 15.4, Chrome 105, Firefox 121. Check usage. |
| `color-mix()` | Chrome 111, Safari 16.2, Firefox 113. Verify all uses. |
| `oklch()` | Chrome 111, Safari 15.4, Firefox 113. Check all color definitions. |
| `light-dark()` | Chrome 123, Safari 17.5, Firefox 120. **This is the newest — verify carefully.** |
| Native CSS nesting | Chrome 120, Safari 17.2, Firefox 117. Check for correct syntax (not Sass-style). |
| `@property` | Chrome 85, Safari 15.4, Firefox 128. Check all registered properties. |
| `@scope` | Chrome 118, **NOT in Firefox**. If used, needs fallback or removal. |
| `subgrid` | Chrome 117, Safari 16, Firefox 71. Check usage. |
| Popover API `[popover]` | Chrome 114, Safari 17, Firefox 125. Check usage. |
| View Transitions API | Chrome 111, **NOT in Firefox, NOT in Safari**. If used, must be progressive enhancement only. |
| `text-wrap: balance` | Chrome 114, Safari 17.5, Firefox 121. Check usage. |
| `dvh`/`svh`/`lvh` units | Chrome 108, Safari 15.4, Firefox 101. Check usage. |
| `translate` shorthand | Chrome 104, Safari 14.1, Firefox 72. ✅ |
| Container query units (`cqi` etc.) | Chrome 105, Safari 16, Firefox 110. Check usage. |

For any feature that's NOT supported in the last 2 Firefox or Safari versions:
- If it's decorative (visual enhancement), verify it degrades gracefully
- If it's structural (layout, functionality), flag it as a BLOCKER

---

## PHASE 3: ACCESSIBILITY DEEP DIVE

### 3A. HTML Accessibility (every file in templates/ and examples/)

For EVERY HTML file:
1. Does it have `<html lang="en">`?
2. Does it have a proper `<title>`?
3. Is there exactly one `<main>` element?
4. Are headings in proper hierarchy (no skipping h1 → h3)?
5. Does every `<img>` have `alt`? (If decorative, `alt=""` is acceptable)
6. Does every form `<input>` have a linked `<label>` (via `for`/`id` or wrapping)?
7. Does every icon-only button have `aria-label`?
8. Are landmark elements used correctly (`<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>`)?
9. Does navigation have `aria-label` when there are multiple `<nav>` elements?
10. Are all interactive elements reachable via Tab in a logical order?
11. No positive `tabindex` values (only `0` or `-1`)
12. No `<div>` or `<span>` used as buttons without `role="button"` and `tabindex="0"`

### 3B. Color Contrast

In `tokens.css`, verify:
1. `--color-text` on `--color-background` meets 4.5:1 (AA normal text)
2. `--color-text-muted` on `--color-background` meets 4.5:1
3. `--color-text-subtle` on `--color-background` — if below 4.5:1, it should only be used for decorative text
4. All status colors (`--color-success`, `--color-warning`, `--color-error`, `--color-info`) on their `-subtle` backgrounds meet 4.5:1
5. Button text on button backgrounds meets 4.5:1 for all variants
6. Check the same contrasts in DARK MODE

### 3C. Reduced Motion

For EVERY CSS file that contains `animation`, `transition`, or `@keyframes`:
1. Does it have a corresponding `@media (prefers-reduced-motion: reduce)` block?
2. Does the reduced-motion block actually disable or simplify the animation?
3. Check that `[data-motion="still"]` also disables motion where applicable

### 3D. Focus States

1. Verify `:focus-visible` is styled for every interactive component
2. No `outline: none` without a replacement style
3. Focus ring is visible against both light and dark backgrounds
4. Modal focus trapping: no manual focus-trap JS on `<dialog>` elements

---

## PHASE 4: HTML VALIDATION

For every HTML file in `templates/` and `examples/`:

1. No `<a>` wrapping `<button>` (or vice versa)
2. No block elements inside inline elements
3. All `id` attributes are unique within each page
4. All `for`/`id` pairs match on form labels
5. No deprecated HTML attributes
6. All self-closing tags are correct (no `<div/>`)
7. `<dialog>` elements use proper structure (`.modal__content`, `.modal__header`, etc.)
8. All `<table>` elements have `<thead>` and `<tbody>`
9. No inline `style` attributes that should be classes or tokens (flag but don't necessarily fix — some are acceptable in demo templates)
10. Check for any empty `<a href="#">` that should have real destinations or be buttons

---

## PHASE 5: TOKEN CONSISTENCY

Read `src/core/tokens.css` completely. Then:

1. List every custom property defined (--space-*, --color-*, --font-*, etc.)
2. Search all other CSS files for `var(--` references
3. Flag any reference to a token that doesn't exist in tokens.css
4. Flag any tokens defined in tokens.css that are never referenced anywhere
5. Check for inconsistent naming: are all spacing tokens `--space-*`? All colors `--color-*`? Any naming outliers?
6. Verify dark mode tokens: does every color token have a dark mode counterpart?
7. Check preset tokens: do all 10 palettes (fluid, morandi, bold, pastel, earth, mono, 80s, matrix, subtle, tsunami) define the same set of properties?

---

## PHASE 6: RESPONSIVE BEHAVIOR

For every component CSS file:

1. Does it have responsive rules (`@media (max-width: 40rem)` or `@container`)?
2. Are responsive rules appropriate for the component? (e.g., modal must convert to bottom sheet, table must stack)
3. Check `min()`, `max()`, `clamp()` usage in sizing — any that could cause overflow?
4. Check for `overflow` handling — do scrollable containers have proper overflow settings?
5. Check all `grid-template-columns` for mobile safety — do they use `minmax(min(100%, X), 1fr)` pattern or similar?

---

## PHASE 7: DARK MODE

1. Check `light-dark()` usage in tokens.css — is it applied to ALL color tokens?
2. Open each template mentally: would the dark mode colors work? Are there any hardcoded light-mode colors in templates (white text on what would be white in dark mode)?
3. Check for `color-scheme: light dark` on `:root` or `html`
4. Check hero sections with background images — do overlays adapt to dark mode?
5. Check form inputs — do they have appropriate dark mode backgrounds?
6. Check borders — are they using `--color-border` tokens, not hardcoded?

---

## PHASE 8: PRINT STYLES

1. Does `base.css` or another file include `@media print` rules?
2. Do print styles hide navigation, settings panel, scroll progress?
3. Do print styles show full URLs after links?
4. Do print styles remove background colors and shadows for ink savings?
5. Do print styles ensure text is black on white?

---

## PHASE 9: DOCUMENTATION COMPLETENESS

### 9A. Component Documentation
Read `_docs/reference/components.md`. For every CSS file in `src/components/`:
1. Is the component documented?
2. Does the documentation show all variants?
3. Does the documentation show all sizes?
4. Does the documentation include a usage example?
5. Does the documentation match the actual CSS? (e.g., if the doc says `data-variant="filled"` exists, does the CSS have that selector?)

### 9B. Token Documentation
Read `_docs/reference/tokens.md`. Verify it lists all current tokens from `tokens.css`.

### 9C. Getting Started / Installation
Read `_docs/getting-started.md` and `_docs/installation.md`:
1. Are the instructions accurate for v0.3.4?
2. Do the file paths match the actual repo structure?
3. Is the quickstart example correct and functional?

### 9D. Start Here Index
Read `_docs/_start-here.md`:
1. Does it link to all documentation files that exist?
2. Are there broken links to files that don't exist?
3. Does it reflect the current component count (23), template count (18), section count (6)?

### 9E. README.md
Read the root `README.md`:
1. Accurate feature list?
2. Correct installation instructions?
3. Links to live site and documentation work?
4. Version number matches?

---

## PHASE 10: NPM PACKAGE READINESS

1. Does `package.json` have correct `main` and `style` fields pointing to `src/fluid.css`?
2. Does the `files` array include everything needed for npm install? (src/, LICENSE, README.md, CHANGELOG.md)
3. Is there a LICENSE file in the repo root?
4. Would `npm pack` produce a clean package? Run it (dry-run) and check:
   ```
   npm pack --dry-run
   ```
5. Check that no unnecessary files would be included (.agent/, .claude/, _docs/, templates/, examples/)

---

## PHASE 11: CROSS-FILE CONSISTENCY

1. Version number consistent everywhere: package.json, PROJECT_STATUS.md, CHANGELOG.md, fluid.css header, all version badges in templates
2. Component count consistent: CLAUDE.md, PROJECT_STATUS.md, _start-here.md, fluid-theme SKILL.md, ARCHITECTURE.md
3. Template count consistent across all documentation
4. Layer order statement identical everywhere it appears
5. The `@import` list in fluid.css matches the actual files in src/components/ and src/sections/ — no missing imports, no imports to nonexistent files

---

## PHASE 12: SECURITY & BEST PRACTICES

1. No inline JavaScript `onclick`, `onload`, etc. in templates (use external scripts or progressive enhancement)
2. No external resource loading from CDNs (Google Fonts, etc.) without noting it — the framework should work offline
3. Check for any `eval()`, `innerHTML`, or `document.write` in any JS
4. CHANGELOG.md has no sensitive information (API keys, internal URLs, etc.)
5. No `.env` files or credentials in the repo

---

## PHASE 13: PERFORMANCE

1. What is the total CSS size of fluid.css (all imports combined)? Calculate approximate gzipped size.
2. Are there any obviously redundant rules (same property set twice in same selector)?
3. Are there any overly broad selectors that would cause style recalculation issues? (e.g., `*` selectors, deep descendant selectors)
4. Could any component CSS be lazily loaded? (probably not for v1, but note opportunities)
5. Check that no images are embedded as data URIs in CSS (they shouldn't be)

---

## OUTPUT

Write all findings to `_docs/PRE-RELEASE-AUDIT.md` with this structure:

```markdown
# Pre-Release Audit — Fluid Theme v0.3.4
**Date:** [today]
**Auditor:** Claude Code

## Summary
- X blockers found
- Y warnings found
- Z items fixed during audit

## Blockers (must fix before release)
...

## Warnings (should fix, not blocking)
...

## Fixed During Audit
| # | File | Issue | Fix |
|---|------|-------|-----|

## Passed
- [List of checks that passed cleanly]

## Recommendations for v0.4.0
- [Future improvements noted during audit]
```

After writing the audit report:
1. Fix ALL blockers
2. Fix as many warnings as practical
3. Run `bash .claude/scripts/lint-conventions.sh` to verify lint clean
4. If any fixes were made, bump to v0.3.5, update CHANGELOG.md
5. Commit and push everything

Work autonomously. Don't ask questions. Note ambiguous decisions in the audit report.
