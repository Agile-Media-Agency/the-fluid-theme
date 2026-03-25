# Complete Presets Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every `data-preset` preset a complete, distinctive design system — with real fonts, light-mode color character, and a signature visual identity — not just a timing tweak.

**Architecture:** All changes live in `src/core/tokens.css` (font + color tokens per preset) and a new `src/fonts/preset-fonts.css` file (Google Fonts imports). Templates get a single `<link>` to that font file. No structural changes to HTML or component CSS needed — all presets work through CSS custom property inheritance.

**Tech Stack:** Pure CSS, Google Fonts (variable where available), OKLCH color system, CSS custom properties. No JS, no build step changes.

**Branch:** `feat/complete-presets`

---

## Git Strategy

**Use a feature branch — NOT a fork.**

Reasoning:
- `@fluid-theme/core` is already live on npm — forking breaks CDN continuity
- A feature branch keeps git history clean, allows review before merge
- Tag `v0.4.8` as the "before" snapshot; this work ships as `v0.5.0`

```bash
git checkout -b feat/complete-presets   # already done
# work happens here
git merge feat/complete-presets         # into main when done
```

---

## What We're Fixing

The 7 water presets (`still`, `serene`, `stream`, `flowing`, `cascade`, `rapids`, `tsunami`) currently define:
- ✅ Motion timing (duration, easing)
- ✅ Border radius personality
- ✅ Shadow character
- ✅ Spacing rhythm
- ❌ **No fonts** — all fall back to system-ui
- ❌ **No light-mode color tint** — background stays `oklch(100% 0 0)` for every preset

The "additional" presets (`brutalist`, `editorial`, `neon`) already define fonts and full color overrides — they ARE complete design systems. The water presets need the same treatment.

---

## File Map

| File | Action | Purpose |
|------|--------|---------|
| `src/fonts/preset-fonts.css` | **Create** | Google Fonts imports for all presets |
| `src/core/tokens.css` | **Modify** | Add font tokens + light-mode tints to 7 water presets |
| `src/fluid.css` | **Modify** | Import `src/fonts/preset-fonts.css` (optional/performance opt) |
| `_includes/head.html` | **Modify** | Add `<link rel="preconnect">` + font stylesheet |
| `examples/foundation.html` | **Modify** | Add preset switcher UI to demo page |
| `package.json` | **Modify** | Bump version to 0.5.0 |
| `CHANGELOG.md` | **Modify** | Add v0.5.0 entry |
| `PROJECT_STATUS.md` | **Modify** | Update version |
| `src/fluid.css` | **Modify** | Update version comment |

---

## Preset Font Assignments

Each preset gets a deliberate typeface pair that matches its personality:

| Preset | Heading Font | Body Font | Character |
|--------|-------------|-----------|-----------|
| `still` | system-ui (no custom) | system-ui | Deliberately minimal, system-native |
| `serene` | Cormorant Garamond | EB Garamond | Contemplative, literary, spa |
| `stream` | Plus Jakarta Sans | Plus Jakarta Sans | Modern SaaS, clean, approachable |
| `flowing` | Outfit | DM Sans | **Fluid brand** — smooth, geometric, distinctive |
| `cascade` | Nunito | Nunito | Friendly, rounded, Notion/Slack vibes |
| `rapids` | Syne | Space Grotesk | Athletic, punchy, bold, high-energy |
| `tsunami` | Bebas Neue | Barlow | Cinematic, dramatic, commanding |

---

## Light-Mode Color Tints

Each preset gets a barely-perceptible hue tint on its backgrounds. These are intentionally subtle — users should feel the mood, not consciously see the tint.

| Preset | Background | Surface | Hue |
|--------|-----------|---------|-----|
| `still` | `oklch(98.5% 0.004 250)` | `oklch(96.5% 0.004 250)` | Cool slate |
| `serene` | `oklch(98% 0.007 60)` | `oklch(96% 0.008 60)` | Warm cream |
| `stream` | `oklch(99% 0.003 200)` | `oklch(97% 0.003 200)` | Clean cool |
| `flowing` | `oklch(98.5% 0.006 230)` | `oklch(96.5% 0.006 230)` | Ocean blue |
| `cascade` | `oklch(98.5% 0.005 280)` | `oklch(96.5% 0.005 280)` | Lavender |
| `rapids` | `oklch(99% 0.004 25)` | `oklch(97% 0.004 25)` | Warm ember |
| `tsunami` | `oklch(98% 0.007 250)` | `oklch(96% 0.008 250)` | Deep navy |

---

## Tasks

### Task 1: Create Font Infrastructure

**Files:**
- Create: `src/fonts/preset-fonts.css`

- [ ] **Step 1: Create the font CSS file with Google Fonts imports**

