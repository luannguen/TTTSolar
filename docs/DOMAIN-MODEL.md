# 🏗️ DOMAIN MODEL

> Single Source of Truth cho Entity Relationships

**Last Updated**: 2026-01-17

---

## 1. Core Entities

### Organization (Tổ chức)
```
organizations
├── id (UUID PK)
├── name, code, domain
├── profile: 'government' | 'enterprise' | 'hybrid'
└── plan_type: 'free' | 'pro' | 'enterprise'
```

### Organization Units (Phòng ban)
```
organization_units
├── id, org_id (FK)
├── name, code
├── type: 'bộ' | 'cục' | 'phòng' | 'ban' | 'team'
├── parent_id (self-ref for hierarchy)
└── path (materialized path)
```

### Users
```
users
├── id (TEXT, matches auth.uid)
├── email, name, avatar_url
└── default_org_id
```

---

## 2. Task Management

### Tasks
```
tasks
├── id (UUID PK)
├── org_id (FK → organizations) - REQUIRED
├── 
├── # Ownership (RACI)
├── owner_id (người giao)
├── assignee_id (người thực hiện)
├── accountable_id (người chịu trách nhiệm)
├── created_by (người tạo)
├── 
├── # Context (OPTIONAL)
├── project_id (FK → projects)
├── department_id (FK → organization_units)
├── milestone_id (FK → project_milestones)
├── parent_id (subtasks)
├── 
├── # Status
├── status: 'pending' | 'in_progress' | 'review' | 'completed' | 'overdue' | 'cancelled'
└── priority: 'normal' | 'urgent' | 'critical'
```

### Task Participants (RACI Extended)
```
task_participants
├── task_id, user_id
├── role: 'responsible' | 'accountable' | 'consulted' | 'informed' | 'watcher'
└── org_unit_id (phòng ban của participant)
```

### Cross-Department Assignments
```
task_department_assignments
├── task_id, org_unit_id
├── lead_user_id (người phụ trách phía dept)
├── role: 'lead' | 'contributor' | 'reviewer'
├── progress (% hoàn thành của dept)
└── status (trạng thái riêng)
```

---

## 3. Projects & OKR

### Projects
```
projects
├── id, org_id
├── code, name, description
├── owner_id
├── status: 'planning' | 'active' | 'on_hold' | 'completed'
└── progress (0-100)
```

### Milestones
```
project_milestones
├── project_id
├── name, due_date
└── status
```

### OKR
```
objectives
├── org_id, level: 'company' | 'department' | 'team' | 'individual'
├── org_unit_id (if dept/team level)
├── owner_id
└── progress

key_results
├── objective_id
├── metric_type, target_value, current_value
└── weight
```

### Timesheet (Time Tracking)
```
time_entries
├── id (UUID PK)
├── org_id (FK → organizations)
├── user_id (FK → users)
├── task_id (FK → tasks) - optional
├── project_id (FK → projects) - optional
├── date (DATE)
├── hours (DECIMAL 5,2)
├── description (TEXT)
├── billable (BOOLEAN)
└── status: 'draft' | 'submitted' | 'approved' | 'rejected'

timesheet_weeks
├── id (UUID PK)
├── org_id, user_id, week_start
├── total_hours, billable_hours
├── status: 'open' | 'submitted' | 'approved' | 'rejected'
└── approved_by, approved_at
```

**Relations**:
- `time_entries.task_id` → tasks (optional, log time without task)
- `time_entries.user_id` → users (required, who logged)
- `timesheet_weeks` auto-updated via trigger when entries change

---

## 4. Relationships Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                          ORGANIZATION                                │
│  ┌─────────────────────────────────────────────────────────────────┐│
│  │  organization_units (Departments)                                ││
│  │     ↓ has many                                                   ││
│  │  user_org_memberships ←──────── users                            ││
│  └─────────────────────────────────────────────────────────────────┘│
│                                                                      │
│  ┌─────────────────┐         ┌─────────────────────────────────────┐│
│  │    PROJECTS     │         │              TASKS                   ││
│  │  ┌───────────┐  │         │  ┌─────────────────────────────────┐││
│  │  │ Milestones│  │◀────────│──│ project_id (optional)           │││
│  │  └───────────┘  │         │  │ department_id (optional)        │││
│  │                 │         │  │                                 │││
│  │  owner_id ────────────────│──│ owner_id, assignee_id           │││
│  └─────────────────┘         │  │                                 │││
│                              │  │  ┌───────────────────────────┐  │││
│                              │  │  │ task_participants (RACI)  │  │││
│                              │  │  └───────────────────────────┘  │││
│                              │  │                                 │││
│                              │  │  ┌───────────────────────────┐  │││
│                              │  │  │ task_dept_assignments     │  │││
│                              │  │  │ (Cross-department)        │  │││
│                              │  │  └───────────────────────────┘  │││
│                              │  └─────────────────────────────────┘││
│                              └─────────────────────────────────────┘│
│                                                                      │
│  ┌─────────────────┐                                                │
│  │      OKR        │                                                │
│  │  Objectives     │                                                │
│  │     ↓           │                                                │
│  │  Key Results    │                                                │
│  └─────────────────┘                                                │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 5. Kanban as View Mode

**Kanban không phải entity**, mà là cách hiển thị Tasks theo status.

### Kanban Contexts
| View | Source | Filter |
|------|--------|--------|
| /kanban | All my accessible tasks | org_id filter |
| /projects/:id/kanban | Tasks in project | project_id = :id |
| /departments/:id/kanban | Tasks of dept | department_id = :id |

### Status Columns
```
pending → in_progress → review → completed
   ↓          ↓           ↓
 overdue   cancelled   rejected
```

---

## 6. Cross-Department Workflow

```
Task: "Triển khai hệ thống mới"
├── Owner: Giám đốc IT
├── Primary Department: IT (lead)
│
└── task_department_assignments:
    ├── HR Department
    │   ├── lead: Trưởng phòng HR
    │   ├── role: 'contributor'
    │   └── task: "Thông báo nhân viên"
    │
    └── Finance Department
        ├── lead: Kế toán trưởng
        ├── role: 'contributor'
        └── task: "Chuẩn bị ngân sách"
```

---

*Xem thêm: [02_DATA_MODEL.md](./spec/02_DATA_MODEL.md), [04_WORKFLOW_ENGINE.md](./spec/04_WORKFLOW_ENGINE.md)*
