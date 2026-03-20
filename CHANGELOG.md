# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.5] - 2026-03-20

### Fixed
- **`--color-primary` phantom token**: replaced 40+ references across 8 HTML files with `--accent` — all were rendering nothing
- **Duplicate `<main>` in dashboard.html**: changed inner `<main>` to `<div role="region">`
- **Missing `prefers-reduced-motion`** in `form.css` (6 transitions) and `themed-images.css` (2 transitions)
- **`outline: none` in reset.css**: changed to `outline: 2px solid transparent` for high-contrast mode
- **`--gray-12` typo in footer.css**: token doesn't exist, changed to `--gray-15`
- **Duplicate `.progress__track` selector** in indicator.css: merged into single rule
- **Dead `max-inline-size` rule** in footer.css `.site-footer__brand`: removed duplicate
- **Print styles**: now hide all `.nav` (not just sticky), use token for `pre/code` background
- **Missing `<h1>` in search-results.html**: added heading
- **Generic `alt="Team member"`** on about.html: changed to actual names
- **Documentation phantom API**: `tokens.md` documented non-existent `--color-primary` family, changed to `--accent`
- **Stale documentation**: getting-started (v0.3.2, 17 components, 9 templates, old repo URL), _start-here (v0.3.2, 17/16), README (17/9), installation (17) — all corrected to v0.3.5 / 23 / 18

### Added
- **Pre-release audit report** (`_docs/PRE-RELEASE-AUDIT.md`): 13-phase comprehensive audit covering CSS validity, browser compat, accessibility, HTML validation, token consistency, responsive, dark mode, print, documentation, npm readiness, cross-file consistency, security, performance

## [0.3.4] - 2026-03-20

### Added
- **Version badge** documented in components reference
- **Claude Code skills**: CSS conventions, UX rules, accessibility, Agile Kit reference
- **Lint script** for convention checking (`.claude/scripts/lint-conventions.sh`)

### Fixed
- All `outline: none` violations replaced with `outline: 2px solid transparent` for high-contrast mode accessibility (7 files)
- Added `prefers-reduced-motion` handling to `base.css` progress bar animation
- UX audit report updated — all 17 critical items now marked as resolved
- Footer consistency: added missing footer to blog-post, dashboard, login, register, search-results templates
- Hero consistency: added missing `data-size="full"` to services.html hero
- Landing page version badges now use `{{ site.version }}` instead of hardcoded values

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

[0.3.5]: https://github.com/Agile-Media-Agency/the-fluid-theme/compare/v0.3.4...v0.3.5
[0.3.4]: https://github.com/Agile-Media-Agency/the-fluid-theme/compare/v0.3.3...v0.3.4
[0.3.3]: https://github.com/Agile-Media-Agency/the-fluid-theme/compare/v0.3.2...v0.3.3
[0.3.2]: https://github.com/Agile-Media-Agency/the-fluid-theme/compare/v0.3.0...v0.3.2
[0.3.0]: https://github.com/Agile-Media-Agency/the-fluid-theme/releases/tag/v0.3.0
