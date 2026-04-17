# 🧠 DECISION LOG (The "Why")

**Purpose**: Record context, trade-offs, and reasons for key decisions.
**Rule**: Check this before "re-inventing" or "undoing" past work.

## [2026-01-17] Adopted Strict Agentic Workflow
- **Context**: Agent acted as a Senior Dev but lacked "Self-Direction".
- **Decision**: Implemented `AGENTIC-BEHAVIOR.md` (Goal Engine, Decision Memory).
- **Trade-off**: Slower start per task (overhead of checking docs) vs Higher long-term autonomy and correctness.
- **Status**: Active.

## [2026-01-17] Standardized Design System via Markdown
- **Context**: Need specific specs for AI to follow "Pixel Perfect" UI.
- **Decision**: Created `DESIGN-SYSTEM-STANDARD.md` separately from `UI-UX-RULESET.md`.
- **Reason**: Separation of "Principles" (Why) and "Specs" (How) makes it easier for Agent to parse.
- **Status**: Active.
