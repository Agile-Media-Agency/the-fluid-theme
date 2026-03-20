# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.3] - 2026-03-20

### Added
- **Section components** (6): features, testimonials, CTA, footer, team, stats
- **Version badge component**: fixed-position version display, toggled via `data-show-version`
- **Page templates** (8): blog post, SaaS landing, agency landing, product landing, login, register, dashboard, search results
- **Integration guides**: React/Next.js, Vue/Nuxt, Svelte/SvelteKit
- **Migration guides**: Bootstrap, Tailwind
- **Documentation**: installation, first-component tutorial, theming guide, layout guide
- **GitHub infrastructure**: CI workflow, release workflow, issue templates, PR template, contributing guide, code of conduct
- New components: empty state, steps, search input, chip

### Fixed
- Contact form validation with `aria-invalid`, `.form-error`, and submission feedback
- All critical UX audit items resolved (17 critical, 25 warnings addressed)
- Remaining physical properties converted to logical properties
- Token consistency across all components
- Deep accessibility improvements — focus management, landmarks, motion safety
- Print styles, dark mode shadows, switch documentation
- Destructive modal specificity (action-specific labels)
- Responsive tables with `data-responsive` + `td[data-label]`
- `prefers-reduced-motion` in button, card, nav components
- Hardcoded color overrides replaced with token-based values
- Browser support requirements documentation

## [0.3.2] - 2026-03-15

### Added
- Badge component
- Scroll reveal animations
- Layout positioning utilities (flex, grid, sidebar, holy grail, dashboard)
- Container query support throughout components

### Fixed
- Dark mode uses deep palette colors instead of black
- Subdued contrast mode with proper muted palettes
- Fluid typography scaling

## [0.3.0] - 2026-03-14

### Added
- 17 UI components (buttons, cards, nav, forms, heroes, indicators, settings panel, scroll progress, themed images, modal, tooltip, accordion, alert, table, avatar, loading, dropdown)
- 10 color palettes with 6 accent colors each
- 7 physics-based motion styles
- CSS layer architecture
- Dark mode, light mode, auto mode, subdued contrast
- OKLCH color system with color-mix()

[0.3.3]: https://github.com/Agile-Media-Agency/the-fluid-theme/compare/v0.3.2...v0.3.3
[0.3.2]: https://github.com/Agile-Media-Agency/the-fluid-theme/compare/v0.3.0...v0.3.2
[0.3.0]: https://github.com/Agile-Media-Agency/the-fluid-theme/releases/tag/v0.3.0
