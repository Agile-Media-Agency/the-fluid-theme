# /enhance — Improve Existing Project

For improving an existing project — adding features, fixing issues, upgrading components.

## Trigger

`/enhance <what to improve>`

## Examples

```
/enhance add search functionality to the blog
/enhance upgrade all forms to match UX spec validation rules
/enhance add dark mode support to the pricing page
/enhance convert inline styles to Fluid tokens
```

## Process

1. **Understand current state**
   - Read existing files relevant to the enhancement
   - Check what's already built
   - Identify dependencies and affected areas

2. **Determine scope**
   - What needs to change?
   - What other files are affected? (consistency rule: search for matching patterns)
   - Is this a major or minor change?

3. **For major changes: present plan first**
   - List affected files
   - Describe the approach
   - Wait for approval

4. **For minor changes: proceed directly**
   - Apply changes following all conventions
   - Fluid tokens, logical properties, `@layer`, semantic HTML
   - UX spec rules (button labels, validation, feedback)

5. **After changes: targeted audit**
   - Review affected areas against UX spec
   - Verify dark mode, responsive, reduced-motion
   - Check cross-screen consistency

6. **Update tracking**
   - CHANGELOG.md
   - Version bump (patch for fixes, minor for features)

## What Counts as Major vs Minor

**Major** (present plan first):
- Adding a new page or section
- Changing navigation structure
- Modifying the token system
- Refactoring component architecture

**Minor** (proceed directly):
- Fixing a single component
- Adding `aria-label` attributes
- Replacing inline styles with tokens
- Adding `prefers-reduced-motion`
