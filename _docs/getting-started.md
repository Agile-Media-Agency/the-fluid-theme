# Getting Started with Fluid Framework

**Live Site: [TheFluidTheme.com](https://thefluidtheme.com)** | [GitHub](https://github.com/Agile-Media-Agency/the-fluid-theme)

A step-by-step guide to using the Fluid Framework in your project.

---

## Installation

### Option 1: Direct Download

Download the `src/` directory and link the main CSS file:

```html
<link rel="stylesheet" href="path/to/src/fluid.css">
```

### Option 2: Clone from GitHub

```bash
git clone https://github.com/Agile-Media-Agency/the-fluid-theme.git
```

Then link the CSS from the cloned directory:

```html
<link rel="stylesheet" href="the-fluid-theme/src/fluid.css">
```

### Option 3: Local Development

```bash
git clone https://github.com/Agile-Media-Agency/the-fluid-theme.git
cd the-fluid-theme
npm run serve    # Opens at localhost:8080
```

---

## Minimal Page Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="path/to/src/fluid.css">
  <title>My Fluid Page</title>
</head>
<body data-theme="light" data-motion="flowing" data-palette="fluid" data-accent="1">

  <!-- Navigation -->
  <nav class="nav" data-variant="sticky">
    <div class="nav__container">
      <a href="/" class="nav__brand">My Site</a>
      <ul class="nav__menu">
        <li><a href="#" class="nav__link">Home</a></li>
        <li><a href="#" class="nav__link">About</a></li>
        <li><a href="#" class="nav__link">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- Main Content -->
  <main class="container">
    <section class="section">
      <h1>Welcome</h1>
      <p>Your content goes here.</p>
    </section>
  </main>

</body>
</html>
```

---

## Core Concepts

### 1. Data Attributes Control Everything

The framework is configured through HTML data attributes on the `<body>` (or `<html>`) element:

```html
<body
  data-theme="dark"       <!-- light | dark | auto -->
  data-motion="cascade"   <!-- still | serene | stream | flowing | cascade | rapids | tsunami -->
  data-palette="morandi"  <!-- fluid | morandi | bold | pastel | earth | mono | 80s | matrix | subtle | tsunami -->
  data-accent="3"         <!-- 1-6, selects accent from current palette -->
  data-contrast="normal"  <!-- normal | subdued -->
>
```

Change any attribute at runtime and the entire page updates instantly — no JavaScript framework required.

### 2. Semantic HTML, Not Utility Classes

Fluid uses BEM-style class names on semantic HTML elements:

```html
<!-- Fluid way -->
<article class="card">
  <div class="card__content">
    <h2 class="card__title">Article Title</h2>
    <p class="card__description">Description text.</p>
  </div>
  <footer class="card__footer">
    <button class="btn" data-variant="primary">Read More</button>
  </footer>
</article>

<!-- NOT utility soup -->
<div class="flex flex-col p-4 m-2 rounded-lg shadow-md bg-white">
  <h2 class="text-xl font-bold mb-2">Article Title</h2>
  ...
</div>
```

### 3. Variants via Data Attributes

Components use `data-*` attributes for variants instead of modifier classes:

```html
<!-- Buttons -->
<button class="btn" data-variant="primary" data-size="lg">Large Primary</button>
<button class="btn" data-variant="ghost" data-size="sm">Small Ghost</button>

<!-- Alerts -->
<div class="alert" data-status="success" data-variant="filled">
  <p>Operation completed.</p>
</div>

<!-- Cards -->
<article class="card" data-variant="outlined" data-elevation="raised">
  <div class="card__content">
    <h3 class="card__title">Outlined Card</h3>
  </div>
</article>
```

### 4. CSS Custom Properties for Runtime Theming

All design values come from CSS custom properties (tokens). You can override any token:

```css
/* Override spacing for a tighter layout */
.my-compact-section {
  --space-4: 0.75rem;
  --space-5: 1rem;
}

/* Override accent for a specific component */
.special-card {
  --accent: oklch(65% 0.2 150);
}
```

### 5. CSS Layer Architecture

Styles are organized in cascade layers for predictable specificity:

```css
@layer reset, tokens, base, layouts, components, themes, utilities;
```

This means component styles always override base styles, and utilities always win — without specificity wars.

---

## Your First Components

### Button — [Live demo](https://thefluidtheme.com/examples/components.html#buttons)

```html
<!-- Variants: primary, secondary, ghost, outline, destructive -->
<!-- Sizes: xs, sm, md (default), lg, xl -->
<button class="btn" data-variant="primary">Click Me</button>
<button class="btn" data-variant="outline" data-size="lg">Large Outline</button>
<button class="btn" data-variant="ghost">Ghost Button</button>
```

### Card — [Live demo](https://thefluidtheme.com/examples/components.html#cards)

```html
<article class="card">
  <img src="image.jpg" alt="..." class="card__media">
  <div class="card__content">
    <h3 class="card__title">Card Title</h3>
    <p class="card__description">Card description text goes here.</p>
  </div>
  <footer class="card__footer">
    <button class="btn" data-variant="primary" data-size="sm">Action</button>
  </footer>
</article>
```

### Alert — [Live demo](https://thefluidtheme.com/examples/components.html#alerts)

```html
<!-- Statuses: info, success, warning, error -->
<!-- Variants: subtle (default), filled, outline -->
<div class="alert" data-status="success">
  <div class="alert__content">
    <strong class="alert__title">Success!</strong>
    <p>Your changes have been saved.</p>
  </div>
</div>
```

### Modal (Dialog) — [Live demo](https://thefluidtheme.com/examples/components.html#modal)

```html
<dialog class="modal" id="my-modal">
  <div class="modal__content">
    <header class="modal__header">
      <h2 class="modal__title">Modal Title</h2>
      <button class="modal__close" aria-label="Close">&times;</button>
    </header>
    <div class="modal__body">
      <p>Modal content here.</p>
    </div>
    <footer class="modal__footer">
      <button class="btn" data-variant="ghost">Cancel</button>
      <button class="btn" data-variant="primary">Confirm</button>
    </footer>
  </div>
</dialog>

<!-- Open with JavaScript -->
<button onclick="document.getElementById('my-modal').showModal()">
  Open Modal
</button>
```

### Accordion — [Live demo](https://thefluidtheme.com/examples/components.html#accordion)

```html
<!-- Uses native <details>/<summary> — no JavaScript needed -->
<div class="accordion">
  <details class="accordion__item">
    <summary class="accordion__trigger">Question one?</summary>
    <div class="accordion__content">
      <p>Answer to question one.</p>
    </div>
  </details>
  <details class="accordion__item">
    <summary class="accordion__trigger">Question two?</summary>
    <div class="accordion__content">
      <p>Answer to question two.</p>
    </div>
  </details>
</div>
```

---

## Layout System

### Container

Constrain content width with centered margins:

```html
<div class="container">      <!-- Default: xl width -->
<div class="container--sm">  <!-- Small container -->
<div class="container--lg">  <!-- Large container -->
```

### Grid Layouts

```html
<!-- Auto-responsive grid -->
<div class="grid">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Fixed column counts -->
<div class="grid-2">Two columns</div>
<div class="grid-3">Three columns</div>
<div class="grid-4">Four columns</div>
```

### Flex Layouts

```html
<div class="flex">
  <div>Left</div>
  <div>Right</div>
</div>

<div class="flex" data-justify="between" data-align="center">
  <span>Spaced</span>
  <span>Apart</span>
</div>
```

### Structural Layouts

```html
<!-- Sidebar layout -->
<div class="sidebar-layout">
  <aside>Sidebar content</aside>
  <main>Main content</main>
</div>

<!-- Holy grail layout -->
<div class="holy-grail">
  <aside>Left sidebar</aside>
  <main>Main content</main>
  <aside>Right sidebar</aside>
</div>

<!-- Dashboard layout -->
<div class="dashboard-layout">
  <aside>Navigation</aside>
  <main>Dashboard content</main>
</div>
```

---

## Motion Presets

Each preset changes how every animation in the framework behaves:

| Preset | Feel | Use Case |
|--------|------|----------|
| `still` | No animation | Accessibility, reduced motion preference |
| `serene` | Slow, meditative | Photography, luxury brands |
| `stream` | Smooth, predictable | Business, professional |
| `flowing` | Organic | General purpose (good default) |
| `cascade` | Gentle energy | Marketing, e-commerce |
| `rapids` | Turbulent, fast | Gaming, youth brands |
| `tsunami` | Dramatic, powerful | Impact pages, launches |

```html
<!-- Set globally -->
<body data-motion="cascade">

<!-- The framework respects prefers-reduced-motion automatically -->
```

---

## Color Palettes

Switch palettes to completely change the color mood:

```html
<body data-palette="morandi" data-accent="2">
```

Each palette provides 6 accent colors. Use `data-accent="1"` through `data-accent="6"` to select one.

The special `fluid` palette auto-links accent colors to the active motion preset — `data-motion="tsunami"` gets deep ocean blues, `data-motion="serene"` gets calm pastels.

---

## Theme Switching

Toggle dark/light mode:

```html
<!-- In your HTML -->
<body data-theme="light">

<!-- With JavaScript -->
<script>
function toggleTheme() {
  const body = document.body;
  body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
}
</script>
<button onclick="toggleTheme()">Toggle Dark Mode</button>
```

Use `data-theme="auto"` to follow the user's OS preference automatically.

---

## Accessibility

The framework has accessibility built in:

- **`prefers-reduced-motion`** — All animations respect the user's system setting. The `still` motion preset also disables all animation.
- **Native HTML elements** — Modals use `<dialog>`, accordions use `<details>/<summary>`, tooltips use the Popover API.
- **Focus indicators** — All interactive elements have visible `:focus-visible` outlines.
- **Logical properties** — Layout uses `margin-block`, `padding-inline` etc. for RTL language support.
- **Semantic markup** — BEM class names on proper HTML elements, not div soup.

---

## Examples and Templates

Explore the live examples on **[TheFluidTheme.com](https://thefluidtheme.com)**:

| Page | What It Shows |
|------|---------------|
| [Foundation](https://thefluidtheme.com/examples/foundation.html) | All HTML elements styled |
| [Components](https://thefluidtheme.com/examples/components.html) | All 23 components |
| [Positioning](https://thefluidtheme.com/examples/positioning.html) | Layout utilities |
| [Heroes](https://thefluidtheme.com/examples/heroes.html) | Hero section variants |
| [Indicators](https://thefluidtheme.com/examples/indicators.html) | Progress, badges, status |
| [Philosophy](https://thefluidtheme.com/examples/philosophy.html) | Fluid dynamics explanation |
| [Hero Picker](https://thefluidtheme.com/examples/hero-picker.html) | Interactive hero builder |
| [Templates](https://thefluidtheme.com/templates/) | 18 ready-made page templates |

---

## Next Steps

- **[TheFluidTheme.com](https://thefluidtheme.com)** — Live demo site with all components
- [Component Reference](reference/components.md) — Full API for all 23 components
- [Design Tokens Reference](reference/tokens.md) — All CSS custom properties
- [Positioning Reference](reference/positioning.md) — Layout system details
- [Heroes Reference](reference/heroes.md) — Hero section options
- [Architecture](architecture.md) — Technical decisions and philosophy

---

*Fluid Framework v0.3.5 — Built with physics and 32 years of design experience.*
