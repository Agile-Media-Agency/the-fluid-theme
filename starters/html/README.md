# Fluid Theme — HTML Starter

The fastest way to start a site with `@fluid-theme/core`. No build step, no npm, no config.

## Setup

1. Download or copy `index.html`
2. Open it in a browser

That's it. The CSS loads from the CDN automatically.

## Customize the Theme

Change these attributes on the `<html>` element:

```html
<html
  data-theme="light"       <!-- light | dark -->
  data-preset="flowing"    <!-- still | serene | stream | flowing | cascade | rapids | tsunami -->
  data-palette="fluid"     <!-- fluid | morandi | bold | pastel | earth | mono | 80s | matrix | subtle | tsunami -->
  data-accent="1"          <!-- 1–6 -->
>
```

## Use a Specific Version

The CDN link in `index.html` always loads the latest version. To pin a version:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fluid-theme/core@0.4.3/dist/fluid.min.css">
```

## Install via npm Instead

```bash
npm install @fluid-theme/core
```

```html
<link rel="stylesheet" href="node_modules/@fluid-theme/core/dist/fluid.min.css">
```

## Key Patterns

### Buttons
```html
<button class="button">Default</button>
<button class="button" data-variant="outline">Outline</button>
<button class="button" data-variant="ghost">Ghost</button>
<button class="button" data-size="lg">Large</button>
```

### Cards
```html
<article class="card">
  <div class="card__body">
    <h3>Card Title</h3>
    <p>Card content goes here.</p>
  </div>
</article>
```

### Dark Section
```html
<section class="section" data-theme="dark" data-padding="xl">
  <!-- content -->
</section>
```

### Grid
```html
<div class="grid" style="--grid-min: 280px; gap: var(--space-6);">
  <article class="card">...</article>
  <article class="card">...</article>
  <article class="card">...</article>
</div>
```

## Documentation

- [Full docs](https://thefluidtheme.com)
- [Component reference](https://github.com/Agile-Media-Agency/the-fluid-theme/blob/main/_docs/reference/components.md)
- [Design tokens](https://github.com/Agile-Media-Agency/the-fluid-theme/blob/main/_docs/reference/tokens.md)
