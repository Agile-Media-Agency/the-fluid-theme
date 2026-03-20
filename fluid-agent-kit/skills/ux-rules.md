# UX Behavior Rules — Quick Reference

Full specification: `_docs/UX-BEHAVIOR-SPEC.md` (18 sections, 1031 lines).

Read the full spec before building interactive components. This is the condensed version.

## The 12 Rules

1. **Destructive Actions**: Confirmation modal required. Title names the specific item. Body explains consequences. Buttons: [Cancel] [Delete Specific Thing]. Add `autofocus` to Cancel. Use `[data-destructive]` on modal.

2. **Action Consistency**: Search entire project for similar patterns before implementing. Same display mode, same order, same styling everywhere.

3. **Modal Strategy**: Toast > inline alert > modal. Use minimum interruption. No nested modals. Use native `<dialog>` with `.showModal()`. Focus trapping is automatic — do NOT add manual focus trap JS.

4. **Feedback**: Every action gets feedback. Save -> toast. Delete -> toast with undo. Error -> inline alert. Silence after action = bug.

5. **Forms**: Validate on blur first, then keystroke after error shown. Specific error messages ("Email must include @" not "Invalid input"). Never reload page on error.

6. **Empty States**: Every list/table needs an empty state with explanation + CTA. Never just "No items found."

7. **Buttons**: Specific labels only. Never "Submit" / "OK" / "Yes" / "Click Here". One primary CTA per viewport. Destructive = `data-variant="danger"`, always last.

8. **Loading**: Feedback after 300ms. Skeleton for page loads, spinner for actions. Never blank screen.

9. **Responsive**: Modal -> bottom sheet on mobile. Table -> stacked rows. 44px minimum touch targets.

10. **Keyboard**: Every mouse interaction works via keyboard. Never remove focus outlines. Escape closes overlays.

11. **Tables**: Row actions consistent across all tables. `.table-wrap` wrapper required. `data-responsive` + `td[data-label]` for mobile.

12. **Consistency**: After ANY pattern implementation, search the entire project for other instances and update them to match.

## When to Read the Full Spec

| Task | Read Sections |
|------|--------------|
| Building modal/dialog | Sections 1, 3, 12 |
| Building form | Sections 5, 9, 12 |
| Adding action buttons | Sections 1, 2, 9 |
| Building table with actions | Sections 2, 13, 11 |
| Search or filters | Sections 14, 7 |
| Starting new project | Section 17 first |
| Full UX audit | Entire spec |
