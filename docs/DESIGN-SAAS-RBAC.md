# 🏗️ SAAS RBAC & ENTERPRISE DESIGN

> **Analysis & Design Document**
> Target: Upgrade core RBAC to support B2B SaaS requirements (Multi-tenant, Onboarding, Granular Permissions).

**Last Updated**: 2026-02-05
**Status**: Proposal

---

## 1. Executive Summary

Hệ thống hiện tại đã có nền tảng **Multi-tenant** cơ bản (Organization, Units, Members). Tuy nhiên, để phục vụ khách hàng Doanh nghiệp (SaaS B2B), hệ thống cần nâng cấp mạnh mẽ về:
1.  **SaaS Hierarchy**: Phân định rõ Super Admin (Chủ sàn) và Org Owner (Khách hàng).
2.  **Onboarding**: Quy trình mời thành viên chuyên nghiệp (Invite flow).
3.  **Governance**: Cơ chế Org Owner toàn quyền và không thể bị phế truất.
4.  **Flexibility**: Cho phép doanh nghiệp tự định nghĩa Role & Permission (Dynamic RBAC).

---

## 2. Updated Actors & hierarchy

Chúng ta sẽ định nghĩa lại cây phân cấp quyền lực như sau:

| Level | Actor | Scope | Role | Quyền hạn chính |
|-------|-------|-------|------|-----------------|
| **L0** | **Super Admin** | **System** | `platform_owner` | Quản lý toàn bộ Tenant, Subscription plans, System config, Audit Trail toàn hệ thống. |
| **L1** | **Org Owner** | **Org** | `org_owner` | **(Mới)** Người tạo/mua gói Subscription. Có Full quyền trong Org. Không ai có thể kick/edit role. |
| **L2** | **Org Admin** | **Org** | `org_admin` | Được Owner ủy quyền quản lý. Có thể tạo User, gán Role (trừ Owner). |
| **L3** | **Dept Head** | **Unit** | `dept_head` | Quản lý 1 Phòng ban. Giao task, duyệt timesheet trong scope phòng ban. |
| **L4** | **Member** | **Unit** | `member` | Thực hiện task, log timesheet. Quyền hạn giới hạn. |

---

## 3. Gap Analysis & Solution Design

### 3.1. User Onboarding Flow (Mới)
**Hãng hiện tại**: Admin tạo user trực tiếp -> DB insert record. User không biết password, không có luồng active.

**Giải pháp Nâng cấp**:
1.  **Invite Flow**:
    *   Admin nhập email -> Hệ thống tạo record `user_invites` (token, email, role, org_id).
    *   System gửi email mời ("Bạn được mời tham gia tổ chức X").
    *   User click link -> Đăng ký/Đăng nhập -> Accept Invite.
    *   System trigger: Link User ID vào `user_org_memberships`.

2.  **Schema Change**:
    ```sql
    CREATE TABLE user_invites (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        org_id UUID REFERENCES organizations(id),
        email TEXT NOT NULL,
        role TEXT NOT NULL,
        dept_id UUID, -- Optional: Mời thẳng vào phòng ban
        token TEXT UNIQUE NOT NULL,
        expires_at TIMESTAMPTZ,
        status TEXT DEFAULT 'pending' -- pending, accepted, expired
    );
    ```

### 3.2. Org Owner Governance
**Hiện trạng**: Role được gán mềm, Admin này có thể xóa Admin kia. Rủi ro tranh chấp quyền lực.

**Giải pháp**:
1.  **Hard-coded Ownership**: Bảng `organizations` thêm cột `owner_id`.
    ```sql
    ALTER TABLE organizations ADD COLUMN owner_id UUID REFERENCES users(id);
    ```
2.  **Immutable Rules**:
    *   RLS Policy: Chỉ Owner hoặc Super Admin mới được update `owner_id`.
    *   Logic BE: Không cho phép `deleteUser` nếu user đó là `owner_id` của Org.
3.  **Transfer Ownership**: Tính năng "Chuyển giao quyền sở hữu" (cần OTP/Email confirmation).

### 3.4. Business Template Engine (New Request)
**Vấn đề**: Doanh nghiệp mới tạo tài khoản -> Hệ thống trống trơn -> Khách hàng không biết bắt đầu từ đâu -> Churn Rate cao.

**Giải pháp**: Hệ thống "One-click Setup" theo ngành nghề.
Khi tạo Org mới, Admin chọn: "Lĩnh vực hoạt động" (Công nghệ / Xây dựng / Thương mại / Hành chính công).

