---
name: fluid-theme
description: The Fluid Theme CSS framework component reference, token system, and development conventions. Use when building or styling any UI component, choosing variants, working with the token system, or creating new components. Required knowledge for any visual implementation work.
allowed-tools: Read, Glob, Grep, Bash
---

# Fluid Theme — Framework Reference

> A modern CSS design system built on fluid dynamics principles — not utility classes.
> **Repo:** github.com/Agile-Media-Agency/the-fluid-theme
> **Live demo:** TheFluidTheme.com
> **Version:** 0.3.3
>
> **⚠ Version check:** This skill was verified against v0.3.3. Before using, check the repo's `PROJECT_STATUS.md` for the current version. If it differs, component APIs, token names, or available templates may have changed. Update this skill accordingly.

## Selective Reading

| File | When to Read |
|------|-------------|
| This file | Always — component quick reference |
| [ux-behavior-spec](../ux-behavior-spec/SKILL.md) | Before building any interactive component |

If the local repo is available, also read:
- `_docs/DEVELOPMENT.md` — Master guide, full philosophy
- `_docs/reference/components.md` — Detailed component API
- `_docs/reference/tokens.md` — Full token reference

---

## Core Principles

1. **Semantic HTML first** — meaningful elements, not div soup
2. **CSS Custom Properties** — all values via tokens, no magic numbers
3. **Data attributes for variants** — `data-variant="danger"` not `.btn--danger`
4. **Logical properties** — `margin-block`, `padding-inline`, never `-top`/`-left`
5. **No build step** — link one CSS file and go
6. **Progressive enhancement** — works without JavaScript
7. **`@layer` architecture** — `reset, tokens, base, layouts, components, themes, utilities`

---

## Token System

### Spacing (Fibonacci-inspired)
```
--space-0    0        --space-5    1.25rem (20px)
--space-px   1px      --space-6    1.5rem (24px)
--space-0-5  0.125rem --space-8    2rem (32px)
--space-1    0.25rem  --space-10   2.5rem (40px)
--space-2    0.5rem   --space-12   3rem (48px)
--space-3    0.75rem  --space-16   4rem (64px)
--space-4    1rem     --space-20   5rem (80px)
```

### Typography (Fluid)
```
--font-size-xs through --font-size-5xl (all clamp()-based)
--weight-light (300) through --weight-bold (700)
--leading-none (1) through --leading-loose (2)
```

### Colors (Semantic)
```
--color-text, --color-text-muted, --color-text-subtle
--color-background, --color-surface, --color-surface-raised
--color-border, --color-border-subtle
--color-success, --color-warning, --color-error, --color-info
--accent (active theme accent)
```

### Motion (7 presets)
```
still (0) → serene (~10) → stream (~100) → flowing (~500)
→ cascade (~1000) → rapids (~5000) → tsunami (~50000)
```

### Palettes (10)
```
fluid, morandi, bold, pastel, earth, mono, 80s, matrix, subtle, tsunami
```

---

## Component Quick Reference

### Button (`src/components/button.css`)
```html
<button>Primary (default)</button>
<button data-variant="secondary">Secondary</button>
<button data-variant="outline">Outline</button>
<button data-variant="ghost">Ghost</button>
<button data-variant="danger">Danger</button>
<button data-size="xs|sm|lg|xl">Sized</button>
<button data-loading>Loading...</button>
<button data-pill>Pill Shape</button>
<button data-icon aria-label="Settings">🔧</button>
<div class="button-group"><!-- joined buttons --></div>
```

### Card (`src/components/card.css`)
```html
<article class="card">
<article class="card" data-variant="elevated|outlined|ghost|filled">
<article class="card" data-type="stat|profile|testimonial|pricing">
<article class="card" data-type="pricing" data-featured>
<!-- Structure: .card__media, .card__content, .card__title,
     .card__description, .card__footer -->
```

### Modal (`src/components/modal.css`)
```html
<dialog class="modal" data-size="sm|lg|full">
<dialog class="modal" data-variant="drawer-right|drawer-left">
<!-- Structure: .modal__content, .modal__header, .modal__title,
     .modal__close, .modal__body, .modal__footer -->
<!-- Open: dialog.showModal()  Close: dialog.close() -->
<!-- Mobile: auto bottom-sheet below 40rem -->
```

### Alert & Toast (`src/components/alert.css`)
```html
<!-- Inline alert -->
<div class="alert" data-status="info|success|warning|error"
     data-variant="subtle|filled|outline">
  <div class="alert__content">
    <strong class="alert__title">Title</strong>
    <p>Message</p>
  </div>
  <button class="alert__close">&times;</button>
</div>

<!-- Toast container + toast -->
<div class="toast-container" data-position="top-right|top-left|top-center|bottom-right|bottom-left|bottom-center">
  <div class="toast" data-status="success|warning|error|info">
    <div class="toast__content">
      <strong>Title</strong>
      <p>Message</p>
    </div>
    <button class="toast__close">&times;</button>
  </div>
</div>
```

