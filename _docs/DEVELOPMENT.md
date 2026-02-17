# Fluid Framework — Development Guide

> **The single source of truth for why this framework exists and how we build it.**

This document captures the foundational vision, core principles, technical methodologies, and development practices. Every contributor (human or AI) should read this before making changes.

---

## Why Fluid Exists

### The Problem with Current Frameworks

**Tailwind, Bootstrap, and similar frameworks are well-documented, widely-used, and battle-tested. Why build something new?**

1. **Utility Class Soup**
   ```html
   <!-- This is what we're escaping -->
   <div class="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
     <h2 class="text-xl font-bold text-gray-900 dark:text-white">Title</h2>
   </div>
   ```

   This approach has trade-offs:
   - Markup is polluted with styling concerns
   - Difficult to read and maintain
   - Copy-pasting creates inconsistencies
   - The "recipe" is in the HTML, not the design system

2. **Theming Requires Rebuilding**

   Most frameworks require a build step to customize. Want to change the base font? Rebuild. Change spacing units from `rem` to `em`? Rebuild. Change colors? Configuration file → rebuild → deploy.

   **Fluid uses CSS Custom Properties.** Change `--font-body` and every piece of body text updates instantly. No build. No deploy. Runtime theming.

3. **Presets Are Skin-Deep**

   Most "themes" just swap colors. Same fonts, same spacing, same feel—just blue instead of green.

   **Fluid presets are complete experiences.** Each preset changes:
   - Typography (font family, weights, sizing scale)
   - Color palette (6 coordinated colors, not just an accent)
   - Motion (animation timing, easing curves, intensity)
   - Layout behavior (grid styling, spacing rhythm)
   - Dark/light mode appearance (deep colors, not just black/white swap)

4. **Modern CSS is Underutilized**

   CSS has evolved dramatically. Features like `oklch()`, `color-mix()`, `@layer`, container queries, `:has()`, and View Transitions API enable things that previously required JavaScript or build tools.

   **Fluid is a demonstration of what's possible with modern CSS alone.**

---

## Core Philosophy

### 1. Semantic HTML First

Write meaningful markup. The design system enhances it.

```html
<!-- Fluid way: semantic and readable -->
<article class="card" data-variant="elevated">
  <h2>Title</h2>
  <p>Content that makes sense without CSS.</p>
</article>

<!-- Not this: div soup with classes as content -->
<div class="card card--elevated card--padding-lg">
  <div class="card__title">Title</div>
  <div class="card__body">Content</div>
</div>
```

**The rule:** If you removed all CSS, could you still understand the document structure?

### 2. Data Attributes for Variants

Use `data-*` attributes for styling variants, not BEM modifiers or utility classes.

```html
<button data-variant="primary" data-size="large">Click Me</button>
<section data-layout="center" data-padding="lg" data-bg="tinted">Content</section>
```

This keeps CSS selectors simple and HTML readable.

### 3. CSS Custom Properties Everywhere

**Every value should come from a token.** No magic numbers.

```css
/* Good */
padding: var(--space-4);
color: var(--color-text);
font-size: var(--font-size-lg);
border-radius: var(--radius-md);

/* Bad */
padding: 16px;
color: #333;
font-size: 1.125rem;
border-radius: 8px;
```

This enables runtime theming without rebuilds.

### 4. Progressive Enhancement

Everything must work without JavaScript. JS enhances; it doesn't gate functionality.

- Accordions use `<details>`/`<summary>` (native)
- Modals use `<dialog>` (native)
- Theme switching works via CSS `:root` attributes
- Tooltips use CSS-only techniques first, JS for positioning refinements

### 5. No Build Step Required

The framework must work by linking a single CSS file:

```html
<link rel="stylesheet" href="fluid.css">
```

No npm install. No webpack. No PostCSS. No Tailwind config.

---

## Preset Philosophy

### Presets Are Complete Experiences

A preset is **not** just an accent color change. Each preset should feel like a completely different design language.

| Aspect | What Changes | Example: "Brutalist" vs "Editorial" |
|--------|--------------|-------------------------------------|
| Typography | Font family, weights, scale | Monospace vs Serif |
| Colors | Full 6-color palette | Black/white stark vs warm paper tones |
| Motion | Timing, easing, intensity | Instant/none vs slow/contemplative |
| Layout | Grid behavior, spacing | Tight/geometric vs generous whitespace |
| Dark Mode | Deep palette colors | Dark gray vs warm sepia |

### Dark Mode ≠ Black, Light Mode ≠ White

**Critical principle:** Dark mode should use deep colors from the preset's palette, not just swap to black.

```css
/* Wrong approach */
[data-theme="dark"] {
  --color-background: black;
  --color-text: white;
}

/* Right approach: Use deep palette colors */
[data-theme="dark"][data-palette="editorial"] {
  --color-background: oklch(20% 0.02 40);  /* Deep warm brown */
  --color-text: oklch(90% 0.02 60);        /* Warm cream */
}

[data-theme="dark"][data-palette="neon"] {
  --color-background: oklch(10% 0.03 280); /* Deep purple-black */
  --color-text: oklch(95% 0.02 200);       /* Cool white */
}
```

Dark mode means "majority of screen is not lighter colors"—it can be deep navy, forest green, burgundy, etc.

### High Contrast / True Black-White is Separate

For accessibility (WCAG AAA), we offer a separate `data-contrast="high"` mode that provides true black/white. This is distinct from dark/light mode.

---

## Fluid Typography

### Headings Scale Proportionally

Headings should behave like print design—scaling proportionally so layouts look intentional at any viewport size.

**The problem:** A creative director types "GET READY" on line 1 and "HERE IT COMES" on line 2. At desktop, it looks perfect. At mobile, line 2 wraps awkwardly because font sizes are fixed.

