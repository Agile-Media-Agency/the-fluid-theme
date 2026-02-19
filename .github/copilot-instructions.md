# Copilot Instructions for The Fluid Theme Framework

## Repository Overview

**The Fluid Theme Framework** is a modern, semantic CSS design system built on physics principles (fluid dynamics) rather than utility classes. It's a demonstration that modern CSS can replace frameworks like Tailwind/Bootstrap while providing better developer experience and runtime flexibility.

**Key characteristics:**
- **No build step required** — Pure CSS, works directly in browsers
- **Runtime theming** — CSS Custom Properties enable instant theme changes
- **Physics-based animations** — Motion styles derived from Reynolds numbers (fluid dynamics)
- **Semantic HTML** — No utility class soup (`<article class="card">` not `<div class="flex flex-col p-4">`)
- **18 UI components** with full dark mode and accessibility support
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
   - `http://localhost:8080/examples/components.html` — All 18 components
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
3. Test motion presets (8 water + 3 signature = 11 total, via settings panel)
4. Test all 13 color palettes (via settings panel)
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
│   │   ├── components.md             # All 18 components API
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
│   ├── components/                   # 18 UI components
│   │   ├── button.css
│   │   ├── card.css
│   │   ├── nav.css
│   │   ├── form.css
│   │   ├── hero.css
│   │   ├── indicator.css
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
│   │   ├── dropdown.css
│   │   └── badge.css
│   ├── layouts/                      # Layout utilities
│   │   └── positioning.css           # All layout: position, flex, grid, patterns
│   └── animations/
│       └── scroll-reveal.css         # Scroll-triggered animations
│
├── examples/                         # Demo pages
│   ├── foundation.html               # All HTML elements showcase
│   ├── components.html               # All 18 components gallery
│   ├── heroes.html                   # Hero section variants
│   ├── hero-picker.html              # Interactive hero builder
│   ├── indicators.html               # Status indicators demo
│   ├── philosophy.html               # Design philosophy page
│   └── positioning.html              # Layout/positioning demo
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
- **Typography:** `var(--font-body)`, `var(--font-heading)`, `var(--font-size-xs)` through `var(--font-size-5xl)`
- **Colors:** `var(--color-background)`, `var(--color-text)`, `var(--accent)`, `var(--color-surface)`, etc.
- **Motion:** `var(--duration-instant)` through `var(--duration-slowest)`, `var(--ease-default)`, `var(--ease-fluid)`

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
6. Test all 11 presets and 13 palettes

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
- [ ] All 11 presets work correctly (8 water + 3 signature)
- [ ] All 13 color palettes work correctly
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
- **Physics-based motion system** — 8 water presets (still, serene, trickling, stream, flowing, cascade, rapids, tsunami) + 3 signature presets (brutalist, editorial, neon)
- **Complete presets** — Not just color swaps; each preset changes fonts, colors, motion, layout, shadows, borders, and typography rhythm
- **OKLCH color system** — Modern color space with `color-mix()` for derived shades
- **No JavaScript required** — All interactivity works with CSS `:hover`, `:focus`, etc.

## Additional References

For the full design philosophy, architecture decisions, and development workflow:
- Read `_docs/DEVELOPMENT.md` — the authoritative master guide
- Read `CLAUDE.md` — quick reference with current focus areas
- Read `_docs/_start-here.md` — full documentation index

When in doubt, check the actual source files. Token names and file paths
in this document may drift as the framework evolves.
