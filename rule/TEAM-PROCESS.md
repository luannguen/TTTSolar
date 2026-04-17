# 👥 TEAM PROCESS & OPERATIONAL RULES

**Version**: 1.0.0
**Last Updated**: 2026-01-08
**Status**: **BẮT BUỘC** (Mandatory)
**Scope**: All AI Agent Activities

---

## 🎭 1. MULTI-ROLE AGENT (4 HATS PRINCIPLE)

Để giả lập một senior web team, Agent phải luân phiên đóng 4 vai trò trong quá trình xử lý task. KHÔNG làm gộp, hãy "đội mũ" rõ ràng ở từng bước.

| Role | Responsibility | Mindset |
|------|----------------|---------|
| **🧢 TECH LEAD** | Phân tích, chọn giải pháp, identify rủi ro | "Tại sao làm thế này? Trade-off là gì?" |
| **🧢 DEV** | Implement code, tuân thủ architecture rules | "Clean code, đúng pattern, tối ưu." |
| **🧢 QA** | Viết test plan, kiểm tra các edge cases | "Làm sao để phá cái này? User sẽ gặp lỗi gì?" |
| **🧢 REVIEWER** | Soi code, check DoD, duyệt PR ảo | "Code này có an toàn để deploy không?" |

---

## 🛠 2. WORKFLOW CHUẨN (6 PHASES)

Agent không nhảy bổ vào code ngay. Phải đi qua 6 bước sau:

### Phase 1: Analyze & Option (Tech Lead)
- **Input**: User request, `docs/GOALS.md`, `docs/DECISION-LOG.md`
- **Action**: 
  - **Observe & Align**: Check request against Primary Goals.
  - **Prioritize**: Calculate `(Impact * Urgency) / (Effort * Risk)`.
  - **Analyze**: Triệu chứng, Root cause.
  - **Decision**: Chọn option tối ưu dựa trên Trade-offs.
- **Output Artifact**: `Problem Statement` & `Solution Options`

### Phase 2: Plan (Tech Lead)
- **Input**: Selected solution
- **Action**: 
  - Liệt kê các file cần tạo/sửa
  - Check các dependencies cần có
  - Lên checklist task cụ thể
- **Output Artifact**: `Implementation Plan`

### Phase 3: Implement (Dev)
- **Input**: Implementation Plan
- **Action**: 
  - Code theo từng task
  - Tuân thủ `AI-CODING-RULES.md` & `ARCHITECTURE.md`
  - Tag `FR-xx` vào code

### Phase 4: Test (QA)
- **Input**: Code đã viết
- **Action**: 
  - Viết test unit/integration (nếu có môi trường)
  - Hoặc tạo "Manual Test Script" để user verify
- **Output Artifact**: `Test Plan` & `Test Cases`

### Phase 5: Review (Reviewer)
- **Input**: Code & Test results
- **Action**: 
  - Chạy checklist **Self-Review**
  - Soát lại Definition of Done (DoD)
- **Output Artifact**: `Self-PR Review Report`

### Phase 6: Release & Update (Dev)
- **Input**: Approved Code
- **Action**: 
  - **Confidence Check**: Self-score > 90%?
  - Update `FeatureSpec` & `useCaseRegistry`.
  - Update `docs/DECISION-LOG.md` (nếu có decision mới).
  - Viết Changelog & User Notification.

---

## ✅ 3. DEFINITION OF DONE (DoD) & QUALITY GATES

Task chỉ được coi là **DONE** khi Agent đã tích đủ các mục bên dưới. Agent phải tự kiểm tra.

### ✅ Spec & Docs
- [ ] `FeatureSpec` đã update: status, progress %, changelog
- [ ] `FR/TC mapping` đã đầy đủ (mọi business rule trong code đều có tag `// FR-xx`)
- [ ] `useCaseRegistry` đã được cập nhật nếu có feature mới

### ✅ Architecture & Code
- [ ] Không vi phạm 3-Layer Architecture (UI không gọi API trực tiếp)
- [ ] Feature hook nằm đúng chỗ (`hooks/features/...`)
- [ ] Reuse code: Đã check registry và không duplicate logic
- [ ] Error Handling: dùng `Result<T>`, `ErrorCodes`, không throw error trần

### ✅ UI/UX (Nếu có UI)
- [ ] **Empty State**: Có giao diện khi không có dữ liệu
- [ ] **Loading State**: Có skeleton hoặc loading indicator
- [ ] **Error State**: Có thông báo lỗi thân thiện & nút Retry
- [ ] **Feedback**: Có Toast khi action thành công/thất bại
- [ ] **No Native**: Không dùng `alert`, `confirm`, `prompt`

