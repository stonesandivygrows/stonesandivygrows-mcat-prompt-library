# Console Scripts

This folder is the convenience location for console-paste scripts used during MCAT study workflows.

The goal is **ease of access**, not avoiding duplicates. Original files may remain in their old folders so older links and workflows keep working.

## Files

| File | Purpose | Original/related path |
|---|---|---|
| `aamc-mcat-review-export-console.js` | Paste into Chrome DevTools Console from an opened AAMC MCAT Official Prep review question. Exports visible/rendered review content into printable/downloaded HTML. | `scripts/aamc-mcat-review-export-console.js` |

## Notes

- These scripts operate only on content already visible/rendered in the browser.
- They do not bypass login, access controls, DRM, or hidden content.
- For AAMC: start from an opened review question, not the score/report table.
- If an export captures only one question, check the browser Console warning for whether the issue is `No enabled Next button found` or `question did not change`.

## To add more

When another console script is created or found, duplicate it into this folder and add a row to the table above.
