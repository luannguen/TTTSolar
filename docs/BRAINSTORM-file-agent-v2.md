## 🧠 Brainstorm: Smart AI File Manager (Real-time & Learning)

### Context
Current plan is a static "Command to Run" script. User wants a "Proactive Assistant" that watches folders in real-time, chats with the user about new files, and learns preferences over time.

---

### Option A: Local LLM + Watcher Service (The "Heavy" Pro)
Run a local background service (Node.js/Python) that watches file system events (`chokidar` / `watchdog`).
When a file arrives:
1.  Extract text/metadata (OCR for images, PDF parsing).
2.  Send to a **Localized Small Language Model** (e.g., Llama 3 8B or Gemini Flash API) to categorize.
3.  If confidence is low, pop up a notification/chat window.
4.  Store decision in a local `learning.json` or SQLite DB.

✅ **Pros:**
- **Privacy**: File content analysis can stay local (if using local LLM).
- **Real-time**: Instant reaction to downloads.
- **Smart**: Can read the *content* of the file, not just the extension.

❌ **Cons:**
- **Complexity**: Needs a persistent background process manager (PM2 or Windows Service).
- **Resource Heavy**: Monitoring + AI inference uses RAM/CPU.

📊 **Effort:** High

---

### Option B: "Action Center" Chat Integration (Antigravity Extension)
Expand the existing `antigravity-kit` to have a "Daemon Mode".
- The Agent runs a lightweight file watcher.
- When a file is detected, it pushes a "System Message" into your main chat interface: *"Hey, I noticed `invoice_2024.pdf`. Move to `Finance`?"*
- You reply directly in the chat command line.
- Learning is stored in the agent's memory (`.agent/memory/file_preferences.json`).

✅ **Pros:**
- **Integrated**: Uses your existing workflow/chat UI.
- **Development**: Easier to build on top of current stack.
- **Learning**: Can leverage the main Agent's context.

❌ **Cons:**
- **Dependency**: Requires the chat interface to be open to receive proactive messages (unless we add system notifications).

📊 **Effort:** Medium

---

### Option C: Hybrid "Smart Batching" (The "Lazy" Pro)
Instead of real-time nagging (which might be annoying), the agent runs silently in the background logging new files.
- Once a day (or when prompted), it presents a "Digest": *"Today you downloaded 10 files. I auto-sorted 8. Here are the 2 I'm unsure about."*
- It uses a "Learning Database" (Vector DB or simple JSON) to match new files against past decisions.

✅ **Pros:**
- **Less Annoying**: Doesn't interrupt flow for every single file.
- **Efficiency**: Batch processing is faster.
- **Simplest MVP**: Good balance of smarts and effort.

❌ **Cons:**
- **Not truly "Real-time" interaction**: Feedback loop is delayed.

📊 **Effort:** Medium-Low

---

## 💡 Recommendation

**Combine Option B (Integration) + Option A (Watcher)**:
1.  **Watcher**: Use a lightweight Node.js script (`chokidar`) to watch `Downloads`.
2.  **Brain**: Use the existing Project Agent (Gemini) as the "Brain" to decide.
3.  **Interface**:
    - **Trigger**: Pop a standardized Windows Notification.
    - **Interaction**: If clicked, opens a mini-chat window (or the main CLI) to discuss.
    - **Learning**: Save user logic to `rules.json` (e.g., "files from 'tax' in name -> finance folder").

This meets the "Real-time" and "Chat" requirements while keeping architecture manageable.
