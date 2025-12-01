# CLAUDE.md - The Fluid Theme Framework v2c

## Project Overview
A modern CSS/HTML design system prioritizing semantic HTML, CSS custom properties, and progressive enhancement. No build step required - works directly in browsers.

## Quick Commands
```bash
# Serve examples locally
npm run serve           # Opens examples in browser at localhost:8080

# Testing (visual only)
npm test               # Reminder to open examples/foundation.html
```

## Project Structure
```
the-fluid-theme-v2c/
├── src/
│   ├── core/              # Foundation: reset.css, tokens.css, base.css
│   ├── components/        # Component CSS + Web Components JS
│   ├── layouts/           # Layout patterns
│   ├── themes/            # Theme variations
│   └── fluid.css          # Main entry point
├── examples/              # Live examples (foundation.html)
├── docs/
│   ├── ARCHITECTURE.md    # Technical decisions
│   ├── CONTRIBUTING.md    # Contribution guide
│   └── agents/            # AI agent role-specific instructions
└── tests/                 # Visual regression tests
```

## Core Development Principles

### Must Follow
- **Semantic HTML**: Use `<fluid-card>` not `<div class="card flex p-4 ...">`
- **CSS Custom Properties**: All values via tokens (`var(--space-3)`, `var(--color-primary)`)
- **Logical Properties**: Use `margin-block`, `padding-inline`, `block-size` (not `margin-top`, `padding-left`, `height`)
- **Progressive Enhancement**: Everything works without JavaScript
- **CSS Layers**: `@layer reset, tokens, base, layouts, components, themes, utilities;`
- **Container Queries**: Components respond to container, not viewport
- **No Build Step**: Must work directly in browsers

### Avoid
- Utility classes as primary API
- Pixel values (use rem/em, except 1px borders)
- Media queries when container queries would work
- Vendor prefixes (modern browsers only)
- `!important` (layers handle specificity)
- ID selectors or deep nesting (max 2 levels)
- CSS-in-JS or any build tools

## CSS Conventions

### Layer Order
```css
@layer reset, tokens, base, layouts, components, themes, utilities;
```

### Token Categories
- Colors: `--color-[name]` (HSL-based)
- Typography: `--font-[property]` (fluid with clamp())
- Spacing: `--space-[size]` (Fibonacci: 1, 2, 3, 5, 8, 13)
- Animation: `--duration-[speed]`, `--easing-[type]`
- Layout: `--container-[size]`
- Elevation: `--shadow-[size]`, `--z-[level]`

### Component Pattern
```css
@layer components {
  fluid-card,
  [is="fluid-card"] {
    container-type: inline-size;
    padding: var(--space-5);
    /* ... */
  }

  @container (min-width: 30rem) {
    fluid-card { padding: var(--space-8); }
  }

  fluid-card[data-variant="featured"] {
    /* variant styles */
  }
}
```

## JavaScript Conventions

### Web Components Only
```javascript
class FluidCard extends HTMLElement {
  connectedCallback() {
    // Enhance existing markup, don't replace it
  }
}
customElements.define('fluid-card', FluidCard);
```

### File Naming
- CSS: `kebab-case.css`
- JS: `kebab-case.js`
- Custom elements: `fluid-[name]`

## Testing Checklist
1. Visual testing in Chrome, Firefox, Safari, Edge
2. Light and dark mode toggle
3. Keyboard navigation only
4. Browser zoom up to 200%
5. `prefers-reduced-motion` enabled
6. High contrast mode

## Current Status
- **Phase 1**: Foundation (In Progress) - CSS reset, tokens, base styles
- **Phase 2**: Components (Not Started) - Button, Card, Nav, etc.
- **Phase 3**: Layouts (Not Started)
- **Phase 4**: Theming (Not Started)
- **Phase 5**: Polish (Not Started)

See `PROJECT_STATUS.md` for detailed task breakdown.

## Browser Support
Modern browsers only (2023+):
- CSS Custom Properties
- CSS Grid & Flexbox
- CSS Cascade Layers
- Container Queries
- `:has()` selector

## Key Files to Know
- `examples/foundation.html` - Current working demo with inline CSS
- `docs/ARCHITECTURE.md` - Technical decisions and rationale
- `docs/agents/css-specialist.md` - Detailed CSS patterns
- `docs/agents/README.md` - General AI agent instructions
