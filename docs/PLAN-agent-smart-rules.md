# Plan: Agent Smart Rules & Learning (V3.1)

## Overview
Expand the File Agent's capabilities to handle more file types immediately (Option A) and implement a "Human-in-the-loop" learning system for unknown files (Option B).

## Goals
1.  **Immediate**: Support Office, Media, Code, and Archives out-of-the-box.
2.  **Smart**: When a file is unknown, don't ignore it. Status = `pending`.
3.  **Interactive**: User sees "Pending Files" on Dashboard -> Selects Category -> Agent learns and moves.

## Task Breakdown

### Phase 1: Expanded Knowledge (Option A)
- [ ] **Update Seed Rules**: Add 30+ common extensions to `service.js`.
    - **Documents**: docx, xlsx, pptx, pdf, txt, csv, md
    - **Images**: jpg, png, gif, svg, wepb, psd
    - **Media**: mp4, mp3, mov, wav, mkv
    - **Archives**: zip, rar, 7z, tar, gz
    - **Code**: js, py, html, css, java
    - **Executables**: exe, msi

### Phase 2: The Learning Loop (Option B)
- [ ] **Database Update**: Add `pending_decisions` table or use `history` with status `pending`.
- [ ] **Classifier Update**: If no rule matches -> Return `action: ask` -> Log to DB as `pending`.
- [ ] **API Update**:
    - `GET /pending`: List files waiting for decision.
    - `POST /resolve`: User sends `{ file, category }` -> Agent moves file + Adds permanent rule.
- [ ] **Dashboard Update**:
    - Add "Cần phân loại" (Needs Review) section.
    - Dropdown to choose category for pending files.

## Verification
- [ ] **Docs**: Create `test.docx` -> Successfully moved to `Documents`.
- [ ] **Unknown**: Create `test.xyz` -> Appears in Dashboard "Pending" -> User chooses "Others" -> File moved -> Next `test2.xyz` auto-moves.
