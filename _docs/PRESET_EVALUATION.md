# Theme Preset System — Evaluation & Recommendations

**Date**: February 17, 2026
**Status**: Assessment for v0.4.0 planning
**Goal**: Understand why presets look too similar and propose solutions

---

## Executive Summary

The 7 theme presets (Still, Serene, Stream, Flowing, Cascade, Rapids, Tsunami) were designed to feel like distinct "water states" with different energy levels. In practice, **they look too similar** — more like minor tweaks than fundamentally different themes.

**Root Cause**: The presets primarily change motion timing and easing, but don't sufficiently vary the visual fundamentals: fonts, spacing scale, border radius, container width, and component styling.

**The original vision**: Same HTML → radically different visual experiences. The framework should be so token-driven that changing a preset makes the site feel like a completely different theme.

---

## Current Preset Token Analysis

### What Each Preset Currently Changes

| Property | Still | Serene | Stream | Flowing | Cascade | Rapids | Tsunami |
|----------|-------|--------|--------|---------|---------|--------|---------|
| **Motion Scale** | 0 | 0.3x | 0.7x | 1x | 1.2x | 1.5x | 2x |
| **Duration Range** | 0ms | 200-3000ms | 150-450ms | standard | 200-500ms | 250-650ms | 350-900ms |
| **Section Spacing** | 48px | 96px | 64px | standard | 64px | 48px | 80px |
| **Border Radius** | 0-4px | 32-40px | 4-16px | standard | 32-48px | 4-16px | **0 (asymmetric)** |
| **Container Width** | 1024px | 768px | 1280px | 1280px | 1280px | 1536px | 100% |
| **Page Transition** | instant | Ken Burns | slide | slide | slide | zoom | diagonal arc |

### What's NOT Changing (The Problem)

1. **Fonts**: All presets use `--font-system` (system-ui). No serif, mono, or display variations.
2. **Font Sizes/Weights**: Same typographic scale across all presets.
3. **Color Saturation**: Colors come from palettes, but palettes aren't auto-linked to presets (user must choose).
4. **Component Styling**: Only Button, Card, Accordion have per-motion styling. 14 other components look identical.
5. **Form Fields**: Same input shapes, focus styles, validation colors.
6. **Navigation**: Same nav bar in all presets.
7. **Hero Sections**: Same padding, overlay intensity.

---

## Why They Look Similar — Technical Deep Dive

### 1. Spacing Variations Are Too Subtle

Current: 48px to 96px (2x range)

**Problem**: A 2x difference in section padding isn't visually dramatic. You need 4-5x variation for immediate visual impact.

**Recommendation**:
```css
[data-motion="still"]   { --section-spacing: 24px; }   /* Tight, grid-like */
[data-motion="serene"]  { --section-spacing: 160px; }  /* Luxurious breathing room */
[data-motion="rapids"]  { --section-spacing: 16px; }   /* Dense, high-energy */
[data-motion="tsunami"] { --section-spacing: 120px; }  /* Bold, dramatic */
```

### 2. No Font Personality

Current: All use system-ui (one font family)

**Problem**: Typography is 80% of visual identity. Same font = same feel.

**Recommendation**:
```css
[data-motion="still"]   { --font-body: 'SF Mono', monospace; }  /* Technical, precise */
[data-motion="serene"]  { --font-body: 'Georgia', serif; }      /* Editorial, luxe */
[data-motion="stream"]  { --font-body: 'Inter', sans-serif; }   /* Modern, clean */
[data-motion="cascade"] { --font-body: 'Nunito', sans-serif; }  /* Friendly, rounded */
[data-motion="rapids"]  { --font-body: 'Archivo', sans-serif; } /* Bold, condensed */
[data-motion="tsunami"] { --font-body: 'Space Grotesk', sans-serif; } /* Geometric, impactful */
```

### 3. Border Radius Clustering

Current: Most presets use 8-16px radius (indistinguishable)

**Problem**: Only Still (0px) and Tsunami (asymmetric) are visually distinct.

**Recommendation**: Make radius a signature trait:
```css
[data-motion="still"]   { --radius-md: 0; --radius-lg: 0; }          /* Sharp edges */
[data-motion="serene"]  { --radius-md: 24px; --radius-lg: 40px; }    /* Soft, pillowy */
[data-motion="cascade"] { --radius-md: 999px; --radius-lg: 999px; }  /* Full pills */
[data-motion="tsunami"] { --radius-md: 4px 24px 4px 24px; }          /* Asymmetric */
```

### 4. Container Width Too Similar

Current: 1024-1280px for 5 of 7 presets

**Problem**: Same content width = same visual rhythm.

**Recommendation**:
```css
[data-motion="still"]   { --container-max: 600px; }  /* Narrow, focused */
[data-motion="serene"]  { --container-max: 650px; }  /* Editorial column */
[data-motion="stream"]  { --container-max: 90vw; }   /* Wide, tech dashboard */
[data-motion="tsunami"] { --container-max: 100%; }   /* Edge-to-edge */
```

