# CLAUDE.md

> **Fluid Framework** — A modern, semantic CSS design system built on physics principles, not utility classes.

## Before Doing Anything

1. Read `fluid-agent-kit/skills/` — 4 skill files covering CSS conventions, UX rules, accessibility, and image optimization
2. Read `_docs/DEVELOPMENT.md` — master development guide
3. Read `_docs/UX-BEHAVIOR-SPEC.md` — 18-section behavioral specification (skim first, deep-read relevant sections)

## Quick Reference

```bash
npm run serve    # Open examples in browser at localhost:8080
```

## What This Is

A CSS framework that proves modern CSS can replace the utility-class approach of Tailwind/Bootstrap:

- **Semantic HTML** over `<div class="flex flex-col p-4">` soup
- **CSS Custom Properties** for runtime theming (no rebuild needed)
- **Complete presets** that change typography, colors, motion, AND layout
- **Dark mode uses deep palette colors**, not just black
- **No build step** — link one CSS file and go

## Core Principles

1. **Semantic HTML** — Use meaningful elements, not div soup
2. **CSS Custom Properties** — All values via tokens (`var(--space-5)`)
3. **Logical Properties** — `margin-block`, `padding-inline` (not `-top`, `-left`)
4. **No Build Step** — Works directly in browsers
5. **Progressive Enhancement** — Works without JavaScript
6. **Presets are complete experiences** — Not just color swaps
7. **Accessibility is non-negotiable** — Connected to disabled and autism communities

## Layer Order

```css
@layer reset, tokens, base, layouts, components, themes, utilities;
```

## Key Files

| File | Purpose |
|------|---------|
| `src/fluid.css` | Main entry point (imports everything) |
| `src/core/tokens.css` | Design tokens, palettes, presets |
| `src/components/` | 23 component CSS files |
| `src/sections/` | 6 section CSS files |
| `templates/` | 18 HTML templates |
| `examples/` | Live component demos |
| `_docs/UX-BEHAVIOR-SPEC.md` | UX behavioral rules (18 sections) |
| `_docs/images-guide.md` | Image optimization best practices |
| `fluid-agent-kit/` | AI agent skills and conventions |

## The Fluid Agent Kit

This project includes the **Fluid Agent Kit** (`fluid-agent-kit/`) with skill files for AI coding assistants. See `fluid-agent-kit/README.md` for details.

**Available skills:**
- `fluid-agent-kit/skills/css-conventions.md` — Layer order, tokens, logical properties
- `fluid-agent-kit/skills/ux-rules.md` — 12 behavioral rules for interactive components
- `fluid-agent-kit/skills/accessibility.md` — HTML, keyboard, motion, color standards
- `fluid-agent-kit/skills/image-optimization.md` — Responsive images, lazy loading, focal points

## UX Behavior Spec

Full spec at `_docs/UX-BEHAVIOR-SPEC.md`. Quick reference at `fluid-agent-kit/skills/ux-rules.md`.

**The non-negotiables:**
- Every destructive action requires a confirmation modal with specific title and consequence body
- Every user action requires visible feedback (toast, alert, or state change)
- Every button requires a specific label ("Save Changes" not "Submit")
- Every pattern must be consistent across all screens (search and update all instances)
- Every interactive element must be keyboard accessible with visible focus
- Every animation must respect `prefers-reduced-motion`

## Image Optimization

Full guide at `_docs/images-guide.md`. Quick reference at `fluid-agent-kit/skills/image-optimization.md`.

**The non-negotiables:**
- Every `<img>` must have `width` and `height` attributes (prevents CLS)
- Every below-fold image must have `loading="lazy"`
- Every image must have meaningful `alt` text
- Use `data-focus` for focal point control on hero backgrounds and card media
- Use `data-aspect` for consistent aspect ratios on card media
- Serve modern formats (WebP/AVIF) with `<picture>` fallbacks

## Documentation

| Document | What It Covers |
|----------|----------------|
| [DEVELOPMENT.md](_docs/DEVELOPMENT.md) | Master guide — read first |
| [UX-BEHAVIOR-SPEC.md](_docs/UX-BEHAVIOR-SPEC.md) | Behavioral rules — 18 sections |
| [images-guide.md](_docs/images-guide.md) | Image optimization best practices |
| [architecture.md](_docs/architecture.md) | Technical decisions |
| [reference/components.md](_docs/reference/components.md) | Component API |
| [reference/tokens.md](_docs/reference/tokens.md) | Design token reference |

## Version

**Current: 0.6.0** — Update in package.json, PROJECT_STATUS.md, CHANGELOG.md, _config.yml, and version badges on every session that modifies files.