### ✅ Backend/Logic
- [ ] **Zero Trust**: Validate mọi input ở Service layer
- [ ] **No Leak**: Không expose stack trace ra client
- [ ] **Performance**: Không dùng "list all then filter" cho data lớn

---

## 📦 4. MANDATORY ARTIFACTS TEMPLATE

Mỗi khi thực hiện task phức tạp (feature mới, fix bug lớn), Agent cần cung cấp các thông tin sau (có thể gộp vào PR description hoặc file markdown riêng).

### 4.1. Implementation Plan
```markdown
## 📋 Implementation Plan
### 1. Analysis
- **Problem**: ...
- **Root Cause**: ... (nếu là bug)
- **Solution**: ...
### 2. Changes
- [NEW] `path/to/new/file.js`
- [MOD] `path/to/existing/file.js` - mô tả thay đổi
### 3. Risk Assessment
- Impact: (Low/Medium/High)
- Backward Compatibility: (Yes/No)
```

### 4.2. PR Review Report (Self-Check)
```markdown
## 🛡 Self-PR Review
- **Architecture**: ✅ Clean / ⚠️ Warning: ...
- **Reuse**: ✅ Used `useEntityList` / ⚠️ Created new ...
- **Error Handling**: ✅ Checked
- **UI States**: ✅ Loading/Empty/Error covered
- **Remaining Risks**: None
```

---

## 🧪 5. TESTING STRATEGY (LAYER-BASED)

Quy chuẩn test cho từng tầng của hệ thống:

### 5.1. Domain Layer (`features/*/domain`)
- **Type**: Unit Test
- **Target**: Pure functions, rules, calculations, validators
- **Requirement**: Coverage cao nhất, test edge cases (âm, null, max value)

### 5.2. Data Layer (`features/*/data`, `services/`)
- **Type**: Integration Test
- **Target**: Repositories, Service methods
- **Requirement**: Mock `base44` client, verify mapping DTO, check Result<T> trả về với các ErrorCode.

### 5.3. Hook Layer (`features/*/hooks`)
- **Type**: Smoke Test (Unit nếu có thể)
- **Target**: Orchestration logic (gọi service A xong gọi service B)
- **Requirement**: Verify state changes (loading -> success/error)

### 5.4. UI Layer (`features/*/ui`)
- **Type**: Manual / Smoke Test / Snapshot
- **Target**: Render states, Interactions
- **Requirement**: Không test logic sâu, chỉ test hiển thị (Skeleton hiện chưa? Toast có hiện không?)

---

## 🐞 6. OBSERVABILITY & DEBUG PROTOCOL

Quy chuẩn log và báo cáo lỗi:

### 6.1. Logging Standard
- Luôn include `requestId` hoặc `correlationId` nếu có.
- Log context tối thiểu: `userId`, `entityId`, `action`.
- Format: JSON stringified.

```javascript
console.error(JSON.stringify({
  level: 'error',
  action: 'create_order',
  userId: 'user_123',
  errorCode: 'INSUFFICIENT_FUNDS',
  message: 'User balance not enough',
  context: { balance: 50, required: 100 }
}));
```

### 6.2. Bug Report Format (Khi Agent fix bug)
Agent phải tự tổng hợp thông tin khi gặp bug report từ user:
1. **Steps to reproduce**: Bước 1, 2, 3...
2. **Expected vs Actual**: Mong đợi A, nhưng nhận được B.
3. **Logs investigation**: Tìm thấy log gì liên quan?
4. **Fix Proposal**: Sửa ở đâu? Risk là gì?

---

## 🚀 7. RELEASE & MIGRATION DISCIPLINE

Khi thay đổi Schema hoặc Entity quan trọng:

1. **Backward Compatibility**:
   - Field mới phải có `default value` hoặc handle `null`.
   - Không được rename/delete field đang dùng mà không có plan migrate.

2. **Migration Note**:
   - Ghi rõ cần chạy script gì (nếu có).
   - Thứ tự deploy (Backend trước hay Frontend trước).

3. **Impact Analysis**:
   - Liệt kê tất cả màn hình/hook bị ảnh hưởng bởi thay đổi schema.
   - User đang dùng phiên bản cũ sẽ gặp lỗi gì?

---

> **SUMMARY**: Agent hãy hành động như một Team Senior. Đừng chỉ viết code. Hãy phân tích, plan, test, và review chính mình trước khi nói "Done".
