# Project style guide

Conventions for code, commits, UI copy, and visual design. The point of having these written down isn't to be picky — it's so reviewers don't have to re-explain the same things in every PR.

## Code

### General

- We use **TypeScript** in strict mode. `any` should be rare and justified.
- We use **Vue 3** with the Composition API and `<script setup>`.
- **ESLint** and **Prettier** enforce most formatting decisions. Run `pnpm lint` before pushing.
- Prefer **named exports** over default exports, except for components and pages where the framework expects defaults.

### File structure

```
src/
  components/    # reusable UI components
  composables/   # reusable composition functions (use*)
  pages/         # routes
  sources/       # source adapters
  reader/        # reader-specific code
  store/         # state management
  utils/         # framework-agnostic helpers
```

### Naming

- **Components:** `PascalCase.vue` (`ChapterList.vue`, `ReaderPage.vue`).
- **Composables:** `useThing.ts`.
- **Utility functions:** `camelCase.ts`.

## Commits

We follow **Conventional Commits**. The format is:

```
<type>(<scope>): <subject>
```

**Types we use:**

| Type | When |
|---|---|
| `feat` | A new feature |
| `fix` | A bug fix |
| `refactor` | Code change that doesn't change behavior |
| `perf` | Performance improvement |
| `docs` | Docs-only change |
| `test` | Test-only change |
| `chore` | Tooling, deps, build |

**Examples**

```
feat(reader): add right-to-left vertical mode
fix(library): debounce search input
refactor(sources): extract pagination helper
docs: clarify install steps for iOS
```

Keep the subject under ~70 characters. Use the body to explain *why* if it's not obvious.

## UI copy

The reader is read in many languages. Write copy that's easy to translate.

- **Use sentence case**, not Title Case. ("Add to library", not "Add To Library".)
- **Be concrete.** "Couldn't load chapter" beats "An error occurred."
- **Avoid idioms** ("ducks in a row", "drop the ball") — they don't translate cleanly.
- **Keep strings short** in UI elements. Buttons and tabs especially.
- **No exclamation marks** unless something is genuinely worth shouting about.

## Visual design

- Spacing is on a **4px grid** (4, 8, 12, 16, 24, 32, 48, 64).
- Border radius is `4px` for most things, `999px` for pills and the reader's controls.
- Type ramp is built around the body size; don't introduce ad-hoc sizes.
- Light and dark themes are both first-class. Test both before opening a PR with UI changes.

## Documentation

- Use **sentence case** in headings, just like UI copy.
- Use the second person ("you") for instructions, not "the user."
- Link generously between pages — readers don't read top to bottom.
- Code blocks should be runnable as-is when possible.
