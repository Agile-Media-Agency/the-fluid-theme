# UX Behavior Spec

Core UX rules that ALL agents must follow. Based on UX Behavior Spec v0.2.0.

## Key Sections

### §1 Destructive Actions
- Every destructive action requires a confirmation modal
- Modal title must name the specific thing being deleted: "Delete 'Project Alpha'" not "Are you sure?"
- Confirm button must say the specific action: "Delete Project" not "Delete" or "Confirm"
- Use `[data-destructive]` modifier on modal for wider footer gap

### §2 Action Consistency
- When you fix a pattern on one screen, search and fix all matching patterns project-wide
- Action groups should use consistent labeling across screens

### §4 User Feedback
- Every user action must produce visible feedback
- Form submission: show success (toast/alert) or error (inline + summary)
- No silent failures — always tell the user what happened

### §5 Form Validation
- All required fields: `required` attribute + `data-required` on label
- On invalid: set `aria-invalid="true"` on the input
- Show `.form-error` message below the field
- Error message pattern: "[What's wrong] + [How to fix it]"
- Validate `textarea:invalid` and `select:invalid` too

### §7 Error Pages
- 404 page needs search with `role="search"` and proper `<label>`
- 500 page needs clear messaging and retry action
- Empty states need descriptive text + primary action button

### §8 Navigation
- Breadcrumbs on deep pages (built: mobile collapse in nav.css)
- Pagination uses `<a>` links, not `<button>`, with `aria-label` on `<nav>`
- Filter buttons need `aria-pressed` for active state

### §9 Button Labels
- **Never use:** "Submit", "OK", "Yes", "No", "Confirm", "Cancel"
- **Always use action-specific labels:** "Send Message", "Create Account", "Delete Project"
- Links that look like buttons should be `<a class="button">`, not `<a><button>`

### §11 Responsive Tables
- Wrap in `.table-wrap` for overflow scroll
- Add `data-responsive` for mobile stacking
- Add `td[data-label]` for mobile row labels

### §12 Accessibility
- All animations: `prefers-reduced-motion` media query
- All interactive elements: `:focus-visible` styles
- All images: `alt` text
- All form inputs: linked `<label>` elements
- Use native `<dialog>` not `<div role="dialog">`
- Use native `<details>/<summary>` not custom JS accordions

### §14 Search & Filter
- Search input with clear button (built: `search-input.css`)
- Filter chips, dismissable (built: `chip.css`)

### §16 Pricing
- Different CTA labels per tier: "Choose Starter", "Choose Professional"
- Featured tier should be visually distinct

## Framework Gap Tracker (§18)

| Gap | Status |
|-----|--------|
| Empty state component | Built (`empty-state.css`) |
| Step indicator | Built (`step-indicator.css`) |
| Search input with clear | Built (`search-input.css`) |
| Filter chip / dismissable tag | Built (`chip.css`) |
| Toast with action/undo | Built (`.toast__action` in `alert.css`) |
| Breadcrumb nav (mobile collapse) | Built (`nav.css`) |
| Destructive modal modifier | Built (`[data-destructive]` in `modal.css`) |
| 500 error page template | Built (`templates/500.html`) |
| Action group (responsive) | Deferred — `.button-group` covers basic cases |
| Mobile sticky CTA bar | Deferred — per-project implementation |
| Cookie consent banner | Deferred — per-project implementation |
| Offline banner | Deferred — per-project implementation |
