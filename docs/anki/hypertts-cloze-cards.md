# HyperTTS for Cloze Cards

## Core problem

A HyperTTS file generated from the raw cloze `Text` field contains the complete sentence, including the hidden answer.

Therefore, placing that generated audio field on the front can reveal the answer before recall.

A card-template edit cannot remove words that are already spoken inside an existing MP3. To change what is spoken, the audio must be regenerated from a different source.

## AAcloze configuration

Known fields:

```text
Text
Extra
AnkiHub_ID
Text Audio
```

Recommended HyperTTS mapping:

```text
Source field: Text
Destination field: Text Audio
Placement: Back template only
```

## Safe front template

```html
<div id="kard">
    <div class="tags">{{Tags}}</div>
    {{cloze:Text}}
</div>
```

Do not add this to the front when `Text Audio` was generated from raw `Text`:

```html
{{Text Audio}}
```

## Back template

```html
<div id="kard">
    <div class="tags" id="tags">{{Tags}}</div>
    {{cloze:Text}}
    <div>&nbsp;</div>
    <div id="extra">{{Extra}}</div>

    <div>&nbsp;</div>
    <div id="tts-audio">{{Text Audio}}</div>
</div>
```

This preserves active recall:

```text
Front: see the masked cloze and attempt recall
Back: reveal the answer, then hear the full sentence
```

## Question-and-answer requirement

The back-side full-sentence audio reads the answer in context after the card is flipped. It does not provide a separate safe spoken question on the front.

To create natural-sounding front audio without revealing the answer, HyperTTS needs a separate question-safe source where the active cloze has been replaced before generation.

Desired future behavior:

```text
Front audio: “FADH2 is used in the ETC to generate blank ATP molecules.”
Back audio: “FADH2 is used in the ETC to generate 1.5 ATP molecules.”
```

## Source-mode caution

Field mode with `Text` reads the raw field.

Template or advanced-template mode is only safe on the front if the output actually masks or replaces the active cloze before the audio file is generated. Preview the processed source before applying it to multiple notes.

## Built-in Anki TTS

Anki's built-in TTS may be cloze-aware, but system voices may be unpleasant. Do not treat it as the preferred solution when the voice is distracting.

Any built-in TTS syntax should be tested on one note with the exact Anki version and note template before being standardized.

## TODO

- Determine whether HyperTTS advanced-template source mode can access the rendered cloze question rather than raw `Text`.
- Create a front-audio destination field if needed.
- Replace the active cloze with a neutral spoken placeholder.
- Test cards with multiple cloze indices such as `c1`, `c2`, and `c3`.
- Confirm behavior on macOS and AnkiMobile before collection-wide generation.
