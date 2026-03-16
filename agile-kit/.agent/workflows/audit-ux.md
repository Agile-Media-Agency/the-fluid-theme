---
description: Audit a built project against the UX Behavior Spec for compliance issues.
---

# /audit-ux — UX Behavior Spec Audit

$ARGUMENTS

## Task

Review an existing project for compliance with the UX Behavior Spec. Identify violations, inconsistencies, and missing patterns.

### Steps

1. **Load the Spec** (load `ux-behavior-spec` skill)
   - Read the full spec before starting the audit

2. **Scan All Pages/Screens**
   - Identify every interactive element in the project
   - Catalog: modals, forms, action groups, buttons, notifications, tables, search/filter

3. **Check Each Section**

   | Spec Section | What to Check |
   |-------------|---------------|
   | §1 Destructive Actions | Every delete/remove/cancel has proper confirmation modal? Specific title? Consequence body? Labeled buttons? Autofocus on Cancel? |
   | §2 Action Groups | Same display mode for same context type across ALL screens? Same action order? Destructive last with separator? |
   | §3 Modal Strategy | Are modals used only when necessary? No nested modals? Proper backdrop/escape behavior? Native `<dialog>` with `.showModal()`? |
   | §4 Feedback | Does every user action produce feedback? No silent saves/deletes? Toast for success? Undo on delete? |
   | §5 Forms | Validation on blur then keystroke? Specific error messages? No reload on error? `aria-invalid` set dynamically? |
   | §6 Subscriptions | Full flow or documented simplified flow? Preference options? Double opt-in? One-click unsubscribe? |
   | §7 Empty States | Do all lists/tables have an empty state with CTA? 404/500 pages present and helpful? Offline state handled? |
   | §8 Navigation | Breadcrumbs on deep pages? Active state on current nav item? Mobile hamburger → drawer? |
   | §9 Buttons | All buttons have specific labels? No "Submit"/"OK"/"Yes"? One primary CTA per viewport? Correct variant hierarchy? |
   | §10 Loading | Loading states for async actions? Skeletons for page loads? Button loading states? 300ms threshold? |
   | §11 Responsive | Mobile behavior defined for all components? 44px touch targets? Tables responsive? Modals → bottom sheets? |
   | §12 Keyboard | All interactions keyboard-accessible? Focus outlines intact? Escape closes overlays? No manual focus trap on `<dialog>`? |
   | §13 Tables | Row actions consistent? Bulk actions with confirmation? Sorting indicated? `.table-wrap` wrapper present? |
   | §14 Search/Filter | Debounced search? Result count shown? Active filters visible and clearable? URL persistence? |
   | §15 Onboarding | First-run experience defined? Dismissible? Leads to first win? Not overwhelming? |
   | §16 CTAs | One primary CTA per viewport? Verb-first copy? Supporting text? Pricing page hierarchy correct? |

4. **Cross-Screen Consistency Check**
   - Find all instances of the same pattern (e.g., all delete buttons, all card action groups)
   - Verify they're identical in display mode, order, and styling
   - This is the most commonly violated rule

5. **Report Findings**

   Format:
   ```
   ## UX Audit Report — [Project Name]

   ### Critical (must fix)
   - [Page/component]: [violation] (Spec §X)

   ### Warnings (should fix)
   - [Page/component]: [issue] (Spec §X)

   ### Gaps (spec doesn't cover this)
   - [Situation]: needs spec addition

   ### Passed
   - [Summary of compliant areas]
   ```

### Usage

```
/audit-ux
/audit-ux — focus on forms only
/audit-ux — check action group consistency
```
