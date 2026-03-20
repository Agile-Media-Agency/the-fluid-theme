# /brainstorm — Explore Options Before Building

Activates BRAINSTORM behavioral mode. For exploring design direction, tech choices, or UX patterns before committing to implementation.

## Trigger

`/brainstorm <topic>`

## Examples

```
/brainstorm visual direction for TheFightLife.com
/brainstorm how to handle the meal planning UX for TheEasyKeto
/brainstorm tech stack for a 100-site blog network
/brainstorm pricing page layout options
```

## Process

1. **Understand the goal**
   - What problem are we solving?
   - Who is the user/audience?
   - What constraints exist (timeline, budget, tech, brand)?

2. **Generate at least 3 approaches**
   - Each with clear pros, cons, and tradeoffs
   - Each grounded in our domain (Fluid Theme, semantic CSS, UX spec)
   - Include visual description where relevant (layout sketch in words)

3. **Recommend one with reasoning**
   - Why this approach over the others
   - What risks remain
   - What decisions can be deferred

4. **Wait for user decision**
   - Do NOT proceed to implementation
   - Do NOT write code
   - Present options and let the user choose

## Output Format

```markdown
## Brainstorm: [Topic]

### Goal
[1-2 sentences]

### Option A: [Name]
[Description]
- **Pros:** ...
- **Cons:** ...
- **Tradeoffs:** ...

### Option B: [Name]
...

### Option C: [Name]
...

### Recommendation
[Option X] because [reasoning]. [Remaining risks].

### Next Step
[What to do after user picks an option]
```

## Domain-Specific Brainstorms

- **Design direction**: Preset selection, palette choices, typography pairing, motion intensity
- **Brand identity**: Voice options, personality alternatives, visual tone
- **UX patterns**: Modal vs inline, toast vs alert, tabs vs accordion, filter vs search
- **Tech stack**: Astro vs static HTML vs React, hosting choices
- **Page layout**: Section ordering, hero style, conversion funnel structure
