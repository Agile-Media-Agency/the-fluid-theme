# Gemini Prompt: Creating Fluid Framework Child Themes

Copy this prompt into Gemini (or any AI assistant) to help it understand how to create child themes for the Fluid Framework.

> **Note**: This prompt references v0.2.0 syntax. The framework is now at v0.3.x with 17 components. The core theming system (palettes, motion, tokens) is unchanged — the prompt remains valid for child theme creation.

---

## The Prompt

```
You are an expert CSS designer specializing in modern CSS features. I need you to help me create a child theme for the Fluid Framework - a modern, semantic CSS design system based on fluid dynamics physics.

## About Fluid Framework v0.2.0

Fluid Framework uses:
- **OKLCH color space** for perceptually uniform colors
- **CSS custom properties** (variables) for all theming
- **9 color palettes** (moods) with 6 colors each
- **6 motion styles** mapped to fluid dynamics (Reynolds numbers)
- **Motion-linked colors** in the Fluid palette
- **Data attributes** for all configuration
- **View Transitions API** for page transitions

## The Palette System

Fluid Framework v0.2.0 uses a palette-based theming system. Each palette provides 6 curated colors.

### Built-in Palettes

| Palette | Character | Use Case |
|---------|-----------|----------|
| `fluid` | Water colors (motion-linked) | Default, dynamic |
| `morandi` | Muted, sophisticated | Elegant, timeless |
| `bold` | Vibrant, saturated | High energy, attention |
| `pastel` | Soft, light | Calming, friendly |
| `earth` | Natural, warm | Organic, trustworthy |
| `mono` | Single hue (blue-gray) | Professional, focused |
| `80s` | Neon synthwave | Retro, nostalgic |
| `matrix` | Terminal greens | Digital, hacker |
| `subtle` | Trending feminine | Etsy/IG aesthetic |

### How to Apply

```html
<html data-palette="morandi" data-accent="3">
<!-- Uses the 3rd color from the Morandi palette -->
```

### The Fluid Palette (Special)

The Fluid palette auto-links colors to motion styles:

| Motion | Color | Inspiration |
|--------|-------|-------------|
| `still` | Slate gray | Still water reflecting sky |
| `serene` | Soft teal | Calm mountain lake |
| `trickling` | Light cyan | Gentle stream |
| `flowing` | Medium blue | Steady river |
| `rapids` | Deep teal | Whitewater |
| `tsunami` | Deep navy | Hokusai's Great Wave |

```html
<html data-palette="fluid" data-preset="tsunami">
<!-- Accent automatically becomes deep navy -->
```

## Creating a Custom Palette

To create a new palette, define 6 harmonious colors:

```css
/* ========================================
   [YOUR_PALETTE_NAME] Palette
   [Description of the mood/character]
   ======================================== */

[data-palette="your-palette"] {
  --palette-1: oklch(L% C H);  /* Color 1 - [description] */
  --palette-2: oklch(L% C H);  /* Color 2 - [description] */
  --palette-3: oklch(L% C H);  /* Color 3 - [description] */
  --palette-4: oklch(L% C H);  /* Color 4 - [description] */
  --palette-5: oklch(L% C H);  /* Color 5 - [description] */
  --palette-6: oklch(L% C H);  /* Color 6 - [description] */
}
```

### OKLCH Color Values

OKLCH uses three values:
- **L (Lightness)**: 0% = black, 100% = white
- **C (Chroma)**: 0 = gray, ~0.3 = vivid (max varies by hue)
- **H (Hue)**: 0-360 degrees
  - 0/360 = Red
  - 30 = Orange
  - 55 = Yellow/Gold
  - 145 = Green
  - 200 = Cyan/Teal
  - 260 = Blue
  - 300 = Purple
  - 330 = Pink

### Palette Design Tips

1. **Vary lightness** - Include light (70-85%) and dark (40-55%) options
2. **Consistent chroma** - Similar saturation levels feel cohesive
3. **Hue relationships** - Use analogous (±30°) or complementary (±180°) hues
4. **Test both modes** - Check colors in light AND dark mode

## Motion System

Fluid Framework has 6 motion styles based on fluid dynamics:

| Style | Reynolds # | Page Transition | Duration |
|-------|------------|-----------------|----------|
| `still` | 0 | Instant cut | 0ms |
| `serene` | Low | Ken Burns zoom + fade | ~1100ms |
| `trickling` | Low | Quick fade | ~640ms |
| `flowing` | Moderate | Horizontal push | ~800ms |
| `rapids` | High | Push-through-drag | ~1100ms |
| `tsunami` | Extreme | Rise-crest-crash | ~800ms |

### Rapids: Fluid Dynamics Effect

The Rapids transition simulates real physics:
- New content emerges from bottom
- Overlaps old content ~10%
- Old content lags (friction)
- New gains traction, pulls old away

### Tsunami: Wave Crash

Buttons in Tsunami mode have special physics:
- **Hover**: Swells 8% (surface tension)
- **Click**: Crashes down (breakthrough)
- **Leave**: Bounces and settles

### Motion Variables

Each motion level sets timing variables:

```css
[data-preset="rapids"] {
  --motion-scale: 1.5;
  --duration-fast: 250ms;
  --duration-normal: 450ms;
  --duration-slow: 650ms;
  --duration-slower: 808ms;
  --duration-slowest: 1107ms;
  --ease-fluid: cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy */
  --ease-settle: cubic-bezier(0.22, 1.4, 0.36, 1); /* Spring */
}
```

## Subdued Mode

Lower contrast for gentler viewing:

```css
[data-contrast="subdued"] {
  /* Softens text and background extremes */
  --color-text: var(--gray-30);      /* Less black */
  --color-background: var(--gray-95); /* Less white */
}
```

Apply: `<html data-contrast="subdued">`

## Status Indicator System

For scores and progress, use semantic status:

```html
<div class="progress" data-status="good" style="--progress-percent: 88%">
  <!-- Green progress bar at 88% -->
