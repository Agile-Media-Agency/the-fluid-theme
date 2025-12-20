# The Fluid Theme Framework

## 🌊 A Physics-Based Design System

A revolutionary approach to web theming built on **fluid dynamics principles**. Every animation, transition, and interaction is governed by real physics—viscosity, displacement, surface tension, momentum, and friction.

> *"There HAS to be a better way..." — And now there is.*

## What Makes This Different

Most design systems pick arbitrary animation timings. We use **Reynolds numbers**—the same physics that determines whether water flows smoothly or turbulently:

| Motion Style | Reynolds | Behavior |
|-------------|----------|----------|
| **Still** | 0 | No motion, instant state changes |
| **Stream** | ~100 | Laminar flow, smooth and predictable |
| **Cascade** | ~1000 | Transitional, gentle waterfalls |
| **Rapids** | ~5000 | Turbulent, energetic with resistance |
| **Tsunami** | ~50000 | Massive force, dramatic displacement |

## Quick Start

```html
<!-- Link the CSS -->
<link rel="stylesheet" href="path/to/fluid.css">

<!-- Set your preferences -->
<body data-theme="dark" data-motion="cascade" data-palette="fluid" data-accent="1">

<!-- Use semantic HTML -->
<fluid-card>
  <h2>Clean and Semantic</h2>
  <p>No utility class soup needed.</p>
</fluid-card>
```

```bash
# Local development
npm run serve    # Opens at localhost:8080
```

## Core Features

### 🎬 Motion System
Five physics-based animation styles:
- **Still** — Reduced motion, instant transitions
- **Stream** — Smooth, laminar animations (300ms)
- **Cascade** — Gentle waterfall effects (450ms)
- **Rapids** — Turbulent with friction and drag (700ms)
- **Tsunami** — Dramatic rise, crest, and crash (900ms)

### 🎨 Color Palettes
Nine curated palettes, each with 6 accent colors:

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

### 🌓 Theme Modes
- **Light** — Clean, high contrast
- **Dark** — Easy on the eyes
- **Auto** — Follows system preference
- **Subdued** — Low contrast for any mode (OKLCH-based)

### 📐 CSS Architecture
```css
@layer reset, tokens, base, layouts, components, themes, utilities;
```

Modern CSS features throughout:
- **OKLCH colors** with `color-mix()` for derived shades
- **Logical properties** (`margin-block`, `padding-inline`)
- **Container queries** for component-level responsiveness
- **View Transitions API** for page transitions
- **Custom properties** for everything

## Project Structure

```
the-fluid-theme-v2c/
├── _docs/                    # Documentation
│   ├── _start-here.md       # Full documentation
│   └── gemini-child-theme-prompt.md
├── _includes/               # Jekyll includes
│   ├── settings-panel.html  # Interactive controls
│   └── scripts.html         # Theme/palette logic
├── src/
│   ├── core/
│   │   ├── reset.css        # Modern reset
│   │   ├── tokens.css       # Design tokens + motion + palettes
│   │   └── base.css         # Base element styles
│   ├── components/          # Button, card, indicator, etc.
│   ├── layouts/             # Layout patterns
│   └── fluid.css            # Main entry point
├── examples/
│   ├── index.html           # Home
│   ├── foundation.html      # Element showcase
│   ├── components.html      # Component gallery
│   └── philosophy.html      # Fluid dynamics explanation
└── _config.yml              # Jekyll config (version, etc.)
```

## Data Attributes

Control everything via HTML attributes:

```html
<body
  data-theme="dark"      <!-- light | dark | auto -->
  data-motion="cascade"  <!-- still | stream | cascade | rapids | tsunami -->
  data-palette="fluid"   <!-- fluid | morandi | bold | pastel | earth | mono | 80s | matrix | subtle -->
  data-accent="1"        <!-- 1-6, selects from current palette -->
  data-contrast="normal" <!-- normal | subdued -->
>
```

## Philosophy

**Semantic First** — Use `<fluid-card>` not `<div class="flex flex-col p-4 m-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">`

**Progressive Enhancement** — Everything works without JavaScript, then enhances gracefully

**Zero Build Step** — No compilation needed, works directly in browsers

**Physics-Based** — Animations feel natural because they follow natural laws

## Development Status

- [x] **Phase 1: Foundation** — Reset, tokens, base styles
- [x] **Phase 2: Components** — Buttons, cards, indicators, forms
- [x] **Phase 3: Motion System** — 5 physics-based animation styles
- [x] **Phase 4: Theming** — 9 palettes, subdued mode, settings panel
- [ ] **Phase 5: Polish** — Visual testing, optimization

## Browser Support

Modern browsers with:
- CSS Custom Properties
- CSS Cascade Layers
- OKLCH Colors
- View Transitions API (progressive)
- Container Queries

## Documentation

- **[Full Documentation](_docs/_start-here.md)** — Complete guide
- **[Philosophy Page](examples/philosophy.html)** — Fluid dynamics explained
- **[Child Theme Prompt](_docs/gemini-child-theme-prompt.md)** — AI theming instructions

## License

MIT — Use it, modify it, make it yours.

---

**Version 0.2.0** | Built with physics and 32 years of design experience.
