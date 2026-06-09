# HyperTTS for Basic Cards

Basic cards are easier than cloze cards because the question and answer are stored in separate fields.

## Preferred active-recall setup

Use separate audio fields when available:

```text
Front → Front Audio
Back → Back Audio
```

Place question audio on the front and answer audio on the back.

### Front template example

```html
{{Front}}
<br>
{{Front Audio}}
```

### Back template example

```html
{{Front}}

<hr id="answer">

{{Back}}
<br>
{{Back Audio}}
```

## HyperTTS generation passes

### Question audio

```text
Source mode: Field
Source: Front
Destination: Front Audio
```

### Answer audio

```text
Source mode: Field
Source: Back
Destination: Back Audio
```

Test one note before applying either preset to the collection.

## Combined question-and-answer audio

Template or advanced-template source mode may generate one file containing both fields.

Example source template:

```text
Question: {{Front}}

Answer: {{Back}}
```

Store that file in an existing field such as `Audio` or `Back Audio` and place it on the back only.

```html
{{Front}}

<hr id="answer">

{{Back}}
<br>
{{Audio}}
```

Do not place combined question-and-answer audio on the front because it will reveal the answer before recall.

## Choosing between the two methods

Use **separate audio** when you want:

- the question spoken before answering;
- the answer spoken only after flipping;
- active recall preserved.

Use **combined back audio** when you want:

- the complete card read after answering;
- only one generated audio field;
- a simpler template.

## Field rule

Inspect the note type before adding fields. Reuse existing fields such as:

```text
Front Audio
Back Audio
Audio
```

Only add new fields if the note type does not already provide suitable destinations.
