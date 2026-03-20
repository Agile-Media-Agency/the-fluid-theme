# /status — Project Health Check

Reports on project completeness, UX compliance, and recent changes.

## Trigger

`/status` or `/status <focus area>`

## Examples

```
/status
/status UX compliance only
/status templates
/status components
```

## Process

1. **Read project state**
   - `PROJECT_STATUS.md` — phase completion
   - `QUICK_CHECKLIST.md` — item-level progress
   - `CHANGELOG.md` — recent changes
   - `package.json` — current version

2. **Check UX compliance** (if audit report exists)
   - `_docs/UX-AUDIT-REPORT.md` — fixed vs remaining items
   - Count: critical remaining, warnings remaining

3. **Quick checks**
   - Any `<a><button>` invalid nesting?
   - Any buttons labeled "Submit", "OK", "Confirm"?
   - Any missing `alt` text on images?
   - Any physical CSS properties (`margin-top`, `padding-left`)?

4. **Report**

## Output Format

```markdown
## Project Status: [Project Name]

**Version:** X.Y.Z
**Last Change:** [date from CHANGELOG]

### Completion
- Pages: X of Y built
- Components: X of Y styled
- Sections: X of Y implemented

### UX Compliance
- Critical: X remaining
- Warnings: Y remaining
- Last audit: [date]

### Quick Checks
- [ ] No `<a><button>` nesting
- [ ] No vague button labels
- [ ] No missing alt text
- [ ] No physical properties
- [ ] Dark mode verified
- [ ] Reduced motion respected

### Recent Changes
[Last 3-5 CHANGELOG entries]

### Recommended Next Steps
1. [Most impactful remaining task]
2. [Second priority]
3. [Third priority]
```
