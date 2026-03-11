# Future Features & Considerations

Ideas and enhancements to consider for future versions of Fluid Framework.

---

## Content Presentation Modes

### Flowing Navigation (Carousel-style)

**Concept:** A "UX style" separate from animation presets where prev/next pages are partially visible, creating a connected browsing experience like a horizontal carousel.

**Features:**
- Previous and next pages visible at edges
- Left/right navigation arrows
- Swipe gestures on mobile
- Content appears connected rather than separate

**Considerations:**
- This is a **content presentation mode**, not just an animation preset
- Could be combined with any animation style (or limited to compatible ones)
- Requires significant layout changes (viewport handling, page stacking)
- May need JavaScript for navigation state management

**Implementation approach:**
- `data-navigation="flowing"` attribute on `<html>`
- CSS transforms to position adjacent pages
- Intersection Observer for lazy loading
- History API integration for URL updates

---

## Preset System Enhancements

### User-Generated Presets

**Concept:** Allow users to create, save, and share their own presets. The system could eventually support hundreds of community presets.

**Features:**
- Save current settings as a named preset
- Export/import presets as JSON or URL parameters
- Community preset gallery
- Rating/favoriting system
- Preset categories/tags for discoverability

**Implementation approach:**
- Presets stored in localStorage for local use
- Optional account system for cloud sync
- Shareable preset URLs (encode settings in query params)
- API for community preset submission

### Masonry/Bento-Box Grid Layouts

**Concept:** A new preset (or layout mode) that implements masonry/freestyle grid layouts, similar to Pinterest or Notion gallery views.

**Features:**
- Variable-height items flow naturally
- Items span multiple columns/rows (bento-box style)
- Perfect for Editorial preset's literary feel
- Could be a standalone 11th preset: "Mosaic" or "Gallery"

**Considerations:**
- Pure CSS masonry (using `grid-template-rows: masonry`) has limited support
- May need JS fallback (Masonry.js, CSS Columns approach)
- Works well for image galleries, blog grids, portfolio items

### Full Customizer vs Preset Combinator

**Concept:** Clarify naming for two distinct customization approaches:

1. **Preset Combinator** (current drawer)
   - Mix motion + palette + accent from existing presets
   - Quick switching between complete looks
   - Non-destructive, preset-based

2. **Full Customizer** (future)
   - WYSIWYG visual editor
   - Modify individual CSS tokens
   - Create entirely custom themes
   - More complex, power-user focused

**Implementation:**
- Rename current drawer to "Preset Mixer" or "Quick Customize"
- Build separate `/customizer.html` page for full customizer
- Full customizer could output exportable CSS

### Preset Grid Enhancements

**Concept:** Improvements to the homepage hero grid as preset count grows.

**Features:**
- Toggle between preview thumbnails vs landing page screenshots
- Lazy loading for performance with 100+ presets
- Search/filter presets by name or style
- Pagination or infinite scroll for large preset libraries
- Preset comparison mode (side-by-side view)

---

## Motion System Enhancements

### Direction Options

Allow users to choose transition direction for each motion style:

```html
<html data-motion="flowing" data-motion-direction="rtl">
```

Options:
- `ltr` - Left to right (default for Flowing)
- `rtl` - Right to left
- `ttb` - Top to bottom (default for Rapids)
- `btt` - Bottom to top

### Custom Motion Presets

Allow child themes to define their own motion presets:

```css
[data-motion="custom-bounce"] {
  --motion-scale: 1.3;
  --duration-normal: 400ms;
  --ease-fluid: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

---

## Versioning & Changelog

### Auto-generated Changelog

- Parse git commits to generate changelog
- Semantic versioning with breaking change warnings
- Version comparison tool ("what changed between 0.1.0 and 0.2.0?")

### Breaking Change Detection

- Automated detection of removed CSS custom properties
- Migration guides for major versions
- Deprecation warnings in console

---

## Child Theme Generator (ThatOne.App Integration)

### Features

- Visual color picker with OKLCH preview
- Live preview of theme changes
- Export as CSS file or npm package
- Integration with Fluid Framework documentation

### Cross-promotion

- "Powered by Fluid Framework" badge
- Link to thefluidtheme.com from generated themes
- Showcase of community themes

---

## Accessibility Enhancements

### Reduced Motion Improvements

- More granular control (reduce vs remove)
- Per-component motion preferences
- "Essential motion only" mode

### High Contrast Mode

- Enhanced border visibility
- Increased color contrast ratios
- Optional outline mode for all interactive elements

---

## Performance Optimizations

### Critical CSS Extraction

- Tool to extract above-the-fold CSS
- Inline critical styles, defer the rest
- Per-page CSS splitting

### Token Optimization

- Unused token removal for production
- CSS custom property minification
- Tree-shaking for components

---

## Documentation Improvements

### Interactive Examples

- Editable code examples
- Live preview in documentation
- Copy-to-clipboard for all code blocks

### Component Playground

- Mix and match component variants
- Generate code from visual builder
- Share configurations via URL

---

*Last updated: Feb 17, 2026*