**Cấu trúc một Template (`org_templates` table)**:
1.  **Cơ cấu mẫu**: (Ví dụ: IT Company -> Dev, QC, BA, PM).
2.  **Workflows mẫu**:
    *   IT: "Quy trình Deploy", "Quy trình Fix Bug".
    *   Hành chính: "Quy trình Mua sắm", "Quy trình Xin xe".
3.  **Roles & Permissions mẫu**:
    *   IT: "Tech Lead" (Duyệt code), "Tester" (Log bug).
4.  **Sample Data**: Tạo sẵn vài task mẫu hướng dẫn sử dụng.

### 3.5. Dynamic RBAC (Enterprise Feature)
**Hiện trạng**: Permission fix cứng trong code hoặc DB seeding. Khách hàng không thể tạo role "Project Manager" với quyền đặc thù.

**Giải pháp**:
1.  **Custom Roles Table**:
    ```sql
    CREATE TABLE org_roles (
        id UUID PRIMARY KEY,
        org_id UUID REFERENCES organizations(id),
        name TEXT NOT NULL, -- "Project Manager"
        description TEXT,
        is_system BOOLEAN DEFAULT false, -- Role hệ thống (Admin, Member) không được xóa
        permissions JSONB -- ["task:create", "project:view", ...]
    );
    ```
2.  **Permission Matrix UI**:
    *   Giao diện Admin cho phép check/uncheck quyền cho từng Custom Role.
    *   Backend (`OrgContext`): Load permissions từ bảng `org_roles` thay vì hardcode.

---

### 3.6. Audit Logging System (Trust & Security)
**Nhu cầu**: Doanh nghiệp cần biết "Ai làm gì, lúc nào" để tra soát khi có sự cố. Đây là yêu cầu bắt buộc của Enterprise Grade.

**Giải pháp**: Ghi lại mọi tác động thay đổi dữ liệu (CUD - Create/Update/Delete).

**Schema (`audit_logs`)**:
*   `id`: UUID
*   `org_id`: UUID
*   `actor_id`: UUID (Người thực hiện)
*   `action`: TEXT (CREATE_TASK, UPDATE_ROLE, DELETE_PROJECT...)
*   `target_resource`: TEXT (task:123, project:xyz)
*   `changes`: JSONB (Old value vs New value)
*   `created_at`: TIMESTAMP
*   `ip_address`: TEXT

**UI**: Trang "Nhật ký hoạt động" (Activity Log) trong phần Cài đặt của Admin/Owner.

## 4. Implementation Stages

### Phase 1: Foundation & Onboarding (Critical)
*   [ ] DB Migration: Thêm `owner_id` vào `organizations`.
*   [ ] DB Migration: Tạo bảng `user_invites`.
*   [ ] Backend: InviteService (Create invite, Verify, Accept).
*   [ ] UI: Invite User Flow.

### Phase 2: Business Templates (Growth)
*   [ ] Schema: Thiết kế JSON Schema cho Template (Export/Import Org Config).
*   [ ] Data: Xây dựng 02 bộ mẫu: "Doanh nghiệp Cơ bản" và "Công ty Phần mềm".
*   [ ] Backend: Seeding Service (Clone template ra Org thật).
*   [ ] UI: Wizard "Khởi tạo doanh nghiệp" (Chọn ngành -> Auto gen).

### Phase 3: Advanced Governance (Enterprise)
*   [ ] DB Migration: `org_roles` & `audit_logs`.
*   [ ] UI: Role Matrix.
*   [ ] UI: Audit Log Dashboard (Activity Stream).
*   [ ] Logic: Subscription Limits.

---

## 5. UI Mockups (Concept)

### Invite User Modal
```text
[ Email address       ] (nhap nhieu email cach nhau dau phay)
[ Chon Vai tro (Role) ] v [ Chuyen vien ]
[ Chon Phong ban      ] v [ Phong Ky Thuat ]
----------------------------------------------
( Button: Gui loi moi )
```

### Role Matrix UI
```text
Role Name: Project Manager
----------------------------------------------
RESOURCE    | READ | WRITE | DELETE | APPROVE
Tasks       |  [x] |  [x]  |  [ ]   |  [ ]
Projects    |  [x] |  [ ]  |  [ ]   |  [ ]
Timesheets  |  [x] |  [x]  |  [ ]   |  [x]
----------------------------------------------
```

---

## 6. Question for Approval
Bạn có đồng ý triển khai theo lộ trình **Phase 1 -> Phase 2 -> Phase 3** như trên không?
Với Phase 1 (Invite Flow) là ưu tiên cao nhất để giải quyết vấn đề "User Onboarding".
