# Project context

Vue 3 SPA: Vite 7, TypeScript, Vue Router. Composition API + `<script setup>` only.

## Commands

| Command | Purpose |
|--------|---------|
| `npm run dev` | Dev server |
| `npm run build` | Build (type-check → Vite) |
| `npm run lint` | Lint + fix |
| `npm run type-check` | Types only |

Run `lint` and `type-check` before commit.

## Structure

`src/`: `App.vue` (layout, `<Transition name="page">` + RouterView), `router/index.ts`, `views/` (route pages), `components/` (shared UI), `assets/base.css` (tokens). New route → add in router + view under `views/` or `views/features/`.

## Conventions

- **Vue:** One root; `defineProps`/`defineEmits` with types; `ref`/`computed`; lifecycle via `onMounted`/`nextTick` for DOM/anim; PascalCase files, kebab-case tags; scoped styles, tokens from `base.css` (`--gap`, `--ease-out`, `--stagger-step`, etc.).
- **TS:** Strict; `interface`; `import type`; `??`/`?.`; `s[i] ?? ''` for index access.
- **CSS:** Tokens only; 8pt grid; `.feature-page` for feature pages. Reuse GlassPane, CodeBlock. No test runner; quality = lint + type-check.

Content: `HomeView.vue`, `base.css`, `views/features/*.vue`.
