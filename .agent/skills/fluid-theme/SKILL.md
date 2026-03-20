# Fluid Theme Skill

Reference knowledge for the Fluid Framework CSS design system.

**Version:** 0.3.3

## Architecture

```
@layer reset, tokens, base, layouts, components, themes, utilities;
```

Entry point: `src/fluid.css`

## Component Quick Reference (23 + 6 sections)

### Core Components

| Component | File | Key Classes | Variants |
|-----------|------|-------------|----------|
| Button | `button.css` | `.button` | `data-variant`: primary, secondary, outline, ghost, danger. `data-size`: xs, sm, base, lg, xl |
| Card | `card.css` | `.card`, `.card__content`, `.card__media`, `.card__title` | `data-variant`: elevated, outlined. `data-type`: profile, stat, feature, testimonial, pricing |
| Navigation | `nav.css` | `.nav`, `.nav__item`, `.breadcrumb`, `.pagination` | Tabs, breadcrumbs (mobile collapse), pagination |
| Form | `form.css` | `.form-group`, `.form-label`, `.checkbox`, `.switch` | `aria-invalid="true"` for errors, `.form-error` |
| Hero | `hero.css` | `.hero`, `.hero__headline`, `.hero__content`, `.hero__media` | `data-size`: compact, full. `data-layout`: center, split |
| Modal | `modal.css` | `<dialog>`, `.modal__header`, `.modal__body`, `.modal__footer` | `data-size`: sm, lg, full. `[data-destructive]` |
| Tooltip | `tooltip.css` | `[data-tooltip]`, `[popover]` | `data-position`: top, bottom, left, right |
| Accordion | `accordion.css` | `<details>`, `<summary>` | `data-variant`: bordered, separated, flush |
| Alert | `alert.css` | `.alert`, `.toast` | `data-status`: info, good, warning, error. `data-variant`: subtle, filled, outline. `.toast__action` |
| Table | `table.css` | `.table-wrap`, `.table` | `data-responsive`, `td[data-label]`, striped, bordered, compact |
| Avatar | `avatar.css` | `.avatar` | `avatar--xs` through `avatar--xl`, status indicators, groups |
| Loading | `loading.css` | `.spinner`, `.skeleton` | Spinner sizes, dots, skeleton cards |
| Dropdown | `dropdown.css` | `.dropdown`, `.dropdown__item` | `data-position`, `data-danger` items |
| Badge | `badge.css` | `.badge` | `data-variant`: filled, subtle, outline. `data-status` colors |
| Empty State | `empty-state.css` | `.empty-state` | Size variants |
| Step Indicator | `step-indicator.css` | `.steps`, `.step` | Horizontal, vertical, size variants |
| Search Input | `search-input.css` | `.search-input` | Clear button |
| Chip | `chip.css` | `.chip` | Dismissable, variants |
| Version Badge | `version-badge.css` | `.version-badge` | Shows via `[data-show-version="true"]` on `<html>` |

### Section Components

| Section | File | Variants |
|---------|------|----------|
| Features | `sections/features.css` | `data-type`: grid (default), alternating, showcase, comparison |
| Testimonials | `sections/testimonials.css` | `data-type`: single (default), grid, logos |
| CTA | `sections/cta.css` | `data-type`: banner (default), split, newsletter, download. `[data-accent]` |
| Footer | `sections/footer.css` | `data-type`: simple (default), standard, mega. `[data-dark]` |
| Team | `sections/team.css` | Grid of `.team-member` cards |
| Stats | `sections/stats.css` | `data-variant`: default cards, borderless, divider. `[data-animate]` |

## Design Tokens

- Spacing: `--space-0` through `--space-24` (Fibonacci-inspired)
- Typography: `--font-size-xs` through `--font-size-5xl` (fluid clamp)
- Colors: `--color-text`, `--color-text-muted`, `--color-surface`, `--accent`
- Borders: `--radius-sm` through `--radius-full`, `--border-width`
- Shadows: `--shadow-xs` through `--shadow-xl`
- Motion: `--duration-instant` through `--duration-slowest`
- Z-index: `--z-base` through `--z-max`

## Template List (18)

index, about, services, contact, blog, blog-post, gallery, pricing, faq, 404, 500, landing-saas, landing-agency, landing-product, login, register, dashboard, search-results

## Conventions

1. **Logical properties only** — `margin-block-start`, not `margin-top`
2. **Design tokens only** — `var(--space-4)`, not `16px`
3. **`@layer components`** for all component/section styles
4. **Data attributes** for variants — `data-variant`, `data-size`, `data-type`
5. **`prefers-reduced-motion`** in every animated component
6. **Semantic HTML** — `<article>`, `<section>`, `<nav>`, `<dialog>`, `<details>`
7. **No build step** — works directly in browsers
