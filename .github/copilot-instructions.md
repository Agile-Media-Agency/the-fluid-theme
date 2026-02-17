# Copilot Instructions for The Fluid Theme Framework

## Repository Overview

**The Fluid Theme Framework** is a modern, semantic CSS design system built on physics principles (fluid dynamics) rather than utility classes. It's a demonstration that modern CSS can replace frameworks like Tailwind/Bootstrap while providing better developer experience and runtime flexibility.

**Key characteristics:**
- **No build step required** — Pure CSS, works directly in browsers
- **Runtime theming** — CSS Custom Properties enable instant theme changes
- **Physics-based animations** — Motion styles derived from Reynolds numbers (fluid dynamics)
- **Semantic HTML** — No utility class soup (`<article class="card">` not `<div class="flex flex-col p-4">`)
- **17 UI components** with full dark mode and accessibility support
- **Static site** — Hosted on GitHub Pages with Jekyll

## Project Type and Technologies

- **Type:** CSS Framework / Design System
- **Languages:** CSS (95%), HTML, JavaScript (minimal, progressive enhancement only)
- **Size:** Small to medium (~200 files)
- **Runtime:** Modern browsers (Chrome 120+, Firefox 120+, Safari 16.4+, Edge 120+)
- **Build:** Jekyll for static site generation (GitHub Pages)
- **Dependencies:** None for the framework itself; only development dependency is `http-server` for local preview

## Quick Start Commands

```bash
# Local development server
npm run serve    # Opens at http://localhost:8080

# Visual testing (there are no automated tests)
# Open examples/foundation.html or examples/components.html in browser
npm test         # Just echoes instructions to open in browser
```

## Build and Validation

### No Build Step Required
The framework itself requires **no compilation or build step**. It's pure CSS that works directly in browsers.

### Development Workflow
1. **Make changes** to CSS files in `src/`
2. **Run local server**: `npm run serve`
3. **Test visually** by opening:
   - `http://localhost:8080/index.html` — Homepage with preset grid
   - `http://localhost:8080/examples/foundation.html` — All HTML elements
   - `http://localhost:8080/examples/components.html` — All 17 components
   - Other pages in `/examples/` and `/templates/`

### Important Development Notes
- **Always run `npm run serve` before testing** — Opens local server at port 8080
- **No linting or build tools** — Manual CSS validation only
- **No automated tests** — Visual testing in browser is the validation method
- **Jekyll builds automatically** on GitHub Pages push (no local Jekyll needed)
- **Version bump is automatic** — GitHub Action bumps version on merge to main

### Validation Steps
1. View the page in browser at `localhost:8080`
2. Test theme switching (light/dark toggle in settings panel)
3. Test all 7 motion styles (via settings panel)
4. Test all 10 color palettes (via settings panel)
5. Check dark mode appearance
6. Test `prefers-reduced-motion` by setting in browser DevTools
7. Validate on Chrome, Firefox, Safari (modern versions)

### GitHub Workflows
- **version-bump.yml** — Automatically bumps version in `_config.yml`, `package.json`, and `src/fluid.css` when changes merge to `main`
- No CI/CD for testing (visual testing only)
- No build or compilation checks

## Project Architecture

### CSS Layer System
The framework uses CSS `@layer` for cascade control:
```css
@layer reset, tokens, base, layouts, components, themes, utilities;
```

**Layer order matters** — Always maintain this sequence when adding new styles.

### Directory Structure

