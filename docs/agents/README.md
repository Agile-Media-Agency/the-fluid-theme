# AI Agent Instructions - General

## Project Context
You are working on The Fluid Theme Framework, a modern CSS/HTML design system that prioritizes semantic markup, CSS custom properties, and progressive enhancement over utility-class frameworks.

## Key Project Principles
1. **Semantic HTML First**: Use meaningful element names, not div soup
2. **CSS Custom Properties**: All styling through CSS variables for theming
3. **Progressive Enhancement**: Everything works without JavaScript
4. **Modern CSS Only**: Use latest CSS features, no legacy support
5. **No Build Step**: Must work directly in browsers

## Working Directory
- Primary: `$HOME/Projects/the-fluid-theme-v2c`
- The `$HOME` path varies between machines:
  - Home office iMac: `/Users/neilswhite/Projects/the-fluid-theme-v2c`
  - Work office Mac Studio: `/Users/neil-ms1/Projects/the-fluid-theme-v2c`
- Always use `$HOME/Projects/the-fluid-theme-v2c` when referencing paths

## Code Style Guidelines

### CSS
```css
/* Use CSS layers */
@layer reset, tokens, base, layouts, components, themes, utilities;

/* Use logical properties */
margin-block, padding-inline, block-size, inline-size

/* Use custom properties for all values */
color: var(--color-primary);
spacing: var(--space-3);

/* Use modern selectors */
:has(), :is(), :where(), :focus-visible
```

### HTML
```html
<!-- Semantic elements -->
<fluid-card> not <div class="card">

<!-- Data attributes for variants -->
<fluid-button data-variant="primary" data-size="large">

<!-- Progressive enhancement -->
<article is="fluid-card"> <!-- Works without JS -->
```

### JavaScript
```javascript
// Web Components only
class FluidCard extends HTMLElement {
  // Progressive enhancement
  connectedCallback() {
    // Enhance existing markup, don't replace
  }
}

// No frameworks, no build tools
customElements.define('fluid-card', FluidCard);
```

## File Naming Conventions
- CSS files: `kebab-case.css`
- JS files: `kebab-case.js`
- Custom elements: `fluid-[name]`
- CSS custom properties: `--category-name-variant`

## Design Token Categories
- **Colors**: `--color-[name]`
- **Typography**: `--font-[property]`
- **Spacing**: `--space-[size]`
- **Animation**: `--duration-[speed]`, `--easing-[type]`
- **Layout**: `--container-[size]`
- **Elevation**: `--shadow-[size]`, `--z-[level]`

## Testing Approach
1. Visual testing in multiple browsers
2. Accessibility testing with axe-core
3. No JavaScript testing (everything should work without it)
4. Theme switching validation

## Documentation Requirements
- Every component needs usage examples
- Link to MDN for standard elements
- Explain the "why" not just the "how"
- Include accessibility notes

## Common Tasks

### Adding a New Component
1. Create semantic HTML structure
2. Style with CSS using custom properties
3. Add to component index
4. Create usage documentation
5. Optional: Add web component enhancement

### Creating a Theme
1. Copy `default.css` theme file
2. Override only CSS custom properties
3. Test with all components
4. Document color choices and use cases

### Fixing Issues
1. Check it works without JavaScript first
2. Ensure it uses logical properties
3. Verify custom properties are used
4. Test in light and dark modes
5. Check accessibility

## What NOT to Do
- ❌ Don't use utility classes as primary API
- ❌ Don't require JavaScript for basic functionality
- ❌ Don't use pixel values (use rem/em)
- ❌ Don't use media queries when container queries would work
- ❌ Don't add vendor prefixes
- ❌ Don't support IE11 or legacy browsers
- ❌ Don't use CSS-in-JS
- ❌ Don't add build steps

## Resources
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [A11y Project](https://www.a11yproject.com/)
- [Can I Use](https://caniuse.com/)

## Communication Style with User
- Be direct and honest (no fluff)
- Explain modern CSS features when used
- Suggest better approaches if current method is outdated
- Reference the 32 years of experience respectfully
- Understand the frustration with current frameworks

## Remember
The user is burned out from overcomplicated frameworks and wants something clean, semantic, and maintainable. Every decision should reduce complexity, not add to it.
