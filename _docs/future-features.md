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

*Last updated: Dec 19, 2025*
