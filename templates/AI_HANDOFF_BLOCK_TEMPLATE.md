# AI Handoff Block Template

Use this block near the top of any frequently used, multi-session, explanation-dependent, or canonical file.

Do not add it to every minor note. Parent README files may carry the handoff for a group of small child files.

```markdown
## AI resume block

- **Purpose:**
- **Status:** Canonical / Approved / Prototype / Needs Recheck / Noncanonical / Archived / Superseded
- **Authoritative source(s):**
- **Private inputs or source locations:**
- **Locked user preferences:**
- **Already complete:**
- **Not complete:**
- **Quality checks required:**
- **Related canonical files:**
- **Exact resume instruction:**
```

## Minimum standard for a multi-session task

Before ending the session, also update [`../TASK_LEDGER.md`](../TASK_LEDGER.md) with:

```markdown
- Task ID
- Last verified item
- Next exact item
- Files/commits created
- User correction or rejected approach
- QC completed and pending
```

## Good resume instructions

```text
Open FL4 C/P Passage 2 in the original export. Resume at C/P Q8. Questions 6–7 were verified against the AAMC explanation. Rebuild Q8’s distractor audit and explicit calculation shortcut, then render the pilot pages.
```

```text
Open running-documents/uworld-anki-qid-map.md. The last completed Aiden note is BIOCHEM::Enzymes::Competitive inhibition. Continue with the next note in the source export and add at least two searchable UWorld anchors when possible.
```

## Bad resume instructions

```text
Continue.
```

```text
Finish the remaining questions.
```

```text
Pick up where we left off.
```

The handoff must survive loss of chat history. It should name the file, exact position, trusted source, locked decisions, and remaining validation.