**The solution:** Fluid typography that scales based on viewport or container.

```css
/* Fluid heading scale */
--font-size-4xl: clamp(2rem, 1.5rem + 3vw, 4rem);
--font-size-5xl: clamp(2.5rem, 2rem + 4vw, 5rem);

/* For "locked" layouts (designer-controlled line breaks) */
.fluid-text {
  font-size: clamp(1rem, 5vw, 4rem);
  line-height: 1.1;
}

/* Container-query-based scaling */
@container (min-width: 20rem) {
  .hero-title {
    font-size: calc(8cqi); /* 8% of container inline size */
  }
}
```

### Preserving Designer Intent

For sections where line breaks are intentional (hero headlines), provide a utility:

```html
<h1 class="fluid-scale">GET READY<br>HERE IT COMES</h1>
```

```css
.fluid-scale {
  /* Scale entire element proportionally */
  font-size: clamp(1rem, 5vw + 0.5rem, 5rem);
  white-space: pre-line; /* Respect hard returns */
}
```

---

## CSS Architecture

### Layer Order

```css
@layer reset, tokens, base, layouts, components, themes, utilities;
```

| Layer | Purpose | Can Override |
|-------|---------|--------------|
| `reset` | Browser normalization | Nothing |
| `tokens` | CSS custom properties | Nothing |
| `base` | Element defaults (`h1`, `p`, `a`) | reset |
| `layouts` | Positioning utilities | base |
| `components` | UI components (cards, buttons) | layouts |
| `themes` | Preset-specific overrides | components |
| `utilities` | One-off helpers | everything |

### Logical Properties Only

```css
/* Use these */
margin-block-start: var(--space-4);
padding-inline: var(--space-3);
block-size: 100%;
inline-size: auto;
inset-block-end: 0;

/* Not these */
margin-top: 16px;
padding-left: 12px;
height: 100%;
width: auto;
bottom: 0;
```

This provides automatic RTL support and is more semantically accurate.

---

## Development Practices

### Before Making Changes

1. **Read this document** (you're doing that now)
2. **Check `_docs/future-features.md`** for planned features
3. **Check existing code** for similar patterns
4. **Perfect one thing before expanding** to others

### Feature Development Workflow

1. **Document the feature** in `_docs/future-features.md` first
2. **Implement in the default preset** (`flowing`) first
3. **Test in all modes**: light, dark, subdued
4. **Test at all viewports**: mobile, tablet, desktop
5. **Verify all presets** work with the change
6. **Update documentation** in relevant `_docs/reference/` files
7. **Commit with descriptive message**

### When Adding a New Preset

1. Define in `src/core/tokens.css`:
   - Motion timing (`[data-motion="name"]`)
   - Color palette (`[data-palette="name"]`)
   - Typography (`--font-heading`, `--font-body`)
2. Add to `themePresets` object in `_includes/scripts.html`
3. Add to homepage hero grid in `index.html`
4. Add to customizer drawer in `_includes/settings-panel.html`
5. Create placeholder image or use CSS background pattern
6. Test all components with the new preset

### Known Issues to Address

**Priority: Fix these in the default (`flowing`) preset first, then propagate to others.**

- [ ] Dark mode colors are just black—should use deep palette colors
- [ ] Subdued/muted contrast toggle doesn't work well—needs palette-specific muted variants
- [ ] Some components don't flip colors correctly in dark mode
- [ ] Presets are too similar (just accent color + font changes)
- [ ] Typography scale may not be truly fluid in all components

### Testing Checklist

Before merging any change:

- [ ] Works without JavaScript
- [ ] Works in light mode
- [ ] Works in dark mode
- [ ] Works with `data-contrast="subdued"`
- [ ] Works with `prefers-reduced-motion`
- [ ] Tested in Chrome, Firefox, Safari
- [ ] Uses only CSS custom properties (no magic numbers)
- [ ] Uses logical properties (no `-top`, `-left`, etc.)
- [ ] Accessible (focus states, color contrast)

---

## File Reference

| File | Purpose | When to Edit |
|------|---------|--------------|
| `src/core/tokens.css` | All design tokens, palettes, presets | Adding/changing tokens or presets |
| `src/core/base.css` | Element defaults | Changing base element styles |
| `src/components/*.css` | Individual components | Component-specific changes |
| `src/fluid.css` | Main entry, imports | Adding new CSS files |
| `_includes/scripts.html` | Theme switching JS | Adding presets to JS |
| `_includes/settings-panel.html` | Customizer drawer | Adding preset UI |
| `index.html` | Homepage with grid | Adding presets to grid |

---

## Naming Conventions

### CSS Custom Properties

```css
--category-name-variant

/* Examples */
--color-text-muted
--font-size-lg
--space-4
--duration-slow
--radius-md
```

### Data Attributes

```html
data-variant="primary|secondary|outline|ghost"
data-size="sm|md|lg|xl"
data-layout="center|split|sidebar"
data-theme="light|dark|auto"
data-motion="still|serene|flowing|rapids|tsunami"
```

### CSS Classes

```css
/* Component: single word or hyphenated */
.card
.theme-chip
.settings-drawer

/* Component child: BEM-style with __ */
.card__title
.card__content

/* Utility classes: what they do */
.visually-hidden
.container
.section
```

---

## Remember

> **The user is burned out from overcomplicated frameworks and wants something clean, semantic, and maintainable. Every decision should reduce complexity, not add to it.**

When in doubt:
1. Can this be done with CSS alone?
2. Does this work without JavaScript?
3. Is this using semantic HTML?
4. Are all values from tokens?
5. Will this look intentional at every viewport size?

---

*Last updated: Feb 17, 2026*
