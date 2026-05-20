# 2026-05-19 — Notion + GitHub Combo Audit

## Purpose
This file records the current architecture decision for the MCAT organization system.

## Existing GitHub Repo
Repository: stonesandivygrows/stonesandivygrows-mcat-prompt-library
Visibility: private
Role: prompt library, scripts, HTML/code, versioned markdown templates, and system instructions.

## Existing Notion Parent
Parent page: Page for Chat GPT
Role: dashboard, task tracker, decisions, status tracking, and high-level indexes.

## Core Architecture
- Notion = dashboard, decisions, task tracker, indexes, system status.
- GitHub = prompts, scripts, HTML/CSS/JS, versioned markdown templates, dated system files.
- Local Mac folder = active raw files, MacWhisper exports, NotebookLM audio downloads, screenshots, and working files.
- iCloud = backup and raw source pool.
- Cursor = local file assistant, bulk editor, and GitHub/local repo editor.
- Netlify = hosted HTML only.
- Canva = editable visuals only.
- NotebookLM = audio generation only.
- MacWhisper = transcription and summaries only.

## No-Delete / Versioning Rule
Do not delete old versions unless explicitly requested. When multiple versions or updates exist, keep dated names.

Examples:
- 2026-05-10__UWorld__CP__Autopsy.md
- 2026-05-11__UWorld__CP__Autopsy_Update.md
- 2026-05-11__NotebookLM__UWorldCP__Transcript__CPRecovery.md

## Repository QC Notes
The repo README identifies the current intended structure:
- notebooklm/audio
- notebooklm/visuals
- notebooklm/behavioral-science
- macwhisper
- canva
- cars
- naming-rules
- archive

The repo also has migration-index.md listing pending legacy gists to migrate.

## Immediate Next Actions
1. Keep this repo as the existing private GitHub source instead of creating a new repo tonight.
2. Add missing prompt categories only as dated files or clearly named canonical files.
3. Do not add large audio files, screenshots, or copyrighted raw UWorld/CARS dumps to GitHub.
4. Use Notion for tracking what exists and what still needs to be migrated.
5. Use Cursor to sync local folders and review changes before pushing when working from the Mac.

## Safe Content for GitHub
- NotebookLM prompts
- MacWhisper prompts
- UWorld review prompts
- CARS review prompts
- Canva visual prompts
- Cursor instructions
- Terminal scripts
- HTML/CSS/JS maps
- Markdown templates and dated system plans

## Avoid Putting in GitHub as Primary Storage
- Large audio files
- Large screenshots
- Raw UWorld question screenshots or explanations
- Full copyrighted passages/questions
- Canva export dumps
- Huge PDFs unless deliberately added
