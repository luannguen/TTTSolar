## 🧠 Brainstorm: Solving "Web App vs OS Agent" Conflict

### Context
Current project is a Web App (React/Vite). The user wants an Agent that manages **OS files** (Downloads, Documents).
**Problem:** Web Apps live in the browser. Closing the browser kills the Agent. User doesn't want to keep the web page open 24/7 just to sort files.

---

### Option A: The "Sidecar" Service (Recommended)
We build a **Standalone Node.js Script** inside your current project.
- **How it runs:** You run `npm run agent:start` once. It runs in the background (hidden terminal or PM2).
- **Independence:** It works even if Chrome is closed. It supports "Auto-start with Windows".
- **Communication:** It spins up a tiny local server (e.g., `localhost:4000`).
- **Web UI:** When you *do* open your Web App, it connects to `localhost:4000` to show specific dashboard/settings, but the "Work" happens in the background service.

✅ **Pros:**
- **Zero Friction:** Files are sorted even when you sleep (if PC is on).
- **No Browser Lock:** Close the web, Agent still works.
- **Privacy:** All local.

❌ **Cons:**
- **Setup:** Cần chạy 1 câu lệnh để start service (hoặc cài vào Startup).

📊 **Effort:** Medium

---

### Option B: Convert to Desktop App (Electron/Tauri)
We wrap your existing React Website into a **Desktop Application**.
- **Change:** `npm install electron`.
- **Result:** You get a `.exe` file.
- **Behavior:** It sits in the System Tray (góc màn hình). It *is* a native app now.

✅ **Pros:**
- **Native Power:** Full access to Windows API easily.
- **familiarity:** Giống Zalo/Telegram PC.

❌ **Cons:**
- **Heavy:** Electron app ngốn RAM (100MB+).
- **Architecture Change:** Biến đổi dự án từ Web thuần sang Hybrid. Phức tạp hơn để maintain nếu bạn vẫn muốn deploy lên web server (Vercel) cho người khác dùng.

📊 **Effort:** High

---

### Option C: Browser Extension
We build a **Chrome/Edge Extension** that talks to your Web App.
- **How it runs:** Installed in your browser.
- **Limit:** Only captures files downloaded *via that browser*. Cannot organize files downloaded by other apps or copied from USB.

✅ **Pros:**
- **Easy install:** Add to Chrome.

❌ **Cons:**
- **Limited Scope:** Không quản lý được toàn bộ folder Download (chỉ file do Chrome tải).
- **Dependence:** Chrome must be open.

📊 **Effort:** Medium

---

## 💡 Recommendation

**Option A (Sidecar Service)** là "Best of both worlds":
1. Giữ nguyên kiến trúc Web App hiện tại của bạn.
2. Thêm một "cánh tay phải" (Node.js Service) chạy ngầm để làm việc nặng.
3. Không bắt buộc mở Web. Windows Notification sẽ lo việc thông báo.
4. Nếu cần giao diện cấu hình -> Mới mở Web lên.

Bạn có đồng ý chuyển hướng sang **Sidecar Service** không?
Nếu Đồng ý, tôi sẽ cập nhật lại `PLAN.md` để tách biệt rõ:
- **Frontend**: React (UI).
- **Agent Service**: Node.js (Background logic).
