# CLAUDE.md

> **Fluid Framework** — A modern, semantic CSS design system built on physics principles, not utility classes.

## Required Reading

**Before making ANY changes, read:**
- [**DEVELOPMENT.md**](_docs/DEVELOPMENT.md) — The master guide. Why we built this, core principles, development practices.
- [_docs/_start-here.md](_docs/_start-here.md) — Full documentation index

---

## What This Is

A CSS framework that proves modern CSS can replace the utility-class approach of Tailwind/Bootstrap:

- **Semantic HTML** over `<div class="flex flex-col p-4">` soup
- **CSS Custom Properties** for runtime theming (no rebuild needed)
- **Complete presets** that change typography, colors, motion, AND layout—not just accent colors
- **Dark mode uses deep palette colors**, not just black
- **No build step** — link one CSS file and go

---

## Quick Reference

```bash
npm run serve    # Open examples in browser at localhost:8080
```

## Core Principles

1. **Semantic HTML** - Use meaningful elements, not div soup
2. **CSS Custom Properties** - All values via tokens (`var(--space-5)`)
3. **Logical Properties** - `margin-block`, `padding-inline` (not `-top`, `-left`)
4. **No Build Step** - Works directly in browsers
5. **Progressive Enhancement** - Works without JavaScript
6. **Presets are complete experiences** - Not just color swaps

## Layer Order

```css
@layer reset, tokens, base, layouts, components, themes, utilities;
```

## Key Files

| File | Purpose |
|------|---------|
| `src/fluid.css` | Main entry point |
| `src/core/tokens.css` | Design tokens, palettes, presets |
| `_includes/scripts.html` | Theme switching JavaScript |
| `index.html` | Homepage with preset grid |
| `examples/foundation.html` | Element showcase |
| `examples/components.html` | Component gallery (18 components) |

## Current Focus

**Perfect the default `flowing` preset first**, then propagate fixes to other presets:

- [x] Dark mode: Use deep palette colors, not black
- [x] Subdued contrast: Needs proper muted palettes
- [x] Each preset should feel completely different
- [x] Fluid typography that scales proportionally

---

## Documentation Index

| Document | What It Covers |
|----------|----------------|
| [DEVELOPMENT.md](_docs/DEVELOPMENT.md) | Master guide — read first |
| [architecture.md](_docs/architecture.md) | Technical decisions |
| [future-features.md](_docs/future-features.md) | Planned features |
| [reference/tokens.md](_docs/reference/tokens.md) | Design token reference |
| [reference/components.md](_docs/reference/components.md) | Component API |

---

**Full documentation:** [_docs/_start-here.md](_docs/_start-here.md)
