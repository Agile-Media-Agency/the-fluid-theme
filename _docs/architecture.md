# Architecture & Technical Decisions

## Core Principles

### 1. Progressive Enhancement Over JavaScript Dependency
- **Decision**: Everything must work without JavaScript
- **Rationale**: Resilience, performance, accessibility
- **Implementation**: Custom elements enhance existing HTML rather than replacing it

### 2. CSS Cascade Layers for Predictable Specificity
- **Decision**: Use `@layer` to organize styles
- **Rationale**: Eliminates specificity wars and !important hacks
- **Layer Order**: 
  ```css
  @layer reset, tokens, base, layouts, components, themes, utilities;
  ```

### 3. Design Tokens as Single Source of Truth
- **Decision**: All values come from CSS custom properties
- **Rationale**: True themability without recompilation
- **Token Categories**:
  - Colors (HSL-based for manipulation)
  - Typography (fluid scales)
  - Spacing (Fibonacci sequence)
  - Animation (timing & easing)
  - Layout (container sizes)
  - Elevation (shadows & z-index)

### 4. Logical Properties Throughout
- **Decision**: Use `block-size`, `inline-size`, `margin-block`, etc.
- **Rationale**: Automatic RTL support, future-proof
- **Migration Path**: Modern browsers only, no fallbacks

### 5. Container Queries Over Media Queries
- **Decision**: Components respond to their container, not viewport
- **Rationale**: True component isolation and reusability
- **Example**:
  ```css
  .card-container {
    container-type: inline-size;
  }
  
  @container (min-width: 20rem) {
    .card { /* responsive styles */ }
  }
  ```

## Technical Stack

### CSS Features Used
- **Modern Color Functions**: `hsl()`, `light-dark()`, `color-mix()`
- **Layout**: Grid, Flexbox, Container Queries
- **Typography**: `clamp()` for fluid sizing
- **Animations**: CSS transitions with custom timing functions
- **Selectors**: `:has()`, `:is()`, `:where()`, `:focus-visible`

### JavaScript Approach
- **Web Components**: Custom Elements v1
- **No Framework**: Vanilla JS only
- **Progressive**: Enhances functionality, doesn't gate it
- **Declarative**: Data attributes over imperative API

## File Organization

### CSS Architecture
```
src/
├── core/
│   ├── reset.css      # Normalization layer
│   ├── tokens.css     # Design tokens (:root variables)
│   └── base.css       # Element defaults
├── components/        # One file per component
│   ├── card.css
│   ├── button.css
│   └── ...
├── layouts/          # Layout utilities
│   ├── container.css
│   ├── grid.css
│   └── stack.css
├── themes/           # Theme overrides
│   └── [theme-name].css
└── fluid.css         # Main entry (imports all)
```

### JavaScript Architecture
```
src/
├── components/       # Web Components
│   ├── fluid-card.js
│   ├── fluid-nav.js
│   └── base-component.js  # Shared base class
└── fluid-components.js     # Barrel export
```

## Design Decisions

### Spacing Scale
We use a modified Fibonacci sequence for visual harmony:
```css
--space-0: 0;           /* 0px */
--space-px: 1px;        /* 1px - for borders */
--space-0_5: 0.125rem;  /* 2px */
--space-1: 0.25rem;     /* 4px - base unit */
--space-2: 0.5rem;      /* 8px */
--space-3: 0.75rem;     /* 12px */
--space-5: 1.25rem;     /* 20px */
--space-8: 2rem;        /* 32px */
--space-13: 3.25rem;    /* 52px */
--space-21: 5.25rem;    /* 84px */
```

### Color System
HSL-based for easy manipulation:
```css
--color-primary-hue: 220;
--color-primary-sat: 90%;
--color-primary-light: 50%;
--color-primary: hsl(
  var(--color-primary-hue) 
  var(--color-primary-sat) 
  var(--color-primary-light)
);
```

### Typography Scale
Fluid sizing with clamped values:
```css
/* Base size scales from 16px to 18px based on viewport */
--font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);

/* Other sizes maintain proportional relationships */
--font-size-sm: calc(var(--font-size-base) * 0.875);
--font-size-lg: calc(var(--font-size-base) * 1.25);
/* etc... */
```

## Performance Strategies

### CSS Performance
- Single CSS file in development (simplicity)
- Layers prevent reflow from specificity changes
- Custom properties computed once
- Logical properties optimize reflow

### JavaScript Performance  
- Lazy load custom elements
- Use `adoptedStyleSheets` for component styles
- Intersection Observer for progressive enhancement
- No global event listeners

## Accessibility Approach

### Built-in Features
- `:focus-visible` for keyboard navigation
- `prefers-reduced-motion` respected
- `prefers-contrast` support
- ARIA patterns in components

### Testing Strategy
- Axe-core integration
- Keyboard navigation tests
- Screen reader testing
- Color contrast validation

## Browser Support Strategy

### Baseline Features Required
- CSS Custom Properties
- CSS Grid
- CSS Layers (`@layer`)
- Container Queries
- `:has()` selector (for advanced features only)

### Progressive Enhancement
- Core functionality: Modern browsers (2023+)
- Enhanced features: Latest 2 versions
- Graceful degradation: Older browsers get basic styles

## Migration Path from Other Frameworks

### From Tailwind
```html
<!-- Before -->
<div class="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md">

<!-- After -->
<fluid-card spacing="comfortable">
```

### From Bootstrap
```html
<!-- Before -->
<div class="card">
  <div class="card-body">

<!-- After -->
<fluid-card>
```

## Future Considerations

### Potential Additions
- View Transitions API for page transitions
- CSS Anchor Positioning for tooltips
- Scroll-driven animations
- Style Queries for advanced theming

### Things We're Intentionally NOT Doing
- No build step required
- No CSS-in-JS
- No utility classes as primary API
- No vendor prefixes (modern browsers only)
- No IE11 support
- No JavaScript framework dependency

## Decision Record Format

For future decisions, use this template:
```markdown
### [Decision Title]
**Date**: YYYY-MM-DD
**Status**: Proposed | Accepted | Deprecated
**Context**: What prompted this decision?
**Decision**: What did we decide?
**Consequences**: What are the trade-offs?
**Alternatives Considered**: What else did we evaluate?
```

---

*This is a living document. Update it as architectural decisions evolve.*
