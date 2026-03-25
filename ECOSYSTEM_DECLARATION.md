# FLUID FRAMEWORK: ECOSYSTEM DECLARATION & PROJECT BRIEF
**Version**: 1.0  
**Date**: January 28, 2026  
**Status**: Pre-Phase 2 Architecture Clarification  
**Audience**: Development team, design team, stakeholders

---

## TABLE OF CONTENTS
1. Executive Summary
2. Current State Analysis (Audit Findings)
3. The Confusion Problem
4. Ecosystem Declaration
5. Architecture & Layers
6. Motion Presets (7 Existing + 2 New)
7. Terminology Reference
8. Information Architecture Changes
9. Implementation Checklist
10. Next Steps

---

## 1. EXECUTIVE SUMMARY

### The Situation
Fluid Framework has grown organically with features added incrementally (Customizer CTA, settings panel, motion presets, color palettes, templates). This has created **terminology confusion** where users don't understand:
- What's a "theme" vs a "preset" vs the "customizer"?
- Why are there multiple customization entry points?
- What's the relationship between motion, colors, and typography?

### The Solution
Define a clear **Ecosystem Declaration** that clarifies the architecture into 4 distinct layers:
1. **Foundation** (always included)
2. **Motion Presets** (choose one - currently 7, adding 2)
3. **Customization** (fine-tune your choice)
4. **Theme Bundles** (future complete redesigns)

### Key Changes
- **Terminology**: "Themes" → "Motion Presets"
- **Navigation**: Clarify "Theme" dropdown vs "Templates" dropdown
- **Presets**: 7 → 9 (adding "Drift" and "Glitch")
- **Documentation**: Create clear Ecosystem Declaration on site

### Business Impact
- ✅ Easier for users to understand what Fluid offers
- ✅ Clearer foundation for Customizer tool
- ✅ Better positioning for premium/enterprise tier
- ✅ Reduced support confusion

---

## 2. CURRENT STATE ANALYSIS

### Audit Summary (Browser Testing - Jan 28, 2026)

#### ✅ STRENGTHS
- Excellent responsive design (mobile-first, 8.5-9.5/10)
- Well-architected CSS (CSS Cascade Layers, semantic HTML)
- Great visual design (modern, cohesive, 7 distinct presets)
- Zero console errors
- Physics-based motion system is unique

#### ⚠️ ISSUES FOUND
- **CRITICAL**: Customizer is "Coming Soon" (revenue blocker)
- **HIGH**: Terminology confusion (Theme vs Preset vs Customizer)
- **HIGH**: Navigation unclear ("Theme" dropdown confusing)
- **HIGH**: Browser compatibility gaps (OKLCH fallback missing, View Transitions needs degradation)
- **MEDIUM**: Accessibility needs testing (keyboard nav, reduced motion, screen readers)
- **MEDIUM**: Documentation missing (no getting started guide)

#### Compatibility Matrix
| Browser | Support | Notes |
|---------|---------|-------|
| Chrome 115+ | ✅ Full | All features work |
| Edge 115+ | ✅ Full | Chromium-based |
| Firefox 109+ | ⚠️ Partial | Missing View Transitions, CSS Layers unstable |
| Safari 16.1+ | ⚠️ Partial | Missing View Transitions, Container Queries limited |
| Safari iOS | ⚠️ Limited | Core features work, missing advanced features |

---

## 3. THE CONFUSION PROBLEM

### User Journey (Current - Confusing)
```
User lands on homepage
  ↓
Sees "Choose Your Theme" (6 cards: Still, Serene, Stream, Cascade, Rapids, Tsunami)
  ↓
Sees "Customize Theme" button
  ↓
Clicks gear icon (settings)
  ↓
Drawer opens: "Customize" heading
  ↓
Inside: "Theme" section (7 buttons - now includes "Flowing")
  ↓
CONFUSION: Same things as hero grid but different count + different label context
  ↓
Below: "Appearance" section (Mode toggle, Contrast toggle)
  ↓
Below: "Overrides" section (Animation speed, Color palette, Accent color)
  ↓
User thinks: "So I can customize these presets... but what's the difference between 
  this 'Customize' and the 'Customizer' in the nav?"
  ↓
Clicks "Customizer" in nav
  ↓
"Coming Soon" page
  ↓
User leaves confused ❌
```

