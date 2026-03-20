# Accessibility Standards

Accessibility is a core value of The Fluid Theme, not an afterthought. These rules are non-negotiable.

## HTML Requirements

- Every `<img>` has meaningful `alt` text (not "image" or empty unless decorative)
- Every form `<input>` has a linked `<label>` (via `for`/`id` or wrapping)
- Every icon-only button has `aria-label`
- Current nav items use `aria-current="page"`
- Use native elements: `<dialog>` not `<div role="dialog">`, `<details>` not custom JS accordions
- Form errors connected via `aria-describedby`
- Loading states use `aria-busy="true"` and `aria-live="polite"`

## Keyboard

- Every interactive element reachable via Tab
- Escape closes all overlays (modals, dropdowns, popovers)
- Arrow keys navigate within groups (tabs, radio buttons, dropdown items)
- Never remove `:focus-visible` outlines — restyle if needed, never delete
- Native `<dialog>` focus trapping via `.showModal()` — never add manual trap

## Motion

- `prefers-reduced-motion: reduce` respected in every animated component
- `[data-motion="still"]` disables all transitions entirely
- Spinners use pulse animation in reduced motion mode
- Skeleton shimmer uses opacity fade in reduced motion mode

## Touch Targets

- Minimum 44x44px interactive areas (exceeds WCAG 2.2 AA minimum of 24x24px)
- 8px minimum spacing between adjacent targets
- Destructive buttons on mobile get extra size and spacing

## Color

- Never rely on color alone to convey information — always pair with icon, text, or pattern
- Minimum contrast: WCAG AA (4.5:1 for text, 3:1 for large text and UI components)
- Test in both light and dark mode
- Status colors have matching subtle backgrounds for sufficient contrast
