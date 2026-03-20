# /debug — Systematic Issue Resolution

Systematic problem diagnosis for CSS, layout, accessibility, and UX problems.

## Trigger

`/debug <issue description>`

## Examples

```
/debug the modal isn't closing on backdrop click
/debug dark mode colors are wrong on the pricing page
/debug forms don't show validation errors
/debug the hero section overflows on mobile
/debug keyboard navigation skips the search input
```

## Process

1. **Reproduce**
   - What exactly is wrong?
   - Which file(s) and which element(s)?
   - What's the expected vs actual behavior?

2. **Isolate**
   - Read the relevant file(s)
   - Identify the specific CSS rule, HTML element, or JS handler
   - Check if the issue is in the component CSS or the template usage

3. **Diagnose** — Common root causes:

   | Symptom | Likely Cause |
   |---------|-------------|
   | Style not applying | Wrong `@layer`? Missing import in `fluid.css`? Selector specificity? |
   | Dark mode broken | Hardcoded colors (`white`, `#333`) instead of tokens? |
   | Mobile layout broken | Missing responsive rules? No `auto-fit` grid? |
   | Animation plays for everyone | Missing `prefers-reduced-motion` media query? |
   | Keyboard can't reach element | Missing `tabindex`? `<div>` instead of `<button>`? |
   | Form shows no errors | Missing `aria-invalid`? No `.form-error` element? |
   | Modal stuck open | Using `<div role="dialog">` instead of native `<dialog>`? |
   | Table unreadable on mobile | Missing `.table-wrap`? No `data-responsive`? |

4. **Fix**
   - Apply the fix following all conventions
   - Use tokens, logical properties, semantic HTML

5. **Verify**
   - Does the fix work in light + dark mode?
   - Does it respect `prefers-reduced-motion`?
   - Does it work on mobile?

6. **Search**
   - Find ALL other instances of the same pattern in the project
   - Fix them too (consistency rule from core.md)

7. **Log**
   - Update CHANGELOG.md with the fix
   - If audit report exists, update it
