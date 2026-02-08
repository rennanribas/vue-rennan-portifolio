# Repo instructions

Canonical context: **AGENTS.md** at repo root.

- **Commands:** `npm run dev` | `build` (type-check → Vite) | `lint` | `type-check`. Run lint + type-check before commit.
- **Layout:** `src/App.vue` (RouterView in `<Transition name="page">`), `router/index.ts`, `views/`, `components/`, `assets/base.css` (tokens).
- **Vue:** Composition API + `<script setup>`. Props/emits typed; scoped styles + base.css tokens; PascalCase files, kebab tags.
- **TS:** Strict; `interface`; `import type`; `??`/`?.`.
- **Flow:** New route → router + view. After moves → lint + type-check.
