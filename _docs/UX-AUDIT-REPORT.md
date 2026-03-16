# UX Audit Report — The Fluid Theme v0.3.3

**Audited:** 2026-03-16
**Spec Version:** UX Behavior Spec v0.2.0
**Scope:** All templates (9), example pages (7), CSS components (18)

---

## Critical (must fix)

### Templates

1. **templates/contact.html**: Uses `class="form-field"` (7 instances) but CSS defines `class="form-group"` — all form styling is broken (Spec §5)
2. **templates/contact.html**: No form validation, no `aria-invalid`, no `.form-error` elements, no feedback on submission (Spec §4, §5)
3. **templates/contact.html**: Submit button says "Send Message" ✓ but form has no action/handler — silent on submit (Spec §4)
4. **ALL templates**: `<a href="..."><button>` invalid HTML nesting — breaks keyboard nav and accessibility. Found in: 404, about, blog, faq, gallery, index, pricing, services (Spec §9, §12)
5. **templates/pricing.html**: Feature comparison table has no `data-responsive` or `td[data-label]` attributes — broken on mobile (Spec §11)
6. **templates/404.html**: Search input has no `<form>` wrapper, no `role="search"`, no `<label>` — invisible to screen readers (Spec §7, §12)
7. **templates/pricing.html**: Billing toggle checkbox has no accessible label, no `aria-label`, no `role="switch"` (Spec §12)

### Examples

8. **examples/components.html**: Destructive confirmation modal uses "Are you sure?" title — explicitly prohibited (Spec §1)
9. **examples/components.html**: Destructive modal "Delete" button lacks specificity — should be "Delete [Thing]" (Spec §1)
10. **examples/components.html**: Modal "Confirm" button is vague — should describe the action (Spec §9)
11. **examples/foundation.html**: Table missing `.table-wrap` wrapper and `data-responsive`/`td[data-label]` attributes (Spec §11)
12. **examples/philosophy.html**: Custom `reynolds-table` bypasses component system — no `.table-wrap`, no `data-responsive` (Spec §11)
13. **examples/heroes.html**: Inline `style="color: white; border-color: white;"` on buttons — breaks preset/dark mode switching (Token usage)
14. **examples/positioning.html**: Same inline color overrides on hero buttons (Token usage)

### CSS Components

15. **src/components/form.css**: Missing `[aria-invalid="true"]` selector — the standard accessible attribute gets no visual treatment (Spec §5)
16. **src/components/modal.css**: No `data-destructive` modifier for wider footer gap — requires inline style override (Spec §1, §18)
17. **src/components/button.css**: No `prefers-reduced-motion` handling — loading spinner and tsunami animation play for all users (Spec §12)

---

## Warnings (should fix)

### Templates

1. ~~**templates/blog.html**: Five identical "Read More" buttons with no distinguishing `aria-label` (Spec §9)~~ ✅ Fixed
2. ~~**templates/services.html**: Four identical "Learn More" buttons with no distinguishing `aria-label` (Spec §9)~~ ✅ Fixed
3. ~~**templates/blog.html**: Newsletter email input has no `<label>` element (Spec §5)~~ ✅ Fixed
4. ~~**templates/pricing.html**: Non-featured tiers use same "Get Started" label as featured tier (Spec §16)~~ ✅ Fixed
5. ~~**templates/gallery.html**: Filter buttons have no `aria-pressed` or `aria-current` for active state (Spec §8)~~ ✅ Fixed
6. ~~**templates/faq.html**: Accordion `transition: transform 0.2s ease` in inline `<style>` has no `prefers-reduced-motion` (Spec §12)~~ ✅ Fixed (previous commit)
7. ~~**templates/gallery.html**: Card image `transition` in inline styles has no `prefers-reduced-motion` (Spec §12)~~ ✅ Fixed (removed inline transitions)
8. ~~**templates/404.html**: Card hover transitions in inline styles have no `prefers-reduced-motion` (Spec §12)~~ ✅ Fixed (removed inline transitions)
9. ~~**templates/blog.html**: Sidebar `position: sticky; top:` uses physical property instead of `inset-block-start` (Dev conventions)~~ ✅ Fixed (previous commit)
10. **ALL templates**: No breadcrumbs on any deep page (Spec §8) — Deferred: requires breadcrumb mobile collapse component (Gap §8)
11. **ALL templates**: Excessive inline styles throughout — Deferred: templates are functional demos, inline styles are acceptable for showcase
12. ~~**templates/about.html**: Hero buttons are `<button>` elements with no click handler — do nothing (Spec §9)~~ ✅ Fixed (previous commit — now `<a>` links to sections)
13. ~~**templates/services.html**: Hero CTA buttons are plain `<button>` with no link behavior (Spec §9)~~ ✅ Fixed (previous commit — now `<a>` links)
14. ~~**templates/blog.html**: Pagination uses `<button>` instead of `<a>` links; `<nav>` has no `aria-label` (Spec §8)~~ ✅ Fixed
15. **No 500 error page template** exists (Spec §7) — Deferred: tracked as Component Gap

