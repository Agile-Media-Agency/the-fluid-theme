# Hero Component Reference

Full-width hero sections for landing pages and page headers. Heroes use the positioning system for layout control.

---

## Quick Reference

| Attribute | Values | Purpose |
|-----------|--------|---------|
| `data-layout` | `center`, `left`, `right`, `split`, `split-reverse` | Content arrangement |
| `data-size` | `compact`, (default), `full`, `auto` | Vertical height |
| `data-theme` | `subtle`, `dark`, `primary`, `gradient` | Color scheme |
| `data-overlay` | `light`, `medium`, `heavy`, `gradient` | Background overlay |
| `data-padding` | `sm`, `md`, `lg`, `xl` | Vertical padding |
| `data-width` | `narrow`, `default`, `wide`, `full` | Content max-width |

---

## Basic Usage

```html
<section class="hero" data-layout="center" data-padding="xl">
  <h1 class="hero__headline">Welcome</h1>
  <p class="hero__subheadline">Your tagline goes here.</p>
  <div class="hero__actions">
    <button>Get Started</button>
  </div>
</section>
```

---

## Hero Sizes

Control the vertical presence of your hero.

```html
<!-- Compact: 40vh minimum height -->
<section class="hero" data-size="compact" data-layout="center">
  ...
</section>

<!-- Default: 60vh minimum height (no attribute needed) -->
<section class="hero" data-layout="center">
  ...
</section>

<!-- Fullscreen: 100vh -->
<section class="hero" data-size="full" data-layout="center">
  ...
</section>

<!-- Auto: Content determines height -->
<section class="hero" data-size="auto" data-layout="center">
  ...
</section>
```

---

## Hero Themes

Pre-designed color schemes for common use cases.

### Subtle (Default)

```html
<section class="hero" data-theme="subtle" data-layout="center">
  <!-- Light background, dark text -->
</section>
```

### Dark

```html
<section class="hero" data-theme="dark" data-layout="center">
  <!-- Dark background, light text -->
</section>
```

### Primary

```html
<section class="hero" data-theme="primary" data-layout="center">
  <!-- Brand color background, white text -->
</section>
```

### Gradient

```html
<section class="hero" data-theme="gradient" data-layout="center">
  <!-- Serene blue gradient, white text -->
</section>
```

---

## Split Layout Heroes

Two-column layout with content and media side by side.

```html
<section class="hero" data-layout="split" data-padding="lg" data-size="auto">
  <div class="hero__content">
    <h1 class="hero__headline">Product Name</h1>
    <p class="hero__subheadline">Product description.</p>
    <div class="hero__actions">
      <button>Buy Now</button>
    </div>
  </div>
  <div class="hero__media">
    <img src="product.jpg" alt="Product">
  </div>
</section>
```

### Split Reverse

Media on left, content on right:

```html
<section class="hero" data-layout="split-reverse" data-padding="lg">
  <div class="hero__content">...</div>
  <div class="hero__media">...</div>
</section>
```

---

## Background Images

Use the `hero__background` element for images or videos.

```html
<section class="hero" data-layout="center" data-overlay="medium">
  <div class="hero__background">
    <img src="background.jpg" alt="">
  </div>
  <h1 class="hero__headline">Title Over Image</h1>
  <p class="hero__subheadline">Subheadline text.</p>
</section>
```

**Note:** Set text colors when using backgrounds:
```html
<section class="hero" data-overlay="medium"
  style="--hero-text-color: white; --hero-text-muted: hsl(0 0% 100% / 0.8);">
```

---

## Overlay Options

Control background darkening for text readability.

```html
<!-- Light: 20% opacity -->
<section class="hero" data-overlay="light">...</section>

<!-- Medium: 40% opacity -->
<section class="hero" data-overlay="medium">...</section>

<!-- Heavy: 60% opacity -->
<section class="hero" data-overlay="heavy">...</section>

<!-- Gradient: Fades from bottom -->
<section class="hero" data-overlay="gradient">...</section>
```

