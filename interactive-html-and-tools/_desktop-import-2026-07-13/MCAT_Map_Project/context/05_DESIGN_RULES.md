# DESIGN RULES

## Theme

Use a light, cute, study-friendly theme.

Do not use a dark theme.

Use high enough contrast for readability and printing.

Avoid pale text on pale backgrounds.

Avoid overly soft pastel colors if they reduce readability.

If cuteness conflicts with readability, prioritize readability.

## Concrete Readability Standards

Use these as targets, not as permission to redesign the whole app:

- Body/background: warm off-white, cream, or very pale blue-gray.
- Primary text: charcoal, dark slate, or similarly dark color.
- Node backgrounds: light but not white-on-white.
- Node borders: medium-saturation category colors.
- Avoid neon.
- Avoid dark theme.
- Avoid pale text on pale nodes.
- Aim for approximately WCAG 4.5:1 contrast for normal text where practical.

Readable when zoomed out means:
- Major hub labels should remain readable at normal full-map viewing size.
- Small node labels may require zooming, but should not become tiny by default.
- Do not shrink font below the current readable baseline unless explicitly approved.

Sufficient padding means:
- Enough spacing that text does not touch the border.
- Not so much padding that nodes become large, plump, or overlap more.
- If unsure, preserve existing padding during refactor and adjust only during the theme phase.

Example acceptable palette:
- Background: #FFFDF8 or #F8FAFC
- Panel background: #FFF7ED
- Main text: #1F2937 or #334155
- Bio green: #2F855A
- Biochem purple: #6B46C1
- Physics blue: #2563EB
- Organic orange: #C05621
- General chemistry gold: #B7791F
- Clinical extension gray: #64748B
- Personal trap red/coral: #C2410C

## Font

Use readable fonts such as Verdana or similar.

Keep node text readable when zoomed out.

Avoid tiny labels.

Do not shrink fonts below the current readable baseline unless explicitly approved.

## Nodes

Keep nodes compact.

Do not make nodes overly plump.

Avoid increasing overlap.

Use enough padding for readability, but not excessive padding.

## Compact Node Definition

Compact nodes means:
- reduce unnecessary padding
- avoid oversized rounded boxes
- keep labels readable
- do not shrink text so much that it becomes unreadable
- do not make nodes so large that overlap gets worse
- preserve enough spacing for edges and labels

## Study-Friendly Definition

Study-friendly means:
- easy to read for long periods
- not visually overwhelming
- clear hierarchy between major hubs and small concepts
- color helps categorization
- edge styles are meaningful
- selected pathways are easy to follow
- the map can be reset easily with Clear/Fit

## Edges

Edges should be visible but not overwhelming.

Use arrow styles intentionally.

Use dashed/dotted lines for special relationships when appropriate.

Provide an edge key later.

Do not add edge complexity during Phase 1 refactor.

## UI Button Rule

Use a small top bar only:
- Dashboard
- Search
- Fit
- Clear
- Pathways
- Filters
- Key
- Help

Put additional controls inside menus or dropdowns.

Do not add a separate top-level button for every pathway or category.

## Silhouettes

When I say icons, I mean silhouettes, not decorative emoji/icons.

Existing UI icons/buttons are fine and do not need replacement.

Use silhouettes only for major organs, cells, organelles, or blood-related structures.

Possible silhouette nodes:
- brain
- liver
- pancreas
- gallbladder
- stomach
- small intestine
- large intestine
- kidney
- heart
- lungs
- eyes
- blood/red blood cell
- mitochondria
- nucleus/cell if relevant

Do not use silhouettes for:
- every enzyme
- every metabolite
- every hormone
- every regulator
- every pathway
- every molecule

Labels must remain readable.

Silhouettes should not replace labels.

Preferred implementation:
Use subtle silhouette backgrounds inside readable rounded cards.

Only use true custom-shaped silhouettes if readability remains strong.

## Print Mode

If print mode is added:
- Use light background.
- Avoid wasting ink.
- Hide unnecessary UI controls.
- Keep labels readable.
- Do not change graph content.
