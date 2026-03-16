---
name: neil-preferences
description: Neil White's established design preferences, formatting standards, and patterns he consistently corrects. Apply these automatically to avoid rework. Covers button labels, spacing, action patterns, visual taste, and workflow preferences.
allowed-tools: Read, Glob, Grep
---

# Neil Preferences — Things He Always Corrects

> Apply these automatically. Every item here represents something Neil has had to fix multiple times. If you follow these, he doesn't have to re-explain them.

---

## UX & Interaction Preferences

Neil's UX interaction rules are fully documented in the `ux-behavior-spec` skill. **Do not restate them here — reference the spec.** The rules below are personal preferences that go beyond the spec or clarify intent:

- **Prefers generous spacing between action buttons** — the spec mandates `var(--space-5)` minimum for destructive modals, but Neil prefers this generosity across all action groups, not just destructive ones.
- **Prefers undo-via-toast over confirm-then-delete** for medium-severity actions — the spec allows either; Neil's preference is soft-delete with undo toast whenever technically feasible.
- **Dislikes modals for anything that could be a toast or inline alert** — the spec's hierarchy (toast > alert > modal) reflects this, but Neil is particularly aggressive about avoiding modals for success states.

For all other UX rules (destructive actions, button labels, form validation, feedback, consistency, keyboard), follow `ux-behavior-spec` directly.

---

## Visual & Design Preferences

### General Aesthetic
- Prefers clean, purposeful design over decorative
- Values whitespace and breathing room
- Dislikes cluttered interfaces
- Prefers warm tones and natural palettes over cold corporate blue
- Appreciates subtle motion, dislikes excessive animation
- Dark mode should use deep palette colors, not just black backgrounds

### Typography
- Readability over style — clear hierarchy matters more than fancy fonts
- Prefers generous line-height for body text
- Headlines should be distinct from body (different weight, size, or family)

### Layout
- Content-first — the layout serves the content, not the other way around
- Mobile is a first-class experience, not an afterthought
- Prefers fluid/responsive over fixed breakpoints where possible

---

## Workflow & Process Preferences

### Project Startup
- **Start complete, trim down.** Include all possible pages/flows by default. It's easier to remove than to add later.
- **Document which pages/flows are included vs. excluded** for each project.
- **Every project gets a 404 page.** No exceptions. Make it helpful and on-brand.

### Communication Style
- Direct and honest. Don't sugarcoat problems.
- Skip preamble — get to the point.
- When presenting options, explain tradeoffs clearly.
- Flag issues proactively — don't wait to be asked.

### Code & Technical
- Prefers semantic HTML and CSS over JavaScript solutions
- CSS Custom Properties over hardcoded values
- No build step unless genuinely needed
- Lighthouse 100 is the target, not a stretch goal
- Performance is a feature, not an optimization pass

### File & Repo Conventions
- Working directory: `$HOME/Projects/` (portable across machines)
- Home iMac username: `neilwhite`
- Office Mac Studio username: `neil-ms1`
- Always use `$HOME/Projects/` when referencing paths

---

## Things That Waste His Time (Avoid These)

1. **Inconsistent action patterns** across screens — fixing one screen only to find the pattern is different on three other screens
2. **Agents that miss instances** — updating a delete confirmation on one page but not finding the similar pattern on two other pages
3. **Generic AI copy** — "leverage synergies", "empower", "in today's fast-paced world"
4. **Re-explaining the same design decision** — this is why this skill file exists
5. **Modals for everything** — not every action needs a modal
6. **Vague button labels** — "Submit", "Confirm", "OK"
7. **Blank loading screens** — show skeleton states
8. **Forms that reload on error** — inline validation, always
