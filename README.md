# The Fluid Theme Framework

**[TheFluidTheme.com](https://thefluidtheme.com)** | [Live Components](https://thefluidtheme.com/examples/components.html) | [Live Foundation](https://thefluidtheme.com/examples/foundation.html) | [Templates](https://thefluidtheme.com/templates/)

## A Physics-Based Design System

A modern approach to web theming built on **fluid dynamics principles**. Every animation, transition, and interaction is governed by real physics — viscosity, displacement, surface tension, momentum, and friction.

> *"There HAS to be a better way..." — And now there is.*

## What Makes This Different

Most design systems pick arbitrary animation timings. We use **Reynolds numbers** — the same physics that determines whether water flows smoothly or turbulently:

| Motion Style | Reynolds | Behavior |
|-------------|----------|----------|
| **Still** | 0 | No motion, instant state changes |
| **Serene** | ~10 | Slow, meditative, Ken Burns |
| **Stream** | ~100 | Laminar flow, smooth and predictable |
| **Flowing** | ~500 | Organic ease-in-out |
| **Cascade** | ~1000 | Transitional, gentle waterfalls |
| **Rapids** | ~5000 | Turbulent, energetic with resistance |
| **Tsunami** | ~50000 | Massive force, dramatic displacement |

## Starter Kits

| Starter | What it is | Get started |
|---------|-----------|------------|
| [HTML](starters/html/) | Zero-setup, CDN-based. No npm, no build step. | Copy `starters/html/index.html` and open it. |
| [React](starters/react/) | Vite + React 18. Includes live theming demo. | `cd starters/react && npm install && npm run dev` |

## Installation

### CDN (recommended for quick start)

**jsDelivr** (recommended):
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fluid-theme/core/dist/fluid.min.css">
```

**unpkg:**
```html
<link rel="stylesheet" href="https://unpkg.com/@fluid-theme/core/dist/fluid.min.css">
```

### npm

```bash
npm install @fluid-theme/core
```

Then in your HTML:
```html
<!-- Production (minified) -->
<link rel="stylesheet" href="node_modules/@fluid-theme/core/dist/fluid.min.css">

<!-- Source (readable, for customisation) -->
<link rel="stylesheet" href="node_modules/@fluid-theme/core/src/fluid.css">
```

Or in a bundler (Vite, Webpack, etc.):
```js
import '@fluid-theme/core';
```

### Download

Grab the latest release from the [GitHub Releases](https://github.com/Agile-Media-Agency/the-fluid-theme/releases) page.

## Quick Start

```html
<!-- Link the CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fluid-theme/core/dist/fluid.min.css">

<!-- Set your preferences -->
<body data-theme="dark" data-preset="cascade" data-palette="fluid" data-accent="1">

<!-- Use semantic HTML -->
<article class="card">
  <div class="card__content">
    <h2 class="card__title">Clean and Semantic</h2>
    <p class="card__description">No utility class soup needed.</p>
  </div>
</article>
```

```bash
# Local development
npm run serve    # Opens at localhost:8080
```

## Core Features

### Motion System
Seven physics-based animation styles:
- **Still** — Reduced motion, instant transitions
- **Serene** — Slow, meditative Ken Burns (1200ms)
- **Stream** — Smooth, laminar animations (800ms)
- **Flowing** — Organic ease-in-out (600ms)
- **Cascade** — Gentle waterfall effects (500ms)
- **Rapids** — Turbulent with friction and drag (300ms)
- **Tsunami** — Dramatic rise, crest, and crash (400ms)

### 23 Components
Buttons, Cards, Navigation, Forms, Heroes, Indicators, Scroll Progress, Settings Panel, Themed Images, Modal/Dialog, Tooltip/Popover, Accordion, Alert/Toast, Table, Avatar, Loading/Skeleton, Dropdown

### Color Palettes
Ten curated palettes, each with 6 accent colors:

| Palette | Vibe |
|---------|------|
| **Fluid** | Water-themed, auto-links to motion style |
| **Morandi** | Muted, sophisticated Italian aesthetics |
| **Bold** | High saturation, confident primaries |
| **Pastel** | Soft, approachable pastels |
| **Earth** | Natural, organic tones |
| **Mono** | Grayscale with subtle warmth |
| **80s** | Neon retrowave |
| **Matrix** | Cyberpunk greens |
| **Subtle** | Nearly neutral, whisper quiet |
| **Tsunami** | Deep ocean palette (Hokusai-inspired) |

### Theme Modes
- **Light** — Clean, high contrast
- **Dark** — Easy on the eyes
- **Auto** — Follows system preference
- **Subdued** — Low contrast for any mode (OKLCH-based)

### Layout System
- **Flex utilities** — Direction, wrap, grow/shrink, basis
- **Grid utilities** — 2/3/4 columns, auto-fit responsive, span
- **Layout patterns** — Sidebar, holy grail, dashboard
- **Position utilities** — Sticky, z-index, overflow, responsive visibility

### Image Optimization

Built-in CSS utilities for responsive, performant images:

- **Focal point control** — `data-focus="top|bottom|left|right|center"` on hero backgrounds and card media
- **Custom focal points** — `--focus-x` / `--focus-y` CSS custom properties
- **Aspect ratios** — `data-aspect="square|video|portrait|wide"` on `.card__media`
- **Image protection** — `data-protected` blocks casual right-click saving (not DRM)
- **Orientation-aware** — `data-orientation="landscape|portrait"` shows/hides based on viewport
- **Lazy loading** — all templates use `loading="lazy"` on below-fold images
- **Dimensions** — all `<img>` tags include `width`/`height` for CLS prevention

See `_docs/images-guide.md` for the full guide including `<picture>` patterns, `srcset`, format recommendations (AVIF > WebP > JPEG), and stack-specific solutions.

### CSS Architecture
```css
@layer reset, tokens, base, layouts, components, themes, utilities;
```

Modern CSS features throughout:
- **OKLCH colors** with `color-mix()` for derived shades
- **Logical properties** (`margin-block`, `padding-inline`)
- **Container queries** for component-level responsiveness
- **View Transitions API** for page transitions
- **CSS Custom Properties** for runtime theming

## The Fluid Agent Kit

This project ships with the **Fluid Agent Kit** (`fluid-agent-kit/`) — skill files that help AI coding assistants produce correct Fluid Theme code.

| Skill | What It Covers |
|-------|----------------|
| CSS Conventions | Layer order, tokens, logical properties, data attributes |
| UX Rules | 12 behavioral rules for interactive components |
| Accessibility | HTML, keyboard, motion, touch, color standards |
| Image Optimization | Responsive images, lazy loading, focal points, formats |

Works automatically with **Claude Code** (reads `CLAUDE.md`), **Gemini** (reads `GEMINI.md`), and any AI assistant that reads project-level instructions (reads `AGENTS.md`).

## Project Structure

```
the-fluid-theme/
├── fluid-agent-kit/          # AI coding assistant skills
│   ├── README.md             # Kit overview
│   └── skills/               # CSS, UX, a11y, image skills
├── _docs/                    # Documentation
│   ├── _start-here.md        # Full documentation
│   ├── images-guide.md       # Image optimization guide
│   └── reference/            # Component + layout API docs
├── _includes/                # Jekyll includes
├── src/
│   ├── core/
│   │   ├── reset.css         # Modern reset
│   │   ├── tokens.css        # Design tokens + motion + palettes
│   │   └── base.css          # Base element styles
│   ├── components/           # 23 UI components
│   ├── layouts/              # Layout patterns + utilities
│   ├── animations/           # Scroll reveal system
│   └── fluid.css             # Main entry point
├── examples/                 # 7 demo pages
├── templates/                # 18 page templates
├── CLAUDE.md                 # Claude Code instructions
├── GEMINI.md                 # Google Gemini instructions
└── AGENTS.md                 # Agent-agnostic instructions
```

## Data Attributes

Control everything via HTML attributes:

```html
<body
  data-theme="dark"      <!-- light | dark | auto -->
  data-preset="cascade"  <!-- still | serene | stream | flowing | cascade | rapids | tsunami -->
  data-palette="fluid"   <!-- fluid | morandi | bold | pastel | earth | mono | 80s | matrix | subtle | tsunami -->
  data-accent="1"        <!-- 1-6, selects from current palette -->
  data-contrast="normal" <!-- normal | subdued -->
>
```

## Philosophy

**Semantic First** — Use `<article class="card">` not `<div class="flex flex-col p-4 m-2 rounded-lg shadow-md">`

**Progressive Enhancement** — Everything works without JavaScript, then enhances gracefully

**Zero Build Step** — No compilation needed, works directly in browsers

**Physics-Based** — Animations feel natural because they follow natural laws

**Accessibility Built-In** — `prefers-reduced-motion` respected, WCAG 2.1 AA focused

## Development Status

- [x] **Phase 1: Foundation** — Reset, tokens, base styles
- [x] **Phase 2: Core Components** — Buttons, cards, nav, forms, heroes, indicators (9 components)
- [x] **Phase 3: Extended Components + Layouts** — Modal, tooltip, accordion, alert, table, avatar, loading, dropdown + flex/grid utilities (17 total)
- [x] **Phase 4: Documentation** — Getting started guide, installation, tutorials, image optimization guide
- [x] **Phase 5: Distribution** — npm publish, CDN, Fluid Agent Kit for AI assistants

**Current**: v0.6.0 — See [PROJECT_STATUS.md](PROJECT_STATUS.md) for details.

## Browser Support

Modern browsers: Chrome 120+, Firefox 120+, Safari 16.4+, Edge 120+

## Documentation

- **[TheFluidTheme.com](https://thefluidtheme.com)** — Live demo site
- **[Getting Started](_docs/getting-started.md)** — Installation and first steps
- **[Full Documentation](_docs/_start-here.md)** — Complete guide
- **[Component Reference](_docs/reference/components.md)** — All 23 components
- **[Positioning Reference](_docs/reference/positioning.md)** — Layout system
- **[Tokens Reference](_docs/reference/tokens.md)** — Design tokens
- **[Public Readiness Roadmap](FRAMEWORK_READINESS.md)** — Launch plan
- **[Executive Summary](SUMMARY.md)** — Quick overview

## License

MIT — Use it, modify it, make it yours.

---

**Version 0.6.0** | **[TheFluidTheme.com](https://thefluidtheme.com)** | Built with physics and 32 years of design experience.
