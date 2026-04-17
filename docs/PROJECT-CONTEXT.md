# 📁 PROJECT CONTEXT

**Last Updated**: 2026-01-17
**Status**: Active Development

## 1. Project Overview
- **Name**: Quản lý Khối lượng Công việc (TaskFlow)
- **Type**: Mobile-First Enterprise SaaS
- **Architecture**: 3-Layer (UI → Hook → Service/Data)
- **Tech Stack**: React, TypeScript, Vite, Supabase, Tailwind CSS

## 2. Current Status
- **Phase**: **Feature CRUD + Filters**
- **Completed**:
    - ✅ Agentic Foundations (rules/, docs/, skills/)
    - ✅ SQL Migrations (001-033) - 33 tables
    - ✅ 14 Services implemented
    - ✅ 16 Feature modules created
    - ✅ Enterprise routes + navigation
    - ✅ Kanban Board với mobile long-press
    - ✅ Domain Model documented
    - ✅ OKR CRUD (Create/Edit/Delete)
    - ✅ Timesheet CRUD (Create/Read/Update/Delete)
    - ✅ Kanban Context Filters (Project/Dept/Assignee)
- **In Progress**:
    - Analytics Dashboard enhancement
    - **[NEW] 3D Board Game Project**: Khởi tạo bằng Vite + React Three Fiber + Zustand + Socket.io tại `f:/code duan/duan FMS/board-game-3d`.
    - **[RESEARCH] Hapico Copy (Base44 Platform)**: Đã hoàn thành nghiên cứu tech stack và kiến trúc 3 lớp tại `f:/code duan/HAPICO COPY`. Tài liệu hướng dẫn chi tiết tại `docs/BASE44-PROJECT-GUIDE.md`.

## 3. Domain Model

### Entity Hierarchy
```
Organization
├── Organization Units (Departments)
│   └── Users (via memberships)
├── Projects → Milestones → Tasks
├── Tasks (standalone hoặc trong project)
│   ├── Ownership: owner_id, assignee_id, accountable_id
│   ├── Context: department_id, project_id (optional)
│   └── Cross-dept: task_department_assignments
└── OKRs → Key Results
```

### Kanban = Task View Mode
Kanban **không phải entity**, mà là **view mode** của Tasks.

| Context | Filter |
|---------|--------|
| Global | org_id |
| Project | project_id |
| Department | department_id |
| Personal | assignee_id = me |

### Key Relationships
- `tasks.project_id` → projects (optional)
- `tasks.department_id` → organization_units (optional)
- `task_department_assignments` → Cross-dept participation

## 4. SQL Migrations
| File | Purpose |
|------|---------|
| 001-006 | Core RBAC, Audit, Projects, OKR, Timesheet |
| 007 | RLS Recursion Fix |
| 008-010 | Seed Data, Memberships Fix |
| 011-013 | Tasks RLS attempts |
| **014** | **Final Tasks RLS** |

## 5. Key Decisions
- **RLS**: Org-based isolation, SECURITY DEFINER for helpers
- **Kanban**: View mode, not entity
- **Mobile UX**: Long-press → Modal for status change
- **Cross-dept**: Via task_department_assignments table
