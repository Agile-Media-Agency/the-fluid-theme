# /orchestrate — Multi-Agent Coordination

Coordinates complex tasks that span multiple domains. Minimum 2 agents required (otherwise it's just delegation).

## Trigger

`/orchestrate <task description>`

## Examples

```
/orchestrate build TheFightLife.com landing page
/orchestrate redesign the pricing page with new brand identity
/orchestrate migrate palmvitaspecialists.com from WordPress
```

## Process

### Phase 1: PLAN (no code)

1. **creative-director** scopes the work:
   - What needs to be built/changed?
   - Which agents are needed?
   - What's the execution order?
   - What are the constraints?

2. Present the plan for user approval. Include:
   - Agent assignments
   - Expected output per agent
   - Estimated complexity (small / medium / large)

3. **STOP** — wait for approval before proceeding.

### Phase 2: IMPLEMENT

Execute in orchestration order (from ARCHITECTURE.md):

1. **site-builder** — scaffolds page structure (HTML, sections, layout)
2. **content-writer** — fills in all copy, microcopy, headings, CTAs
3. **fluid-theme-dev** — builds/styles components, applies presets, tokens
4. **visual-designer** — reviews visual hierarchy, spacing, color balance
5. **ux-enforcer** — audits all interactions, accessibility, spec compliance
6. **ux-enforcer** — cross-screen consistency pass (if multiple pages)

Each agent reads all prior agents' output before starting.

## Conflict Resolution

- **UX Behavior Spec wins all conflicts** — if creative-director wants a vague "Submit" button, ux-enforcer overrules
- **Fluid Theme conventions are non-negotiable** — logical properties, tokens, `@layer`
- **Content-writer has final say on copy** — other agents don't rewrite text

## Output

- Working page(s) ready to preview
- CHANGELOG.md updated
- Version bumped
