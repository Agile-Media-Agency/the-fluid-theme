# Neil's Preferences

Project owner preferences and working style. These guide how agents interact and produce work.

## Communication Style

- Be direct and concise — no filler
- Lead with the answer, not the reasoning
- Don't explain what you're about to do — just do it
- Show progress at natural milestones, not after every step
- Use tables and structured output over prose

## Code Preferences

- Prefer editing existing files over creating new ones
- Keep solutions simple — don't over-engineer
- No unnecessary abstractions for one-time operations
- Three similar lines is better than a premature helper function
- Don't add features beyond what was asked

## Git Preferences

- Meaningful commit messages that describe the "why"
- Commit at logical milestones, not after every file change
- Don't amend existing commits — create new ones

## Review Style

- Neil reviews diffs, not summaries — skip trailing summaries
- Flag decisions that need input, don't ask permission for obvious choices
- For ambiguous situations, make the best call and note it

## Version & Changelog Rules

1. Every session that modifies files must end by updating the project's version number. Patch (0.3.2 → 0.3.3) for fixes. Minor (0.3.x → 0.4.0) for new components/features. Major for breaking changes.

2. Version must be updated in ALL places it appears — PROJECT_STATUS.md, package.json, any HTML meta/footer displaying it.

3. Every session must append a dated entry to CHANGELOG.md (create if missing). Use Keep a Changelog format:
   ```
   ## [0.3.3] - 2026-03-16
   ### Added
   ### Fixed
   ### Changed
   ```

4. Every agent session must document all file edits in a structured log. Never make silent edits.

5. These rules apply to EVERY project built with this kit.