```
the-fluid-theme/
├── .github/
│   ├── workflows/version-bump.yml    # Auto version bump on merge
│   └── copilot-instructions.md       # This file
│
├── _docs/                            # Documentation
│   ├── _start-here.md                # Documentation index
│   ├── DEVELOPMENT.md                # Master guide — READ THIS FIRST
│   ├── architecture.md               # Technical decisions
│   ├── contributing.md               # Contribution guide
│   ├── future-features.md            # Roadmap
│   ├── reference/
│   │   ├── tokens.md                 # Design token reference
│   │   ├── components.md             # All 17 components API
│   │   ├── positioning.md            # Layout utilities
│   │   └── heroes.md                 # Hero sections
│   └── _agents/                      # AI agent instructions
│       ├── general.md                # Core principles
│       ├── css-specialist.md         # CSS patterns
│       └── component-developer.md    # Component guide
│
├── _includes/                        # Jekyll includes
│   ├── settings-panel.html           # Theme switcher UI
│   ├── scripts.html                  # Theme/palette switching logic
│   └── *.html                        # Other reusable components
│
├── _layouts/                         # Jekyll layouts
│   └── default.html                  # Base layout template
│
├── src/                              # Framework source (THE CORE)
│   ├── fluid.css                     # Main entry point (imports all)
│   ├── core/
│   │   ├── reset.css                 # Modern CSS reset
│   │   ├── tokens.css                # Design tokens, palettes, motion
│   │   └── base.css                  # Base element styles
│   ├── components/                   # 17 UI components
│   │   ├── button.css
│   │   ├── card.css
│   │   ├── navigation.css
│   │   ├── form.css
│   │   ├── hero.css
│   │   ├── indicators.css
│   │   ├── scroll-progress.css
│   │   ├── settings-panel.css
│   │   ├── themed-images.css
│   │   ├── modal.css
│   │   ├── tooltip.css
│   │   ├── accordion.css
│   │   ├── alert.css
│   │   ├── table.css
│   │   ├── avatar.css
│   │   ├── loading.css
│   │   └── dropdown.css
│   ├── layouts/                      # Layout utilities
│   │   ├── flex.css                  # Flexbox utilities
│   │   ├── grid.css                  # Grid utilities
│   │   ├── patterns.css              # Common layouts (sidebar, etc.)
│   │   └── positioning.css           # Position, z-index, overflow
│   └── animations/
│       └── scroll-reveal.css         # Scroll-triggered animations
│
├── examples/                         # Demo pages
│   ├── foundation.html               # All HTML elements showcase
│   ├── components.html               # All 17 components gallery
│   ├── layout-examples.html          # Layout patterns demo
│   ├── motion-comparison.html        # Compare all 7 motion styles
│   ├── preset-comparison.html        # Compare all presets
│   ├── dark-mode-demo.html           # Dark mode showcase
│   └── scroll-reveal-demo.html       # Scroll animations
│
├── templates/                        # Page templates
│   ├── dashboard.html
│   ├── landing.html
│   ├── blog.html
│   └── ... (9 total templates)
│
├── assets/                           # Images and media
│
├── index.html                        # Homepage (preset grid)
├── customizer.html                   # Interactive theme builder
├── package.json                      # npm metadata (no dependencies)
├── _config.yml                       # Jekyll configuration
├── README.md                         # Project overview
└── CLAUDE.md                         # Claude AI agent instructions
```

### Key Files to Know

| File | Purpose | When to Edit |
|------|---------|--------------|
| `src/fluid.css` | Main entry point, imports all CSS | When adding new CSS files |
| `src/core/tokens.css` | Design tokens, color palettes, motion styles | When adding colors or motion |
| `_includes/scripts.html` | Theme switching JavaScript | When changing theme behavior |
| `_config.yml` | Jekyll config, version number | Version updates (auto via workflow) |
| `package.json` | npm metadata, version | Version updates (auto via workflow) |
| `CLAUDE.md` | Instructions for Claude AI | When updating AI guidance |
| `_docs/DEVELOPMENT.md` | **THE MASTER GUIDE** | Major philosophy changes |

## Core Design Principles

**Always follow these when making changes:**

