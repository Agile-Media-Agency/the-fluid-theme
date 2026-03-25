---
description: Create a new component for The Fluid Theme framework following all conventions.
---

# /new-component — Add to Fluid Theme

$ARGUMENTS

## Task

Create a new CSS component for The Fluid Theme framework, following all architectural conventions and documenting it properly.

### Steps

1. **Verify It Doesn't Exist**
   - Search `src/components/` for existing component
   - Check `ux-behavior-spec` §18 (Gap Tracker) — it may already be documented
   - If it exists, enhance it instead of creating a duplicate

2. **Define the Component** (load `fluid-theme` skill)
   - What problem does it solve?
   - What HTML element is it built on? (prefer native: `<dialog>`, `<details>`, `[popover]`)
   - What variants does it need?
   - What sizes does it need?
   - What states does it need? (hover, focus, active, disabled, loading)

3. **Write the HTML First**
   - Semantic HTML that works without CSS
   - Data attributes for variants: `data-variant="..."`, `data-size="..."`
   - Proper ARIA attributes
   - Document the markup in the CSS file header comment

4. **Write the CSS**
   - Place in `src/components/[name].css`
   - Wrap in `@layer components { }`
   - All values from tokens — no magic numbers
   - Logical properties only (`margin-block`, not `margin-top`)
   - Component-scoped private properties: `--_component-value`
   - Support all 7 motion presets where relevant
   - Include `@media (prefers-reduced-motion: reduce)` section
   - Include responsive behavior (`@media (max-width: 40rem)` or `@container`)

5. **Import in fluid.css**
   - Add `@import` to `src/fluid.css` in the components section

6. **Add to Components Example Page**
   - Add a demo section to `examples/components.html`

7. **Update Documentation**
   - Add to `_docs/reference/components.md`
   - If this fills a gap from the UX spec, update §18 gap tracker
   - Update `fluid-theme` skill in the kit

### CSS Template

```css
/**
 * Fluid Framework - [Component Name]
 * @layer components
 *
 * [Description of what this component does]
 *
 * Usage:
 *   <element class="[name]">[content]</element>
 *   <element class="[name]" data-variant="[variant]">[content]</element>
 *
 * Variants: data-variant="a|b|c"
 * Sizes: data-size="sm|lg"
 */

@layer components {
  .[name] {
    /* Use tokens for all values */
    padding: var(--space-4);
    font-size: var(--font-size-base);
    color: var(--color-text);
    border-radius: var(--radius-md);
  }

  /* Variants */
  .[name][data-variant="..."] { }

  /* Sizes */
  .[name][data-size="sm"] { }

  /* Motion preset awareness (if animated) */
  [data-preset="still"] .[name] {
    transition: none;
  }

  /* Responsive */
  @media (max-width: 40rem) {
    .[name] { }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .[name] {
      transition: none;
      animation: none;
    }
  }
}
```

### Usage

```
/new-component breadcrumb nav
/new-component empty state with illustration slot
/new-component step indicator for multi-step forms
/new-component filter chip with dismiss button
```
