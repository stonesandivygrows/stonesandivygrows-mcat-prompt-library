# HyperTTS Note-Type Configuration Tracker

Use this file as the source of truth while configuring one Anki note type at a time.

| Note type | Source field or template | Destination field | Front audio | Back audio | Status | Notes |
|---|---|---|---|---|---|---|
| AAcloze | `Text` | `Text Audio` | No, not from raw `Text` | Yes | In progress | Raw cloze text contains the answer; keep generated full-text audio off the front. |
| Basic | `Front` and `Back`, or a combined template | Existing audio field(s) | Possible | Possible | Pending | Separate question/answer audio is safest for active recall. |
| Other cloze types | Determine per note type | Reuse existing audio field when available | Only with a question-safe source | Yes | Pending | Inspect fields and templates before editing. |

## Configuration procedure

For each note type:

1. Open one note in **Browse**.
2. Confirm its exact note type.
3. Open **Fields** and record all field names.
4. Open **Cards** and copy the current front and back templates before editing.
5. Choose the source text and destination audio field.
6. Decide whether audio belongs on the front, back, or both.
7. Test one note before generating audio for the full collection.
8. Sync to iOS and confirm playback.
9. Update the table above with the final configuration.

## Rules

- Never assume two note types use the same fields.
- Reuse `Text Audio`, `Front Audio`, `Back Audio`, or `Audio` when present.
- Do not add full-answer audio to the front of a cloze card.
- Do not batch-generate the entire collection until one representative note has passed testing on macOS and iOS.
- Preserve existing AnkiHub template markers and protected sections.

## Test record template

```text
Note type:
Source mode:
Source:
Destination:
Front template placement:
Back template placement:
Voice/service:
macOS test:
iOS test:
Problems found:
Final status:
```
