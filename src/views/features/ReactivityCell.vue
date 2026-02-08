<script setup lang="ts">
import { ref, onUpdated } from 'vue'

defineProps<{
  label: string
  modelValue: number
}>()

const renderedAt = ref('')

onUpdated(() => {
  renderedAt.value = new Date().toLocaleTimeString('en-US', { hour12: false })
})
</script>

<template>
  <div class="reactivity-cell">
    <h3 class="reactivity-cell__label">{{ label }}</h3>
    <p class="reactivity-cell__value">{{ modelValue }}</p>
    <p class="reactivity-cell__meta">Last re-rendered: {{ renderedAt || '—' }}</p>
    <slot />
  </div>
</template>

<style scoped>
.reactivity-cell {
  padding: var(--gap);
  background: var(--glass-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
}

.reactivity-cell__label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
}

.reactivity-cell__value {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 4px;
}

.reactivity-cell__meta {
  font-size: 0.8125rem;
  color: var(--text-subtle);
  margin-bottom: 12px;
}
</style>