---

## Content Width

Control how wide the content spans.

```html
<!-- Narrow: 32rem max -->
<section class="hero" data-layout="center" data-width="narrow">
  <!-- Focused, impactful message -->
</section>

<!-- Wide: 64rem max -->
<section class="hero" data-layout="center" data-width="wide">
  <!-- More room for content -->
</section>
```

---

## CSS Custom Properties

Customize heroes with CSS variables:

```css
.my-hero {
  /* Size */
  --hero-min-height: 70vh;

  /* Colors */
  --hero-background: hsl(220 30% 20%);
  --hero-text-color: white;
  --hero-text-muted: hsl(0 0% 100% / 0.7);

  /* Overlay (when using data-overlay) */
  --hero-overlay: hsl(0 0% 0% / 0.5);
}
```

---

## Structured Content

Use hero sub-components for semantic structure:

```html
<section class="hero" data-layout="center" data-padding="xl">
  <h1 class="hero__headline">Main Headline</h1>
  <p class="hero__subheadline">Supporting text that elaborates.</p>
  <div class="hero__actions">
    <button>Primary CTA</button>
    <button data-variant="outline">Secondary CTA</button>
  </div>
</section>
```

| Class | Purpose |
|-------|---------|
| `.hero__headline` | Main title (styled h1) |
| `.hero__subheadline` | Supporting text |
| `.hero__actions` | Button container (flexbox) |
| `.hero__content` | Content wrapper (for split layouts) |
| `.hero__media` | Media wrapper (for split layouts) |
| `.hero__background` | Background image/video container |

---

## Complete Examples

### Landing Page Hero

```html
<section class="hero" data-layout="center" data-padding="xl" data-theme="gradient" data-size="full">
  <h1 class="hero__headline">Build Something Beautiful</h1>
  <p class="hero__subheadline">
    A CSS framework that feels like water—adaptable, natural, powerful yet gentle.
  </p>
  <div class="hero__actions">
    <button>Get Started Free</button>
    <button data-variant="ghost" style="color: white;">Watch Demo</button>
  </div>
</section>
```

### Product Feature Hero

```html
<section class="hero" data-layout="split" data-padding="lg" data-size="auto" data-theme="subtle">
  <div class="hero__content" data-layout="stack" data-gap="md">
    <h1 class="hero__headline">New Product Launch</h1>
    <p class="hero__subheadline">
      Revolutionary features that change how you work.
      Designed for professionals who demand the best.
    </p>
    <div class="hero__actions">
      <button>Pre-Order Now</button>
      <button data-variant="outline">View Specs</button>
    </div>
  </div>
  <div class="hero__media">
    <img src="product.jpg" alt="Product showcase">
  </div>
</section>
```

### Interior Page Header

```html
<section class="hero" data-layout="center" data-padding="lg" data-size="compact" data-theme="dark">
  <h1 class="hero__headline">Documentation</h1>
  <p class="hero__subheadline">Everything you need to get started.</p>
</section>
```

### Image Background Hero

```html
<section class="hero" data-layout="center" data-padding="xl" data-overlay="gradient"
  style="--hero-text-color: white; --hero-text-muted: hsl(0 0% 100% / 0.85);">
  <div class="hero__background">
    <img src="scenic-background.jpg" alt="">
  </div>
  <h1 class="hero__headline">Explore the Possibilities</h1>
  <p class="hero__subheadline">Your journey starts here.</p>
  <div class="hero__actions">
    <button>Start Exploring</button>
  </div>
</section>
```

---

## Responsive Behavior

- Split layouts stack vertically on narrow screens (< 40rem)
- Headlines scale down responsively
- Action buttons stack vertically on mobile
- All behaviors use container queries (respond to hero width, not viewport)

---

## Accessibility

- Use semantic heading levels (`h1` for page hero, `h2` for section heroes)
- Background images should have empty `alt=""` if decorative
- Ensure sufficient color contrast with overlays
- Reduced motion: animations disabled when user prefers reduced motion
