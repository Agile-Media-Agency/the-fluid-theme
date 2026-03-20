# Gemini Instructions — The Fluid Theme

You are working with **The Fluid Theme**, a semantic CSS design system built on physics principles.

## Read These First

1. `fluid-agent-kit/skills/css-conventions.md` — CSS rules and token system
2. `fluid-agent-kit/skills/accessibility.md` — Accessibility standards
3. `fluid-agent-kit/skills/ux-rules.md` — UX behavioral rules
4. `fluid-agent-kit/skills/image-optimization.md` — Image best practices

## Core Rules

### CSS
- Layer order: `@layer reset, tokens, base, layouts, components, themes, utilities;`
- All values from design tokens: `var(--space-4)` not `16px`
- Logical properties only: `margin-block-start` not `margin-top`
- Variants via data attributes: `data-variant="danger"` not `.btn--danger`
- Components in `@layer components { }`

### HTML
- Semantic elements: `<article class="card">` not `<div class="flex flex-col">`
- Native `<dialog>` for modals (automatic focus trapping via `.showModal()`)
- Every `<img>` needs `alt`, `width`, `height`
- `loading="lazy"` on all below-fold images
- Use `data-focus` for image focal points, `data-aspect` for aspect ratios

### Accessibility (Non-Negotiable)
- Never remove `:focus-visible` outlines
- `prefers-reduced-motion: reduce` in every animated component
- 44x44px minimum touch targets
- Color alone never conveys information

### UX Behavior
- Destructive actions require confirmation modals
- Every action produces visible feedback
- Specific button labels only ("Save Changes" not "Submit")
- Validate forms on blur, then keystroke after first error

## Documentation

- `_docs/DEVELOPMENT.md` — Master guide
- `_docs/UX-BEHAVIOR-SPEC.md` — Full UX specification
- `_docs/images-guide.md` — Image optimization guide
- `_docs/reference/components.md` — Component API
- `_docs/reference/tokens.md` — Token reference

## Version: 0.4.0
