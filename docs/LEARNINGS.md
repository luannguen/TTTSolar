# 🎓 LEARNINGS LOG

**Purpose**: Record technical lessons, fixed bugs, and patterns to avoid.
**Rule**: Read this before starting complex tasks.

---

## 2026-01-17: Enterprise Features Implementation

### SQL Migration Issues
- **Issue**: Foreign key type mismatch (`task_id UUID` vs `tasks.id TEXT`)
- **Solution**: Use TEXT type for task_id to match existing schema
- **Prevention**: Always check existing table schemas before creating FKs

### SQL Constraints
- **Issue**: `NOT NULL` constraint on `org_id` blocked global metrics insertion
- **Solution**: Allow NULL for org_id on global/template data tables
- **Prevention**: Design for global defaults from the start

### Existing Tables
- **Issue**: Notifications table already existed with different schema
- **Solution**: Use `CREATE TABLE IF NOT EXISTS` + `DO $$ ALTER TABLE ADD COLUMN IF NOT EXISTS`
- **Prevention**: Check for existing tables before migration

### React Router Context Providers
- **Issue**: `OrgProvider` placed directly inside `<Routes>` caused error: "not a <Route> component"
- **Root Cause**: React Router v6 requires only `<Route>` or `<React.Fragment>` as direct children of `<Routes>`
- **Solution**: Created `OrgLayout` wrapper component with `<Outlet />` and used `<Route element={<OrgLayout />}>`
- **Prevention**: Always wrap context providers in layout components when used within Routes

### RLS Infinite Recursion
- **Issue**: Query to `user_org_memberships` failed with "infinite recursion detected in policy"
- **Root Cause**: RLS policy on `user_org_memberships` queried itself to check access
- **Solution**: Create `SECURITY DEFINER` function `get_user_org_ids()` to bypass RLS, use in policies
- **Prevention**: Never reference a table in its own RLS policy directly; use SECURITY DEFINER helper functions

### OKR Service Join Error
- **Issue**: OKR page returned 400 when fetching objectives
- **Root Cause**: `owner:users(id, name, avatar_url)` join failed - no FK relationship defined
- **Solution**: Remove `owner:users` join from okrService.ts, fetch user data separately if needed
- **Prevention**: Verify PostgREST relationships exist before using embedded selects

### Seed Data User Linking
- **Issue**: Seed data created but users couldn't see it (no org fallback)
- **Root Cause**: DO $$ block only linked first user, other users had no memberships
- **Solution**: Create separate script to link ALL users to demo org
- **Prevention**: Design seed scripts to be idempotent and handle multiple users

### RLS Type Mismatch (403 Forbidden)
- **Issue**: Task UPDATE failed with 403 even after adding policy
- **Root Cause**: `auth.uid()` returns UUID, but `assignee_id` was TEXT type
- **Solution**: Cast both sides: `assignee_id::text = auth.uid()::text`
- **Prevention**: Always use `::text` casts when comparing auth.uid() with TEXT columns

### RLS Function Signature
- **Issue**: `get_user_org_ids()` not found error
- **Root Cause**: Function requires parameter but called without: `get_user_org_ids(p_user_id TEXT)`
- **Solution**: Call with `get_user_org_ids(auth.uid()::text)`
- **Prevention**: Check function signatures in migration files before using

### Mobile UX - Kanban Drag-Drop
- **Issue**: Horizontal drag-drop difficult on mobile touch screens
- **Solution**: Implement long-press (500ms) → Modal status change pattern
- **Pattern**: Mobile-first = tap for detail, long-press for quick action
- **Component**: `StatusChangeModal` with touch-friendly 56px buttons

### RLS Function Return Type Mismatch
- **Issue**: `text = uuid` operator error when using `get_user_org_ids()` in policies
- **Root Cause**: Function returns `TABLE(org_id UUID)` but code tried `::text IN (SELECT *)`
- **Solution**: 
  ```sql
  -- Dùng ARRAY_AGG + ANY() cho UUID
  v_org_ids UUID[];
  SELECT ARRAY_AGG(org_id) INTO v_org_ids FROM get_user_org_ids(v_user_id);
  WHERE t.org_id = ANY(v_org_ids);
  
  -- Hoặc SELECT column name rõ ràng
  org_id IN (SELECT org_id FROM get_user_org_ids(...))
  ```
- **Prevention**: 
  1. Always check function return type trước khi dùng
  2. Dùng `SELECT column_name` thay vì `SELECT *` khi compare types
  3. Dùng `ARRAY_AGG` + `ANY()` pattern cho set membership với UUID

---

## 2026-01-17: Foundation Setup
- **Context**: Setting up Agentic Workflow.
- **Learning**: Explicitly formatted rules (`.md`) are better than loose text instructions for Agent adherence.
- **Action**: Converted all `.txt` rules to `.md` in `rule/`.

---

## [Template]
- **Bug/Issue**: ...
- **Root Cause**: ...
- **Solution**: ...
- **Prevention Rule**: ...

