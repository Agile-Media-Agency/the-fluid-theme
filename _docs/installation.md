# Installation

> Get Fluid Framework running in under a minute. No build step required.

---

## Option 1: CDN (Quickest)

Add a single `<link>` tag to your HTML `<head>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/the-fluid-theme@latest/src/fluid.css">
```

Or use unpkg:

```html
<link rel="stylesheet" href="https://unpkg.com/the-fluid-theme@latest/src/fluid.css">
```

**Production tip:** Pin to a specific version instead of `@latest` to avoid unexpected changes:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/the-fluid-theme@0.3.3/src/fluid.css">
```

## Option 2: npm

```bash
npm install the-fluid-theme
```

Then link in your HTML:

```html
<link rel="stylesheet" href="node_modules/the-fluid-theme/src/fluid.css">
```

Or import in a JS bundler (Vite, Webpack, etc.):

```js
import 'the-fluid-theme/src/fluid.css';
```

## Option 3: Download

Download from [GitHub Releases](https://github.com/Agile-Media-Agency/the-fluid-theme/releases) or clone the repo:

```bash
git clone https://github.com/Agile-Media-Agency/the-fluid-theme.git
```

Then link to `src/fluid.css` directly from your project.

---

## Minimal Template

A complete starter page with navigation, hero section, card, and button:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Fluid Site</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/the-fluid-theme@latest/src/fluid.css">
</head>
<body data-theme="light" data-motion="flowing" data-palette="fluid" data-accent="1">

  <nav>
    <a href="/">My Site</a>
    <ul>
      <li><a href="/about">About</a></li>
      <li><a href="/work">Work</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>

  <main>
    <section class="hero">
      <h1>Welcome to Fluid</h1>
      <p>A modern CSS framework built on physics principles, not utility classes.</p>
      <button>Get Started</button>
    </section>

    <article class="card">
      <h2>Semantic HTML</h2>
      <p>Write meaningful markup. Let the design system handle the styling.</p>
      <button class="secondary">Learn More</button>
    </article>
  </main>

  <footer>
    <p>Built with Fluid Framework</p>
  </footer>

</body>
</html>
```

---

## What's Included

- **17+ components** -- buttons, cards, modals, tooltips, tabs, accordions, and more
- **Complete layout system** -- flex, grid, sidebar, holy grail, dashboard
- **7 motion presets** -- from Still (no animation) to Tsunami (dramatic)
- **10 color palettes** with 6 accents each
- **Light / Dark / Auto modes** -- with deep palette colors, not just black
- **Zero JavaScript required** for all styling and layout

---

## Browser Support

| Browser | Minimum Version |
|---------|-----------------|
| Chrome  | 120+            |
| Firefox | 120+            |
| Safari  | 16.4+           |
| Edge    | 120+            |

Fluid Framework uses modern CSS features including `@layer`, `color-mix()`, logical properties, and container queries. These browser versions provide full support.

---

## Next Steps

- [Getting Started](getting-started.md) -- First steps and configuration
- [Component Reference](reference/components.md) -- Full component API and usage
- [Design Tokens](reference/tokens.md) -- Colors, spacing, typography tokens
