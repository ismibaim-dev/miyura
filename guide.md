# Contributing guide

This page covers everything you need to make a pull request that's likely to be accepted: setting up the project, the conventions we follow, and what happens after you submit.

## Before you start

For anything beyond a typo fix or a single-line change, please **open an issue first** or comment on an existing one. This avoids the situation where you spend a weekend on a feature that doesn't fit the project's direction.

If a maintainer says "please don't do this" before you start, it's much less painful than after.

## Setting up the project

### Prerequisites

- **Node.js** 20 or newer
- **pnpm** (the project uses pnpm workspaces)
- **Git**

### Clone and install

```bash
git clone https://github.com/miyura/miyura.git
cd miyura
pnpm install
```

### Run the dev server

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`. Changes hot-reload.

### Run the tests

```bash
pnpm test          # unit tests
pnpm test:e2e      # end-to-end tests
```

All PRs are expected to pass tests in CI before review.

## The PR process

1. **Fork** the repository and create a branch off `main`. Branch names like `feat/rtl-vertical-mode` or `fix/cache-eviction` are appreciated.
2. **Make your changes**, keeping commits small and focused. See the [style guide](./style-guide) for commit conventions.
3. **Add or update tests** that cover your change. If a test would be unreasonable, say so in the PR description.
4. **Run the linter and formatter** locally (`pnpm lint`, `pnpm format`) before pushing.
5. **Open a PR** against `main`. Fill out the template. Link the issue it addresses.
6. **Respond to review** in good faith. We try to keep reviews kind and specific. If a comment doesn't make sense, ask.

### What gets PRs accepted faster

- **Small scope.** One thing per PR.
- **A clear description.** What it does, why, and any trade-offs.
- **Tests.** Even one is better than none.
- **No unrelated changes.** Reformatting an entire file you barely touched makes review hard.

### What gets PRs declined

- Behavior changes without an issue or discussion first.
- Adding heavy dependencies for small gains.
- Ignoring the [code of conduct](./code-of-conduct) in PR discussion.

## What we don't accept

- Code that introduces or facilitates the distribution of pirated content.
- Tracking, analytics, or telemetry of any kind enabled by default.
- Anything that violates the [Apache 2.0 license](/guide/license) (for example, code copied from a GPL project without relicensing).

## Reporting security issues

Please **do not** open public issues for security vulnerabilities. Email the maintainers (address is in `SECURITY.md` in the repository) and we'll respond as quickly as we can.

## Translations

Translations are handled through the project's localization platform, separate from code PRs. See `i18n/README.md` in the repository for the workflow.
