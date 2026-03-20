# UX Behavior Rules — Quick Reference

Full spec: `_docs/UX-BEHAVIOR-SPEC.md` (1031 lines, 18 sections)
Agent kit version: `.agent/skills/ux-behavior-spec/SKILL.md`

Read the full spec before building interactive components. This is the condensed version for quick reference.

## The 12 Rules

1. **DESTRUCTIVE ACTIONS (§1):** Confirmation modal required. Title names the specific item. Body explains consequences. Buttons: [Cancel] [Delete Specific Thing]. Add `autofocus` to Cancel. Use `[data-destructive]` on modal.

2. **ACTION CONSISTENCY (§2):** Search entire project for similar patterns before implementing. Same display mode, same order, same styling everywhere. After implementing on one screen, update ALL other matching screens.

3. **MODAL STRATEGY (§3):** Toast > inline alert > modal. Use minimum interruption. No nested modals. Use native `<dialog>` with `.showModal()`. Focus trapping is automatic — do NOT add manual focus trap JS. Backdrop dismiss requires adding a click handler.

4. **FEEDBACK (§4):** Every action gets feedback. Save → toast. Delete → toast with undo. Error → inline alert. Silence after action = bug.

5. **FORMS (§5):** Validate on blur first, then keystroke after error shown. Specific error messages ("Email must include @" not "Invalid input"). Never reload page on error. `aria-invalid` set dynamically, not in default markup.

6. **EMPTY STATES (§7):** Every list/table needs an empty state with explanation + CTA. Never just "No items found." 404/500 pages always helpful with escape routes.

7. **BUTTONS (§9):** Specific labels only. Never "Submit"/"OK"/"Yes"/"Click Here". One primary CTA per viewport. Destructive = `data-variant="danger"`, always last.

8. **LOADING (§10):** Feedback after 300ms. Skeleton for page loads, spinner for actions. Never blank screen.

9. **RESPONSIVE (§11):** Modal → bottom sheet on mobile. Table → stacked rows. Icon+text → icon only. 44px minimum touch targets.

10. **KEYBOARD (§12):** Every mouse interaction works via keyboard. Never remove focus outlines. Escape closes overlays.

11. **TABLES (§13):** Row actions consistent across all tables. `.table-wrap` wrapper required. `data-responsive` + `td[data-label]` for mobile.

12. **CONSISTENCY:** After ANY pattern implementation, search the entire project for other instances and update them to match. This is mandatory.

## When to Read the Full Spec

| Task | Read Sections |
|------|--------------|
| Building modal/dialog | §1, §3, §12 |
| Building form | §5, §9, §12 |
| Adding action buttons | §1, §2, §9 |
| Building table with actions | §2, §13, §11 |
| Search or filters | §14, §7 |
| Starting new project | §17 first |
| UX audit | Full spec |