### 5. Components Don't Vary Per-Preset

Current: Only 4 components (button, card, accordion, loading) have `[data-motion="..."]` selectors.

**Problem**: 13 components (forms, nav, tables, modals, etc.) look identical across all presets.

**Recommendation**: Add per-motion styling to:
- **Forms**: Different input shapes (square in Still, rounded in Cascade, pill in Serene)
- **Navigation**: Different spacing, hover effects, mobile behavior
- **Heroes**: Different padding scale, overlay intensity
- **Tables**: Different cell padding, border styles
- **Modals**: Different entrance animations, backdrop blur amounts

---

## The Fundamental Architecture Issue

The current system was designed for **additive customization** — users pick motion + palette + accent independently. This is flexible but means presets are just one axis of variation.

**To achieve "radically different themes"**, presets need to be **holistic packages** that override multiple design dimensions simultaneously:

1. **Motion timing** (already done)
2. **Typography** (not done)
3. **Spacing scale** (partially done)
4. **Radius system** (partially done)
5. **Default palette** (not done — palettes are independent)
6. **Shadow intensity** (partially done)
7. **Component-level overrides** (minimally done)

---

## Recommendations

### Option A: Enhance Existing Presets

**Effort**: Medium (2-3 days)
**Risk**: Low
**Approach**: Add more variation to existing 7 presets without changing architecture.

**Changes**:
1. Add font-family overrides per preset in `tokens.css`
2. Make spacing variations more dramatic (4-5x range)
3. Make border-radius more distinct per preset
4. Add `[data-motion="..."]` rules to 10 more components
5. Auto-link default palettes to motion presets (e.g., Rapids→Bold, Serene→Morandi)

### Option B: Create 3 New "Signature" Presets ✅ IMPLEMENTED

**Effort**: High (1 week)
**Risk**: Medium
**Approach**: Design 3 new presets from scratch that are intentionally extreme/distinctive.

**Signature Presets (Added in v0.3.3)**:

1. **"Brutalist"** — Monospace font, 0 radius, high contrast, no animations, harsh offset shadows
2. **"Editorial"** — Serif font, narrow container (38rem), extreme whitespace (8rem sections), no shadows, warm muted colors
3. **"Neon"** — System font, pill shapes everywhere, glowing shadows, dark background by default, fast bouncy animations

These presets demonstrate the vision of "same HTML, radically different themes" by overriding:
- Typography (font-family, line-height, letter-spacing)
- Layout (container width, section spacing)
- Shapes (all border radii)
- Shadows (none, offset, glow)
- Colors (background, text, accent)
- Motion (instant, slow contemplative, fast energetic)

### Option C: Refactor to "Theme Packs" (Breaking Change)

**Effort**: Very High (2-3 weeks)
**Risk**: High
**Approach**: Bundle motion + palette + typography + spacing into unified "theme packs".

**Architecture Change**:
```html
<!-- Instead of independent attributes -->
<body data-motion="rapids" data-palette="bold" data-accent="1">

<!-- Single theme attribute -->
<body data-theme="rapids">
<!-- Rapids theme auto-sets: motion=rapids, palette=bold, font=Archivo, spacing=compact -->
```

---

## Immediate Action Items

### Quick Wins (This Sprint)

1. ✅ Add missing "Flowing" preset to homepage grid
2. ⬜ Add font-family overrides to tokens.css for each preset
3. ⬜ Increase spacing variation from 2x to 4x range
4. ⬜ Add `[data-motion="..."]` rules to forms.css and hero.css
5. ⬜ Create a default palette mapping per motion preset

### Experimental Branch

Consider creating `experimental/distinct-presets` branch to:
- Design 3 signature presets (Brutalist, Editorial, Neon)
- Test if architecture supports radically different themes
- Determine if refactoring to theme packs is necessary

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/core/tokens.css` | Add font-family, increase spacing ranges, update radius |
| `src/components/form.css` | Add per-motion input styling |
| `src/components/hero.css` | Add per-motion padding/overlay |
| `src/components/nav.css` | Add per-motion nav styling |
| `src/core/base.css` | Add default palette mapping per motion |
| `_includes/settings-panel.html` | Consider adding "signature presets" section |

---

## Conclusion

The presets look similar because they primarily vary **motion timing** while leaving **visual fundamentals** (fonts, spacing scale, radius, component styling) largely unchanged.

To achieve the vision of "same HTML, radically different themes", we need to:

1. **Short-term**: Enhance existing presets with font, spacing, and component variations
2. **Medium-term**: Create 2-3 intentionally extreme "signature" presets
3. **Long-term**: Consider refactoring to unified "theme packs"

The architecture is sound — it just needs more tokens to vary per preset.

---

*This evaluation was prepared to inform v0.4.0 planning. See FRAMEWORK_READINESS.md for full roadmap.*
