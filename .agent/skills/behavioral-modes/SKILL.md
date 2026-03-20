# Behavioral Modes

Defines how agents behave differently based on task type. Modes activate automatically based on context or explicitly via workflow commands.

---

## 1. BRAINSTORM Mode

**When:** Project kickoff, feature ideation, design direction, pipeline steps 01-03.

**Behavior:**
- Explore options — generate at least 3 approaches with pros, cons, tradeoffs
- Ask questions to understand goals, constraints, audience
- Present alternatives visually (describe layouts, color directions, motion choices)
- Recommend one approach with reasoning

**Output:** Structured markdown with options, tradeoffs, and recommendation.

**Do NOT:** Write code, create files, modify anything. Planning only.

**Domain examples:**
- Design direction: "Option A: Serene preset with Morandi palette for a luxury feel..."
- Brand identity: "Voice Option 1: Confident and direct — 'Your meals, sorted.' ..."
- UX patterns: "Approach A: Modal-based checkout vs. Approach B: Inline expanding form..."

---

## 2. IMPLEMENT Mode

**When:** Building pages, creating components, writing CSS, scaffold projects, pipeline steps 04-08.

**Behavior:**
- Direct execution — write code, create files, build things
- Follow all conventions (Fluid tokens, logical properties, `@layer`, semantic HTML)
- Minimal questions — make reasonable decisions and proceed
- Apply UX spec rules automatically (button labels, validation, feedback)

**Output:** Working code, ready to preview.

**Do NOT:** Second-guess decisions already made in BRAINSTORM/PLAN. Just build.

---

## 3. REVIEW Mode

**When:** Auditing existing work, UX compliance checks, code review, pipeline step 09.

**Behavior:**
- Read all relevant files before commenting
- Check against UX Behavior Spec systematically
- Report findings as: Critical / Warning / Passed
- Be specific: file, line, what's wrong, what the spec says, how to fix it

**Output:** Audit report in structured markdown (like UX-AUDIT-REPORT.md).

**Do NOT:** Fix things automatically. Report findings and wait for approval (unless explicitly told to fix).

---

## 4. DEBUG Mode

**When:** Fixing broken layouts, CSS issues, accessibility failures, template problems.

**Behavior:**
1. **Reproduce** — understand what's wrong and where
2. **Isolate** — which file(s), component(s), screen(s)
3. **Diagnose** — root cause (CSS specificity? missing token? wrong class? missing import?)
4. **Fix** — apply the fix following all conventions
5. **Verify** — check that the fix works and didn't break anything
6. **Search** — find all other instances of the same pattern and fix them too
7. **Log** — update CHANGELOG.md

**Output:** Fixed code + explanation of root cause.

**Common issues in our domain:**
- CSS not applying: wrong layer? wrong selector? missing import in fluid.css?
- Dark mode broken: hardcoded colors instead of tokens?
- Mobile layout broken: missing responsive rules? no `.table-wrap`?
- Keyboard inaccessible: missing focus styles? manual focus trap on `<dialog>`?
- Inconsistent patterns across screens

---

## 5. SHIP Mode

**When:** Final checks before deployment or committing.

**Behavior:**
1. Run a quick audit: any broken links? missing alt text? "Submit" button labels?
2. Check version: is it bumped? is CHANGELOG.md updated?
3. Verify dark mode and light mode both work
4. Check `prefers-reduced-motion` is respected
5. Verify responsive behavior at key breakpoints

**Output:** Ship checklist with pass/fail for each item.

**Do NOT:** Add features. Ship mode is for validation, not building.
