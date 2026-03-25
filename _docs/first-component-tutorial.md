# Your First Page with Fluid

A step-by-step tutorial for building a complete page with the Fluid Framework. By the end, you will have a working page with navigation, hero, feature cards, a contact form, and a footer -- all styled through semantic HTML and data attributes.

---

## Step 1: Start with the Skeleton

Every Fluid page starts with a standard HTML document that links to `fluid.css`. The `<body>` element carries data attributes that control the global theme, motion, and color palette.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="path/to/src/fluid.css">
  <title>My First Fluid Page</title>
</head>
<body data-theme="light" data-preset="flowing" data-palette="fluid" data-accent="1">

  <!-- Content goes here -->

</body>
</html>
```

**What each attribute does:**

| Attribute | Value | Effect |
|-----------|-------|--------|
| `data-theme` | `light` | Light color scheme |
| `data-preset` | `flowing` | Organic, natural animations |
| `data-palette` | `fluid` | Default color palette |
| `data-accent` | `1` | First accent color from the palette |

---

## Step 2: Add a Navigation Bar

The `.nav` component uses BEM-style classes. Add `data-sticky` to pin it to the top of the viewport as the user scrolls.

```html
<nav class="nav" data-sticky aria-label="Main navigation">
  <a href="/" class="nav__brand">Acme Co</a>
  <ul class="nav__menu" role="list">
    <li><a href="#features" class="nav__link">Features</a></li>
    <li><a href="#contact" class="nav__link">Contact</a></li>
  </ul>
  <div class="nav__actions">
    <button class="button" data-variant="primary" data-size="sm">Sign Up</button>
  </div>
</nav>
```

The `aria-label` and `role="list"` attributes are not optional -- Fluid is built around accessible, semantic markup.

---

## Step 3: Add a Hero Section

The `.hero` component centers content and provides spacing through data attributes.

```html
<section class="hero" data-layout="center" data-padding="lg">
  <h1 class="hero__headline">Build Beautiful Pages</h1>
  <p class="hero__subheadline">
    No utility classes. No build step. Just semantic HTML and one CSS file.
  </p>
  <button class="button" data-variant="primary" data-size="lg">Get Started</button>
</section>
```

The `data-layout="center"` attribute horizontally centers the content. `data-padding="lg"` adds generous vertical spacing so the hero has room to breathe.

---

## Step 4: Add a Feature Grid

Use `data-grid="3"` on a container to create a responsive three-column grid. Each child becomes a column. On smaller screens, the grid collapses to a single column automatically.

```html
<section class="section" data-padding="xl" id="features">
  <h2 style="text-align: center; margin-block-end: var(--space-8);">
    Why Choose Fluid
  </h2>

  <div data-grid="3" data-gap="lg">
    <article class="card">
      <div class="card__content">
        <h3 class="card__title">No Build Step</h3>
        <p class="card__description">
          Link one CSS file and start building. No npm, no bundler, no config.
        </p>
      </div>
    </article>

    <article class="card">
      <div class="card__content">
        <h3 class="card__title">Semantic HTML</h3>
        <p class="card__description">
          Write meaningful markup. The design system handles the styling.
        </p>
      </div>
    </article>

    <article class="card">
      <div class="card__content">
        <h3 class="card__title">Runtime Theming</h3>
        <p class="card__description">
          Change a data attribute and the entire page transforms instantly.
        </p>
      </div>
    </article>
  </div>
</section>
```

The inline `style` on the heading uses a CSS custom property (`--space-8`) rather than a magic number. All spacing in Fluid comes from design tokens.

---

## Step 5: Add a Contact Form

Fluid styles native form elements directly. Wrap each label/input pair in a `.form-group` for proper spacing. Use `data-grid="2"` to place fields side by side.

```html
<section class="section" data-padding="xl" id="contact">
  <h2 style="text-align: center; margin-block-end: var(--space-8);">
    Get in Touch
  </h2>

  <div data-layout="center" data-width="narrow">
    <form class="stack" data-gap="md">
      <div data-grid="2" data-gap="md">
        <div class="form-group">
          <label class="form-label" data-required for="first-name">First Name</label>
          <input type="text" id="first-name" placeholder="Jane" required>
        </div>
        <div class="form-group">
          <label class="form-label" data-required for="last-name">Last Name</label>
          <input type="text" id="last-name" placeholder="Smith" required>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" data-required for="email">Email</label>
        <input type="email" id="email" placeholder="jane@example.com" required>
      </div>

      <div class="form-group">
        <label class="form-label" for="message">Message</label>
        <textarea id="message" rows="4" placeholder="How can we help?"></textarea>
      </div>

      <button type="submit" class="button" data-variant="primary">Send Message</button>
    </form>
  </div>
</section>
```

The `data-required` attribute on `.form-label` adds a visual required indicator. The `.stack` class with `data-gap="md"` spaces the form fields vertically.

---

## Step 6: Add a Footer

A simple `<footer>` with links and a copyright notice. No special component class needed -- Fluid styles the semantic element directly.

```html
<footer class="section" data-padding="lg" data-layout="center"
        style="background: var(--color-surface);">
  <p style="color: var(--color-text-muted);">
    <a href="#">Privacy</a> &middot;
    <a href="#">Terms</a> &middot;
    <a href="#">GitHub</a>
  </p>
  <p style="color: var(--color-text-muted); margin-block-start: var(--space-2);">
    &copy; 2026 Acme Co. Built with Fluid Framework.
  </p>
</footer>
```

---

## Step 7: Try Different Presets

The page you just built will look completely different with a single attribute change. Presets control typography, color, motion, and spacing all at once.

Change the data attributes on your `<body>` tag:

```html
<!-- Swiss design: clean, still, monochrome -->
<body data-theme="light" data-preset="still" data-palette="mono" data-accent="1">

<!-- Warm and bubbly -->
<body data-theme="light" data-preset="cascade" data-palette="pastel" data-accent="3">

<!-- Bold and cinematic -->
<body data-theme="light" data-preset="tsunami" data-palette="tsunami" data-accent="1">

<!-- Muted sophistication -->
<body data-theme="light" data-preset="serene" data-palette="morandi" data-accent="2">
```

Each combination changes fonts, colors, animation speed, easing curves, and spacing rhythm. No CSS changes, no rebuild -- just swap the attributes.

---

## Step 8: Enable Dark Mode

Set `data-theme="dark"` on the body to switch to dark mode. Fluid does not just invert colors -- each palette has hand-tuned dark variants that use deep, rich tones instead of pure black.

```html
<!-- Manual dark mode -->
<body data-theme="dark" data-preset="flowing" data-palette="fluid" data-accent="1">

<!-- Follow the user's OS preference -->
<body data-theme="auto" data-preset="flowing" data-palette="fluid" data-accent="1">
```

The `auto` value uses the `prefers-color-scheme` media query, so the page matches whatever the user has set in their system settings.

---

## Next Steps

You now have a complete, responsive page with zero JavaScript dependencies and no build step. To go further:

- **[Component Reference](reference/components.md)** -- Full API for all components including cards, modals, accordions, alerts, and more.
- **[Design Tokens Reference](reference/tokens.md)** -- Every CSS custom property available for customization.
- **[Live Examples](https://thefluidtheme.com/examples/components.html)** -- See all components rendered in the browser.