### Navigation (`src/components/nav.css`)
```html
<nav class="nav" data-sticky data-variant="transparent|elevated">
  <a class="nav__brand">Brand</a>
  <ul class="nav__menu" data-align="start|center">
    <li><a class="nav__link" aria-current="page">Current</a></li>
  </ul>
</nav>
<!-- Also: .nav__tabs, .nav__pagination -->
```

### Form (`src/components/form.css`)
```html
<div class="form-group">
  <label class="form-label" data-required>Label</label>
  <input type="text">
  <span class="form-help">Hint text</span>
  <span class="form-error">Error text</span>
</div>
<!-- Also: .input-group, .checkbox, .radio, .radio-group, .switch -->
<!-- Switch: .switch > .switch__input + .switch__track > .switch__thumb + .switch__label -->
<!-- Switch sizes: .switch[data-size="sm"] -->
```

### Table (`src/components/table.css`)
```html
<div class="table-wrap">
  <table class="table" data-variant="striped|bordered|compact"
         data-hover data-responsive>
    <!-- data-responsive: stacks on mobile, use td[data-label="Col"] -->
  </table>
</div>
```

### Dropdown (`src/components/dropdown.css`)
```html
<div class="dropdown" data-position="bottom-end|top|top-end">
  <button class="dropdown__trigger">Options ▾</button>
  <div class="dropdown__menu">
    <a class="dropdown__item">Edit</a>
    <div class="dropdown__divider"></div>
    <a class="dropdown__item" data-danger>Delete</a>
  </div>
</div>
```

### Other Components
- **Accordion** (`accordion.css`): `<details class="accordion__item">` / `<summary class="accordion__trigger">`. Variants: `bordered|separated|flush`.
- **Tooltip** (`tooltip.css`): `<span data-tooltip="hint" data-tooltip-pos="top|bottom|left|right">`. CSS-only.
- **Popover** (`tooltip.css`): `<div popover class="popover">`. Native popover API.
- **Badge** (`badge.css`): `<span class="badge" data-variant="filled|outline" data-status="good|warning|error" data-size="sm|lg">`.
- **Avatar** (`avatar.css`): `<div class="avatar" data-size="xs|sm|md|lg|xl|2xl">`.
- **Loading** (`loading.css`): `.spinner[data-size="xs|sm|lg|xl"]`, `.spinner-dots`, `.skeleton[data-variant="card|circle|media|title|text"]`.
- **Indicator** (`indicator.css`): `.progress` with `.progress__track`, `.progress__fill`. Status: `data-status="good|moderate|severe"`.
- **Hero** (`hero.css`): `.hero[data-layout="center" data-padding="lg|xl" data-size="compact|full" data-overlay="gradient|medium" data-valign="center" data-theme="subtle|gradient"]`. Custom properties: `--hero-min-height`, `--hero-background`, `--hero-text-color`. Structure: `.hero__headline`, `.hero__subheadline`, `.hero__actions`, `.hero__background` (for bg images).
- **Scroll Progress** (`scroll-progress.css`): Page scroll tracking bar. CSS-only, positioned fixed at top of viewport.
- **Settings Panel** (`settings-panel.css`): Theme/motion/palette live switching controls. Used on the Fluid Theme demo site.
- **Themed Images** (`themed-images.css`): Duotone filters and theme-aware image overlays that adapt to the active palette.

### New Components (v0.3.3)
- **Empty State** (`empty-state.css`): `.empty-state` with `.empty-state__icon`, `.empty-state__title`, `.empty-state__description`, `.empty-state__actions`. Sizes: `data-size="sm|lg"`.
- **Step Indicator** (`step-indicator.css`): `.steps` > `.steps__list` > `.steps__item[data-status="complete|current"]` with `.steps__marker` and `.steps__label`. Sizes: `data-size="sm"`.
- **Search Input** (`search-input.css`): `.search-input` with `.search-input__icon`, `.search-input__field`, `.search-input__clear`. Sizes: `data-size="sm|lg"`.
- **Chip / Filter Tag** (`chip.css`): `.chip` with `.chip__label`, `.chip__remove`. Variants: `data-variant="filled|outline"`. Container: `.chip-group` with `.chip-group__clear`.
- **Toast with Action** (`alert.css` enhancement): `.toast__action` for undo buttons. `data-auto-dismiss` with progress bar animation.
- **Breadcrumb Mobile Collapse** (`nav.css` enhancement): Mobile auto-collapses to "← Back to [Parent]" below 40rem.
- **Destructive Modal Modifier** (`modal.css` enhancement): `[data-destructive]` on `<dialog>` for wider footer gap and mobile vertical button stacking.

---

## Templates Available

`templates/`: 404, 500, about, blog, contact, faq, gallery, index, pricing, services

---

## Known Gaps

See `ux-behavior-spec` skill §18 for the full gap tracker. Remaining gaps: action group (responsive overflow), mobile sticky CTA bar, cookie consent banner. Most previously tracked gaps have been resolved in v0.3.3.
