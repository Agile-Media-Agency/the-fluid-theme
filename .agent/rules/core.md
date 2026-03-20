# Global Rules

These rules apply to EVERY agent on EVERY task. No exceptions.

## Code Conventions

1. Always read `.agent/ARCHITECTURE.md` first if you haven't this session.
2. Never use physical CSS properties (`margin-top`, `padding-left`) — always logical (`margin-block-start`, `padding-inline-start`).
3. Never use magic numbers — always design tokens (`var(--space-4)` not `16px`).
4. Never add manual focus-trap JS on native `<dialog>` elements.
5. Respect `prefers-reduced-motion` in all animations and transitions.
6. Test in both light and dark mode.

## UX Rules

7. Never use "Submit", "OK", "Yes", "No", "Confirm" as button labels — use action-specific labels.
8. Every destructive action requires a confirmation modal with specific messaging.
9. Every user action must produce visible feedback.

## Consistency Rules

10. After modifying any pattern on one screen, search the entire project for matching patterns and update all of them.
11. All changes must be logged — update CHANGELOG.md or the audit report.
12. Bump the version number when work is complete.
