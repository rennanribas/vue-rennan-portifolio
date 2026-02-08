<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CodeBlock from '@/components/CodeBlock.vue'

const openScript = '<' + 'script'
const closeScript = '</' + 'script>'
const sourceProgressive = `<div id="app">{{ message }}</div>
${openScript} src="https://unpkg.com/vue@3">${closeScript}
${openScript}>
  const { createApp } = Vue
  createApp({
    data() {
      return { message: 'Hello from Vue!' }
    }
  }).mount('#app')
${closeScript}`
</script>

<template>
  <div class="feature-page">
    <RouterLink to="/features" class="feature-page__back">← Reference</RouterLink>
    <h1 class="feature-page__title">Progressive adoption</h1>
    <p class="feature-page__lead">
      Vue can be mounted on an existing DOM node via a script tag. No build step; the runtime is loaded from a CDN. Useful for embedding Vue in legacy pages or for incremental migration.
    </p>

    <div class="prog-block">
      <h2 class="prog-block__title">CDN usage</h2>
      <CodeBlock :code="sourceProgressive" label="index.html" language="html" />
      <p class="prog-block__text">
        One script tag loads the runtime; <code>createApp(...).mount('#app')</code> attaches the root component to the given selector. The rest of the page can remain static HTML; Vue controls only the mounted subtree.
      </p>
    </div>

    <p class="feature-page__note">
      This site is a full Vue app (Vite + SFCs). The same runtime can be used in CDN mode for a single widget or section.
    </p>

    <section class="feature-page__source">
      <h2 class="feature-page__source-title">Source code</h2>
      <p class="feature-page__source-intro">The snippet above is rendered with <code>CodeBlock</code> and <code>language="html"</code>.</p>
    </section>
  </div>
</template>

<style scoped>
.prog-block {
  margin-bottom: calc(var(--gap) * 2);
}

.prog-block__title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: var(--gap);
}

.prog-block .code-block {
  margin-bottom: var(--gap);
}

.prog-block__text {
  font-size: 0.9375rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.prog-block__text code {
  padding: 2px 6px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  font-size: 0.875em;
}

.feature-page__source-intro {
  font-size: 0.9375rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.feature-page__source-intro code {
  padding: 2px 6px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  font-size: 0.875em;
}
</style>
