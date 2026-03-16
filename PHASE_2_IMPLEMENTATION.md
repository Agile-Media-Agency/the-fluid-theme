# PHASE 2 IMPLEMENTATION: CSS PRESETS + TERMINOLOGY UPDATES

## Overview
This phase adds:
1. 8th Motion Preset: "Drift" (Zen, minimal, spacious)
2. 9th Motion Preset: "Glitch" (Digital, playful, broken)
3. Terminology updates throughout the codebase
4. Navigation IA changes
5. Homepage updates

**Estimated Time**: 3-4 days for 1 developer  
**Files to modify**: ~15 files  
**Files to create**: 3 new files  
**Commits**: 6-8 separate commits

---

## STEP 1: Create CSS Preset Files

### Task 1.1: Add Drift Preset CSS
**File**: `src/presets/drift.css` (new file)

Create this file with all Drift CSS from the specification above.

**Key things to verify**:
- All --duration- variables are 600ms+
- All easing functions use ease-out
- Shadow are soft only (var(--shadow-sm) to var(--shadow-md))
- Radius values: 24px+ (large rounded)
- Space variables favor larger gaps (--space-8, --space-9)
- Font family includes serif fallback
- Line-height is generous (1.8-2.0)

**Commit**: `feat: add drift preset CSS (zen, minimal, spacious)`

---

### Task 1.2: Add Glitch Preset CSS
**File**: `src/presets/glitch.css` (new file)

Create this file with all Glitch CSS from the specification above.

**Key things to verify**:
- Duration variables are inconsistent (100-600ms)
- Easing functions use bounce/elastic effects
- Shadows use stacked multi-shadows with color
- Border radius is minimal (2-8px)
- Transforms include skew, rotate effects
- Font family is monospace-based
- Animation includes glitch effects

**Commit**: `feat: add glitch preset CSS (digital, playful, chaotic)`

---

## STEP 2: Import New Presets in Main CSS

### Task 2.1: Update fluid.css
**File**: `src/fluid.css`

Add imports for new presets. Find the existing preset imports section and add:
```css
@import "./presets/drift.css";
@import "./presets/glitch.css";
```

**Commit**: `chore: import drift and glitch presets`

---

## STEP 3: Update Navigation & Labels

### Task 3.1: Update Main Navigation
**File**: `_includes/nav.html` or equivalent

**Changes**:
- Change button text from "Theme" to "Explore"
- Keep href pointing to #themes or wherever the foundation/components docs are
- Update aria-label if present

**Find this**:
```html
<button>Theme</button>
```

**Replace with**:
```html
<button>Explore</button>
```

**Also update Customizer label**:

**Find this**:
```html
<link>Customizer</link>
```

**Replace with** (or add title attribute):
```html
<link title="Advanced Customizer - Coming Soon">Customizer</link>
```

**Commit**: `chore: clarify navigation terminology (Explore + Customizer)`

---

### Task 3.2: Update Settings Panel
**File**: `_includes/settings-panel.html`

**Changes**:
- Change heading from "Customize" to "Appearance Settings"
- Change section title from "Theme" to "Motion Preset"
- Update descriptive text
- Add hint text explaining each section

**Find this section**:
```html
<h2 class="settings-drawer__title">Customize</h2>
```

**Replace with**:
```html
<h2 class="settings-drawer__title">Appearance Settings</h2>
```

**Find this**:
```html
<h3 class="settings-section__label">Theme</h3>
<p class="settings-section__hint">Complete styling presets</p>
```

**Replace with**:
```html
<h3 class="settings-section__label">Motion Preset</h3>
<p class="settings-section__hint">Choose animation timing, colors, and typography</p>
```

**Find the animation speed section**:
```html
<h3>Animation Speed</h3>
```

**Update to**:
```html
<h3>Customize Motion Preset</h3>
<p>Override animation speed or choose different colors and accent</p>
```

**Commit**: `chore: update settings panel terminology and labels`

---

## STEP 4: Update Homepage

### Task 4.1: Update Hero Grid Section
**File**: `index.html` or equivalent (the home page)

**Changes**:
- Change heading from "Choose Your Theme" to "Choose Your Motion Preset"
- Update description text
- Add the 9th preset button (Glitch) to the visible grid
- Show all 9 presets in the grid

**Find this**:
```html
<h2>Choose Your Theme</h2>
<p>Seven complete themes with motion, colors, fonts, and layout.</p>
```

**Replace with**:
```html
<h2>Choose Your Motion Preset</h2>
<p>Nine complete motion presets - each with coordinated animation timing, color harmony, typography, and component personality.</p>
```

**Add Drift button** (find where the Rapids and Tsunami buttons are):

Before Tsunami, add:
```html
<button class="theme-grid__item" data-theme="drift" onclick="setThemePreset('drift')">
  <!-- SVG or image for Drift - calm, minimal aesthetic -->
  <h3 class="theme-grid__name">Drift</h3>
  <p class="theme-grid__desc">Glacial, serene, spacious</p>
  <span class="theme-grid__font">Georgia, Serif</span>
</button>
```

