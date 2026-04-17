## 🧠 Brainstorm: Security, Auth & Settings for File Agent

### Context
We have a **Web App** (Cloud/Browser) and a **Local Agent** (Node.js Service).
**Problem:**
1.  **Security:** prevent random websites from talking to your Local Agent.
2.  **Identity:** How to link "My PC" to "My Web Account".
3.  **Settings:** Where do we save "Don't delete .mp4"?

---

### Option A: Local Pairing (The "Bluetooth" Style)
**Auth:**
1.  Start Agent -> Show "Pairing Code: 1234" in terminal.
2.  Open Web App -> Settings -> "Add Local Agent" -> Enter "1234".
3.  Web App saves a `local_token` in Browser Storage. Agent saves it in `config.json`.
4.  **Security:** API calls to `localhost:4000` must have `Authorization: Bearer <local_token>`.

**Settings:**
- Stored locally in `agent-rules.json`.
- Web App fetches them via API when you open the dashboard.

✅ **Pros:**
- **Secure:** Only *your* browser on *your* machine has the key.
- **Privacy:** Data stays local.
- **Offline Capable:** Works without internet.

---

### Option B: Cloud Device Binding (The "TeamViewer" Style)
**Auth:**
1.  Start Agent -> It asks "Enter your Account Token".
2.  You get token from Web App Profile.
3.  Agent connects to Supabase/Firebase Realtime DB presence.
4.  Web App shows: "🟢 HP-Laptop Online".

**Settings:**
- Stored in Cloud Database (`profiles` table).
- Agent downloads them on startup.

✅ **Pros:**
- **Remote Management:** You can configure your Home PC from your Office PC.
- **Sync:** Rules sync across all your computers.

❌ **Cons:**
- **Complexity:** Requires WebSocket/Realtime setup.
- **Internet Dep:** Agent needs internet to know rules.

---

### Option C: The Hybrid (Recommended)
**Auth:** **Local Pairing** (Option A) for speed/security.
**Settings:** **Cloud Sync**.
1.  Agent runs locally, protected by a Token.
2.  When you change settings on Web App, it saves to Cloud DB *AND* pushes to Local Agent.
3.  Agent caches settings locally (so it works offline).

✅ **Pros:**
- Best of both worlds.
- Fast local UI.
- Backup of your careful configuration in Cloud.

---

## 🛠 Design: Settings Interface
On the Web App, we add a new page: **"AI Assistant Settings"**

**Sections:**
1.  **Connection Status**: 🟢 Connected to Local Agent (v1.0.0)
2.  **Monitoring Rules**:
    - [x] Watch `Downloads`
    - [ ] Watch `Desktop`
3.  **AI Personality**:
    - Mode: [Strict / Ask Me / Lazy]
    - "Ask me if confidence < 80%"
4.  **Category Mapping (The Brain)**:
    - `*.psd, *.ai` -> `D:/Design`
    - `INV-*.pdf` -> `Documents/Invoices`
5.  **History/Log**:
    - "Moved `test.exe` to `Installers` (Today 10:00 AM)"

## 💡 Recommendation
Go with **Option C (Hybrid)**.
It ensures your Agent is safe (Local Token) but your effort in setting up rules is backed up (Cloud).
