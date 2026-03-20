# /plan — Create Implementation Plan

Creates a structured plan file. NO CODE — planning only.

## Trigger

`/plan <project or task description>`

## Examples

```
/plan TheFightLife.com combat sports aggregator
/plan migrate 5 WordPress client sites to Astro
/plan add e-commerce to the existing portfolio site
```

## Process

1. **Analyze the request**
   - What's being built?
   - What already exists?
   - What's the scope?

2. **If vague, ask 1-2 clarifying questions**
   - Target audience?
   - Must-have vs nice-to-have features?
   - Brand/visual direction established?

3. **Create plan file**: `docs/PLAN-[task-slug].md`

4. **Present plan for approval**

5. **STOP** — do not write code. User must approve then run `/orchestrate` or start implementing.

## Plan File Format

```markdown
# Plan: [Project Name]

**Created:** [date]
**Status:** Draft

## Goal
[What we're building and why]

## Scope
### Included
- [Feature/page 1]
- [Feature/page 2]

### Not Included
- [Explicitly out of scope]

## Pages / Flows
- [ ] Homepage (hero, features, testimonials, CTA)
- [ ] About (team, story, stats)
- [ ] Contact (form with validation)
- [ ] 404 (search, suggestions)

## Agent Assignments
| Agent | Responsibility |
|-------|---------------|
| site-builder | Scaffold all pages |
| content-writer | All copy and microcopy |
| fluid-theme-dev | Component styling, preset config |
| ux-enforcer | Audit pass |

## Execution Order
1. Scaffold HTML structure
2. Fill content
3. Style with Fluid CSS
4. UX audit
5. Version bump + CHANGELOG

## Technical Decisions
- Preset: [e.g., Flowing]
- Palette: [e.g., Bold]
- Hosting: [e.g., Netlify]
- Special requirements: [e.g., e-commerce, CMS]

## Complexity
[Small / Medium / Large]
```
