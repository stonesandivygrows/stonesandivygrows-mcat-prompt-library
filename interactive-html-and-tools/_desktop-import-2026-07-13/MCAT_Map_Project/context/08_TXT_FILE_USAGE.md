# TXT FILE USAGE

All Decks(1).txt is context only.

It is an Anki/Quizlet-style export and may contain:
- deck paths
- questions
- answers
- HTML formatting
- audio references
- image references
- tags
- study notes

Do not import it into the app.
Do not make it searchable inside the app.
Do not expose it as a user-facing feature.
Do not automatically create nodes from it.
Ignore audio references.
Do not rely on image references unless actual image assets are available.

Use it only as a concept seed bank to understand possible future categories and content.

If later asked to use it for content, extract only the specific requested subsection and ask for review before adding.

## If the TXT File Is Missing

If All Decks(1).txt is not in the context folder:
- Continue without it.
- Do not ask where it is.
- Do not stop the project.
- The txt file is optional context, not required data.

If I later provide the txt file:
- Treat it as context only.
- Do not auto-import it.

## TXT File Boundaries

The txt file is not clean graph data.

Do not:
- parse the full txt into nodes
- bulk-import cards
- preserve audio references
- preserve broken image references
- expose card IDs in the app
- expose deck metadata in the app
- create a search interface for the txt file
- treat every card as equally important

If later asked to use the txt file:
1. Use only the requested topic, deck, or subsection.
2. Summarize the proposed extraction first.
3. Wait for approval before adding content to the app.
