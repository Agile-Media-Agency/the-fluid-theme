# AI Agent Instructions - CSS Development

## Your Role
You are a CSS specialist working on The Fluid Theme Framework. Your focus is creating clean, modern, maintainable CSS using the latest features.

## CSS Architecture

### Layer Structure (Order Matters!)
```css
@layer reset, tokens, base, layouts, components, themes, utilities;
```

1. **reset**: Normalization and box-model fixes
2. **tokens**: CSS custom properties (design tokens)
3. **base**: Default element styles
4. **layouts**: Layout utilities and patterns
5. **components**: Component-specific styles
6. **themes**: Theme overrides (only custom property changes)
7. **utilities**: Optional utility classes (use sparingly)

### Design Token Structure
```css
:root {
  /* Colors - HSL based */
  --color-primary-hue: 220;
  --color-primary-sat: 90%;
  --color-primary-light: 50%;
  --color-primary: hsl(var(--color-primary-hue) var(--color-primary-sat) var(--color-primary-light));
  
  /* Semantic colors */
  --color-text: light-dark(#1a1a1a, #f0f0f0);
  --color-background: light-dark(#ffffff, #0a0a0a);
  
  /* Typography - Fluid scales */
  --font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --font-size-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
  
  /* Spacing - Fibonacci */
  --space-1: 0.25rem;     /* 4px */
  --space-2: 0.5rem;      /* 8px */
  --space-3: 0.75rem;     /* 12px */
  --space-5: 1.25rem;     /* 20px */
  --space-8: 2rem;        /* 32px */
  --space-13: 3.25rem;    /* 52px */
  
  /* Animation */
  --duration-fast: 150ms;
  --duration-moderate: 250ms;
  --easing-default: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Component Styling Pattern
```css
@layer components {
  /* Use semantic selectors */
  fluid-card,
  [is="fluid-card"] {
    /* Layout */
    display: block;
    container-type: inline-size;
    
    /* Spacing */
    padding: var(--space-5);
    margin-block: var(--space-3);
    
    /* Visual */
    background: var(--color-surface);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    
    /* Animation */
    transition: box-shadow var(--duration-fast) var(--easing-default);
  }
  
  /* Container queries for responsive */
  @container (min-width: 30rem) {
    fluid-card {
      padding: var(--space-8);
    }
  }
  
  /* Data attribute variants */
  fluid-card[data-variant="featured"] {
    --color-surface: var(--color-primary);
    color: white;
  }
}
```

## Modern CSS Features to Use

### Color Functions
```css
/* Automatic dark mode */
color: light-dark(lightModeColor, darkModeColor);

/* Color mixing */
background: color-mix(in srgb, var(--color-primary) 20%, transparent);

/* Relative colors */
background: hsl(from var(--color-primary) h s calc(l + 20%));
```

### Container Queries
```css
.component {
  container-type: inline-size;
}

@container (min-width: 20rem) {
  .component-child { /* styles */ }
}
```

### Logical Properties
```css
/* Use these instead of physical properties */
margin-block-start    /* not margin-top */
padding-inline-end    /* not padding-right */
block-size           /* not height */
inline-size          /* not width */
inset-block-start    /* not top */
border-inline-start  /* not border-left */
```

### Advanced Selectors
```css
/* Has selector */
article:has(img) { }

/* Is/Where for specificity control */
:where(.card) { } /* 0 specificity */
:is(h1, h2, h3) { } /* Matches any */

/* Focus visible only */
:focus-visible { }
```

### Grid & Flexbox Patterns
```css
/* Fluid grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
  gap: var(--space-5);
}

/* Flexible stack */
.stack {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
```

## CSS Do's and Don'ts

### DO ✅
- Use custom properties for ALL values
- Use logical properties everywhere
- Use semantic HTML selectors
- Use container queries for component responsive
- Use clamp() for fluid typography
- Use modern color functions
- Use CSS layers for organization
- Write comments explaining "why"

### DON'T ❌
- Use pixel values (except 1px borders)
- Use !important (layers handle specificity)
- Use physical properties (top, left, etc.)
- Use vendor prefixes
- Use media queries for components
- Create utility classes as primary API
- Use ID selectors
- Nest selectors more than 2 levels

## Theme Creation Rules

Themes should ONLY override custom properties:

```css
/* themes/dark.css */
@layer themes {
  :root {
    --color-background: #0a0a0a;
    --color-text: #f0f0f0;
    --color-surface: #1a1a1a;
    --color-primary: hsl(220 90% 60%);
    /* Only change tokens, never add new styles */
  }
}
```

## Performance Considerations

1. **Use CSS containment**:
   ```css
   .component {
     contain: layout style paint;
   }
   ```

2. **Optimize animations**:
   ```css
   /* Only animate transform and opacity */
   transition: transform 200ms, opacity 200ms;
   ```

3. **Use will-change sparingly**:
   ```css
   .will-animate:hover {
     will-change: transform;
   }
   ```

## Accessibility in CSS

```css
/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

@media (prefers-contrast: high) {
  :root {
    --color-border: CanvasText;
  }
}

/* Focus styles */
:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

/* Screen reader only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  overflow: hidden;
}
```

## Testing Your CSS

1. Test in light and dark modes
2. Test with browser zoom (up to 200%)
3. Test with keyboard navigation
4. Test with reduced motion enabled
5. Test container queries at different sizes
6. Validate color contrast ratios

## File Organization

```
src/
├── core/
│   ├── reset.css       # @layer reset
│   ├── tokens.css      # @layer tokens
│   └── base.css        # @layer base
├── components/
│   ├── button.css      # @layer components
│   ├── card.css
│   └── ...
├── layouts/
│   ├── container.css   # @layer layouts
│   ├── grid.css
│   └── stack.css
├── themes/
│   ├── default.css     # @layer themes
│   ├── dark.css
│   └── corporate.css
└── fluid.css           # Imports all in correct order
```

## Quick Reference

```css
/* Spacing scale */
--space-1: 0.25rem;   /* 4px - Tight */
--space-2: 0.5rem;    /* 8px - Compact */
--space-3: 0.75rem;   /* 12px - Default */
--space-5: 1.25rem;   /* 20px - Comfortable */
--space-8: 2rem;      /* 32px - Spacious */
--space-13: 3.25rem;  /* 52px - Loose */

/* Type scale */
--font-size-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--font-size-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
--font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
--font-size-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
--font-size-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);

/* Common patterns */
container-type: inline-size;
margin-block: var(--space-3);
padding-inline: var(--space-5);
```

Remember: We're building something BETTER than Tailwind/Bootstrap. Every line of CSS should be intentional, semantic, and maintainable.
