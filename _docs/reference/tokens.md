# Design Tokens Reference

[Live demo](https://thefluidtheme.com/examples/foundation.html#tokens) | [TheFluidTheme.com](https://thefluidtheme.com)

Design tokens are the single source of truth for all visual values. They're defined as CSS custom properties in `src/core/tokens.css`.

---

## Colors

### Primary & Accent
```css
--accent          /* Main brand color (muted blue) */
--accent-hover    /* Hover state */
--accent-subtle   /* Light tint for backgrounds */
--color-accent           /* Complementary warm tone */
```

### Semantic Colors
```css
--color-text            /* Main text color (auto light/dark) */
--color-text-muted      /* Secondary text */
--color-text-subtle     /* Tertiary/placeholder text */
--color-background      /* Page background */
--color-surface         /* Card/section backgrounds */
--color-surface-raised  /* Elevated surfaces */
--color-border          /* Default borders */
--color-border-subtle   /* Lighter borders */
```

### Feedback Colors
```css
--color-success         /* Green - positive actions */
--color-warning         /* Amber - caution */
--color-error           /* Red - errors/danger */
--color-info            /* Blue - informational */
```

### Interactive
```css
--color-focus           /* Focus ring color */
--color-selection       /* Text selection background */
```

---

## Typography

### Font Stacks
```css
--font-system           /* System UI fonts */
--font-serif            /* Serif fonts */
--font-mono             /* Monospace fonts */
```

### Font Sizes (Fluid)
All sizes scale smoothly with viewport.

```css
--font-size-xs          /* ~12-14px */
--font-size-sm          /* ~14-16px */
--font-size-md          /* ~16-18px (base) */
--font-size-lg          /* ~19-22px */
--font-size-xl          /* ~23-27px */
--font-size-2xl         /* ~28-31px */
--font-size-3xl         /* ~33-37px */
--font-size-4xl         /* ~40-45px */
--font-size-5xl         /* ~48-54px */
```

### Line Heights
```css
--leading-none          /* 1 */
--leading-tight         /* 1.2 */
--leading-snug          /* 1.35 */
--leading-normal        /* 1.6 (default) */
--leading-relaxed       /* 1.75 */
--leading-loose         /* 2 */
```

### Font Weights
```css
--weight-light          /* 300 */
--weight-normal         /* 400 */
--weight-medium         /* 500 */
--weight-semibold       /* 600 */
--weight-bold           /* 700 */
```

### Letter Spacing
```css
--tracking-tight        /* -0.025em */
--tracking-normal       /* 0 */
--tracking-wide         /* 0.025em */
--tracking-wider        /* 0.05em */
```

---

## Spacing

Fibonacci-inspired scale for natural rhythm.

```css
--space-0               /* 0 */
--space-px              /* 1px */
--space-0-5             /* 0.125rem (2px) */
--space-1               /* 0.25rem (4px) */
--space-1-5             /* 0.375rem (6px) */
--space-2               /* 0.5rem (8px) */
--space-3               /* 0.75rem (12px) */
--space-4               /* 1rem (16px) */
--space-5               /* 1.25rem (20px) */
--space-6               /* 1.5rem (24px) */
--space-8               /* 2rem (32px) */
--space-10              /* 2.5rem (40px) */
--space-12              /* 3rem (48px) */
--space-16              /* 4rem (64px) */
--space-20              /* 5rem (80px) */
--space-24              /* 6rem (96px) */
```

### Semantic Spacing
```css
--space-gutter          /* Default gutter (--space-5) */
--space-section         /* Section padding (--space-16) */
```

---

## Containers

Width constraints for content.

```css
--container-xs          /* 20rem (320px) - Narrow */
--container-sm          /* 32rem (512px) - Reading */
--container-md          /* 48rem (768px) - Articles */
--container-lg          /* 64rem (1024px) - Wide */
--container-xl          /* 80rem (1280px) - Full */
--container-2xl         /* 96rem (1536px) - Ultra */
--container-prose       /* 65ch - Optimal reading */
```

---

## Animation

### Durations
```css
--duration-instant      /* 100ms */
--duration-fast         /* 200ms */
--duration-normal       /* 350ms */
--duration-slow         /* 500ms */
--duration-slower       /* 800ms */
--duration-slowest      /* 1200ms */
```

### Easing Functions
```css
--ease-default          /* General purpose */
--ease-in               /* Accelerate */
--ease-out              /* Decelerate */
--ease-in-out           /* Both */
--ease-fluid            /* Water-like flow */
--ease-fluid-in         /* Fluid acceleration */
--ease-fluid-out        /* Fluid deceleration */
--ease-settle           /* Gentle landing */
```

---

## Borders & Radii

### Border Radius
```css
--radius-none           /* 0 */
--radius-sm             /* 0.25rem (4px) */
--radius-md             /* 0.5rem (8px) */
--radius-lg             /* 0.75rem (12px) */
--radius-xl             /* 1rem (16px) */
--radius-2xl            /* 1.5rem (24px) */
--radius-full           /* 9999px (pill) */
```

### Border Width
```css
--border-width          /* 1px */
--border-width-thick    /* 2px */
```

---

## Shadows

Soft, diffused shadows like dappled sunlight.

```css
--shadow-xs             /* Subtle lift */
--shadow-sm             /* Small elevation */
--shadow-md             /* Medium elevation */
--shadow-lg             /* Large elevation */
--shadow-xl             /* Dramatic elevation */
--shadow-inset          /* Inset depth */
--shadow-glow           /* Focus glow */
```

---

## Z-Index

Predictable stacking order.

```css
--z-base                /* 0 */
--z-raised              /* 1 */
--z-dropdown            /* 1000 */
--z-sticky              /* 1100 */
--z-overlay             /* 1200 */
--z-modal               /* 1300 */
--z-popover             /* 1400 */
--z-toast               /* 1500 */
--z-tooltip             /* 1600 */
--z-max                 /* 9999 */
```

---

## Opacity

```css
--opacity-0             /* 0 */
--opacity-5             /* 0.05 */
--opacity-10            /* 0.1 */
--opacity-20            /* 0.2 */
--opacity-30            /* 0.3 */
--opacity-50            /* 0.5 */
--opacity-70            /* 0.7 */
--opacity-80            /* 0.8 */
--opacity-90            /* 0.9 */
--opacity-100           /* 1 */
```

---

## Media Query Overrides

Tokens automatically adjust for user preferences:

- **Dark mode**: Shadows become darker
- **High contrast**: Borders become more visible
- **Reduced motion**: All durations become 0ms

---

## Usage Example

```css
.my-component {
  padding: var(--space-5);
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--duration-fast) var(--ease-fluid);
}

.my-component:hover {
  box-shadow: var(--shadow-md);
}
```
