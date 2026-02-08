<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import CodeBlock from '@/components/CodeBlock.vue'

function useCounter(initial = 0) {
  const count = ref(initial)
  const doubled = computed(() => count.value * 2)
  function inc() {
    count.value += 1
  }
  function dec() {
    count.value -= 1
  }
  return { count, doubled, inc, dec }
}

const counter1 = useCounter(0)
const counter2 = useCounter(10)

const sourceComposable = `function useCounter(initial = 0) {
  const count = ref(initial)
  const doubled = computed(() => count.value * 2)
  function inc() { count.value += 1 }
  function dec() { count.value -= 1 }
  return { count, doubled, inc, dec }
}

const counter1 = useCounter(0)
const counter2 = useCounter(10)`
</script>

<template>
  <div class="feature-page">
    <RouterLink to="/features" class="feature-page__back">← Reference</RouterLink>
    <h1 class="feature-page__title">Composition API</h1>
    <p class="feature-page__lead">
      Logic is encapsulated in composables: functions that return reactive state and methods. No explicit dependency arrays; the reactivity system tracks reads. The same composable can be invoked multiple times; each call gets an independent reactive scope.
    </p>

    <div class="comp-grid">
      <div class="comp-card">
        <h3 class="comp-card__label">Instance 1: useCounter(0)</h3>
        <p class="comp-card__value">{{ counter1.count }}</p>
        <p class="comp-card__meta">Doubled: {{ counter1.doubled }}</p>
        <div class="comp-card__actions">
          <button type="button" class="comp-card__btn" @click="counter1.dec">−</button>
          <button type="button" class="comp-card__btn" @click="counter1.inc">+</button>
        </div>
      </div>
      <div class="comp-card">
        <h3 class="comp-card__label">Instance 2: useCounter(10)</h3>
        <p class="comp-card__value">{{ counter2.count }}</p>
        <p class="comp-card__meta">Doubled: {{ counter2.doubled }}</p>
        <div class="comp-card__actions">
          <button type="button" class="comp-card__btn" @click="counter2.dec">−</button>
          <button type="button" class="comp-card__btn" @click="counter2.inc">+</button>
        </div>
      </div>
    </div>

    <p class="feature-page__note">
      Two independent instances of the same composable. <code>ref</code> and <code>computed</code> are created per invocation; the runtime keeps their reactivity isolated.
    </p>

    <section class="feature-page__source">
      <h2 class="feature-page__source-title">Source code</h2>
      <CodeBlock :code="sourceComposable" label="Composable and usage" language="ts" />
    </section>
  </div>
</template>

<style scoped>
.comp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--gap);
  margin-bottom: calc(var(--gap) * 2);
}

.comp-card {
  padding: var(--gap);
  background: var(--glass-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
}

.comp-card__label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
}

.comp-card__value {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.comp-card__meta {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.comp-card__actions {
  display: flex;
  gap: 8px;
}

.comp-card__btn {
  flex: 1;
  padding: 10px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  font-size: 1.25rem;
  cursor: pointer;
  transition: border-color var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out);
}

.comp-card__btn:hover {
  border-color: var(--accent);
  background: var(--accent-muted);
}

.feature-page__note code {
  padding: 2px 6px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  font-size: 0.875em;
}
</style>
