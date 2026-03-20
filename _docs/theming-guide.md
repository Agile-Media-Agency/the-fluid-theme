# Theming Guide

> How to use, customize, and extend Fluid's theme system.

The framework's theming is controlled entirely by data attributes on the `<body>` element and CSS custom properties defined in `src/core/tokens.css`. No build step is required — everything updates at runtime.

---

## How Theming Works

Fluid's theme system has five independent axes, each controlled by a `data-*` attribute on `<body>`:

1. **Color mode**: `data-theme="light|dark|auto"` — light or dark appearance
2. **Motion preset**: `data-motion="still|serene|stream|flowing|cascade|rapids|tsunami"` — controls animation speed AND visual personality (corners, shadows, spacing, typography feel)
3. **Color palette**: `data-palette="fluid|morandi|bold|pastel|earth|mono|80s|matrix|subtle|tsunami"` — the color scheme
4. **Accent**: `data-accent="1|2|3|4|5|6"` — which of the palette's 6 accent colors to use
5. **Contrast**: `data-contrast="normal|subdued"` — full vs muted contrast

These axes are independent. Any combination works. Changing one does not affect the others.

```html
<body data-theme="dark" data-motion="cascade" data-palette="morandi" data-accent="3" data-contrast="normal">
```

---

## Motion Presets in Depth

Motion presets do not just change animation speed — they change the entire visual personality of the framework. Each preset defines its own corner radii, shadow styles, spacing rhythm, and typographic character.

- **still** — Swiss design. Sharp corners, no shadows, compact layout. Precise and minimal.
- **serene** — Classical. Pillowy corners, whisper-soft shadows, generous whitespace. Calm and spacious.
- **stream** — Tech-forward. Clean lines, consistent medium corners. Professional and balanced.
- **flowing** (default) — Balanced organic feel. Soft corners, layered shadows. The starting point.
- **cascade** — Warm and bubbly. Maximum roundness, colorful shadows. Playful and inviting.
- **rapids** — Bold and athletic. Compact spacing, hard shadows. High-energy.
- **tsunami** — Cinematic. Asymmetric elements, dramatic heavy shadows. Maximum impact.

### Dark Mode Surface Colors

Each preset provides its own dark mode surface colors. Dark mode uses deep palette colors, not black:

| Preset | Dark Surface |
|--------|-------------|
| still | Deep cool slate |
| serene | Deep warm stone |
| stream | Deep neutral gray |
| flowing | Deep ocean blue |
| cascade | Deep lavender |
| rapids | Deep charcoal |
| tsunami | Deepest navy abyss |

---

## Color Palettes

Fluid ships with 10 palettes, each providing a complete set of surface, text, and accent colors:

| Palette | Character |
|---------|-----------|
| **fluid** | The default — balanced, versatile blues and teals |
| **morandi** | Muted, desaturated tones inspired by Giorgio Morandi's still lifes |
| **bold** | High-saturation, high-contrast primary colors |
| **pastel** | Soft, light, airy pastels |
| **earth** | Warm natural tones — terracotta, olive, sienna |
| **mono** | Pure grayscale, no hue |
| **80s** | Neon-inspired retro palette |
| **matrix** | Terminal greens and cyans on dark surfaces |
| **subtle** | Ultra-low chroma, nearly neutral with a hint of color |
| **tsunami** | Deep dramatic tones with high contrast accents |

Each palette provides 6 accent colors accessible via `data-accent="1"` through `data-accent="6"`.

---

## Creating a Custom Palette

Add a new palette by defining CSS custom properties in the `themes` layer:

```css
@layer themes {
  [data-palette="custom"] {
    --accent-1: oklch(55% 0.15 250);
    --accent-2: oklch(60% 0.12 180);
    --accent-3: oklch(50% 0.18 340);
    --accent-4: oklch(65% 0.10 120);
    --accent-5: oklch(45% 0.15 30);
    --accent-6: oklch(55% 0.12 290);

    /* Surface colors */
    --palette-surface: oklch(97% 0.005 250);
    --palette-surface-alt: oklch(94% 0.008 250);

    /* Override accent to use your selected accent */
    --accent: var(--accent-1);
  }
}
```

### OKLCH Color Space

Fluid uses OKLCH for all color definitions. The three components are:

- **Lightness** (0-100%) — how bright the color is
- **Chroma** (0-0.4) — saturation intensity. 0 is gray, 0.4 is maximally vivid.
- **Hue** (0-360 degrees) — the color angle on the color wheel

OKLCH provides perceptually uniform colors, meaning equal lightness values look equally bright regardless of hue.

---

## Creating a Custom Motion Preset

Override the motion-related tokens to create a new visual personality:

```css
@layer themes {
  [data-motion="custom"] {
    --motion-scale: 0.8;
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    --shadow-sm: 0 1px 3px oklch(0% 0 0 / 0.05);
    --shadow-md: 0 4px 12px oklch(0% 0 0 / 0.08);
    /* Typography character */
    --font-heading: var(--font-system);
    --font-body: var(--font-system);
  }
}
```

The `--motion-scale` property acts as a multiplier for all animation durations. Setting it to `0` disables animations entirely (as `still` does).

---

## Dark Mode Architecture

### Automatic Detection

Setting `data-theme="auto"` uses the `prefers-color-scheme` media query to match the user's OS preference. This is the recommended default.

### How Dark Mode Works

When dark mode activates, Fluid inverts the semantic color tokens (`--color-text`, `--color-background`, `--color-surface`, etc.) so that components automatically adapt without any additional markup or classes.

Each motion preset provides its own dark mode surface colors. These are deep palette colors — rich blues, slates, and lavenders — not flat black. This gives dark mode visual depth and personality that matches the preset.

### Customizing Dark Mode for a Palette

To define custom dark mode colors for your palette, target both attributes:

```css
@layer themes {
  [data-theme="dark"][data-palette="custom"] {
    --palette-surface: oklch(20% 0.02 250);
    --palette-surface-alt: oklch(25% 0.025 250);
    --color-text: oklch(90% 0.005 250);
  }
}
```

---

## Runtime Theme Switching

All theme axes can be changed at runtime via JavaScript by setting `dataset` properties on `<body>`:

```javascript
document.body.dataset.theme = 'dark';
document.body.dataset.motion = 'cascade';
document.body.dataset.palette = 'morandi';
document.body.dataset.accent = '3';
```

Changes take effect immediately — no rebuild, no page reload. CSS custom properties cascade through the entire document.

The built-in settings panel component provides this UI out of the box, including persistence via `localStorage`.

---

## CSS Custom Properties Override

Individual tokens can be overridden at any level for component-specific customization:

```css
.my-special-card {
  --card-radius: var(--radius-xl);
  --card-shadow: var(--shadow-lg);
  --card-padding: var(--space-8);
}
```

This works because Fluid's components consume custom properties rather than hardcoded values. You can override tokens at the element level, a wrapper level, or even inline:

```html
<article class="card" style="--card-radius: 0;">
  <!-- A sharp-cornered card, regardless of preset -->
</article>
```

The cascade layer order ensures that component-level overrides take precedence over theme defaults without specificity conflicts.