### Examples

16. ~~**examples/components.html**: Interactive card uses `onclick` on `<article>` — not keyboard-focusable (Spec §12)~~ ✅ Fixed
17. **examples/components.html**: Search modal uses `<div role="dialog">` instead of native `<dialog>` — Deferred: requires JS refactor
18. ~~**examples/components.html**: Form inputs missing `id`/`for` attribute linkage to labels (Spec §5)~~ ✅ Fixed
19. ~~**examples/components.html**: Dots spinner missing `aria-label` (Spec §12)~~ ✅ Fixed
20. ~~**examples/components.html**: Drawer "Done" button is vague (Spec §9)~~ ✅ Fixed (previous commit — now "Close Settings")

### CSS Components

21. ~~**src/components/nav.css**: No `prefers-reduced-motion` for staggered mobile menu animations (Spec §12)~~ ✅ Fixed (previous commit)
22. ~~**src/components/card.css**: No `prefers-reduced-motion` for hover transforms (Spec §12)~~ ✅ Fixed (previous commit)
23. ~~**src/components/modal.css**: Mobile bottom-sheet does not stack destructive buttons vertically (Spec §1, §11)~~ ✅ Fixed (previous commit — `[data-destructive]` modifier)
24. ~~**src/components/form.css**: Missing `textarea:invalid` and `select:invalid` validation styling (Spec §5)~~ ✅ Fixed (previous commit)
25. ~~**src/components/badge.css**: Uses magic numbers instead of design tokens for `data-size="sm"` (Dev conventions)~~ ✅ Fixed

---

## Template Issues

1. ~~**ALL templates**: `<a href="..."><button>` pattern~~ ✅ Fixed (previous commit)
2. ~~**templates/contact.html**: `class="form-field"` → `class="form-group"`~~ ✅ Fixed (previous commit)
3. ~~**templates/contact.html**: Checkbox input uses `style="width: auto;"` inline~~ ✅ Fixed (previous commit — now uses proper `.checkbox` component)
4. **templates/blog.html**: Sidebar grid uses inline `grid-template-columns` — Acceptable for demo template
5. **templates/contact.html**: Grid layout uses inline `grid-template-columns: 1fr 1fr` — Acceptable for demo template
6. **ALL templates**: Minimal footer with no site navigation or accessibility links — Acceptable for framework demos
7. ~~**examples/components.html**: Footer inside `<main>` — should be outside~~ ✅ Fixed
8. ~~**examples/foundation.html vs components.html**: Table implementations differ~~ ✅ Fixed (foundation.html now uses `.table-wrap` + `.table`)
9. **examples/heroes.html vs indicators.html**: Inconsistent footer patterns across example pages — Low priority cosmetic

---

## Component Gaps

Tracked in Spec §18. Status after this audit:

| Gap | Spec Section | Priority | Status |
|-----|-------------|----------|--------|
| Action group component (responsive) | §2 | High | Deferred — `.button-group` covers basic cases |
| Empty state component | §7 | High | ✅ Built (`src/components/empty-state.css`) |
| Step indicator (labeled steps) | §5, §15 | High | ✅ Built (`src/components/step-indicator.css`) |
| Search input with clear button | §14 | Medium | ✅ Built (`src/components/search-input.css`) |
| Filter chip / dismissable tag | §14 | Medium | ✅ Built (`src/components/chip.css`) |
| Toast with action/undo | §4 | Medium | ✅ Built (`.toast__action` + auto-dismiss progress in `alert.css`) |
| Breadcrumb nav (mobile collapse) | §8 | Medium | ✅ Built (mobile collapse in `nav.css`) |
| Destructive modal modifier | §1 | Low | ✅ Built (`[data-destructive]` in `modal.css`) |
| 500 error page template | §7 | Medium | ✅ Built (`templates/500.html`) |
| Search modal → native `<dialog>` | Semantic HTML | Medium | ✅ Fixed (`examples/components.html`) |
| Mobile sticky CTA bar | §16 | Low | Deferred — per-project implementation |
| Cookie consent banner | §17 | Low | Deferred — per-project implementation |

---

## Passed

- **modal.css**: Correct `@layer`, logical properties, `data-size="sm"` for confirmations, mobile bottom-sheet at 40rem, backdrop styling, `prefers-reduced-motion` handling
- **alert.css**: All statuses (info/success/warning/error), all variants (subtle/filled/outline), toast positioning, entry/exit animations, `prefers-reduced-motion`
- **dropdown.css**: `data-position` variants, `data-danger` on items, `:focus-visible`, `prefers-reduced-motion`, logical properties
- **table.css**: `.table-wrap` overflow, `data-responsive` mobile stacking, `td[data-label]` via `::before`, `prefers-reduced-motion`
- **loading.css**: Spinner sizes, skeleton variants, `prefers-reduced-motion` (pulse fallback), logical properties
- **accordion.css**: Native `<details>/<summary>`, `:focus-visible`, `prefers-reduced-motion`
- **tooltip.css**: `:focus-visible`, `prefers-reduced-motion`, touch device handling
- **indicator.css**: Status colors, `prefers-reduced-motion`, motion-aware animations
- **scroll-progress.css**: `prefers-reduced-motion`, logical properties
- **settings-panel.css**: `:focus-visible`, `prefers-reduced-motion`
- **All 18 CSS components**: Use `@layer components`, CSS custom properties, and logical properties correctly

