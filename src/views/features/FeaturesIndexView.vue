<script setup lang="ts">
import { RouterLink } from 'vue-router'
import GlassPane from '@/components/GlassPane.vue'

const features = [
  {
    to: '/features/reactivity',
    title: 'Fine-grained reactivity',
    description: 'Proxy-based dependency tracking. Only components that read a given reactive source re-run when it changes.',
  },
  {
    to: '/features/composition-api',
    title: 'Composition API',
    description: 'Composables: pure functions returning reactive state. No dependency arrays; state persists across renders.',
  },
  {
    to: '/features/sfc',
    title: 'Single-File Components',
    description: 'Template, script, and style in one .vue file. <script setup> exposes top-level bindings to the template.',
  },
  {
    to: '/features/bundle-size',
    title: 'Runtime size',
    description: 'Vue 3 core (min + gzip). Impact on First Contentful Paint and initial payload.',
  },
  {
    to: '/features/ecosystem',
    title: 'Official ecosystem',
    description: 'Vue Router, Pinia, Vite, Nuxt. Aligned documentation and conventions.',
  },
  {
    to: '/features/progressive',
    title: 'Progressive adoption',
    description: 'Mount Vue on a DOM node via CDN. No build step; integrate incrementally into existing markup.',
  },
]
</script>

<template>
  <div class="feature-page">
    <RouterLink to="/" class="feature-page__back">← Home</RouterLink>
    <h1 class="feature-page__title">Vue reference</h1>
    <p class="feature-page__lead">
      Technical reference for Vue 3 runtime and tooling. Each section includes a short explanation and the underlying source.
    </p>
    <TransitionGroup name="list" tag="ul" class="features-list" appear>
      <li
        v-for="(f, i) in features"
        :key="f.to"
        class="features-list__item"
        :style="{ '--i': i }"
      >
        <GlassPane :no-hover="true" class="features-list__card">
          <RouterLink :to="f.to" class="features-list__link">
            <h2 class="features-list__title">{{ f.title }}</h2>
            <p class="features-list__desc">{{ f.description }}</p>
            <span class="features-list__arrow">→</span>
          </RouterLink>
        </GlassPane>
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.features-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}

/* Staggered list enter (TransitionGroup appear) */
.features-list__item.list-enter-active {
  transition:
    opacity 0.35s var(--ease-out),
    transform 0.35s var(--ease-out);
  transition-delay: calc(var(--i, 0) * var(--stagger-step));
}

.features-list__item.list-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.features-list__card {
  padding: calc(var(--gap) * 1.5);
}

.features-list__link {
  display: block;
  color: inherit;
}

.features-list__link:hover {
  color: inherit;
}

.features-list__title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 6px;
  letter-spacing: -0.02em;
}

.features-list__desc {
  color: var(--text-muted);
  font-size: 0.9375rem;
  line-height: 1.55;
  margin-bottom: 8px;
}

.features-list__arrow {
  color: var(--accent);
  font-size: 1.25rem;
}
</style>
