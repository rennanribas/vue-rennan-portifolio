<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CodeBlock from '@/components/CodeBlock.vue'

const sourceBuild = `$ npm run build
✓ built in 340ms
dist/assets/index-xxx.js   105 KB │ gzip: 40 KB
dist/assets/index-xxx.css   18 KB │ gzip: 3.6 KB`

const sourceImport = `import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')`
</script>

<template>
  <div class="feature-page">
    <RouterLink to="/features" class="feature-page__back">← Reference</RouterLink>
    <h1 class="feature-page__title">Runtime size</h1>
    <p class="feature-page__lead">
      Vue 3 runtime size (minified + gzipped). Smaller initial JavaScript reduces Time to Interactive and improves First Contentful Paint, especially on slow networks.
    </p>

    <div class="size-block">
      <div class="size-card">
        <h3 class="size-card__label">Vue 3 core</h3>
        <p class="size-card__value">~34 KB</p>
        <p class="size-card__meta">min + gzip</p>
      </div>
    </div>

    <p class="feature-page__note">
      Verify with <a href="https://bundlephobia.com/package/vue" target="_blank" rel="noopener noreferrer">bundlephobia.com</a> or your build output (<code>npm run build</code>).
    </p>

    <section class="feature-page__source">
      <h2 class="feature-page__source-title">Source code</h2>
      <CodeBlock :code="sourceBuild" label="Build output (this project)" language="ts" />
      <CodeBlock :code="sourceImport" label="Entry (main.ts)" language="ts" />
    </section>
  </div>
</template>

<style scoped>
.size-block {
  margin-bottom: calc(var(--gap) * 2);
}

.size-card {
  display: inline-block;
  padding: var(--gap);
  background: var(--glass-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  text-align: center;
  min-width: 160px;
}

.size-card__label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
}

.size-card__value {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.size-card__meta {
  font-size: 0.8125rem;
  color: var(--text-subtle);
}

.feature-page__note a {
  color: var(--accent);
}

.feature-page__note code {
  padding: 2px 6px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  font-size: 0.875em;
}
</style>
