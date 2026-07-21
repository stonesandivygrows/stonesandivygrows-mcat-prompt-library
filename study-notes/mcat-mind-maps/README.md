# MCAT Mind-Map Project Command Center

> **AI handoff:** Read [`../../AI_RESUME_CONTEXT.md`](../../AI_RESUME_CONTEXT.md), [`../../PROJECT_HANDOFF_INDEX.md`](../../PROJECT_HANDOFF_INDEX.md), [`../../TASK_LEDGER.md`](../../TASK_LEDGER.md), and [`00-anki-project-chat-coverage-and-map-architecture.md`](00-anki-project-chat-coverage-and-map-architecture.md) before modifying this folder.

## Purpose

This folder converts the user’s MCAT chats, Anki confusion patterns, corrections, comparisons, and study strategies into a connected visual knowledge system.

The goal is not one map per note or one board per question. The goal is a manageable set of canonical concept maps with repeated entry routes, explicit relationships, and links back to the student’s recurring confusions.

## AI resume block

- **Status:** Architecture and extraction shards exist; visual execution remains selective and partly ongoing.
- **Canonical index:** `00-anki-project-chat-coverage-and-map-architecture.md`.
- **Unit of work:** one verified `LearningRecord`, canonical node, cross-link, correction, or prompt packet at a time.
- **Locked rules:** one canonical node per concept; repeat through backlinks rather than duplicate definitions; every edge must be labeled; visual-node text should usually be 3–7 words; key terms may be bolded; warning nodes identify traps and corrected misconceptions.
- **Source hierarchy:** Anki defines recall targets; Kaplan verifies science hierarchy; Khan Academy verifies Behavioral Science structure; UWorld supplies application/trap framing; accurate user-created analogies and corrections are preserved.
- **Private-source boundary:** Complete decks, commercial PDFs, screenshots, and large source dumps remain outside GitHub.
- **Exact resume instruction:** open the canonical coverage ledger, locate the next `Needs Recheck`, incomplete shard, or unexecuted prompt packet, complete that bounded unit, and update its status before stopping.

## Shard navigation

- `00-anki-project-chat-coverage-and-map-architecture.md` — master coverage ledger, source hierarchy, controlled fields, visual grammar, and status definitions
- `01-foundational-sciences-chat-extraction.md`
- `02-biochemistry-cell-and-molecular-chat-extraction.md`
- `03-biological-systems-chat-extraction.md`
- `04-behavioral-sciences-chat-extraction.md`
- `05-reasoning-cars-and-test-strategy-chat-extraction.md`
- `06-anki-and-map-production-workflows.md`
- `07-final-cross-link-contradiction-and-gap-audit.md`

## Do not do

- Do not duplicate a concept definition across several maps.
- Do not create a board only because a question exists.
- Do not use unlabeled arrows.
- Do not mark a chat `Mapped` merely because its title was located.
- Do not claim a shard is verified when the scientific content or source boundary remains uncertain.
- Do not make Whimsical the storage location for long prose explanations; expanded explanations remain in the Markdown source or Goodnotes.

## End-of-session handoff

Update `TASK_LEDGER.md` with:

```text
last completed record/shard/prompt packet
verification performed
next exact record/shard/prompt packet
unresolved contradiction or missing source
Whimsical board or file affected
commit produced
```

A future model should be able to continue without needing the prior chat transcript.
