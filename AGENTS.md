# AI Agent Instructions

This project uses **The Fluid Theme** — a semantic CSS design system. If you are an AI coding assistant, read the following files to understand project conventions:

## Essential Reading

1. **`fluid-agent-kit/skills/css-conventions.md`** — CSS layer order, design tokens, logical properties, data attributes
2. **`fluid-agent-kit/skills/accessibility.md`** — Non-negotiable accessibility standards
3. **`fluid-agent-kit/skills/ux-rules.md`** — 12 behavioral rules for interactive components
4. **`fluid-agent-kit/skills/image-optimization.md`** — Responsive images, lazy loading, focal points

## Key Rules

- Use **semantic HTML** with data attributes — not utility classes
- Use **CSS custom properties** (tokens) for all values — never hardcode `16px` or `#333`
- Use **logical properties** — `margin-block-start` not `margin-top`
- Use **`<dialog>`** for modals — not `<div role="dialog">`
- **Never remove focus outlines** — restyle if needed
- **Respect `prefers-reduced-motion`** in all animations
- Every `<img>` needs `alt`, `width`, `height`, and `loading="lazy"` (except above-fold)

## Full Documentation

- `_docs/DEVELOPMENT.md` — Master development guide
- `_docs/UX-BEHAVIOR-SPEC.md` — Complete UX specification (18 sections)
- `_docs/images-guide.md` — Image optimization guide
- `_docs/reference/components.md` — Component API reference
- `_docs/reference/tokens.md` — Design token reference

## Framework Version

0.4.0