1. **Semantic HTML First** — Use `<article class="card">` not `<div class="flex p-4">`
2. **CSS Custom Properties for Everything** — Use `var(--space-5)` not hardcoded `1.5rem`
3. **Logical Properties** — Use `margin-block`, `padding-inline` (not `-top`, `-left`)
4. **No Build Step** — Must work directly in browsers
5. **Progressive Enhancement** — Works without JavaScript, enhances with it
6. **Physics-based Motion** — Animation timings derived from Reynolds numbers
7. **Complete Presets** — Each preset changes typography, colors, motion, AND layout
8. **Deep Dark Mode** — Use palette colors in dark mode, not just black

## CSS Conventions

### Token Usage
- **Spacing:** `var(--space-1)` through `var(--space-12)` (0.25rem to 6rem)
- **Typography:** `var(--font-body)`, `var(--font-heading)`, `var(--size-1)` through `var(--size-12)`
- **Colors:** `var(--color-bg)`, `var(--color-text)`, `var(--color-accent)`, etc.
- **Motion:** `var(--duration-instant)` through `var(--duration-epic)`, `var(--ease-standard)`

### Layer Placement
```css
/* Always specify @layer for new styles */
@layer components {
  .my-component { /* ... */ }
}
```

### Naming Conventions
- **Components:** BEM-style — `.card`, `.card__title`, `.card--highlighted`
- **Utilities:** Descriptive — `.flex-row`, `.grid-3`, `.sticky-top`
- **States:** Pseudo-classes — `:hover`, `:focus-visible`, `:active`

## Making Changes

### Adding a New Component
1. Create `src/components/my-component.css`
2. Use `@layer components { }` wrapper
3. Import in `src/fluid.css`
4. Create example in `examples/components.html`
5. Document in `_docs/reference/components.md`
6. Test all 7 motion styles and 10 palettes

