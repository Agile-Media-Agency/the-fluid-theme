# AI Agent Instructions - Component Development

## Your Role
You are building semantic, accessible components for The Fluid Theme Framework. Each component should work without JavaScript and enhance progressively.

## Component Development Process

### 1. Research Phase
- Check MDN for relevant HTML elements
- Review ARIA Authoring Practices Guide
- Study existing implementations (but don't copy)
- Identify accessibility requirements

### 2. HTML Structure
Start with semantic HTML:
```html
<!-- Example: Card Component -->
<article class="fluid-card" is="fluid-card">
  <header>
    <h3>Card Title</h3>
  </header>
  <div class="content">
    <p>Card content</p>
  </div>
  <footer>
    <a href="#">Action</a>
  </footer>
</article>
```

### 3. CSS Implementation
```css
@layer components {
  /* Base component styles */
  .fluid-card,
  fluid-card,
  [is="fluid-card"] {
    /* Structure */
    display: block;
    container-type: inline-size;
    
    /* Spacing using tokens */
    padding: var(--card-padding, var(--space-5));
    margin-block: var(--card-margin, var(--space-3));
    
    /* Visual using tokens */
    background: var(--card-background, var(--color-surface));
    border-radius: var(--card-radius, var(--radius-md));
    box-shadow: var(--card-shadow, var(--shadow-sm));
    
    /* Allow component-specific overrides */
    --card-padding: var(--space-5);
    --card-background: var(--color-surface);
  }
  
  /* Responsive with container queries */
  @container (min-width: 30rem) {
    .fluid-card {
      --card-padding: var(--space-8);
    }
  }
  
  /* Variants via data attributes */
  .fluid-card[data-variant="featured"],
  fluid-card[data-variant="featured"] {
    --card-background: var(--color-primary);
    color: white;
  }
  
  .fluid-card[data-variant="minimal"],
  fluid-card[data-variant="minimal"] {
    --card-shadow: none;
    --card-background: transparent;
  }
}
```

### 4. Web Component Enhancement (Optional)
```javascript
// Progressive enhancement only
class FluidCard extends HTMLElement {
  static get observedAttributes() {
    return ['data-variant', 'data-animated'];
  }
  
  connectedCallback() {
    // Only enhance, don't replace content
    this.setAttribute('is', 'fluid-card');
    
    // Add interactive features
    if (this.dataset.animated === 'true') {
      this.addEventListener('mouseenter', this.handleHover);
    }
  }
  
  handleHover = () => {
    // Subtle enhancement
    this.style.transform = 'translateY(-2px)';
  }
  
  disconnectedCallback() {
    this.removeEventListener('mouseenter', this.handleHover);
  }
}

// Register with fallback
if (customElements && !customElements.get('fluid-card')) {
  customElements.define('fluid-card', FluidCard);
}
```

## Component Patterns

### Naming Convention
```
fluid-[component-name]
```
Examples:
- `fluid-button`
- `fluid-modal`
- `fluid-tabs`
- `fluid-dropdown`

### Data Attributes for Variants
```html
<fluid-button 
  data-variant="primary|secondary|ghost|danger"
  data-size="small|medium|large"
  data-state="loading|disabled|active">
```

### Component-Specific CSS Properties
Each component should expose its own custom properties:
```css
.fluid-button {
  /* Component-specific tokens */
  --button-padding: var(--space-2) var(--space-5);
  --button-background: var(--color-primary);
  --button-color: white;
  --button-radius: var(--radius-md);
  
  /* Apply them */
  padding: var(--button-padding);
  background: var(--button-background);
  color: var(--button-color);
  border-radius: var(--button-radius);
}
```

### State Management
Use data attributes and CSS, not classes:
```css
/* Loading state */
[data-state="loading"] {
  opacity: 0.6;
  cursor: wait;
}

/* Disabled state */
[data-state="disabled"],
[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Active state */
[data-state="active"],
[aria-pressed="true"] {
  background: var(--color-primary-dark);
}
```

## Accessibility Requirements

### Every Component Must:
1. Be keyboard navigable
2. Have proper ARIA labels/roles where needed
3. Support screen readers
4. Respect prefers-reduced-motion
5. Have sufficient color contrast (WCAG AA)
6. Work with 200% zoom
7. Have focus-visible styles

### ARIA Patterns
```html
<!-- Modal -->
<dialog 
  role="dialog" 
  aria-modal="true" 
  aria-labelledby="modal-title"
  aria-describedby="modal-desc">

<!-- Tabs -->
<div role="tablist" aria-label="Settings">
  <button role="tab" aria-selected="true" aria-controls="panel-1">
  
<!-- Accordion -->
<button 
  aria-expanded="false" 
  aria-controls="panel-id">
```

## Component Documentation Template

Create a markdown file for each component:

```markdown
# Component: Fluid Card

## Overview
Brief description of the component and its use cases.

## Usage

### Basic
\```html
<fluid-card>
  <h3>Title</h3>
  <p>Content</p>
</fluid-card>
\```

### With Variants
\```html
<fluid-card data-variant="featured">
  ...
</fluid-card>
\```

## API

### Attributes
| Attribute | Values | Default | Description |
|-----------|---------|---------|-------------|
| data-variant | featured, minimal | - | Visual variant |
| data-animated | true, false | false | Enable animations |

### CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| --card-padding | var(--space-5) | Internal padding |
| --card-background | var(--color-surface) | Background color |

## Accessibility
- Uses semantic `<article>` element
- Proper heading hierarchy required
- Keyboard navigable links

## Browser Support
- All modern browsers
- Degrades gracefully in older browsers
```

## Testing Checklist

For each component:
- [ ] Works without JavaScript
- [ ] Keyboard navigable
- [ ] Screen reader tested
- [ ] Touch-friendly (44x44px targets)
- [ ] Responsive (container queries)
- [ ] Dark mode compatible
- [ ] High contrast mode works
- [ ] Reduced motion respected
- [ ] 200% zoom functional
- [ ] Color contrast passes WCAG AA
- [ ] Focus visible styles present
- [ ] ARIA patterns correct
- [ ] Semantic HTML used
- [ ] No layout shift on load
- [ ] Print styles considered

## Common Mistakes to Avoid

1. **Don't require JavaScript for basic functionality**
   ```html
   <!-- Bad -->
   <div onclick="handleClick()">
   
   <!-- Good -->
   <button type="button">
   ```

2. **Don't use divs when semantic elements exist**
   ```html
   <!-- Bad -->
   <div class="card">
   
   <!-- Good -->
   <article class="fluid-card">
   ```

3. **Don't hardcode colors**
   ```css
   /* Bad */
   background: #007bff;
   
   /* Good */
   background: var(--color-primary);
   ```

4. **Don't forget container queries**
   ```css
   /* Bad - viewport based */
   @media (min-width: 768px)
   
   /* Good - container based */
   @container (min-width: 40rem)
   ```

5. **Don't use physical properties**
   ```css
   /* Bad */
   margin-left: 1rem;
   
   /* Good */
   margin-inline-start: var(--space-4);
   ```

## Component Priority Order

Build in this order:
1. **Button** - Foundation of interactivity
2. **Card** - Content container pattern
3. **Form Controls** - Enhanced inputs
4. **Navigation** - Site structure
5. **Modal** - Overlay pattern
6. **Tabs** - Content organization
7. **Dropdown** - Selection pattern
8. **Accordion** - Collapsible content
9. **Alert** - Feedback pattern
10. **Everything else**

Remember: Quality over quantity. One well-built, accessible component is worth more than ten half-finished ones.
