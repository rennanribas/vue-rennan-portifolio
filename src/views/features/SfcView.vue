<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CodeBlock from '@/components/CodeBlock.vue'

const openScript = '<' + 'script'
const closeScript = '</' + 'script>'
const sourceSfc = `${openScript} setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
${closeScript}

<template>
  <button @click="count++">{{ count }}</button>
</template>

<style scoped>
button { padding: 8px 16px; }
</style>`
</script>

<template>
  <div class="feature-page">
    <RouterLink to="/features" class="feature-page__back">← Reference</RouterLink>
    <h1 class="feature-page__title">Single-File Components</h1>
    <p class="feature-page__lead">
      A <code>.vue</code> file compiles to one component: optional <code>&lt;template&gt;</code>, <code>&lt;script&gt;</code>, and <code>&lt;style&gt;</code> blocks. With <code>&lt;script setup&gt;</code>, top-level bindings (refs, computed, functions) are automatically available in the template; no explicit <code>return</code>. Scoped styles apply only to this component’s root.
    </p>

    <div class="sfc-block">
      <h2 class="sfc-block__title">SFC structure</h2>
      <CodeBlock :code="sourceSfc" label="Example.vue" language="vue" />
      <ul class="sfc-block__list">
        <li><strong>Template</strong> — Declarative markup; expressions bind to script state.</li>
        <li><strong>Script setup</strong> — Executed once per component instance; bindings are exposed to the template.</li>
        <li><strong>Style scoped</strong> — CSS is scoped to the component via a unique attribute.</li>
      </ul>
    </div>

    <p class="feature-page__note">
      This view is implemented as a Single-File Component. The snippet above is rendered by <code>CodeBlock</code> with <code>language="vue"</code>.
    </p>

    <section class="feature-page__source">
      <h2 class="feature-page__source-title">Source code</h2>
      <p class="feature-page__source-intro">This page is <code>SfcView.vue</code>.</p>
    </section>
  </div>
</template>

<style scoped>
.sfc-block {
  margin-bottom: calc(var(--gap) * 2);
}

.sfc-block__title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: var(--gap);
}

.sfc-block .code-block {
  margin-bottom: var(--gap);
}

.sfc-block__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sfc-block__list li {
  font-size: 0.9375rem;
  color: var(--text-muted);
  line-height: 1.55;
}

.sfc-block__list strong {
  color: var(--text);
}

.feature-page__lead code,
.feature-page__note code {
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