### Modifying Existing Styles
1. Find the file in `src/`
2. Use existing tokens (don't hardcode values)
3. Test in both light and dark modes
4. Check `prefers-reduced-motion` behavior
5. Validate on Chrome, Firefox, Safari

### Adding Documentation
1. Create/edit markdown in `_docs/`
2. Update `_docs/_start-here.md` index if adding new doc
3. Use clear examples with code blocks
4. Include visual descriptions for components

## Common Pitfalls

- **Don't hardcode colors or sizes** — Use CSS Custom Properties from `tokens.css`
- **Don't break the layer order** — Always use `@layer` and maintain sequence
- **Don't add build tools** — Framework must work without compilation
- **Don't use utility classes in examples** — Semantic HTML is the selling point
- **Don't forget dark mode** — Test every visual change in both modes
- **Don't ignore reduced motion** — Use `@media (prefers-reduced-motion: reduce)`

## Version Management

**DO NOT manually edit version numbers** in `_config.yml`, `package.json`, or `src/fluid.css`. The GitHub Action workflow handles this automatically on merge to `main`.

## Testing Checklist

When making changes, validate:
- [ ] Runs on `npm run serve` without errors
- [ ] Looks correct in light mode
- [ ] Looks correct in dark mode
- [ ] Works with `prefers-reduced-motion`
- [ ] All 7 motion styles work correctly
- [ ] All 10 color palettes work correctly
- [ ] Component is responsive (mobile, tablet, desktop)
- [ ] Semantic HTML is used (no utility class soup)
- [ ] CSS tokens are used (no hardcoded values)

## Important Context

### Why This Framework Exists
Fluid Framework proves that modern CSS can replace utility-class frameworks like Tailwind while providing:
- Better developer experience (semantic HTML)
- Runtime flexibility (CSS Custom Properties)
- Scientific foundation (physics-based animations)
- Zero build complexity (works directly in browsers)

Read `_docs/DEVELOPMENT.md` for the full philosophy and rationale.

### What Makes It Different
- **Physics-based motion system** — 7 styles derived from Reynolds numbers (still, serene, stream, flowing, cascade, rapids, tsunami)
- **Complete presets** — Not just color swaps; each preset changes fonts, colors, motion, and layout
- **OKLCH color system** — Modern color space with `color-mix()` for derived shades
- **No JavaScript required** — All interactivity works with CSS `:hover`, `:focus`, etc.

## Troubleshooting

### Common Issues

**Server won't start on port 8080:**
```bash
# Kill existing process
lsof -ti:8080 | xargs kill -9
# Or use a different port
npx http-server . -o /index.html -p 8081
```

**CSS changes not showing:**
- Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
- Check browser console for 404 errors
- Verify file is imported in `src/fluid.css`

**Dark mode not working:**
- Check `data-theme="dark"` attribute on `<body>`
- Verify component uses semantic color tokens (not hardcoded colors)
- Test in Settings Panel on any example page

**Animation not showing:**
- Check `data-motion` attribute value (still, serene, stream, flowing, cascade, rapids, tsunami)
- Test with different motion styles via Settings Panel
- Verify `@media (prefers-reduced-motion)` handling

**Jekyll frontmatter errors:**
- Ensure three dashes `---` at start and end
- Check YAML syntax (indentation, colons, quotes)
- Validate in `_config.yml` for site-wide settings

## Getting Help

### Documentation Resources
- **[_docs/DEVELOPMENT.md](_docs/DEVELOPMENT.md)** — The master guide (read first!)
- **[_docs/_start-here.md](_docs/_start-here.md)** — Documentation index
- **[_docs/architecture.md](_docs/architecture.md)** — Technical decisions and rationale
- **[_docs/reference/components.md](_docs/reference/components.md)** — All 17 components API
- **[_docs/reference/tokens.md](_docs/reference/tokens.md)** — Design token reference
- **[CLAUDE.md](CLAUDE.md)** — Quick reference for AI agents
- **[README.md](README.md)** — Project overview and quick start

### Live Examples
- **[Homepage](https://thefluidtheme.com)** — Interactive preset grid
- **[Components Gallery](https://thefluidtheme.com/examples/components.html)** — All 17 components
- **[Foundation](https://thefluidtheme.com/examples/foundation.html)** — All HTML elements
- **[Templates](https://thefluidtheme.com/templates/)** — 9 page templates

### For Contributors
- **[_docs/contributing.md](_docs/contributing.md)** — Contribution guidelines
- **[_docs/future-features.md](_docs/future-features.md)** — Roadmap and planned features

## Code Examples

### Adding a Custom Color to a Preset

```css
/* In src/core/tokens.css, find the preset section */
@layer tokens {
  [data-palette="fluid"] {
    --color-accent-custom: oklch(65% 0.19 200);
  }
}

/* Use in components */
@layer components {
  .my-component {
    background: var(--color-accent-custom);
  }
}
```

### Creating a New Animation

```css
/* In src/animations/ or component file */
@layer components {
  @keyframes slide-in {
    from { 
      opacity: 0; 
      transform: translateX(-2rem); 
    }
    to { 
      opacity: 1; 
      transform: translateX(0); 
    }
  }

  .animated-element {
    animation: slide-in var(--duration-moderate) var(--ease-standard);
  }

  /* Always handle reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .animated-element {
      animation: none;
    }
  }
}
```

### Adding a Component Variant

```css
/* In component file, use data attributes for variants */
@layer components {
  .card {
    /* Base styles */
    background: var(--color-bg-surface);
    border-radius: var(--radius-md);
    padding: var(--space-5);
  }

  .card[data-variant="elevated"] {
    box-shadow: var(--shadow-md);
  }

  .card[data-variant="outlined"] {
    border: 1px solid var(--color-border);
    box-shadow: none;
  }
}
```

### Using the Component in HTML

```html
<!-- Semantic HTML with data attributes -->
<article class="card" data-variant="elevated">
  <h3 class="card__title">Title</h3>
  <p class="card__description">Description</p>
</article>
```

## Trust These Instructions

The information in this file has been carefully validated. Only search for additional information if:
- These instructions are incomplete for your specific task
- You find an error or inconsistency
- The repository structure has changed significantly

Otherwise, follow these guidelines to work efficiently in this codebase.
