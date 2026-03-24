# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.6] - 2026-03-24

### Added
- **Accessibility audit** (`_docs/ACCESSIBILITY-AUDIT.md`) — axe-core WCAG 2.1 AA audit across Foundation, Components, and Homepage; 0 critical violations

### Fixed
- Loading spinners: added `role="status"` to all `.spinner` and `.spinner-dots` elements (required for `aria-label` on non-semantic elements)
- Card ratings: added `role="img"` to `.card__rating` elements (required for `aria-label`)
- Interactive card demo: removed invalid `role="button"` from `<article>` element
- Updated `loading.css` usage comment to show correct `role="status"` pattern

## [0.4.5] - 2026-03-24

### Added
- **React starter kit** (`starters/react/`) — Vite + React 18 starter with live theming demo, drives `data-*` attributes via React state, includes Next.js instructions in README

## [0.4.4] - 2026-03-24

### Added
- **HTML starter kit** (`starters/html/`) — self-contained CDN-based starter, zero build step, includes nav, hero, features grid, contact form, footer, and full README

## [0.4.3] - 2026-03-24

### Added
- **First public npm publish** — `@fluid-theme/core@0.4.3` is now live on the npm registry
- **CDN links active** — jsDelivr and unpkg now serve the package automatically
- npm account `agilemediaagency` created with `@fluid-theme` organization

### Changed
- Author email added to `package.json`


## [0.4.2] - 2026-03-21

### Added
- **npm package** configured as `@fluid-theme/core` (scoped, leaving room for `@fluid-theme/react`, `@fluid-theme/vue`, etc.)
- **CSS build pipeline**: `npm run build` bundles all `@import` statements and minifies to `dist/fluid.min.css` via lightningcss
- **`dist/fluid.min.css`**: production-ready minified build (196 kB) for CDN and npm consumers
- **CDN links**: jsDelivr and unpkg will serve the minified build automatically once published
- **Package exports**: `@fluid-theme/core` resolves to minified build; `@fluid-theme/core/src` gives access to raw source
- **`PUBLISHING.md`**: step-by-step guide for completing the npm publish (create account, create org, login, publish)

### Changed
- Package renamed from `the-fluid-theme` → `@fluid-theme/core`
- `package.json` `main` and `style` fields now point to `dist/fluid.min.css`
- `prepublishOnly` hook ensures dist is always rebuilt before publishing
- README installation instructions updated with correct CDN links and npm install command

### Fixed
- Removed internal `.agent/` and `.claude/` directories from git tracking

## [0.4.1] - 2026-03-20

### Added
- **Image optimization pipeline**: `npm run optimize-images` generates WebP (640w, 1024w) and AVIF (full-width) variants via sharp
- **`<picture>` elements**: all 62 template images wrapped with AVIF + WebP sources and `srcset`/`sizes` for responsive delivery
- **Build scripts**: `scripts/optimize-images.js` (image conversion) and `scripts/update-html-picture.js` (HTML template updates)

### Changed
- **Image payload reduced 77.5%**: 33.6MB PNG originals → 7.6MB optimized WebP/AVIF variants
- All hero/full-width images use `sizes="100vw"`, card images use responsive sizes
- Avatar images intentionally excluded from `<picture>` wrapping (too small for srcset)
- PNG originals preserved as fallbacks inside `<picture>` elements

## [0.4.0] - 2026-03-20

### Added
- **Image utilities** in CSS framework:
  - Focal point control via `data-focus` attribute on `.hero__background` and `.card__media` (top, bottom, left, right, center)
  - Custom focal point via `--focus-x` / `--focus-y` CSS custom properties
  - Image protection utility via `[data-protected]` (casual right-click deterrent, not DRM)
  - Orientation-aware images via `[data-orientation="landscape|portrait"]`
- **Lazy loading** (`loading="lazy"`) added to 70 below-fold images across all templates and examples
- **Image dimensions** (`width`/`height`) added to all `<img>` tags for CLS prevention
- **Image optimization guide** (`_docs/images-guide.md`) — format recommendations, responsive patterns, focal points, lazy loading, stack-specific solutions
- **The Fluid Agent Kit** (`fluid-agent-kit/`) — AI coding assistant support with 4 skills:
  - CSS conventions, UX rules, accessibility standards, image optimization
- **AI pointer files**: `AGENTS.md` (agent-agnostic), `GEMINI.md` (Google Gemini)
- **Updated `CLAUDE.md`** to reference Fluid Agent Kit instead of internal tools

### Fixed
- **Heading order** on homepage: h4 under h2 "Features" changed to h3
- **Customizer 404**: nav link changed from broken `<a>` to `<button>` that opens settings panel
- **Lint script**: added `.unlighthouse/` exclusion to prevent false positives from third-party tool output

### Changed
- Internal development tools (`.agent/`, `.claude/`) are now gitignored — not shipped publicly
- Version bump from 0.3.5 to 0.4.0

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
[0.4.2]: https://github.com/Agile-Media-Agency/the-fluid-theme/compare/v0.4.1...v0.4.2
[0.4.3]: https://github.com/Agile-Media-Agency/the-fluid-theme/compare/v0.4.2...v0.4.3
