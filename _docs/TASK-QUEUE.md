# Fluid Theme — Task Queue for Claude Code

**Last updated from chat:** March 20, 2026
**Current version:** 0.3.5 (post pre-release audit)

---

## QUEUED (give to Claude Code after current work finishes)

### Image Skill for Agent Kits
Claude Code created `_docs/images-guide.md` but there's no corresponding agent skill. Need:
- [ ] Add an `image-optimization` skill to the Fluid Agent Kit (user-facing kit)
- [ ] Skill should cover: format recommendations, `<picture>` patterns, responsive sizes, lazy loading, focal points, Lighthouse targets
- [ ] Assign it to `site-builder` and `fluid-theme-dev` agents
- [ ] Also add to the internal kit's agents

### Demo Site Performance (post-Unlighthouse)
- [ ] Batch convert hero PNGs to WebP (target: 2.5MB → ~200KB each)
- [ ] Homepage loads 5 hero images (~12MB total) — main performance killer
- [ ] Generate responsive sizes (640w, 1024w, 1920w) for all images
- [ ] Consider AVIF with WebP fallback via `<picture>` for maximum savings
- [ ] Target: Lighthouse performance 90+

### Preset Comparison Page (PLAN ONLY — do NOT implement)
Write a `_docs/future-features/preset-comparison.md` spec document covering:
- All 10 presets shown side by side with their variables
- Each cell shows rendered output for that preset
- Toggles for categories (motion, elements, sections, components)
- Side-by-side component comparison
- Font combos, radius, spacing, color swatches
- Verify: does a base theme without preset exist, or must a preset be active?
- DO NOT build — document the concept only. Fork to experimental repo when ready.

### Agent Kit Public/Private Separation
- Internal `.agent/` for developing Fluid Theme → NOT public (gitignore or private repo)
- User-facing kit → renamed to "Fluid Agent Kit" with own directory
- Create AGENTS.md, CLAUDE.md (update), GEMINI.md entry-point files
- These tell agents/tools where to find the kit

---

## DECISIONS PENDING
1. Final name for user-facing agent kit?
2. Should internal `.agent/` be gitignored or separate repo?
3. Image format: WebP only or AVIF + WebP fallback?
4. Does a base theme without preset exist?
