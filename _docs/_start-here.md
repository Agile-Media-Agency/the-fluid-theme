# Fluid Framework - Documentation

**Live Site: [TheFluidTheme.com](https://thefluidtheme.com)** | [Components Demo](https://thefluidtheme.com/examples/components.html) | [GitHub](https://github.com/Agile-Media-Agency/the-fluid-theme)

> *"A design system derived from fluid dynamics - not water-themed, physics-based."*

Welcome to the Fluid Framework documentation. This is a modern CSS/HTML design system built on the physics of how fluids actually behave.

---

## Quick Links

| Document | Description |
|----------|-------------|
| **[DEVELOPMENT.md](DEVELOPMENT.md)** | **Master guide — read first. Why we built this, principles, practices.** |
| [Architecture](architecture.md) | Technical decisions, layer system, philosophy |
| [Contributing](contributing.md) | How to contribute to the project |
| [Future Features](future-features.md) | Planned features and ideas |
| [Tokens Reference](reference/tokens.md) | Design tokens (colors, spacing, typography) |
| [Positioning System](reference/positioning.md) | Layout and alignment utilities |
| [Heroes](reference/heroes.md) | Full-width hero sections |
| [Components](reference/components.md) | Component API and usage (17 components) |
| [Getting Started](getting-started.md) | Installation and first steps |
| [Gemini Prompt](gemini-child-theme-prompt.md) | Create child themes with AI assistance | |

### For AI Agents
| Document | Description |
|----------|-------------|
| [General Instructions](_agents/general.md) | Core project principles |
| [CSS Specialist](_agents/css-specialist.md) | CSS patterns and conventions |
| [Component Developer](_agents/component-developer.md) | Component creation guide |

---

## What's New in v0.3.2

### Phase 3 Complete: 17 Components + Layout System

The framework now has full component coverage and a comprehensive layout system:

- **8 new components** added: Modal/Dialog, Tooltip/Popover, Accordion, Alert/Toast, Table, Avatar, Loading/Skeleton, Dropdown
- **Layout utilities** added: Flexbox, Grid, common layout patterns (sidebar, holy grail, dashboard)
- **Accessibility improvements**: `prefers-reduced-motion` support in all animated components
- **New Tsunami palette**: Deep ocean, Hokusai-inspired colors

### Fluid Dynamics Foundation
The framework is explicitly based on fluid mechanics:
- **Viscosity** - Elements have different densities
- **Displacement** - New content pushes old away
- **Surface Tension** - Boundaries before breakthrough
- **Momentum** - Overshoot, settle, equilibrium

See [examples/philosophy.html](../examples/philosophy.html) for the full explanation.

### Motion System (7 Presets)
Seven motion presets mapped to Reynolds numbers:

| Style | Reynolds | Behavior |
|-------|----------|----------|
| `still` | 0 | No motion, instant state changes |
| `serene` | ~10 | Slow, meditative, Ken Burns |
| `stream` | ~100 | Laminar flow, smooth and predictable |
| `flowing` | ~500 | Organic ease-in-out |
| `cascade` | ~1000 | Transitional, gentle waterfalls |
| `rapids` | ~5000 | Turbulent, energetic with resistance |
| `tsunami` | ~50000 | Massive force, dramatic displacement |

### Color Palette System (10 Palettes)
| Palette | Character |
|---------|-----------|
| `fluid` | Water colors, auto-linked to motion style |
| `morandi` | Muted, sophisticated |
| `bold` | Vibrant, saturated |
| `pastel` | Soft, light |
| `earth` | Natural, warm |
| `mono` | Single hue variations |
| `80s` | Neon synthwave |
| `matrix` | Terminal/coding aesthetic |
| `subtle` | Trending feminine (Etsy/IG) |
| `tsunami` | Deep ocean (Hokusai-inspired) |

### Subdued Mode
Lower contrast for gentler viewing: `<html data-contrast="subdued">`

### 17 Components
Buttons, Cards, Navigation, Forms, Heroes, Indicators, Scroll Progress, Settings Panel, Themed Images, Modal/Dialog, Tooltip/Popover, Accordion, Alert/Toast, Table, Avatar, Loading/Skeleton, Dropdown

---

## Project Structure

```
the-fluid-theme-v2c/
├── _docs/                   # Documentation (you are here)
│   ├── _start-here.md       # This file
│   ├── architecture.md      # Technical decisions
│   ├── contributing.md      # Contribution guide
│   ├── gemini-child-theme-prompt.md  # AI theme creation
│   ├── _agents/             # AI agent instructions
│   └── reference/           # Technical reference
├── src/
│   ├── core/                # Foundation CSS
│   │   ├── reset.css        # Modern CSS reset
│   │   ├── tokens.css       # Design tokens + palettes + motion
│   │   └── base.css         # Element defaults
│   ├── components/          # 17 UI components
│   │   ├── button.css       # Buttons (5 variants, 5 sizes)
│   │   ├── card.css         # Cards (5 variants, container-query)
│   │   ├── nav.css          # Navigation, tabs, breadcrumbs, pagination
│   │   ├── form.css         # Custom inputs, toggles, validation
│   │   ├── hero.css         # Full-width hero sections
│   │   ├── indicator.css    # Progress bars, badges, status
│   │   ├── settings-panel.css # Theme/motion/palette controls
│   │   ├── scroll-progress.css # Page scroll tracking bar
│   │   ├── themed-images.css # Duotone filters, theme-aware overlays
│   │   ├── modal.css        # Native <dialog>, drawer, bottom sheet
│   │   ├── tooltip.css      # CSS-only tooltips, native popover API
│   │   ├── accordion.css    # Native <details>/<summary>
│   │   ├── alert.css        # Alerts + toast notifications
│   │   ├── table.css        # Responsive, mobile stacked
│   │   ├── avatar.css       # Sizes, initials, status, groups
│   │   ├── loading.css      # Spinner, dots, skeleton screens
│   │   └── dropdown.css     # Standalone menus, keyboard shortcuts
│   ├── layouts/             # Layout patterns + utilities
│   │   └── positioning.css  # Flex, grid, sidebar, dashboard, display
│   ├── animations/          # Scroll reveal system
│   │   └── scroll-reveal.css
│   └── fluid.css            # Main entry point
├── examples/                # 7 demo pages
│   ├── foundation.html      # Element showcase
│   ├── components.html      # Component gallery
│   ├── positioning.html     # Positioning system demo
│   ├── heroes.html          # Hero section showcase
│   ├── indicators.html      # Status indicators demo
│   ├── philosophy.html      # Fluid dynamics explanation
│   └── hero-picker.html     # Interactive hero builder
├── templates/               # 9 page templates
├── .github/workflows/       # GitHub Actions
│   └── version-bump.yml     # Auto version on merge
├── CLAUDE.md                # AI assistant entry point
└── README.md                # Project overview
```

---

## Core Principles

### 1. Physics-Based Motion
Motion isn't arbitrary - it's derived from fluid dynamics:
```html
<html data-motion="rapids">
<!-- New content pushes through old with friction and momentum -->
```

### 2. Semantic HTML First
```html
<!-- Do this -->
<article class="card">
  <h2>Title</h2>
  <p>Content</p>
</article>

<!-- Not this -->
<div class="flex flex-col p-4 rounded-lg shadow-md">
  <div class="text-xl font-bold">Title</div>
</div>
```

### 3. OKLCH Color System
Perceptually uniform colors that derive mathematically:
```css
/* All values come from tokens */
--accent: oklch(55% 0.15 200);
--accent-subtle: color-mix(in oklch, var(--accent) 15%, var(--color-background));
```

### 4. Palette-Driven Theming
```html
<html data-palette="morandi" data-accent="3">
<!-- Palette sets 6 color options, accent picks one -->
```

### 5. Motion-Linked Colors (Fluid Palette)
```html
<html data-palette="fluid" data-motion="tsunami">
<!-- Accent automatically becomes deep navy (Hokusai wave) -->
```

---

## Quick Start

```html
<!DOCTYPE html>
<html lang="en" data-palette="fluid" data-motion="flowing">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="path/to/fluid.css">
  <title>My Page</title>
</head>
<body>
  <div class="container">
    <section class="section" data-layout="center">
      <h1>Hello Fluid</h1>
      <p>A physics-based design system.</p>
      <button>Get Started</button>
    </section>
  </div>
</body>
</html>
```

---

## Data Attributes Reference

| Attribute | Values | Purpose |
|-----------|--------|---------|
| `data-theme` | `light`, `dark`, `auto` | Color mode |
| `data-motion` | `still`, `serene`, `stream`, `flowing`, `cascade`, `rapids`, `tsunami` | Motion intensity |
| `data-palette` | `fluid`, `morandi`, `bold`, `pastel`, `earth`, `mono`, `80s`, `matrix`, `subtle`, `tsunami` | Color family |
| `data-accent` | `1`-`6` | Accent color from palette |
| `data-contrast` | `normal`, `subdued` | Contrast mode |
| `data-status` | `good`, `moderate`, `severe`, `neutral` | Status indicator styling |

---

## Browser Support

- Chrome 120+
- Firefox 120+
- Safari 16.4+
- Edge 120+

Requires: CSS Layers, Container Queries, OKLCH, View Transitions API.

---

## Next Steps

1. Read [Architecture](architecture.md) for technical details
2. See [Tokens Reference](reference/tokens.md) for available design tokens
3. See [Components Reference](reference/components.md) for all 17 components
4. See [Positioning Reference](reference/positioning.md) for layout utilities
5. Visit [philosophy.html](../examples/philosophy.html) for fluid dynamics explanation
6. Check [examples/](../examples/) for live demos
7. Use [Gemini Prompt](gemini-child-theme-prompt.md) to create child themes

---

*Version 0.3.2 - February 2026*
