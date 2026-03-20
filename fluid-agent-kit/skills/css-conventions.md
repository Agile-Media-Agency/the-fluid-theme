# Fluid Theme — CSS Conventions

When writing or modifying CSS for a site built with The Fluid Theme, follow these rules.

## Layer Order (never violate)

```css
@layer reset, tokens, base, layouts, components, themes, utilities;
```

## Required Patterns

- **All values from tokens**: `var(--space-4)` not `16px`, `var(--color-text)` not `#333`
- **Logical properties only**: `margin-block-start` not `margin-top`, `inline-size` not `width`
- **Data attributes for variants**: `data-variant="danger"` not `.btn--danger`
- **Component-scoped private properties**: prefix with underscore `--_card-padding`
- **All components** wrapped in `@layer components { }`

## Token Quick Reference

| Category | Examples |
|----------|---------|
| Spacing | `--space-0` through `--space-24` |
| Typography | `--font-size-xs` through `--font-size-5xl` |
| Colors | `--color-text`, `--color-surface`, `--accent`, `--color-success/warning/error/info` |
| Borders | `--radius-sm` through `--radius-full`, `--border-width` |
| Shadows | `--shadow-xs` through `--shadow-xl` |
| Motion | `--duration-instant` through `--duration-slowest` |

## Component File Pattern

Every component CSS file should include:
1. Header comment with usage examples
2. Base styles
3. Variants via `data-*` attributes
4. Responsive behavior (container queries preferred over media queries)
5. Reduced motion: `@media (prefers-reduced-motion: reduce) { }`

## File Locations

- Components: `src/components/[name].css`
- Sections: `src/sections/[name].css`
- After creating a new component, add `@import` to `src/fluid.css`

## Never Do

- `padding: 16px` — use a token
- `margin-top: 1rem` — use logical property (`margin-block-start`)
- `.card--elevated` — use `data-variant="elevated"`
- `:focus { outline: none }` — never remove focus outlines
- Vendor prefixes — modern browsers only