</div>

<span class="badge" data-status="moderate">Warning</span>
```

Status thresholds:
- `good`: ≥80%
- `moderate`: 60-79%
- `severe`: <60%

## Example Requests

### Request 1: Create a Brand Palette

```
Create a Fluid Framework palette called "aurora" with these characteristics:
- Mood: Ethereal, magical, inspiring
- Colors: Northern lights - greens, teals, purples
- Use case: Creative portfolio

Provide the complete CSS for the palette definition.
```

### Request 2: Full Child Theme

```
Create a complete Fluid Framework child theme called "corporate" for a law firm:
- Mood: Professional, trustworthy, serious
- Colors: Deep blues, subtle golds, neutral grays
- Should work well with both light and dark modes

Provide:
1. Palette definition with 6 colors
2. Recommended motion style
3. Whether subdued mode would suit this use case
```

### Request 3: Motion-Linked Palette

```
Create a Fluid Framework palette called "fire" that mirrors the Fluid palette concept but with fire/heat colors:
- `still` → Ash gray (cold embers)
- `serene` → Warm amber (candlelight)
- `trickling` → Orange glow
- `flowing` → Bright flame
- `rapids` → Intense red-orange
- `tsunami` → Deep crimson (volcanic)

Include the motion-to-color CSS mapping like Fluid palette has.
```

## Complete Palette Template

```css
/* ========================================
   [PALETTE_NAME] Palette for Fluid Framework
   [Description: mood, inspiration, use case]
   ======================================== */

[data-palette="palette-name"] {
  /* Primary/Default */
  --palette-1: oklch(55% 0.15 200);  /* [Name] - [description] */

  /* Secondary */
  --palette-2: oklch(60% 0.12 220);  /* [Name] - [description] */

  /* Tertiary */
  --palette-3: oklch(65% 0.10 180);  /* [Name] - [description] */

  /* Accent Light */
  --palette-4: oklch(70% 0.08 200);  /* [Name] - [description] */

  /* Accent Dark */
  --palette-5: oklch(45% 0.18 210);  /* [Name] - [description] */

  /* Special/Pop */
  --palette-6: oklch(50% 0.20 260);  /* [Name] - [description] */
}

/* Optional: Add to settings panel dropdown */
/* In settings-panel.html, add:
   <option value="palette-name">Palette Name (Description)</option>
*/
```

## Converting Existing Brand Colors

If you have hex colors:

```
Convert these brand colors to OKLCH for a Fluid Framework palette:
- Primary: #1A5F7A
- Secondary: #159895
- Accent: #57C5B6
- Light: #9EE6CF
```

## Tips for Best Results

1. **Describe the mood** - "Professional", "playful", "ethereal" helps choose chroma/lightness
2. **Specify use case** - "Law firm" vs "children's app" yields different palettes
3. **Mention motion preference** - Some palettes pair better with certain motions
4. **Ask for variations** - "3 options from subtle to bold"
5. **Test both themes** - Request light AND dark mode compatibility
```

---

## For ThatOne.App Integration

When creating a child theme for ThatOne.App specifically:

1. **Start with palette selection** - Choose from 9 built-in or create custom
2. **Consider motion** - What energy level fits the app's purpose?
3. **Set defaults** - Which palette color is the default accent?
4. **Subdued option** - Is lower contrast appropriate for the use case?

### Example: ThatOne.App Theme Request

```
Create a Fluid Framework child theme for ThatOne.App with:
- App type: [productivity/creative/social/etc.]
- Brand colors: [provide hex codes if available]
- Mood: [describe the feeling]
- Target users: [who uses this app?]

I need:
1. Custom palette OR recommendation from built-in palettes
2. Recommended motion style
3. Default accent color (1-6)
4. Whether to enable subdued mode
5. Complete CSS if custom palette
```

---

*Updated for Fluid Framework v0.2.0 - December 2024*
