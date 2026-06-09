# HyperTTS Setup on macOS

## Purpose

Use HyperTTS on Anki Desktop for macOS to generate audio files that sync with AnkiMobile on iPhone and iPad.

## Core workflow

1. Install and configure HyperTTS in Anki Desktop on the Mac.
2. Generate audio into a dedicated note field.
3. Place that audio field in the appropriate card template.
4. Sync Anki Desktop, including media.
5. Sync AnkiMobile and allow media synchronization to finish.
6. Review on iOS using the generated audio files.

HyperTTS itself runs on Anki Desktop. It does not run as an add-on inside AnkiMobile. The generated media files do transfer to iOS through Anki sync.

## Services

HyperTTS supports free and premium services.

Free services listed by the add-on include:

- Google Translate
- Naver Papago
- Collins
- Oxford
- Lexico
- Duden
- DWDS
- SAPI5 on Windows

Premium services may require an API key or paid account. On macOS, use a free service or a configured provider that produces a voice you find comfortable.

Official references:

- HyperTTS add-on: https://ankiweb.net/shared/info/111623432
- HyperTTS source code: https://github.com/Language-Tools/anki-hyper-tts
- Anki manual: https://docs.ankiweb.net/

## General configuration rule

For each note type, identify:

1. The field containing the text to be spoken.
2. The field that will store the generated audio.
3. Whether the audio should play on the front or back template.

Example:

```text
Source field: Text
Destination field: Text Audio
Template placement: Back
```

Do not create duplicate audio fields when the note type already includes a suitable field such as `Text Audio`, `Front Audio`, `Back Audio`, or `Audio`.

## iOS synchronization checklist

- Generate audio on the Mac first.
- Confirm the destination field contains a sound reference such as `[sound:filename.mp3]`.
- Sync Anki Desktop.
- Open AnkiMobile and sync.
- Wait for media synchronization to complete before testing.

## Safety rule for active recall

Audio must not reveal the answer before recall is attempted.

- Basic cards may safely use separate front-question and back-answer audio.
- Cloze cards require special handling because audio generated from the raw cloze text can contain the hidden answer.
- Combined question-and-answer audio belongs on the back unless the source has been transformed into a question-safe version before generation.