---

## Fix Log

_Fixes applied during this audit (2026-03-16):_

| # | File | Fix | Status |
|---|------|-----|--------|
| 1 | templates/contact.html | `form-field` → `form-group` (7 instances) | ✅ Fixed |
| 2 | src/components/form.css | Added `[aria-invalid="true"]` selectors | ✅ Fixed |
| 3 | src/components/modal.css | Added `[data-destructive]` modifier | ✅ Fixed |
| 4 | src/components/button.css | Added `prefers-reduced-motion` block | ✅ Fixed |
| 5 | examples/components.html | Fixed destructive modal title/buttons | ✅ Fixed |
| 6 | examples/foundation.html | Added `.table-wrap`, `data-responsive`, `td[data-label]` | ✅ Fixed |
| 7 | templates/pricing.html | Added `data-responsive` and `td[data-label]` to comparison table | ✅ Fixed |
| 8 | ALL templates | Fixed `<a><button>` → proper markup | ✅ Fixed |
| 9 | src/components/nav.css | Added `prefers-reduced-motion` block | ✅ Fixed |
| 10 | src/components/card.css | Added `prefers-reduced-motion` block | ✅ Fixed |
| 11 | templates/404.html | Fixed search accessibility | ✅ Fixed |
| 12 | templates/pricing.html | Fixed billing toggle accessibility | ✅ Fixed |
| 13 | src/components/form.css | Added `textarea:invalid`, `select:invalid` styling | ✅ Fixed |
| 14 | templates/blog.html | Added `aria-label` to 5 "Read More" buttons | ✅ Fixed |
| 15 | templates/services.html | Added `aria-label` to 4 "Learn More" buttons | ✅ Fixed |
| 16 | templates/blog.html | Added `<label>` to newsletter email input | ✅ Fixed |
| 17 | templates/blog.html | "Subscribe" → "Subscribe to Newsletter" | ✅ Fixed |
| 18 | templates/pricing.html | Differentiated tier CTAs: "Choose Starter" / "Choose Professional" / "Contact Sales" | ✅ Fixed |
| 19 | templates/gallery.html | Added `aria-pressed` to filter buttons, `role="group"` to container | ✅ Fixed |
| 20 | templates/faq.html | Added `aria-pressed` to category filters, `role="group"` to container | ✅ Fixed |
| 21 | templates/gallery.html | Removed inline `transition` from card images (card.css handles it) | ✅ Fixed |
| 22 | templates/404.html | Removed inline `transition` from card hovers | ✅ Fixed |
| 23 | templates/blog.html | Pagination: `<button>` → `<a class="button">`, added `aria-label` to `<nav>` | ✅ Fixed |
| 24 | examples/philosophy.html | Table: added `.table-wrap`, `.table` class, `data-responsive`, `td[data-label]` | ✅ Fixed |
| 25 | examples/heroes.html | Replaced hardcoded `color: white` on buttons with `--hero-text-color` tokens | ✅ Fixed |
| 26 | examples/positioning.html | Same hardcoded color fix on buttons | ✅ Fixed |
| 27 | templates/index.html, services.html, 404.html | Replaced `border-color: white; color: white` with button custom properties | ✅ Fixed |
| 28 | src/components/badge.css | Replaced magic numbers with design tokens for `data-size="sm"` | ✅ Fixed |
| 29 | examples/components.html | Added `aria-label` to dots spinner | ✅ Fixed |
| 30 | examples/components.html | Added `id`/`for` linkage to Website URL form field | ✅ Fixed |
| 31 | examples/components.html | Added `tabindex="0"` and `role="button"` to interactive card | ✅ Fixed |
| 32 | examples/components.html | Moved `</footer>` outside `</main>` | ✅ Fixed |
| 33 | templates/pricing.html | Badge position: `top`/`left` → `inset-block-start`/`inset-inline-start` | ✅ Fixed |

### Remaining (not fixable in this pass)

| Item | Reason |
|------|--------|
| No 500 error page template | Requires new template — tracked as Component Gap |
| No breadcrumbs on deep pages | Requires layout-level changes and JS for mobile collapse — tracked as Component Gap |
| Excessive inline styles | Scope too large for this audit; templates are functional demos, not production sites |
| Search modal uses `<div role="dialog">` | Requires JS refactor to switch from custom to native `<dialog>` — non-trivial |
| About/Services hero button `style="color: white"` on CTA section | These are on themed sections (`data-theme="primary"/"dark"`), not hero backgrounds with `--hero-text-color` |
