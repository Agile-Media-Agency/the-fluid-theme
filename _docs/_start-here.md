# Fluid Framework - Documentation

> *"A design system derived from fluid dynamics - not water-themed, physics-based."*

Welcome to the Fluid Framework documentation. This is a modern CSS/HTML design system built on the physics of how fluids actually behave.

---

## Quick Links

| Document | Description |
|----------|-------------|
| [Architecture](architecture.md) | Technical decisions, layer system, philosophy |
| [Contributing](contributing.md) | How to contribute to the project |
| [Tokens Reference](reference/tokens.md) | Design tokens (colors, spacing, typography) |
| [Positioning System](reference/positioning.md) | Layout and alignment utilities |
| [Heroes](reference/heroes.md) | Full-width hero sections |
| [Components](reference/components.md) | Component API and usage |
| [Gemini Prompt](gemini-child-theme-prompt.md) | Create child themes with AI assistance |

### For AI Agents
| Document | Description |
|----------|-------------|
| [General Instructions](_agents/general.md) | Core project principles |
| [CSS Specialist](_agents/css-specialist.md) | CSS patterns and conventions |
| [Component Developer](_agents/component-developer.md) | Component creation guide |

---

## What's New in v0.2.0

### Fluid Dynamics Foundation
The framework is now explicitly based on fluid mechanics:
- **Viscosity** - Elements have different densities
- **Displacement** - New content pushes old away
- **Surface Tension** - Boundaries before breakthrough
- **Momentum** - Overshoot, settle, equilibrium

See [examples/philosophy.html](../examples/philosophy.html) for the full explanation.

### Motion System (Water-Themed)
Six motion presets mapped to Reynolds numbers:

| Style | Flow Type | Behavior |
|-------|-----------|----------|
| `still` | No flow | Instant, no animation |
| `serene` | Laminar | Ken Burns effect, slow crossfade |
| `trickling` | Low Re | Quick, subtle feedback |
| `flowing` | Moderate Re | Horizontal push (default) |
| `rapids` | High Re | Fluid dynamics - pushes through, drags |
| `tsunami` | Extreme | Rise, crest, crash |

### Color Palette System (9 Moods)
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

### Subdued Mode
Lower contrast for gentler viewing: `<html data-contrast="subdued">`

### Status Indicator System
Progress bars, badges, and status cards with semantic status-driven styling.

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
│   ├── components/          # UI components
│   │   ├── button.css       # Buttons (tsunami effects)
│   │   ├── card.css         # Cards
│   │   └── indicator.css    # Progress bars, badges, status
│   ├── layouts/             # Layout patterns
│   ├── themes/              # Theme variations
│   └── fluid.css            # Main entry point
├── examples/                # Live examples
│   ├── foundation.html      # Element showcase
│   ├── components.html      # Component gallery
│   ├── positioning.html     # Positioning system demo
│   ├── heroes.html          # Hero section showcase
│   ├── indicators.html      # Status indicators demo
│   ├── philosophy.html      # Fluid dynamics explanation
│   └── hero-picker.html     # Interactive hero builder
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
| `data-theme` | `light`, `dark` | Color mode |
| `data-motion` | `still`, `serene`, `trickling`, `flowing`, `rapids`, `tsunami` | Motion intensity |
| `data-palette` | `fluid`, `morandi`, `bold`, `pastel`, `earth`, `mono`, `80s`, `matrix`, `subtle` | Color family |
| `data-accent` | `1`-`6` | Accent color from palette |
| `data-contrast` | `subdued` | Lower contrast mode |
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
3. Visit [philosophy.html](../examples/philosophy.html) for fluid dynamics explanation
4. Check [examples/](../examples/) for live demos
5. Use [Gemini Prompt](gemini-child-theme-prompt.md) to create child themes

---

*Version 0.2.0 - December 2024*
