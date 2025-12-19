# Gemini Prompt: Creating Fluid Framework Child Themes

Copy this prompt into Gemini (or any AI assistant) to help it understand how to create child themes for the Fluid Framework.

---

## The Prompt

```
You are an expert CSS designer specializing in modern CSS features. I need you to help me create a child theme for the Fluid Framework - a modern, semantic CSS design system.

## About Fluid Framework

Fluid Framework uses:
- **OKLCH color space** for perceptually uniform colors
- **CSS custom properties** (variables) for all theming
- **Logical properties** (inline/block instead of left/right)
- **Data attributes** for variants (data-theme, data-accent, data-motion)
- **CSS @layer** for proper cascade control

## How Theming Works

Child themes only need to override a few CSS custom properties. The framework automatically derives all other colors mathematically.

### Minimum Required Variables

To create a complete theme, you only need to set:

```css
[data-accent="your-theme-name"] {
  /* Primary accent color - used for buttons, links, focus states */
  --accent: oklch(L% C H);

  /* Automatically calculated variants (optional overrides) */
  --accent-subtle: oklch(95% 0.03 H);    /* Very light tint for backgrounds */
  --accent-hover: oklch(L-10% C+0.02 H); /* Darker for hover states */
  --accent-active: oklch(L-15% C H);     /* Even darker for active/pressed */
}
```

### OKLCH Color Values

OKLCH uses three values:
- **L (Lightness)**: 0% = black, 100% = white
- **C (Chroma)**: 0 = gray, ~0.4 = maximum saturation
- **H (Hue)**: 0-360 degrees on the color wheel
  - 0/360 = Red
  - 30 = Orange
  - 55 = Yellow/Gold
  - 145 = Green
  - 200 = Cyan/Teal
  - 260 = Blue
  - 300 = Purple/Violet
  - 330 = Pink/Magenta

### Full Theme Override (Optional)

For complete control over light/dark appearance:

```css
[data-theme="your-theme"][data-accent="your-theme"] {
  /* Theme foundation */
  --theme-dark: oklch(15% 0.02 H);   /* Darkest color */
  --theme-light: oklch(98% 0.01 H);  /* Lightest color */

  /* Optional: Add warmth/coolness to grays */
  --theme-chroma: 0.01;  /* Subtle color in grays */
  --theme-hue: H;        /* Match accent hue */
}
```

## Example Child Themes

Here are example accent presets from the framework:

```css
/* Coral - Warm, vibrant energy */
[data-accent="coral"] {
  --accent: oklch(65% 0.18 25);
  --accent-subtle: oklch(95% 0.04 25);
  --accent-hover: oklch(55% 0.20 25);
  --accent-active: oklch(45% 0.18 25);
}

/* Vapor - Soft, ethereal purple */
[data-accent="vapor"] {
  --accent: oklch(55% 0.15 300);
  --accent-subtle: oklch(95% 0.03 300);
  --accent-hover: oklch(45% 0.17 300);
  --accent-active: oklch(40% 0.15 300);
}

/* Tide - Ocean blue-green */
[data-accent="tide"] {
  --accent: oklch(55% 0.12 200);
  --accent-subtle: oklch(95% 0.025 200);
  --accent-hover: oklch(45% 0.14 200);
  --accent-active: oklch(40% 0.12 200);
}
```

## What I Need

Create a child theme called "[THEME_NAME]" with the following characteristics:
- [Describe the mood/feeling: professional, playful, elegant, bold, etc.]
- [Describe color preferences: warm, cool, specific colors you like]
- [Any brand colors to match: provide hex codes if available]

Please provide:
1. The complete CSS for the accent preset
2. The color swatch button CSS (for the settings panel)
3. Optional: Full theme override for complete customization
4. A brief description of the color choices and their psychological impact
```

---

## Tips for Better Results

1. **Provide reference colors**: If you have brand colors, provide their hex codes. Gemini can convert them to OKLCH.

2. **Describe the mood**: Words like "professional", "playful", "elegant", "bold", "calming" help the AI choose appropriate chroma and lightness levels.

3. **Specify use case**: "For a law firm website" vs "For a children's game app" will yield very different palettes.

4. **Ask for variations**: Request "3 variations from subtle to bold" to explore options.

---

## Converting Hex to OKLCH

If you have brand colors in hex format, ask Gemini to convert them:

```
Convert these brand colors to OKLCH:
- Primary: #FF6B35
- Secondary: #004E64
```

---

## Advanced: Mathematical Color Relationships

OKLCH makes it easy to create harmonious palettes:

```css
/* Complementary: add 180 to hue */
--accent: oklch(55% 0.15 200);        /* Teal */
--accent-complement: oklch(55% 0.15 20); /* Coral (200 + 180 = 380 = 20) */

/* Triadic: add 120 to hue */
--color-1: oklch(55% 0.15 200);  /* Teal */
--color-2: oklch(55% 0.15 320);  /* Purple */
--color-3: oklch(55% 0.15 80);   /* Yellow-green */

/* Analogous: ±30 from hue */
--color-main: oklch(55% 0.15 200);  /* Teal */
--color-warm: oklch(55% 0.15 170);  /* Slightly warmer */
--color-cool: oklch(55% 0.15 230);  /* Slightly cooler */
```

---

## Example Request

Here's a complete example of asking Gemini to create a theme:

```
Using the Fluid Framework theming system described above, create a child theme called "Aurora" with these characteristics:

- Mood: Ethereal, magical, inspiring
- Colors: Northern lights inspired - greens, teals, and subtle purples
- Use case: Creative portfolio/art showcase

Please provide the complete CSS for both the accent preset and color swatch.
```
