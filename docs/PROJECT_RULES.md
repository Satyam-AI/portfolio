# Project Rules

## Git
- `main` is always deployable. Work happens on branches and reaches `main` through a pull request.
- Branch names: `feat/skill-tree`, `fix/theme-flash`, `docs/readme`, `chore/ci`, `test/filter`.
- Commit messages: `type: short description`. Types are `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
- One logical change per commit. Name files in `git add`; do not use `git add .` except for a scaffold.
- Do not rewrite history on `main`.

## Code
- TypeScript strict mode stays on. No `any` unless a comment explains why.
- Components: PascalCase file and name (`SkillTree.tsx`). Functions and variables: camelCase.
- Data lives in `content/`, pure logic in `lib/`, UI in `components/`. A folder never imports from a layer above it.
- Components are server components by default. Add `"use client"` only when a component needs the browser.
- Use design tokens, never raw hex values.
- No unused code, and no commented-out code.

## Quality
- Before every commit: `npm run typecheck`, `npm run lint` and `npm run format` pass.
- New logic comes with a test. A bug fix comes with a test that fails without the fix.
- Every page is usable with a keyboard and passes the axe check.

## Pull requests
- One task per pull request, linked to its GitHub issue.
- A pull request is ready when: CI is green, the Vercel preview looks right on a phone, and I have reread my own diff.
- Squash-merge, with a clean commit message.

## Done means
Works on mobile and desktop, in light and dark mode, tested, accessible, and documented where a decision was made.