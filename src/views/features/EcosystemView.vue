<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CodeBlock from '@/components/CodeBlock.vue'

const sourceRouter = `import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/features', component: FeaturesIndexView },
  ],
})`

const sourceLink = `<RouterLink to="/features" class="nav__link">Features</RouterLink>
<!-- Declarative navigation; active class, prefetch, a11y via Vue Router -->`
</script>

<template>
  <div class="feature-page">
    <RouterLink to="/features" class="feature-page__back">← Reference</RouterLink>
    <h1 class="feature-page__title">Official ecosystem</h1>
    <p class="feature-page__lead">
      Vue provides first-party solutions for routing, state, and build tooling. Same documentation and conventions across the stack.
    </p>

    <ul class="eco-list">
      <li class="eco-list__item">
        <strong>Vue Router</strong> — Client-side routing. This site uses it for the Features section.
      </li>
      <li class="eco-list__item">
        <strong>Pinia</strong> — State store. Official successor to Vuex; TypeScript-first API.
      </li>
      <li class="eco-list__item">
        <strong>Vite</strong> — Build tool. ESM-based dev server, optimized production bundles.
      </li>
      <li class="eco-list__item">
        <strong>Nuxt</strong> — Meta-framework. File-based routing, SSR, and conventions on top of Vue.
      </li>
    </ul>

    <p class="feature-page__note">
      The “Features” link in the header and the “← Reference” back link are <code>RouterLink</code> components. Navigation is declarative; the router handles matching and history.
    </p>

    <section class="feature-page__source">
      <h2 class="feature-page__source-title">Source code</h2>
      <CodeBlock :code="sourceRouter" label="router/index.ts" language="ts" />
      <CodeBlock :code="sourceLink" label="Header: RouterLink usage" language="vue" />
    </section>
  </div>
</template>

<style scoped>
.eco-list {
  list-style: none;
  margin-bottom: calc(var(--gap) * 2);
}

.eco-list__item {
  padding: var(--gap);
  margin-bottom: var(--space);
  background: var(--glass-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-size: 0.9375rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.eco-list__item strong {
  color: var(--accent);
  font-weight: 600;
  margin-right: 6px;
}

.feature-page__note code {
  padding: 2px 6px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  font-size: 0.875em;
}
</style>
