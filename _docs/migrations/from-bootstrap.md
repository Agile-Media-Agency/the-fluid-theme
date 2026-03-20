# Migrating from Bootstrap to Fluid

This guide maps common Bootstrap patterns to their Fluid equivalents. The key difference: Fluid uses data attributes and semantic HTML instead of utility classes.

---

## Layout

| Bootstrap | Fluid |
|-----------|-------|
| `<div class="container">` | `<div class="container">` (same) |
| `<div class="row"><div class="col-md-6">` | `<div data-grid="2">` |
| `<div class="row"><div class="col-md-4">` | `<div data-grid="3">` |
| `<div class="d-flex justify-content-between">` | `<div data-flex="row" data-justify="between">` |
| `<div class="d-flex align-items-center">` | `<div data-flex="row" data-items="center">` |
| `<div class="d-none d-md-block">` | `<div data-hide="mobile">` |

### Before (Bootstrap grid)

```html
<div class="container">
  <div class="row">
    <div class="col-md-4">Sidebar</div>
    <div class="col-md-8">Main content</div>
  </div>
</div>
```

### After (Fluid grid)

```html
<div class="container">
  <div data-grid="3">
    <div>Sidebar</div>
    <div style="grid-column: span 2;">Main content</div>
  </div>
</div>
```

---

## Components

| Bootstrap | Fluid |
|-----------|-------|
| `<button class="btn btn-primary">` | `<button class="button" data-variant="primary">` |
| `<div class="card"><div class="card-body">` | `<div class="card"><div class="card__content">` |
| `<div class="modal">` | `<dialog class="modal">` (native!) |
| `<div class="accordion">` | `<details class="accordion__item">` (native!) |
| `<div class="alert alert-danger">` | `<div class="alert" data-status="error">` |
| `<table class="table table-striped">` | `<table class="table" data-variant="striped">` |
| `<div class="tooltip">` | `<span data-tooltip="text" data-tooltip-pos="top">` |
| `<span class="badge bg-primary">` | `<span class="badge" data-variant="primary">` |
| `<div class="spinner-border">` | `<div class="spinner">` |

### Modal: Before and After

```html
<!-- Bootstrap: requires JS initialization -->
<div class="modal fade" id="myModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Title</h5>
        <button class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">Content here</div>
    </div>
  </div>
</div>

<!-- Fluid: native HTML dialog, no JS library needed -->
<dialog class="modal" id="myModal">
  <h2>Title</h2>
  <p>Content here</p>
  <button onclick="this.closest('dialog').close()">Close</button>
</dialog>
```

### Accordion: Before and After

```html
<!-- Bootstrap: requires JS -->
<div class="accordion" id="myAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" data-bs-toggle="collapse"
              data-bs-target="#collapseOne">Section 1</button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">Content</div>
    </div>
  </div>
</div>

<!-- Fluid: native HTML details, zero JS -->
<details class="accordion__item" open>
  <summary>Section 1</summary>
  <p>Content</p>
</details>
```

---

## Spacing

| Bootstrap | Fluid |
|-----------|-------|
| `class="p-3 m-2"` | `data-padding="md"` or use CSS custom properties |
| `class="mt-4"` | Use `--space-*` tokens in custom CSS |
| `class="gap-3"` | `data-gap="md"` |

For one-off spacing adjustments, use Fluid's design tokens directly:

```css
.my-element {
  margin-block-start: var(--space-8);
  padding-inline: var(--space-4);
}
```

---

## Typography

| Bootstrap | Fluid |
|-----------|-------|
| `class="text-center"` | `data-align="center"` |
| `class="fw-bold"` | Semantic elements; or `font-weight: var(--weight-bold)` |
| `class="fs-1"` | Use semantic headings (`h1`-`h6`); Fluid handles sizing |
| `class="text-muted"` | `<small>` or `color: var(--text-muted)` |

---

## Key Differences

1. **No JavaScript required** -- Fluid uses native HTML elements (`dialog`, `details`, `popover`) instead of jQuery or Bootstrap JS plugins.
2. **No build step** -- Link one CSS file and start building. No Sass compilation needed.
3. **Runtime theming** -- Change `data-preset` or `data-theme` attributes and the entire look transforms instantly.
4. **Data attributes replace most utility classes** -- Instead of memorizing dozens of class names, use descriptive data attributes.
5. **Fewer utility classes by design** -- Use semantic HTML and CSS custom properties instead of piling on single-purpose classes.

---

## Migration Strategy

1. **Start with layout.** Replace Bootstrap's row/col grid with `data-grid`. This is the most mechanical change and gives immediate results.

2. **Migrate components one at a time.** Cards, alerts, and badges are straightforward class swaps. Modals and accordions gain native HTML behavior.

3. **Replace spacing utilities.** Swap `p-*`, `m-*`, and `gap-*` classes with data attributes or CSS custom properties.

4. **Remove Bootstrap JS last.** Once all modals use `<dialog>` and all accordions use `<details>`, you no longer need Bootstrap's JavaScript bundle.

5. **Run both frameworks during migration.** Fluid uses `@layer` for CSS cascade management, so it won't conflict badly with Bootstrap during a gradual transition. Add Fluid's stylesheet alongside Bootstrap and migrate section by section.

```html
<!-- During migration: both stylesheets -->
<link rel="stylesheet" href="bootstrap.min.css">
<link rel="stylesheet" href="fluid.css">

<!-- Fluid's @layer system prevents most conflicts -->
```

Once migration is complete, remove the Bootstrap stylesheet and its JS bundle entirely.
