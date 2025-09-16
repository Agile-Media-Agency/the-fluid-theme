# The Fluid Theme Framework v2c

## 🌊 A Modern, Semantic Design System

A revolutionary approach to web theming that prioritizes semantic HTML, modern CSS features, and progressive enhancement over utility-class chaos. Built by someone who's seen it all in 32 years of design and is ready for something better.

## Philosophy

- **Semantic First**: Use `<fluid-card>` not `<div class="flex flex-col p-4 m-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">`
- **Modern CSS**: Leverage cascade layers, custom properties, container queries, and logical properties
- **Progressive Enhancement**: Everything works without JavaScript, then enhances gracefully
- **Zero Build Step**: No compilation needed - works directly in browsers
- **Truly Themeable**: Change a few CSS variables, transform everything

## Project Structure

```
the-fluid-theme-v2c/
├── docs/                    # Documentation
│   ├── ARCHITECTURE.md     # Technical decisions and patterns
│   ├── CONTRIBUTING.md     # How to contribute
│   └── agents/             # AI agent instructions
├── src/
│   ├── core/               # Foundation layers
│   │   ├── reset.css       # Modern reset layer
│   │   ├── tokens.css      # Design tokens
│   │   └── base.css        # Base element styles
│   ├── components/         # Reusable components
│   │   ├── fluid-card.js   # Card web component
│   │   ├── fluid-nav.js    # Navigation component
│   │   └── ...
│   ├── layouts/           # Layout patterns
│   ├── themes/            # Theme variations
│   │   ├── default.css
│   │   ├── dark.css
│   │   └── ...
│   └── fluid.css          # Main entry point
├── examples/              # Live examples
│   ├── index.html         # Element showcase
│   ├── components.html    # Component gallery
│   └── themes.html        # Theme switcher demo
└── tests/                 # Visual regression tests

```

## Quick Start

```html
<!-- Just link the CSS -->
<link rel="stylesheet" href="path/to/fluid.css">

<!-- Optionally add custom elements for enhanced functionality -->
<script type="module" src="path/to/fluid-components.js"></script>

<!-- Use semantic HTML -->
<fluid-card>
  <h2>Clean and Semantic</h2>
  <p>No utility class soup needed.</p>
</fluid-card>
```

## Core Features

### 🎨 Design Tokens
Single source of truth for all design decisions:
- **Colors**: HSL-based with automatic dark mode
- **Typography**: Fluid type scale using clamp()
- **Spacing**: Fibonacci-inspired mathematical scale
- **Animation**: Consistent timing and easing functions

### 📦 CSS Architecture
```css
/* Predictable cascade with layers */
@layer reset, tokens, base, layouts, components, themes, utilities;
```

### 🌍 International Ready
- Logical properties throughout (block/inline)
- RTL support out of the box
- Container queries for component-level responsiveness

### ♿ Accessibility First
- Focus-visible styles
- Respects prefers-reduced-motion
- High contrast mode support
- Semantic HTML structure

## Development Status

### Phase 1: Foundation ✅
- [x] Modern CSS reset
- [x] Design token system
- [x] Base element styles
- [x] Documentation structure

### Phase 2: Components 🚧
- [ ] Core component library
- [ ] Custom elements implementation
- [ ] Component documentation

### Phase 3: Layouts 📋
- [ ] Layout primitives
- [ ] Common sections
- [ ] Page templates

### Phase 4: Theming 📋
- [ ] Theme variations
- [ ] Theme switcher
- [ ] Custom theme generator

### Phase 5: Polish 📋
- [ ] Visual regression testing
- [ ] Performance optimization
- [ ] Production build

## Browser Support

Targets modern browsers with these baseline features:
- CSS Custom Properties
- CSS Grid & Flexbox
- CSS Cascade Layers
- Container Queries
- Web Components (for progressive enhancement)

## Contributing

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.

## Philosophy Behind the Name

"Fluid" because:
- The design system flows and adapts
- Typography scales fluidly with viewport
- Themes flow through the system via CSS variables
- Components adapt to their containers, not just viewport

## License

MIT - Use it, modify it, make it yours.

## Author

Built with 32 years of experience and a burning desire to make web development sane again.

---

*"There HAS to be a better way..." - And now there is.*