```css
/**
 * Fluid Framework — Preset Fonts
 * Optional: include this file to activate preset-specific typography.
 * Each import is lightweight (variable fonts where available).
 *
 * Usage: <link rel="stylesheet" href="path/to/preset-fonts.css">
 * Or via npm: import '@fluid-theme/core/src/fonts/preset-fonts.css';
 */

/* SERENE: Contemplative, literary */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

/* STREAM: Modern SaaS */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

/* FLOWING: Fluid brand (default) */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');

/* CASCADE: Friendly, rounded */
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

/* RAPIDS: Athletic, bold */
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

/* TSUNAMI: Cinematic, dramatic */
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

/* EDITORIAL (existing preset): Literary serif */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

/* BRUTALIST + NEON (existing presets): Monospace / Geometric */
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Orbitron:wght@400;500;700;900&family=Exo+2:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');
```

- [ ] **Step 2: Commit**
```bash
git add src/fonts/preset-fonts.css
git commit -m "feat: add preset-fonts.css — Google Fonts for all presets"
```

---

### Task 2: Add preconnect hints to HTML head

**Files:**
- Modify: `_includes/head.html`

- [ ] **Step 1: Read the current head include**
- [ ] **Step 2: Add preconnect + font stylesheet link before the closing `</head>` tag or after the CSS link**

```html
<!-- Preset typography — optional, remove to use system fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="{{ '/src/fonts/preset-fonts.css' | relative_url }}">
```

- [ ] **Step 3: Commit**
```bash
git add _includes/head.html
git commit -m "feat: load preset fonts via Google Fonts preconnect"
```

---

### Task 3: Add font tokens to `still` preset

**Files:**
- Modify: `src/core/tokens.css` (still preset block, lines ~571-614)

- [ ] **Step 1: Add light-mode color tint and font tokens to the `still` block**

Find the `[data-preset="still"]` block and add after the existing shadow tokens:

```css
/* Light-mode color tint: cool slate — barely perceptible */
--color-background: oklch(98.5% 0.004 250);
--color-surface: oklch(96.5% 0.004 250);
--color-surface-raised: oklch(99.5% 0.002 250);
--color-border: oklch(85% 0.005 250);
--color-border-subtle: oklch(91% 0.004 250);

/* Typography: deliberately system-native (no custom font for this preset) */
/* --font-heading and --font-body intentionally left as system-ui */
/* "Still" is Swiss/Bauhaus — no ornament, no custom brand */
```

- [ ] **Step 2: Verify the dark mode `still` block still overrides these correctly**

The existing dark mode block at line ~419 already overrides all color tokens — no change needed there.

- [ ] **Step 3: Commit**
```bash
git add src/core/tokens.css
git commit -m "feat(still): add cool-slate light-mode tint"
```

---

### Task 4: Add font tokens to `serene` preset

**Files:**
- Modify: `src/core/tokens.css` (serene preset block, lines ~622-669)

- [ ] **Step 1: Add font tokens + warm cream light tint to the `serene` block**

```css
/* Light-mode color tint: warm cream — like aged paper, spa-like */
--color-background: oklch(98% 0.007 60);
--color-surface: oklch(96% 0.008 60);
--color-surface-raised: oklch(99.5% 0.004 60);
--color-border: oklch(87% 0.008 60);
--color-border-subtle: oklch(92% 0.006 60);

/* Typography: Cormorant Garamond + EB Garamond — contemplative, literary */
--font-heading: 'Cormorant Garamond', var(--font-serif);
--font-body: 'EB Garamond', var(--font-serif);
```

- [ ] **Step 2: Commit**
```bash
git add src/core/tokens.css
git commit -m "feat(serene): add Cormorant Garamond typography + warm cream tint"
```

---

### Task 5: Add font tokens to `stream` preset

**Files:**
- Modify: `src/core/tokens.css` (stream preset block, lines ~715-751)

- [ ] **Step 1: Add font tokens + clean cool tint to the `stream` block**

```css
/* Light-mode color tint: crisp cool white — SaaS product feel */
--color-background: oklch(99% 0.003 200);
--color-surface: oklch(97% 0.003 200);
--color-surface-raised: oklch(100% 0 0);
--color-border: oklch(88% 0.004 200);
--color-border-subtle: oklch(93% 0.003 200);

/* Typography: Plus Jakarta Sans — modern, clean, SaaS */
--font-heading: 'Plus Jakarta Sans', var(--font-system);
--font-body: 'Plus Jakarta Sans', var(--font-system);
```

- [ ] **Step 2: Commit**
```bash
git add src/core/tokens.css
git commit -m "feat(stream): add Plus Jakarta Sans typography + clean cool tint"
```

---

### Task 6: Add font tokens to `flowing` preset (PRIORITY — Fluid brand identity)

**Files:**
- Modify: `src/core/tokens.css` (flowing preset block, lines ~759-795)

