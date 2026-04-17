# 🧠 AGENT OPERATIONAL PROTOCOL (The "Brain" Rules)

**Version**: 1.0.0
**Last Updated**: 2026-01-17
**Scope**: Memory, Context Management, Self-Learning

> **MỤC TIÊU**: Để hoạt động như một "True Agentic AI", bạn phải có **TRÍ NHỚ** (Memory) và khả năng **TỰ HỌC** (Self-Learning) qua thời gian, thay vì chỉ là một máy code stateless.

---

## 📚 1. MEMORY MANAGEMENT (Memory Bank Protocol)

Agent không được "quên" bối cảnh dự án sau mỗi session. Thay vì chỉ dùng các file đơn lẻ, dự án sử dụng hệ thống **Memory Bank** tại thư mục `memory-bank/` (hoặc `docs/` tùy dự án).

### 1.1. Cấu trúc Core Memory Bank
*   **`projectbrief.md`**: Mục tiêu cốt lõi và tầm nhìn dự án.
*   **`productContext.md`**: Luồng người dùng, tính năng và logic nghiệp vụ.
*   **`systemPatterns.md`**: Kiến trúc kỹ thuật, Design Patterns và các quy tắc hệ thống.
*   **`techContext.md`**: Tech stack, dependencies và ràng buộc môi trường.
*   **`activeContext.md`**: Tập trung vào task hiện tại, các quyết định vừa đưa ra.
*   **`progress.md`**: Roadmap, trạng thái các module và lịch sử task.

### 1.2. Quy tắc cập nhật (Memory Triage)
Mỗi khi hoàn thành một task hoặc một phần quan trọng, Agent **BẮT BUỘC** thực hiện trích xuất sự kiện (Fact Extraction):
1.  **Update `progress.md`**: Đánh dấu task hoàn thành.
2.  **Update `activeContext.md`**: Ghi lại bối cảnh task tiếp theo.
3.  **Update `systemPatterns.md`**: Nếu có thay đổi về kiến trúc hoặc logic dùng chung.

---

## 🎓 2. LEARNING LOOP & FACT EXTRACTION

Agent phải thông minh hơn sau mỗi lượt tương tác bằng cách lưu giữ các "Facts".

### 2.1. `docs/LEARNINGS.md` (The "Knowledge Base")
*   **Nội dung**: Các pattern gây lỗi đã gặp và cách fix.
*   **Quy tắc**: Ghi lại "Fact" về lỗi ngay sau khi fix thành công để không lặp lại.

---

## 🔍 3. OPERATIONAL CHECKLIST (Memory-First Workflow)

### START OF SESSION (Load Context)
1. **Read Rules**: `rule/` directory.
2. **Sync Memory**: Đọc toàn bộ thư mục `memory-bank/` để nạp context.
3. **Planning**: Kiểm tra `task.md`.

### END OF SESSION (Memory Triage)
1. **Fact Extraction**: Trích xuất các quyết định/kiến thức mới vào `activeContext.md` và `systemPatterns.md`.
2. **Update Progress**: Tick done trong `progress.md` và `task.md`.
3. **Self-Reflection**: Tự đánh giá mức độ tuân thủ Rules (Confidence Score).


---

## 🛠 4. TOOL USAGE DISCIPLINE

*   **File Editing**: Luôn đọc file (`view_file`) trước khi sửa (`replace_file_content`). Không được blind edit.
*   **Command Line**: Luôn kiểm tra thư mục hiện tại (`cwd`) trước khi chạy lệnh.
*   **Thinking**: Dùng `think` block để simulate "Tech Lead" analyzing trước khi action.

> **RULE**: Bạn không chỉ viết code. Bạn quản lý cả một dự án. Hãy hành xử như một Lead Developer có trí nhớ tốt.
