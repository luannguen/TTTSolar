# Plan: Product-Grade File Manager Agent (V3)

## Overview
Build a resilient, "set-and-forget" File Management Sidecar Service for Windows. It runs in the background, watches for files, classifies them using AI/Rules, and safely organizes them. It connects to the existing Web App for configuration and monitoring.

## Success Criteria
- [ ] **Architecture**: Runs as a standalone Node.js Windows Service (independent of Browser).
- [ ] **Safety First**: NEVER deletes files. Uses Recycle Bin. Supports "Undo" for all actions.
- [ ] **Real-time**: sub-5s detection of new files in Downloads.
- [ ] **Zero Friction**: Works when screen is locked or Web App is closed.
- [ ] **Security**: Local Pairing Token prevents unauthorized access.
- [ ] **Dashboard**: Web App allows configuring rules, viewing history, and triggering Undo.

## Tech Stack
- **Service**: Node.js (Background Process).
- **OS Integration**: `node-windows` (Service Wrapper), `node-notifier` (Toast), `trash` (Safe delete).
- **Database**: `better-sqlite3` (Local History & Rules).
- **Watcher**: `chokidar` (File System Events).
- **API**: Fastify/Express (Localhost HTTP Server for Web App comms).

## File Structure
```
/agent-service
  /src
    /core
      watcher.js        # File system listener
      organizer.js      # Move logic with Undo support
      guardian.js       # Safety checks (Permissions, Locks)
    /brain
      classifier.js     # AI + Rule Engine
    /data
      db.sqlite         # History & Config
    /api
      server.js         # Localhost API
    service.js          # Windows Service Entry point
  package.json
/quanlykhoiluongcongviec/src/features/agent-dashboard # Web UI
```

## Task Breakdown

### Phase 1: Core Service Foundation (The Engine)
| ID | Task | Input | Output | Verify |
|----|------|-------|--------|--------|
| T1 | Init Service Project | `npm init` in `/agent-service` | `package.json` with deps | `npm start` runs |
| T2 | Implement Watcher | `chokidar` setup | Detects file in Downloads | Console log on file add |
| T3 | SQLite Setup | Database Schema (History, Rules) | `db.sqlite` created | Table exists |

### Phase 2: Safety & Logic (The Brain)
| ID | Task | Input | Output | Verify |
|----|------|-------|--------|--------|
| T4 | Rule Engine | JSON Rules Logic | Matches file extension | Test `.jpg` -> `Pictures` |
| T5 | Safe Move & Undo | `organizer.js` with Transaction Log | File moved & Logged | `undo()` restores file |
| T6 | Lock Handling | Retry logic for busy files | Waits for download finish | Doesn't crash on partial file |

### Phase 3: Connectivity & Lifecycle (The Bridge)
| ID | Task | Input | Output | Verify |
|----|------|-------|--------|--------|
| T7 | Local API Server | Express/Fastify | `GET /status` returns JSON | `curl localhost:4000/status` |
| T8 | Auth Middleware | Bearer Token logic | Rejects no-token requests | 401 Unauthorized |
| T9 | Service Wrapper | `node-windows` script | App runs as Windows Service | Visible in `services.msc` |

### Phase 4: Web UI Integration (The Dashboard)
| ID | Task | Input | Output | Verify |
|----|------|-------|--------|--------|
| T10 | Settings Page | React Component | UI to Toggle Agent | Calls API `/sys/toggle` |
| T11 | History & Undo UI | React Table | Shows recent moves | Click Undo -> File restored |
| T12 | Pairing Flow | "Enter Code" UI | Saves token to storage | Connects successfully |

## ✅ PHASE X: Verification
- [ ] **Resilience**: Kill Node proces -> Service restarts.
- [ ] **Safety**: Move file -> Check Recycle Bin -> Undo -> Check Original Location.
- [ ] **Security**: Access API without token -> Denied.
- [ ] **Usability**: Download file -> Notification appears -> Dashboard updates.
