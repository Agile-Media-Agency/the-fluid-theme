# Fluid Theme — CSS Conventions

When writing CSS for this framework, follow these rules exactly.

## Layer Order (never violate)
```css
@layer reset, tokens, base, layouts, components, themes, utilities;
```

## Required Patterns
- All values from tokens: `var(--space-4)` not `16px`, `var(--color-text)` not `#333`
- Logical properties only: `margin-block-start` not `margin-top`, `inline-size` not `width`
- Data attributes for variants: `data-variant="danger"` not `.btn--danger`
- Component-scoped private properties: `--_card-padding` prefix with underscore
- All components in `@layer components { }`
- All section styles in `@layer components { }`

## Required Sections in Every Component CSS File
```css
/* 1. Header comment with Usage examples */
/* 2. Base component styles */
/* 3. Variants via data attributes */
/* 4. Sizes via data-size */
/* 5. Motion preset awareness: [data-motion="still"] .component { transition: none; } */
/* 6. Responsive: @media (max-width: 40rem) { } */
/* 7. Reduced motion: @media (prefers-reduced-motion: reduce) { } */
```

## Component File Location
- Components: `src/components/[name].css`
- Sections: `src/sections/[name].css`
- After creating, add `@import` to `src/fluid.css`

## Token Categories
- Spacing: `--space-0` through `--space-24`
- Typography: `--font-size-xs` through `--font-size-5xl`
- Colors: `--color-text`, `--color-surface`, `--accent`, `--color-success/warning/error/info`
- Borders: `--radius-sm` through `--radius-full`, `--border-width`
- Shadows: `--shadow-xs` through `--shadow-xl`
- Motion: `--duration-instant` through `--duration-slowest`

## Never Do
- `padding: 16px` (use token)
- `margin-top: 1rem` (use logical property)
- `.card--elevated` (use `data-variant="elevated"`)
- `:focus { outline: none }` (never remove focus outlines)
- vendor prefixes (modern browsers only)
