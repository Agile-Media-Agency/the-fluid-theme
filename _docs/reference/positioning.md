# Positioning System Reference

The positioning system lets you control layout and alignment using data attributes. Same HTML, different layouts - just change an attribute.

---

## Quick Reference

| Attribute | Values | Purpose |
|-----------|--------|---------|
| `data-align` | `start`, `center`, `end` | Text alignment |
| `data-layout` | `center`, `left`, `right`, `split`, `split-reverse`, `stack`, `overlay` | Content arrangement |
| `data-valign` | `start`, `center`, `end` | Vertical alignment |
| `data-width` | `narrow`, `default`, `wide`, `full` | Content max-width |
| `data-gap` | `none`, `sm`, `md`, `lg`, `xl` | Spacing between items |
| `data-padding` | `none`, `sm`, `md`, `lg`, `xl` | Section padding |

---

## Text Alignment

Controls `text-align` within the element.

```html
<section data-align="start">Left-aligned text (default)</section>
<section data-align="center">Centered text</section>
<section data-align="end">Right-aligned text</section>
```

---

## Section Layouts

These transform any element into a layout container.

### Center Layout

Content block centered horizontally. Great for hero headlines, centered sections.

```html
<section class="section" data-layout="center">
  <h1>Centered Headline</h1>
  <p>Centered paragraph text.</p>
  <button>Call to Action</button>
</section>
```

**Result:** All children are centered, with max-width constraint.

### Left Layout

Content aligned to start. Great for standard content, articles.

```html
<section class="section" data-layout="left">
  <h1>Left-Aligned Headline</h1>
  <p>Standard paragraph text.</p>
</section>
```

### Right Layout

Content aligned to end. Great for variation, alternate sections.

```html
<section class="section" data-layout="right">
  <h1>Right-Aligned Headline</h1>
  <p>Content pushed to the right.</p>
</section>
```

### Split Layout

Two-column layout. Great for hero with image, feature sections.

```html
<section class="section" data-layout="split">
  <div>
    <h1>Headline</h1>
    <p>Description text.</p>
    <button>Action</button>
  </div>
  <img src="image.jpg" alt="Feature image">
</section>
```

**Result:** Two equal columns, first child on left, second on right.

### Split-Reverse Layout

Same as split, but reversed order. Great for alternating sections.

```html
<section class="section" data-layout="split-reverse">
  <div>
    <h1>Headline</h1>
    <p>Description text.</p>
  </div>
  <img src="image.jpg" alt="Feature image">
</section>
```

**Result:** Image on left, content on right (reversed from HTML order).

### Stack Layout

Vertical stack with controlled gap. Great for any vertical content flow.

```html
<section data-layout="stack" data-gap="lg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</section>
```

### Overlay Layout

Content centered over a background. Great for heroes with background images.

```html
<section class="section" data-layout="overlay" style="background-image: url(bg.jpg)">
  <h1>Overlay Headline</h1>
  <p>Text over the background.</p>
</section>
```

**Note:** Set `--overlay-color` to customize the overlay opacity/color.

---

## Content Width

Control how wide the content can be within layouts.

```html
<section data-layout="center" data-width="narrow">
  <!-- Content max-width: 32rem (512px) -->
</section>

<section data-layout="center" data-width="default">
  <!-- Content max-width: 48rem (768px) - default -->
</section>

<section data-layout="center" data-width="wide">
  <!-- Content max-width: 64rem (1024px) -->
</section>

<section data-layout="center" data-width="full">
  <!-- Content max-width: 100% -->
</section>
```

---

## Vertical Alignment

Control vertical positioning within flex/grid containers.

```html
<section data-layout="split" data-valign="start">
  <!-- Content aligned to top -->
</section>

<section data-layout="split" data-valign="center">
  <!-- Content vertically centered (default for split) -->
</section>

<section data-layout="split" data-valign="end">
  <!-- Content aligned to bottom -->
</section>
```

---

## Gap Control

Override the default gap between items.

```html
<section data-layout="stack" data-gap="none"><!-- No gap --></section>
<section data-layout="stack" data-gap="sm"><!-- 12px gap --></section>
<section data-layout="stack" data-gap="md"><!-- 20px gap --></section>
<section data-layout="stack" data-gap="lg"><!-- 32px gap --></section>
<section data-layout="stack" data-gap="xl"><!-- 48px gap --></section>
```

---

## Padding Control

Control section vertical padding.

```html
<section data-padding="none"><!-- No padding --></section>
<section data-padding="sm"><!-- 32px padding --></section>
<section data-padding="md"><!-- 48px padding --></section>
<section data-padding="lg"><!-- 64px padding --></section>
<section data-padding="xl"><!-- 96px padding --></section>
```

---

## Combining Attributes

Attributes can be combined for precise control:

```html
<section
  class="section"
  data-layout="center"
  data-align="center"
  data-width="narrow"
  data-padding="xl"
>
  <h1>Perfectly Centered</h1>
  <p>Narrow width, extra padding, centered text.</p>
</section>
```

---

## Responsive Behavior

Split layouts automatically stack on narrow containers (< 40rem):

```html
<!-- On wide screens: two columns -->
<!-- On narrow screens: stacked vertically -->
<section data-layout="split">
  <div>Content</div>
  <img src="image.jpg">
</section>
```

---

## CSS Custom Properties

You can customize layouts with CSS custom properties:

```css
/* Custom content width */
.my-section {
  --content-width: 50rem;
}

/* Custom split gap */
.my-section {
  --split-gap: var(--space-12);
}

/* Custom overlay color */
.my-hero {
  --overlay-color: hsl(220 50% 20% / 0.7);
}
```

---

## Complete Example

```html
<!-- Hero Section: Centered -->
<section class="section" data-layout="center" data-padding="xl">
  <h1>Welcome to Fluid</h1>
  <p>A serene design system.</p>
  <button>Get Started</button>
</section>

<!-- Feature Section: Split -->
<section class="section" data-layout="split">
  <div data-layout="stack" data-gap="md">
    <h2>Feature Title</h2>
    <p>Feature description goes here.</p>
    <button data-variant="outline">Learn More</button>
  </div>
  <img src="feature.jpg" alt="Feature">
</section>

<!-- Alternate Feature: Split Reverse -->
<section class="section" data-layout="split-reverse">
  <div data-layout="stack" data-gap="md">
    <h2>Another Feature</h2>
    <p>Description here.</p>
  </div>
  <img src="feature2.jpg" alt="Feature">
</section>

<!-- CTA Section: Center with narrow width -->
<section class="section" data-layout="center" data-width="narrow" data-padding="xl">
  <h2>Ready to Start?</h2>
  <p>Join thousands of happy users.</p>
  <button>Sign Up Free</button>
</section>
```
