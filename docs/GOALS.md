# 🥅 GOAL ENGINE

**Status**: Active
**Last Updated**: 2026-01-17

> **INSTRUCTION**: Agent must align every task with these goals. If a user request contradicts these goals, Agent must raise a trade-off discussion.

## 1. Primary Goal (The "North Star")
**Goal**: Build a **Production-Grade**, **Mobile-First** Commerce App with **Zero Critical Bugs**.
**Success Metrics**:
- [ ] No strict architectural violations (Layering, Modules).
- [ ] UI touch targets always >= 44px.
- [ ] Zero unhandled API errors in logs.

## 2. Active Sub-Goals (Prioritized)

### Priority P0 (Blocking/System Critical)
- [ ] **Establish Agentic Foundations**: Rules, Processes, and Memory systems must be fully operational.
- [ ] **Core Architecture**: Ensure `features/` module pattern is strictly followed in new code.

### Priority P1 (High Value)
- [ ] **Design System Implementation**: Apply Tokens/Components to all new UIs.
- [ ] **Backend Safety**: Audit all Service methods for `Result<T>` pattern.
- [ ] **Responsive Desktop Layout**: Implement Sidebar and Desktop-specific layout adjustments.

### Priority P2 (Nice to Have)
- [ ] Performance Optimizations (Lazy load, memo).

## 3. Completed Goals
- [x] Convert Rules to Markdown.
- [x] Create Team Process definition.
