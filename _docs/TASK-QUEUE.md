# Fluid Theme — Task Queue for Claude Code

**Last updated:** March 24, 2026
**Current version:** 0.4.8 (Phase 5 nearly complete)

---

## COMPLETED THIS SESSION (2026-03-24)

### Phase 5: Distribution & Testing
- [x] npm publish — `@fluid-theme/core@0.4.3` live on npm
- [x] CDN live — jsDelivr and unpkg automatic
- [x] HTML starter kit — `starters/html/` CDN-based, zero setup
- [x] React starter kit — `starters/react/` Vite + React 18, live theming demo
- [x] Accessibility audit — axe-core WCAG 2.1 AA, 0 critical violations, report at `_docs/ACCESSIBILITY-AUDIT.md`
- [x] Performance benchmarks — Lighthouse: Perf 100/100/88, CLS=0, TBT=0ms, report at `_docs/PERFORMANCE-BENCHMARKS.md`
- [x] Image optimization — 1920w WebP variants generated (77.5% savings), 47 srcsets updated in templates + index.html
- [x] `optimize-images.js` — now idempotent (skips existing files)

### Accessibility Fixes
- [x] Spinners: added `role="status"` to all `.spinner`/`.spinner-dots` elements
- [x] Card ratings: added `role="img"` to `.card__rating` elements
- [x] Interactive card: removed invalid `role="button"` from `<article>` element

---

## QUEUED — NEXT TASKS

### Visual Regression Tests (Phase 5 final item)
Set up Playwright screenshot comparisons for key components to catch visual regressions.
- [ ] Install Playwright test runner
- [ ] Create baseline screenshots for: foundation.html, components.html, index.html
- [ ] Set up `npm run test:visual` command
- [ ] Integrate with CI (`.github/workflows/`)

### Image Skill for Agent Kits
`_docs/images-guide.md` exists but no corresponding agent kit skill.
- [ ] Add `image-optimization` skill to `fluid-agent-kit/skills/image-optimization.md`
  - Note: this file already exists (created earlier). Verify it covers: `<picture>` patterns, 1920w, AVIF, `data-focus`, `data-aspect`, lazy loading, Lighthouse targets

### Preset Comparison Page (PLAN ONLY — do NOT implement)
Write `_docs/future-features/preset-comparison.md` spec:
- All 10 presets side by side with variables
- Each cell shows rendered output for that preset
- Toggles for categories (motion, elements, sections, components)
- Font combos, radius, spacing, color swatches
- Verify: does a base theme without preset exist?
- DO NOT build — document the concept only

---

## DECISIONS PENDING

1. **Visual regression CI**: Run on every PR or only on release? (Playwright takes ~2min)
2. **Image skill**: `fluid-agent-kit/skills/image-optimization.md` already exists — does it need updating based on the responsive pattern we used (640/1024/1920w + AVIF)?
3. **npm token expiry**: The publish token expires 2026-03-31. Renew before that date (npmjs.com → Access Tokens → New Granular Token → Bypass 2FA + Read/write).
4. **Starter kits in repo**: `starters/html/` and `starters/react/` are in the main repo. Should they be separate repos or GitHub template repos?

---

## RESOLVED DECISIONS

- ~~Final name for user-facing agent kit?~~ → **Fluid Agent Kit** (`fluid-agent-kit/`)
- ~~Should internal `.agent/` be gitignored?~~ → Yes, removed from git tracking
- ~~Image format: WebP only or AVIF + WebP fallback?~~ → **AVIF + WebP fallback** via `<picture>` (already implemented)
- ~~Target: Lighthouse performance 90+~~ → **Achieved: 100/100/88** — CLS=0, TBT=0ms
