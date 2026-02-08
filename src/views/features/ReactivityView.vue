<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ReactivityCell from './ReactivityCell.vue'
import CodeBlock from '@/components/CodeBlock.vue'

const countA = ref(0)
const countB = ref(0)
const countC = ref(0)

const sourceParent = `import { ref } from 'vue'
import ReactivityCell from './ReactivityCell.vue'

const countA = ref(0)
const countB = ref(0)
const countC = ref(0)`

const sourceTemplate = `<ReactivityCell :label="'Value A'" :model-value="countA">
  <button @click="countA += 1">Update A</button>
</ReactivityCell>
<!-- Each child subscribes to one ref; only that subtree re-runs on change -->`

const sourceCell = `defineProps<{ label: string; modelValue: number }>()
const renderedAt = ref('')

onUpdated(() => {
  renderedAt.value = new Date().toLocaleTimeString('en-US', { hour12: false })
})`
</script>

<template>
  <div class="feature-page">
    <RouterLink to="/features" class="feature-page__back">← Reference</RouterLink>
    <h1 class="feature-page__title">Fine-grained reactivity</h1>
    <p class="feature-page__lead">
      Vue 3 uses JavaScript Proxies for dependency tracking. The runtime records which reactive sources each component reads; when a source changes, only components that subscribed to it re-render. Update one value below and observe that only the corresponding block’s “Last re-rendered” timestamp changes.
    </p>

    <div class="reactivity-grid">
      <ReactivityCell :label="'Value A'" :model-value="countA">
        <button type="button" class="reactivity-cell__btn" @click="countA += 1">Update A</button>
      </ReactivityCell>
      <ReactivityCell :label="'Value B'" :model-value="countB">
        <button type="button" class="reactivity-cell__btn" @click="countB += 1">Update B</button>
      </ReactivityCell>
      <ReactivityCell :label="'Value C'" :model-value="countC">
        <button type="button" class="reactivity-cell__btn" @click="countC += 1">Update C</button>
      </ReactivityCell>
    </div>

    <p class="feature-page__note">
      Coarse-grained models re-run the entire tree on any state change. Here, only the subtree that depends on the mutated ref is updated—push-based, fine-grained invalidation.
    </p>

    <section class="feature-page__source">
      <h2 class="feature-page__source-title">Source code</h2>
      <CodeBlock :code="sourceParent" label="ReactivityView.vue (script)" language="ts" />
      <CodeBlock :code="sourceTemplate" label="Template: one ref per child" language="vue" />
      <CodeBlock :code="sourceCell" label="ReactivityCell.vue: timestamp on re-render" language="ts" />
    </section>
  </div>
</template>

<style scoped>
.reactivity-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--gap);
  margin-bottom: calc(var(--gap) * 2);
}

.reactivity-cell__btn {
  width: 100%;
  padding: 10px 16px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: border-color var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out);
}

.reactivity-cell__btn:hover {
  border-color: var(--accent);
  background: var(--accent-muted);
}
</style>
