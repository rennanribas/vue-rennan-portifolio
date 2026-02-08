---
name: project-context
description: Vue 3 SFC + Vite + TypeScript repo context. Use when working in this codebase or when asked about structure, commands, or conventions.
---

# Project context

Canonical reference: [AGENTS.md](../../../AGENTS.md) at repo root.

- **Stack:** Vue 3 (Composition API, `<script setup>`), Vite 7, Vue Router, TypeScript. Lint/type-check only; no test runner.
- **Layout:** `src/App.vue`, `router/index.ts`, `views/`, `components/`, `assets/base.css` (tokens). New route → router + view.
- **Conventions:** Typed props/emits; scoped styles + base.css vars; PascalCase files; run `lint` + `type-check` before commit.
