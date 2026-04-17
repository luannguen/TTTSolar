## 🧠 Brainstorm: Deep Dive - Lifecycle, Safety & OS Integration

### Context
Moving beyond the "Happy Path" of sorting files. We must address **User Control (Lifecycle)**, **Safety (Undo/Recovery)**, and **OS Reality (Permissions/Locks)**.
The user wants a "Serious" solution, not a toy script.

---

### 1. Lifecycle Management (Install/Uninstall/Toggle)
**Problem:** User shouldn't use CLI to stop the agent. It needs a proper switch.
**Solution: Service Wrapper (`winsw` or `node-windows`)**
- **Install:** Agent registers itself as a native **Windows Service** (display name: "Antigravity Assistant").
- **Toggle:**
    - **ON:** Service Running (Auto-start).
    - **OFF:** Service Stopped/Disabled.
- **Uninstall:** A clean script that deregisters the service and removes files.
- **Control:** The Web App calls APIs (`POST /api/agent/stop`) -> Agent Service catches this and gracefully shuts down its *logic* (but keeps a tiny listener alive) OR completely stops via a helper.

### 2. Safety Net (The "Oops" Factor)
**Problem:** Agent moves "Important.docx" to "Trash". User panics.
**Solution: Transaction Log + Recycle Bin**
- **Principle:** NEVER permanent delete. ALWAYS use **System Recycle Bin**.
- **The "Undo" Button:**
    - Every action is logged to `history.db` (SQLite): `{id: 1, file: 'A.txt', from: 'Downloads', to: 'Docs', time: ...}`.
    - Web App shows "Recent Activity".
    - User clicks **"Undo"** -> Agent reverses the move.
- **Quarantine:** For uncertain files, minimize risk by moving to a `Thinking_Room` folder instead of final destination.

### 3. OS Permissions & Boundaries (Real World)
**Problem:**
- **UAC:** Moving files to `Program Files` needs Admin.
- **Locked Screen:** Does functionality stop?
- **File Locks:** Downloading file is "locked" by Chrome. Agent tries to move -> Error.
**Solution:**
- **User Mode vs Admin Mode:** Agent runs in **User Mode** by default (safest). It only touches User folders (Downloads/Docs). It *refuses* to touch System folders (safely ignores them).
- **Graceful Retries:** If file is locked (Chrome is still writing), Agent waits (Backoff strategy: 1s, 5s, 10s).
- **Background Task:** Windows Services *do* run even when screen is locked (as long as user is logged in).

### 4. Self-Update & Recovery
**Problem:** Bug in Agent code. How to fix?
**Solution: "Updater" Pattern**
- Agent checks `github/repo` or internal API on startup.
- If update found -> Downloads -> Restarts itself.
- **Safe Mode:** If Agent crashes 3 times in a row, it enters "Safe Mode" (stops processing files) and alerts the User via Web App.

---

## 🛠 Proposed "Serious" Architecture

### A. The "Guardian" (Service Manager)
- Tiny executable.
- Handles: Start/Stop Agent, Auto-Update, Crash Recovery.
- Invisible to user.

### B. The "Worker" (The Logic)
- **Safety:** Uses `trash` package (not `rm`).
- **Memory:** `SQLite` (History & Undo).
- **Permissions:** Checks access before moving. Bails out if access denied.

### C. The "Dashboard" (Web Interface)
- **Activity Stream:** "Moved 5 files today. [Undo All]"
- **Configuration:** "Pause Agent for 1 hour".
- **Access Control:** "Authorize this PC" (Pairing).

## 💡 Recommendation
Build a **Resilient Agent** focused on **Safety First**:
1.  **Default to Trash**: Never delete.
2.  **Undo Capability**: Mandatory.
3.  **User-Level Service**: Avoid Admin headaches.
4.  **Activity Log**: User sees exactly what happened.

Bạn có đồng ý nâng cấp độ phức tạp để đạt được sự an toàn và chuyên nghiệp này không?
Nếu Đồng ý, Plan V2 sẽ chuyển thành V3 với thêm module `Guardian` và `History Manager`.
