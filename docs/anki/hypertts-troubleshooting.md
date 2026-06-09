# HyperTTS Troubleshooting

## Quick reference

| Problem | Likely cause | Fix |
|---|---|---|
| Cloze answer plays on the front | Full audio generated from raw `Text` is placed on the front | Remove the audio field from the front and place it on the back |
| Template changes do not alter spoken words | The MP3 was already generated from the old source | Regenerate the audio from a corrected source |
| Audio works on Mac but not iOS | Media synchronization is incomplete | Sync Anki Desktop, then AnkiMobile, and wait for media sync |
| Built-in system voice sounds robotic or distracting | macOS/iOS system TTS voice limitation | Use a preferred HyperTTS-generated voice instead |
| Question and answer play together before recall | Combined audio is on the front | Move combined audio to the back |
| No sound plays | Audio field is not on the card template, file is missing, or media is unsynced | Check the field contents, template placement, and media sync |
| Duplicate audio plays | The same audio field appears multiple times or autoplay overlaps with a replay button | Remove duplicate template references and test again |
| HyperTTS overwrites good audio | Destination field was reused during a batch operation | Test one note and confirm overwrite settings before collection-wide use |

## Cloze spoiler diagnosis

If the front displays a masked cloze but the voice says the hidden answer, inspect the front template for a line such as:

```html
{{Text Audio}}
```

If `Text Audio` was generated from raw `Text`, remove that line from the front.

## Verify generated audio

Open a note in **Browse** and inspect the destination field. A generated file normally appears as a sound reference:

```text
[sound:filename.mp3]
```

If the field is empty, HyperTTS did not write the result to that note.

## Verify template placement

An audio file can exist in the note but remain silent if its field is not referenced in the template.

Example:

```html
{{Back Audio}}
```

Place it on the side where it should play.

## Test procedure

Before any collection-wide run:

1. Select one representative note.
2. Generate its audio.
3. Preview the front.
4. Confirm no answer is revealed prematurely.
5. Flip the card.
6. Confirm the intended answer audio plays.
7. Sync to iOS.
8. Confirm the same behavior in AnkiMobile.
9. Only then process the remaining notes of that type.

## Existing MP3 limitation

HTML and card-template changes control when an audio field is played. They do not rewrite the speech inside an existing audio file.

To change the spoken content:

1. Correct the HyperTTS source field or template.
2. Regenerate the audio.
3. Replace or overwrite the prior destination field only after testing.

## Protect deck templates

When editing AnkiHub-managed note types:

- preserve AnkiHub marker comments;
- avoid deleting hidden identification fields;
- keep custom additions in protected sections when the template provides them;
- save a copy of the original front and back templates before editing.
