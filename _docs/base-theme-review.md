# Base Theme Review

Pre-release review of Fluid Framework v0.1.x for use with ThatOne.App redesign.

**Reviewed:** Dec 19, 2025

---

## Overall Assessment

**Status:** Ready for initial use ✓

The base theme is solid and well-structured. The OKLCH color system, CSS custom properties architecture, and component library provide a strong foundation.

---

## Strengths

### Architecture
- Clean layer system (`@layer reset, tokens, base, layouts, components, themes, utilities`)
- Consistent naming conventions (BEM-inspired)
- Good use of CSS custom properties with fallbacks
- Container queries for truly responsive components

### Color System
- OKLCH provides perceptually uniform colors
- Mathematical color derivation (accent-subtle, accent-hover, etc.)
- Easy theming with just 2-3 variables

### Motion System
- Water-themed motion levels are unique and memorable
- Ken Burns effect for Serene is elegant
- Respects `prefers-reduced-motion`

### Accessibility
- Skip link included
- Focus visible styles throughout
- Proper ARIA attributes in examples
- High contrast mode adjustments

---

## Areas to Watch During Testing

### 1. Dark Mode Form Inputs ✓ Fixed
- Issue: Focus tint was barely visible on dark backgrounds
- Solution: Increased color-mix percentage from 7% to 15% in dark mode

### 2. Dark Mode Elevated Cards ✓ Fixed
- Issue: Shadow barely visible on dark backgrounds
- Solution: Now uses accent-colored glow instead of dark shadow

### 3. Hero Picker Transitions ✓ Fixed
- Issue: Bouncy page transitions looked odd for same-page updates
- Solution: Preview now uses simple crossfade for all motion levels

### 4. View Transitions Browser Support
- View Transitions API is Chrome-only (as of Dec 2025)
- Safari/Firefox will get instant transitions (graceful fallback)
- Monitor adoption and consider polyfill if needed

### 5. OKLCH `color-mix` Support
- Requires modern browsers (Chrome 111+, Safari 16.2+, Firefox 113+)
- No fallback provided - intentional progressive enhancement
- Consider fallbacks for critical colors if targeting older browsers

---

## Potential Improvements for Future Versions

### Components to Add
- [ ] Modal/Dialog component (native `<dialog>` enhanced)
- [ ] Toast/Notification component
- [ ] Tabs component
- [ ] Dropdown/Menu component
- [ ] Breadcrumb component
- [ ] Pagination component
- [ ] Badge/Tag component
- [ ] Avatar component

### Enhancements
- [ ] More button variants (success, warning, info)
- [ ] Input group prefixes/suffixes
- [ ] Floating labels for inputs
- [ ] Card hover effects (lift, glow options)
- [ ] Grid layout utilities (`data-cols="3"`)
- [ ] Aspect ratio utilities

### Documentation
- [ ] Component playground page
- [ ] Color palette visualization
- [ ] Motion preview page
- [ ] Accessibility guidelines

---

## Known Edge Cases

### 1. Nested Layers
CSS `@layer` doesn't support true nesting across `@import`. All component layers flatten to `components`. This is fine but worth noting.

### 2. Container Query Naming
Using `container-name` on multiple nested elements can cause specificity issues. Currently only `.nav` and `.hero` use named containers.

### 3. Button Base Styles
Base `<button>` styles in `base.css` are overridden by `button.css`. This is intentional but could cause confusion if someone only imports base.css.

### 4. Motion Scale Variable
`--motion-scale` is defined but not consistently used across all transitions. Some components use it, others don't.

---

## Gemini Integration Notes

When using this base theme with Gemini for ThatOne.App:

### Do's
1. Start with an accent color preset before building child theme
2. Test all motion levels to ensure animations work
3. Check both light and dark modes
4. Use semantic HTML - the framework relies on it

### Don'ts
1. Don't override token variables directly - use accent presets
2. Don't add `!important` - use proper layer ordering
3. Don't skip the reset layer - it normalizes browser styles

### First Steps
1. Apply the base theme as-is
2. Pick an accent color from the settings panel
3. Note any components that need adjustment
4. Document specific needs for child theme

---

## Files for Gemini Reference

When training Gemini on theme creation, provide:

1. `_docs/gemini-child-theme-prompt.md` - Main prompt with examples
2. `src/core/tokens.css` - Understanding the color system
3. `src/components/settings-panel.css` - Color swatch structure

---

*This document will be updated as issues are discovered during ThatOne.App integration.*