- [ ] **Step 1: Add font tokens + ocean tint to the `flowing` block**

This is the default/brand preset. It needs a signature feel.

```css
/* Light-mode color tint: ocean breath — the Fluid signature */
/* Barely perceptible blue-white, like morning light on water */
--color-background: oklch(98.5% 0.006 230);
--color-surface: oklch(96.5% 0.006 230);
--color-surface-raised: oklch(99.5% 0.003 230);
--color-border: oklch(87% 0.007 230);
--color-border-subtle: oklch(92% 0.005 230);

/* Typography: Outfit headings + DM Sans body — the Fluid voice */
/* Outfit: geometric, smooth, modern. DM Sans: readable, friendly. */
--font-heading: 'Outfit', var(--font-system);
--font-body: 'DM Sans', var(--font-system);
```

- [ ] **Step 2: Commit**
```bash
git add src/core/tokens.css
git commit -m "feat(flowing): add Outfit/DM Sans typography + ocean tint — Fluid brand identity"
```

---

### Task 7: Add font tokens to `cascade` preset

**Files:**
- Modify: `src/core/tokens.css` (cascade preset block, lines ~802-836)

- [ ] **Step 1: Add font tokens + lavender tint to the `cascade` block**

```css
/* Light-mode color tint: soft lavender — warm, playful, approachable */
--color-background: oklch(98.5% 0.005 280);
--color-surface: oklch(96.5% 0.005 280);
--color-surface-raised: oklch(99.5% 0.003 280);
--color-border: oklch(87% 0.006 280);
--color-border-subtle: oklch(92% 0.005 280);

/* Typography: Nunito — round, friendly, bouncy like the motion */
--font-heading: 'Nunito', var(--font-system);
--font-body: 'Nunito', var(--font-system);
```

- [ ] **Step 2: Commit**
```bash
git add src/core/tokens.css
git commit -m "feat(cascade): add Nunito typography + lavender tint"
```

---

### Task 8: Add font tokens to `rapids` preset

**Files:**
- Modify: `src/core/tokens.css` (rapids preset block, lines ~844-886)

- [ ] **Step 1: Add font tokens + warm ember tint to the `rapids` block**

```css
/* Light-mode color tint: warm ember — heat, energy, action */
--color-background: oklch(99% 0.004 25);
--color-surface: oklch(97% 0.004 25);
--color-surface-raised: oklch(100% 0.002 25);
--color-border: oklch(86% 0.006 25);
--color-border-subtle: oklch(92% 0.004 25);

/* Typography: Syne headings + Space Grotesk body — athletic, punchy */
--font-heading: 'Syne', var(--font-system);
--font-body: 'Space Grotesk', var(--font-system);
```

- [ ] **Step 2: Commit**
```bash
git add src/core/tokens.css
git commit -m "feat(rapids): add Syne/Space Grotesk typography + warm ember tint"
```

---

### Task 9: Add font tokens to `tsunami` preset

**Files:**
- Modify: `src/core/tokens.css` (tsunami preset block, lines ~894-939)

- [ ] **Step 1: Add font tokens + deep navy tint to the `tsunami` block**

```css
/* Light-mode color tint: deep navy breath — like looking at the ocean floor */
--color-background: oklch(98% 0.007 250);
--color-surface: oklch(96% 0.008 250);
--color-surface-raised: oklch(99.5% 0.004 250);
--color-border: oklch(86% 0.009 250);
--color-border-subtle: oklch(92% 0.007 250);

/* Typography: Bebas Neue headings + Barlow body — cinematic, dramatic */
--font-heading: 'Bebas Neue', var(--font-system);
--font-body: 'Barlow', var(--font-system);
```

- [ ] **Step 2: Commit**
```bash
git add src/core/tokens.css
git commit -m "feat(tsunami): add Bebas Neue/Barlow typography + deep navy tint"
```

---

### Task 10: Update the `base.css` to use `--font-heading` and `--font-body`

**Files:**
- Modify: `src/core/base.css`

- [ ] **Step 1: Read base.css to check current heading font declarations**
- [ ] **Step 2: Ensure headings use `--font-heading` token and body uses `--font-body`**

In `base.css`, headings should already reference `--font-heading`. Verify:
```css
/* Should already exist in base.css: */
body {
  font-family: var(--font-body, var(--font-system));
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading, var(--font-body, var(--font-system)));
}
```

If not present or inconsistent, add/fix them.

- [ ] **Step 3: Commit any changes**
```bash
git add src/core/base.css
git commit -m "fix(base): ensure headings/body use --font-heading/--font-body tokens"
```

---

### Task 11: Add preset switcher to foundation demo page

**Files:**
- Modify: `examples/foundation.html`

- [ ] **Step 1: Read the top of foundation.html to find the nav/settings area**
- [ ] **Step 2: Add a preset switcher toolbar near the top**