**Add Glitch button** (after Tsunami):
```html
<button class="theme-grid__item" data-theme="glitch" onclick="setThemePreset('glitch')">
  <!-- SVG or image for Glitch - digital, chaotic aesthetic -->
  <h3 class="theme-grid__name">Glitch</h3>
  <p class="theme-grid__desc">Digital, playful, chaotic</p>
  <span class="theme-grid__font">Courier, Monospace</span>
</button>
```

**Commit**: `feat: add drift and glitch to homepage hero grid`

---

## STEP 5: Update Feature Section

### Task 5.1: Update Feature Claims
**File**: `index.html` (features section)

**Find this**:
```html
<h3>7 Complete Themes</h3>
<p>Motion, colors, fonts, layout</p>
```

**Replace with**:
```html
<h3>9 Motion Presets</h3>
<p>Each with coordinated animation, color, typography, and component design</p>
```

**Commit**: `chore: update homepage feature claims for 9 presets`

---

## STEP 6: Update Documentation

### Task 6.1: Add Drift & Glitch to Settings Panel Options
**File**: `_includes/settings-panel.html`

Add buttons for Drift and Glitch in the preset selection area (inside the theme-grid div):

After the Tsunami button:
```html
<button class="theme-card" data-theme-preset="drift" onclick="setThemePreset('drift')">
  <span class="theme-card__icon">❄️</span>
  <span class="theme-card__name">Drift</span>
  <span class="theme-card__desc">Glacial, serene</span>
</button>

<button class="theme-card" data-theme-preset="glitch" onclick="setThemePreset('glitch')">
  <span class="theme-card__icon">⚡</span>
  <span class="theme-card__name">Glitch</span>
  <span class="theme-card__desc">Digital, chaotic</span>
</button>
```

**Commit**: `feat: add drift and glitch buttons to settings panel`

---

## STEP 7: Update README

### Task 7.1: Update README.md
**File**: `README.md` (in repo root)

**Find this**:
```markdown
## 🎬 Motion System
Five physics-based animation styles:
- Still — Reduced motion, instant transitions
- Stream — Smooth, laminar animations (300ms)
- Cascade — Gentle waterfall effects (450ms)
- Rapids — Turbulent with friction and drag (700ms)
- Tsunami — Dramatic rise, crest, and crash (900ms)
```

**Replace with**:
```markdown
## 🎬 Motion System
Nine physics-based motion presets:
- **Still** (0ms) — Reduced motion, instant transitions
- **Serene** (300-450ms) — Contemplative, slow, gentle
- **Stream** (300ms) — Modern, clean, horizontal
- **Flowing** (300ms) — Balanced, organic (default)
- **Cascade** (450ms) — Playful, waterfall stagger
- **Rapids** (700ms) — Energetic, turbulent
- **Tsunami** (900ms) — Bold, dramatic impact
- **Drift** (600-800ms) — Zen, minimal, spacious
- **Glitch** (200-600ms) — Digital, playful, chaotic
```

**Also update this section**:

**Find**:
```markdown
## Core Features 🎬
Motion System
Five physics-based animation styles:
```

**Replace with**:
```markdown
## Core Features 🎬
Motion Presets
Nine physics-based motion presets, each coordinating animation timing, colors, typography, and component design
```

**Commit**: `docs: update README for 9 motion presets`

---

## STEP 8: Test and Verify

### Task 8.1: Visual Testing
- [ ] Load `index.html` in browser
- [ ] Verify all 9 presets show in hero grid
- [ ] Click each preset button
- [ ] Verify CSS applies correctly (colors, motion timing, typography)
- [ ] Check settings panel shows all 9 presets
- [ ] Test on mobile (375px)
- [ ] Test on tablet (768px)
- [ ] Test on desktop (1920px)

### Task 8.2: Functionality Testing
- [ ] Clicking preset buttons changes active state
- [ ] Animation speed override still works
- [ ] Color palette selector still works
- [ ] Accent color selector still works
- [ ] Light/Dark mode toggle still works
- [ ] Settings panel opens/closes
- [ ] Settings persist in localStorage

### Task 8.3: Browser Testing
- [ ] Chrome (should be 100%)
- [ ] Firefox (should still work, gradual degradation OK)
- [ ] Safari (should still work, some animations may vary)

**Commit**: `test: verify all 9 presets functional and styled correctly`

---

## STEP 9: Final Commits Summary
```bash
# 1. Add preset CSS files
git add src/presets/drift.css src/presets/glitch.css
git commit -m "feat: add drift and glitch preset CSS implementations"

# 2. Update main CSS imports
git add src/fluid.css
git commit -m "chore: import drift and glitch presets in main stylesheet"

# 3. Update navigation and labels
git add _includes/nav.html _includes/settings-panel.html
git commit -m "chore: clarify terminology throughout UI (Motion Preset vs Theme)"

# 4. Update homepage
git add index.html
git commit -m "feat: add drift and glitch to homepage and update feature claims"

# 5. Update documentation
git add README.md
git commit -m "docs: update documentation for 9 motion presets"

# 6. Final push
git push origin main
```

---

## Rollback Plan
If something breaks, rollback to before these changes:
```bash
git log --oneline | head -10  # Find the commit before "add drift and glitch"
git revert [commit-hash]      # Revert recent changes
git push origin main
```

---

## Next