### Root Causes
1. **"Theme" is overloaded**: Used for motion presets, but users expect "theme" to mean a complete redesign
2. **Multiple customization entry points**: Gear icon + Customize button + nav Customizer = unclear hierarchy
3. **Settings panel mixing concepts**: Motion presets + light/dark mode + color picker = unclear what customizes what
4. **Missing documentation**: No explanation of how these pieces fit together
5. **Incomplete product**: Customizer "Coming Soon" for 2+ phases = incomplete mental model

---

## 4. ECOSYSTEM DECLARATION

### What is Fluid?

Fluid is a **CSS-first design system** built on physics-based motion principles. It has four layers:

#### Layer 1: Foundation (Always Included)
The core that's never customized:
- Semantic HTML reset (modern, not Normalize)
- Base typography (typographic scale, line heights)
- Base components (buttons, cards, forms - unstyled)
- Spacing system (token-based, logical properties)
- Accessibility foundations (focus states, screen reader support)

**User choice**: None - this is always there

---

#### Layer 2: Motion Presets (Choose ONE)

Each motion preset is a **complete styling approach** combining:
- **Motion timing** (300ms → 900ms, based on Reynolds numbers)
- **Color harmony** (subtle to bold saturation shifts, matched to preset mood)
- **Typography** (font families + weights + spacing rhythm matched to preset)
- **Component personality** (shadows, border radius, gaps, transitions for that preset's vibe)
- **Layout personality** (how components interact, staggering, overlaps)

**The Key Insight**: All 9 presets use the same HTML. We only change CSS.

### 9 Motion Presets (Current + New)

#### Existing 7 Presets

| # | Name | Reynolds | Speed | Vibe | Use Case |
|---|------|----------|-------|------|----------|
| 1 | **Still** | 0 | Instant | Swiss precision, minimal, no motion | Corporate, minimal brands |
| 2 | **Serene** | ~100 | 300-450ms | Contemplative, slow, gentle fades | Wellness, luxury, beauty |
| 3 | **Stream** | ~100 | 300ms | Modern, clean, horizontal emphasis | SaaS, tech, startups |
| 4 | **Flowing** | ~1000 | 300ms | Balanced, organic, default | General purpose, default |
| 5 | **Cascade** | ~1000 | 450ms | Playful, friendly, waterfall stagger | Education, creative, playful brands |
| 6 | **Rapids** | ~5000 | 700ms | Energetic, turbulent, sporty | Sports, fitness, action |
| 7 | **Tsunami** | ~50000 | 900ms | Bold, dramatic, high impact | Entertainment, gaming, maximalist |

#### NEW: 8th Preset - "Drift"

**Personality**: Zen, contemplative, spacious, glacial

**Reynolds Number**: N/A (intentionally slow, no turbulence)

**Motion Timing**:
- All animations: 600-800ms
- Easing: `ease-out` (decelerate) - things settle
- Interaction delays: 100-200ms between cascades
- Hover effects: Very subtle, slow

**Color Approach**:
- Monochromatic base (grays + whites)
- Single accent color (muted, low saturation)
- Lots of negative space
- Very high contrast (accessibility-focused)

**Typography**:
- Serif fonts (Georgia, Lora, or similar) for body
- Generous line-height (1.8-2.0)
- Large letter-spacing (0.05em+)
- Tall x-height fonts
- Slower reading pace intentional

**Component Styling**:
- Large rounded corners (32px+)
- Soft shadows only (0 2px 8px rgba, etc.)
- Generous padding (space-7, space-8)
- Large gaps between sections (space-9)
- Minimal visual density
- Very subtle color shifts on hover
- Long-form content preferred

**Layout Personality**:
- Lots of whitespace
- Elements well-separated
- Cards feel floated, not constrained
- Generous button padding (space-4 inside)
- Slow reveal animations on scroll
- Breathing room everywhere

**Sample Code Attribute**:
```html
<body data-preset="drift" data-palette="subtle">
```

**Brands/Industries**:
- Meditation & mindfulness apps
- Luxury goods
- Academic/research institutions
- High-end design agencies
- Mental health apps
- Spa/wellness centers

**Why Different**: MAXIMUM contrast to "Tsunami" - makes existing presets look hyperactive by comparison

---

#### NEW: 9th Preset - "Glitch"

**Personality**: Digital, playful, intentionally broken, retro-futuristic

**Reynolds Number**: Chaotic (inconsistent)

**Motion Timing**:
- Inconsistent: Some 200ms, some 500ms, some instant
- Easing: Mix of `cubic-bezier` values (some bouncy, some snappy)
- Staggering: Irregular delays (not linear)
- Jittery effects: Subtle shake, flicker on hover

**Color Approach**:
- High saturation primaries
- Clashing complementary colors
- 80s/90s inspiration but modern execution
- RGB-channel separated effects (red/green/blue shift on hover)
- Neon accents

**Typography**:
- Mix of monospace (Monaco, Courier, SF Mono) and sans-serif
- Uneven baselines intentionally
- Some text rotated (-2deg, 3deg)
- Variable font weights in same word
- Intentionally "broken" baseline alignment
- Pixel-art inspired sizing

**Component Styling**:
- Skewed transforms (some components at 3-5deg angles)
- Stacked box shadows (multiple shadows at different offsets)
- Intentional misalignment (grid offset by 1-2px)
- Glitch effects on hover (SVG filters, RGB channel shifts)
- Thick, pixelated borders
- High contrast colors
- Flashing animations on certain states

**Layout Personality**:
- Asymmetrical grid
- Overlapping cards (intentional z-index chaos)
- Broken lines and incomplete borders
- Text wrapping unnaturally
- Components that look "off"
- Intentional visual errors as design feature

**Sample Code Attribute**:
```html
<body data-preset="glitch" data-palette="bold">
```

**Brands/Industries**:
- Crypto/Web3 projects
- Indie game studios
- Experimental art/music
- Gen-Z focused brands
- Hacker/dev community
- Anti-establishment brands

**Why Different**: MAXIMUM contrast to "Still" - rules vs chaos, minimal vs maximal

---

### Layer 3: Customization (Fine-tune your Motion Preset)

**NOT building an infinite customizer** - constraint is intentional.

Users can customize:
- **Animation speed** (Still, Serene, Trickling, Flowing, Rapids, Tsunami - override the preset's timing)
- **Color palette** (9 options: Fluid, Morandi, Bold, Pastel, Earth, Mono, 80s, Matrix, Subtle)
- **Accent color** (6 colors per palette, usually mapped to teal/blue/red/etc.)
- **Contrast mode** (Normal or Subdued - low contrast for accessibility)
- **Light/Dark mode** (Light, Dark, Auto - follow system)

**What customization DOES NOT change**:
- Typography (fonts stay with the preset)
- Component shapes (radius, shadows stay with preset)
- Layout philosophy (gaps, staggering, etc.)

**Why this constraint**: 
- Prevents users from creating ugly combinations
- Keeps file size small
- Maintains design system integrity
- Faster than full customizer

---

#### Appearance Panel (Gear Icon)
**Purpose**: Quick customization without leaving the page

**Sections**:
1. **Motion Preset** (7 buttons - or 9 when new ones added)
2. **Appearance** (Light/Dark/Auto + Subdued toggle)
3. **Overrides** (Animation speed + Color palette + Accent color)

**Stores**: In localStorage + URL params (so you can share links)

---

#### Advanced Customizer (Coming Soon - "Customizer" nav button)
**Purpose**: Full CSS builder for power users

**Features**:
- Real-time preview of CSS changes
- Export custom CSS file
- Generate starter HTML template
- Save presets (logged-in users only)
- Share presets (community library)

**Revenue Model**:
- Free: Download custom CSS
- Premium ($9-19): Save unlimited presets, priority support, advanced features
- Enterprise: White-label, custom branding

---

### Layer 4: Theme Bundles (Future - Post-Phase 3)

**What it is**: Complete visual redesigns that use Fluid's motion system but look entirely different

**Examples** (concepts):
- **SaaS Theme**: Professional, data-focused, dashboard-ready
- **Agency Theme**: Bold, portfolio-focused, image-heavy
- **eCommerce Theme**: Product showcase, shopping-focused, conversion-optimized

**Key difference from Motion Presets**:
- Motion Presets = Same HTML, different CSS styling
- Theme Bundles = Different HTML, different component layout, different visual language

**They would include**:
- Custom component designs (buttons, cards, forms look different)
- Different layout examples
- Integration guides
- Premium pricing ($29-49 per bundle)

---

## 5. ARCHITECTURE & LAYERS DIAGRAM
```
┌─────────────────────────────────────────────────────────────┐
│                   FLUID FRAMEWORK                            │
└─────────────────────────────────────────────────────────────┘

LAYER 4: THEME BUNDLES (Future)
   └─ SaaS Theme | Agency Theme | eCommerce Theme
   └─ Complete redesigns using Fluid motion system

LAYER 3: CUSTOMIZATION
   ├─ Quick: Appearance Panel (animation speed, palette, accent)
   └─ Advanced: Advanced Customizer (export CSS, save presets)

LAYER 2: MOTION PRESETS (Choose 1 of 9)
   ├─ Still      (Swiss, minimal)
   ├─ Serene     (Gentle, slow)
   ├─ Stream     (Modern, horizontal)
   ├─ Flowing    (Balanced, default)
   ├─ Cascade    (Playful, waterfall)
   ├─ Rapids     (Energetic, fast)
   ├─ Tsunami    (Bold, dramatic)
   ├─ Drift      (Zen, spacious) [NEW]
   └─ Glitch     (Digital, playful) [NEW]

LAYER 1: FOUNDATION (Always Included)
   ├─ Reset (semantic, modern)
   ├─ Base components (unstyled HTML)
   ├─ Typography system
   ├─ Spacing tokens
   └─ Accessibility foundations
```

---

## 6. MOTION PRESETS DETAILS

### How Motion Presets Work

Each preset is a **complete, coordinated package**:
```
Motion Preset = Motion Timing + Colors + Typography + Component Personality
```

**Example: "Serene" vs "Rapids"**

| Aspect | Serene | Rapids |
|--------|--------|--------|
| Motion timing | 300-450ms | 700ms |
| Easing | ease-out (smooth) | cubic-bezier bouncy |
| Color saturation | Low (muted) | High (vibrant) |
| Font choice | Serif elegant (Lora) | Sans sans-serif bold (Archivo) |
| Button padding | space-5 (relaxed) | space-3 (compact) |
| Gap between cards | space-8 (generous) | space-4 (tight) |
| Shadows | Soft (0 4px 12px) | Harsh (0 8px 24px) |
| Border radius | 24px (rounded) | 4px (sharp) |

**Why coordinated**: A user who selects "Serene" gets a COMPLETE mood, not just "slow animation."

---

## 7. TERMINOLOGY REFERENCE

### Old vs New

| Old Term | New Term | Context | Definition |
|----------|----------|---------|------------|
| Theme | Motion Preset | Global | One of 9 motion styles (Still, Serene, etc.) |
| Customize (gear icon section) | Motion Preset Selection | UI | Settings panel section where you pick preset |
| Customizer | Advanced Customizer | UI | Coming Soon tool for custom CSS export |
| Palette | Color Palette | Global | One of 9 color schemes (Fluid, Morandi, etc.) |
| Templates | Starter Templates | UI | Pre-built page layouts |
| Child Theme | Theme Bundle | Future | Complete redesign package (SaaS, Agency, etc.) |
| Settings Panel | Appearance Panel | UI | Gear icon drawer for quick customization |

### What to Call Things in Your Code

**In code/docs**:
- Variable: `--data-preset="still"` (motion preset)
- Variable: `--data-palette="fluid"` (color palette)
- Variable: `--data-theme="dark"` (light/dark mode - but consider renaming to `--data-mode`)
- Variable: `--data-contrast="normal"` (normal/subdued)

**In UI labels**:
- Heading: "Choose Your Motion Preset" (not "Theme")
- Section: "Motion Preset" (in settings panel)
- Section: "Color Palette" (in settings panel)
- Section: "Appearance Mode" (Light/Dark toggle)

---

## 8. INFORMATION ARCHITECTURE CHANGES

### Current Navigation
```
Fluid
├── Templates ▼
│   ├── Overview
│   ├── About
│   ├── Services
│   ├── Gallery
│   ├── Blog
│   ├── Pricing
│   ├── FAQ
│   └── Contact
├── Theme ▼                    ← CONFUSING NAME
│   ├── Foundation
│   ├── Components
│   ├── Layouts
│   ├── Heroes
│   └── Hero Picker
├── Customizer                 ← SHOULD SAY "Advanced Customizer"
├── [Settings gear icon]       ← Appearance Panel
└── [Theme toggle]             ← Dark mode
```

### RECOMMENDED Navigation

**Option A (Preferred)**:
```
Fluid
├── Starter Templates ▼        ← Clarified
│   ├── Overview
│   ├── About
│   ├── Services
│   ├── Gallery
│   ├── Blog
│   ├── Pricing
│   ├── FAQ
│   └── Contact
├── Explore ▼                  ← Renamed from "Theme"
│   ├── Foundation
│   ├── Components
│   ├── Layouts
│   ├── Heroes
│   └── Hero Picker
├── Advanced Customizer        ← Clarified (Coming Soon)
├── [Settings gear icon]       ← Appearance Panel (unchanged)
└── [Theme toggle]             ← Dark mode (unchanged)
```

**Option B (Alternative)**:
```
Fluid
├── Templates ▼
│   ├── Overview
│   ├── About
│   ├── Services
│   ├── Gallery
│   ├── Blog
│   ├── Pricing
│   ├── FAQ
│   └── Contact
├── Documentation ▼            ← New section
│   ├── Foundation
│   ├── Components
│   ├── Layouts
│   ├── Heroes
│   └── Hero Picker
├── Customizer
├── [Settings icon]
└── [Theme toggle]
```

**Recommendation**: **Option A** - "Explore" is clear and doesn't conflict with other "Theme" references

---

### Homepage Changes

#### Current
- Hero grid shows 6 presets: Still, Serene, Stream, Cascade, Rapids, Tsunami
- Heading: "Choose Your Theme"
- Missing: Flowing, Drift, Glitch

#### Recommended
- Hero grid shows ALL 9 presets
- Heading: "Choose Your Motion Preset"
- Tooltip on hover: "Complete styling: motion + colors + typography"
- Small tag: "7 Foundation Presets" vs "New Experimental Presets" (Drift & Glitch)

#### Homepage Copy Updates

**Current**:
> "7 Complete Themes - Motion, colors, fonts, layout"

**New**:
> "9 Motion Presets - Animation timing, color harmony, typography, and layout personality"

---

### Settings Panel Changes

#### Current
```
[Customize] heading
├── Theme (7 buttons)
├── Appearance (Light/Dark)
├── Overrides
│   ├── Animation speed
│   ├── Color palette
│   └── Accent color
└── Reset button
```

#### Recommended
```
[Appearance Settings] heading
├── Motion Preset (9 buttons)          ← Renamed from "Theme"
├── Appearance Mode (Light/Dark)       ← Clarified
├── Customization
│   ├── Animation speed override
│   ├── Color palette
│   ├── Accent color
│   └── Contrast (Normal/Subdued)      ← Moved here
└── Reset to Defaults button
```

---

## 9. IMPLEMENTATION CHECKLIST

### Phase 1: Terminology & Documentation (1 week)

- [ ] **Create Ecosystem Declaration document** (this file)
- [ ] **Publish on site**: /guides/ecosystem.html
- [ ] **Update navigation**:
  - [ ] Change "Theme" dropdown to "Explore"
  - [ ] Change "Customizer" to "Advanced Customizer"
  - [ ] Update labels in HTML
- [ ] **Update homepage**:
  - [ ] Change heading "Choose Your Theme" → "Choose Your Motion Preset"
  - [ ] Update feature text
  - [ ] Add all 9 presets to hero grid (when 8 & 9 are ready)
- [ ] **Update settings panel**:
  - [ ] Rename "Theme" section to "Motion Preset"
  - [ ] Rename "Customize" drawer heading to "Appearance Settings"
  - [ ] Add descriptive text explaining what each section does
- [ ] **Create getting started guide**: /guides/getting-started.html
- [ ] **Update GitHub README** with new terminology

---

### Phase 2: 8th & 9th Preset Design & CSS (2 weeks)

#### Preset 8: "Drift" (Zen, Minimal, Spacious)
- [ ] **Design mockups**: Home, components, hero sections in Drift style
- [ ] **Create CSS tokens** for Drift:
  - [ ] Motion timing (600-800ms, ease-out)
  - [ ] Color palette (monochromatic + accent)
  - [ ] Typography (serif, generous spacing)
  - [ ] Component styles (large radius, soft shadows)
- [ ] **Implement CSS**: `src/presets/drift.css` (or add to existing token system)
- [ ] **Test across browsers**
- [ ] **Add to settings panel** (enable via button)

#### Preset 9: "Glitch" (Digital, Playful, Broken)
- [ ] **Design mockups**: Home, components, hero sections in Glitch style
- [ ] **Create CSS tokens** for Glitch:
  - [ ] Motion timing (inconsistent, chaotic)
  - [ ] Color palette (high saturation, clashing)
  - [ ] Typography (monospace mix, rotated, broken baseline)
  - [ ] Component styles (skew, stack shadows, glitch effects)
- [ ] **Implement CSS**: `src/presets/glitch.css`
- [ ] **Add SVG filters** for glitch effect (if needed)
- [ ] **Test across browsers** (especially motion + transforms)
- [ ] **Add to settings panel** (enable via button)

---

### Phase 3: Browser Compatibility Fixes (1 week)

- [ ] **Add OKLCH fallback**: Create hex fallback for older browsers
- [ ] **Add View Transitions graceful degradation**:
  - [ ] Detect browser support
  - [ ] Fallback to standard page transitions
  - [ ] Test in Firefox + Safari
- [ ] **Add CSS Layers fallback**: Ensure code works without @layer
- [ ] **Test matrix**: Chrome, Firefox, Safari, Safari iOS
- [ ] **Create browser support matrix** for documentation
- [ ] **Add polyfills** if needed (unlikely for CSS-only)

---

### Phase 4: Accessibility Improvements (1 week)

- [ ] **Keyboard navigation audit**:
  - [ ] Tab through all pages
  - [ ] Verify logical tab order
  - [ ] Test Shift+Tab (reverse)
  - [ ] Test Enter/Space on buttons
- [ ] **Focus state verification**:
  - [ ] Focus rings visible on all browsers
  - [ ] Contrast ratio meets WCAG AA (4.5:1 for text, 3:1 for graphics)
  - [ ] Focus visible outline at least 2px
- [ ] **Reduced motion testing**:
  - [ ] Set `prefers-reduced-motion: reduce` in browser
  - [ ] Verify animations disable/simplify
  - [ ] Test on all presets
- [ ] **Screen reader testing**:
  - [ ] Test with VoiceOver (Mac) + NVDA (Windows if possible)
  - [ ] Verify form labels announce
  - [ ] Verify buttons announce purpose
  - [ ] Test settings panel navigation
- [ ] **Update accessibility docs**: /guides/accessibility.html

---

### Phase 5: Advanced Customizer Build (3-4 weeks)

- [ ] **Design customizer UI**: Real-time preview + export
- [ ] **Build preview engine**: Live CSS rendering
- [ ] **Implement color picker**: OKLCH sliders or hex input
- [ ] **Implement motion speed slider**: Override animation timing
- [ ] **Export functionality**:
  - [ ] Generate custom CSS file
  - [ ] Generate HTML starter template
  - [ ] Copy-to-clipboard code blocks
- [ ] **Save presets** (authenticated users):
  - [ ] Database schema
  - [ ] Login flow
  - [ ] Preset management UI
- [ ] **Community library** (future):
  - [ ] Browse saved presets
  - [ ] Like/fork presets
  - [ ] Share presets
- [ ] **Testing**: Cross-browser, mobile-friendly

---

### Phase 6: Documentation & Launch (2 weeks)

- [ ] **Create comprehensive docs site**:
  - [ ] Getting started
  - [ ] Component API reference
  - [ ] Motion system explained
  - [ ] Color palette guide
  - [ ] Customization guide
  - [ ] Browser support
  - [ ] Troubleshooting FAQ
- [ ] **Create video tutorials**:
  - [ ] "What is Fluid?" (1 min)
  - [ ] "Choose your motion preset" (2 min)
  - [ ] "Customize appearance" (3 min)
  - [ ] "Build with Fluid" (5 min)
- [ ] **Marketing assets**:
  - [ ] Before/after comparisons (all 9 presets)
  - [ ] Brand case studies
  - [ ] Social media graphics
- [ ] **Launch checklist**:
  - [ ] Performance audit (Lighthouse)
  - [ ] Final QA testing
  - [ ] Deploy to production
  - [ ] Announce on social + Product Hunt

---

## 10. NEXT STEPS

### Immediate (This week)
1. ✅ **Review this Ecosystem Declaration**
   - Feedback on 8th/9th presets?
   - Navigation changes OK?
   - Terminology clear?

2. **Design 8th & 9th preset mockups**
   - Drift (Zen, minimal, spacious)
   - Glitch (Digital, playful, broken)
   - Get stakeholder approval

3. **Publish Ecosystem Declaration**
   - Add to `/guides/ecosystem.html` on site
   - Commit to GitHub as `ECOSYSTEM_DECLARATION.md`

### Short term (Weeks 2-3)
4. **Implement terminology changes**
   - Navigation updates
   - Homepage copy updates
   - Settings panel labels

5. **Build 8th & 9th presets**
   - CSS implementation
   - Browser testing
   - Settings panel integration

### Medium term (Weeks 4-6)
6. **Phase 2 Browser compatibility fixes**
7. **Accessibility audit & improvements**

### Longer term (Weeks 7+)
8. **Advanced Customizer**
9. **Comprehensive documentation**
10. **Launch & marketing**

---

## APPENDIX: FILE STRUCTURE AFTER CHANGES
```
fluid-framework/
├── _docs/
│   ├── ECOSYSTEM_DECLARATION.md     ← YOU ARE HERE
│   ├── GETTING_STARTED.md           ← NEW
│   ├── ACCESSIBILITY.md             ← NEW
│   ├── BROWSER_SUPPORT.md           ← NEW
│   └── DEVELOPMENT.md               ← Existing
│
├── _includes/
│   ├── settings-panel.html          ← UPDATED (terminology)
│   ├── nav.html                     ← UPDATED (navigation)
│   └── scripts.html                 ← No change needed
│
├── src/
│   ├── core/
│   │   ├── reset.css
│   │   ├── tokens.css               ← UPDATED (add drift + glitch tokens)
│   │   └── base.css
│   ├── presets/
│   │   ├── drift.css               ← NEW
│   │   └── glitch.css              ← NEW
│   ├── components/
│   ├── layouts/
│   └── fluid.css
│
├── examples/
│   ├── drift/                       ← NEW (showcase all pages in Drift)
│   │   ├── index.html
│   │   ├── foundation.html
│   │   └── ...
│   ├── glitch/                      ← NEW (showcase all pages in Glitch)
│   │   ├── index.html
│   │   ├── foundation.html
│   │   └── ...
│   └── [existing]
│
├── guides/                          ← NEW directory
│   ├── ecosystem.html               ← NEW
│   ├── getting-started.html         ← NEW
│   ├── accessibility.html           ← NEW
│   └── browser-support.html         ← NEW
│
└── README.md                        ← UPDATED (terminology)
```

---

## QUESTIONS FOR APPROVAL

Before we move forward, please confirm:

1. ✅ **Terminology**: Do you approve "Motion Preset" instead of "Theme"?
2. ✅ **Navigation**: Should we use "Explore" instead of "Theme" dropdown?
3. ✅ **Presets 8 & 9**: Do Drift & Glitch feel like the right direction?
   - Drift = Zen/spacious/minimal? ✓ or change concept?
   - Glitch = Digital/playful/broken? ✓ or change concept?
4. ✅ **Layering**: Does the 4-layer ecosystem model make sense?
5. ✅ **Timeline**: Does the implementation checklist feel realistic?

---

## DOCUMENT METADATA

- **Created**: January 28, 2026
- **Status**: DRAFT (awaiting approval)
- **Next Review**: After feedback round
- **Maintained By**: [Your name/team]
- **GitHub Path**: `/docs/ECOSYSTEM_DECLARATION.md`
- **Version**: 1.0

---

*End of Ecosystem Declaration*