A small `<div>` with buttons for each preset. Clicking one sets `data-preset` on `<html>`.

```html
<!-- Preset Switcher Demo -->
<div class="preset-switcher" style="position:fixed;inset-block-start:0;inset-inline-end:0;z-index:var(--z-toast);padding:var(--space-3);display:flex;flex-wrap:wrap;gap:var(--space-2);background:var(--color-surface);border-block-end:1px solid var(--color-border-subtle);border-inline-start:1px solid var(--color-border-subtle);">
  <span style="font-size:var(--font-size-xs);color:var(--color-text-muted);align-self:center;">Preset:</span>
  <button onclick="document.documentElement.setAttribute('data-preset',this.dataset.p)" data-p="still" class="btn btn--sm btn--ghost">Still</button>
  <button onclick="document.documentElement.setAttribute('data-preset',this.dataset.p)" data-p="serene" class="btn btn--sm btn--ghost">Serene</button>
  <button onclick="document.documentElement.setAttribute('data-preset',this.dataset.p)" data-p="stream" class="btn btn--sm btn--ghost">Stream</button>
  <button onclick="document.documentElement.setAttribute('data-preset',this.dataset.p)" data-p="flowing" class="btn btn--sm btn--ghost">Flowing</button>
  <button onclick="document.documentElement.setAttribute('data-preset',this.dataset.p)" data-p="cascade" class="btn btn--sm btn--ghost">Cascade</button>
  <button onclick="document.documentElement.setAttribute('data-preset',this.dataset.p)" data-p="rapids" class="btn btn--sm btn--ghost">Rapids</button>
  <button onclick="document.documentElement.setAttribute('data-preset',this.dataset.p)" data-p="tsunami" class="btn btn--sm btn--ghost">Tsunami</button>
  <button onclick="document.documentElement.setAttribute('data-preset',this.dataset.p)" data-p="editorial" class="btn btn--sm btn--ghost">Editorial</button>
  <button onclick="document.documentElement.setAttribute('data-preset',this.dataset.p)" data-p="brutalist" class="btn btn--sm btn--ghost">Brutalist</button>
  <button onclick="document.documentElement.setAttribute('data-preset',this.dataset.p)" data-p="neon" class="btn btn--sm btn--ghost">Neon</button>
</div>
```

- [ ] **Step 3: Commit**
```bash
git add examples/foundation.html
git commit -m "feat: add interactive preset switcher to foundation demo"
```

---

### Task 12: Version bump to v0.5.0

**Files:**
- Modify: `package.json`
- Modify: `CHANGELOG.md`
- Modify: `PROJECT_STATUS.md`
- Modify: `src/fluid.css`
- Modify: `CLAUDE.md`

- [ ] **Step 1: Update version in package.json**
```json
"version": "0.5.0"
```

- [ ] **Step 2: Add CHANGELOG entry**

```markdown
## [0.5.0] - 2026-03-24

### Added
- **Complete preset typography** — every `data-preset` preset now specifies a font pair:
  - `serene`: Cormorant Garamond + EB Garamond (contemplative, literary)
  - `stream`: Plus Jakarta Sans (modern SaaS)
  - `flowing`: Outfit + DM Sans (Fluid brand identity, the default)
  - `cascade`: Nunito (friendly, rounded)
  - `rapids`: Syne + Space Grotesk (athletic, bold)
  - `tsunami`: Bebas Neue + Barlow (cinematic, dramatic)
- **`src/fonts/preset-fonts.css`** — optional Google Fonts import file covering all presets
- **Light-mode color character** — each preset now applies a subtle hue tint to backgrounds:
  - `still` → cool slate (`hue 250`)
  - `serene` → warm cream (`hue 60`)
  - `stream` → clean cool (`hue 200`)
  - `flowing` → ocean breath (`hue 230`) — the Fluid signature
  - `cascade` → soft lavender (`hue 280`)
  - `rapids` → warm ember (`hue 25`)
  - `tsunami` → deep navy (`hue 250`)
- **Interactive preset switcher** in `examples/foundation.html`

### Changed
- `flowing` (default) now uses Outfit + DM Sans, giving the Fluid brand a distinctive voice
- Light-mode backgrounds are no longer pure white for any preset — each carries its hue identity
```

- [ ] **Step 3: Commit all version files**
```bash
git add package.json CHANGELOG.md PROJECT_STATUS.md src/fluid.css CLAUDE.md
git commit -m "chore: release v0.5.0 — complete presets with typography + color identity"
```

---

## After This Plan

When complete, each preset will be:
- ✅ A distinct visual personality (fonts + color tint + existing motion/radius/shadow)
- ✅ Loadable with one attribute: `data-preset="[preset]"`
- ✅ Properly showcased in the demo with the preset switcher

**Next:** Build the second complete child-theme (whichever has the most unique use case), then write visual regression tests.
