<script setup lang="ts">
defineOptions({
  name: 'GlassPane',
})

withDefaults(
  defineProps<{
    tag?: string
    noHover?: boolean
  }>(),
  {
    tag: 'div',
    noHover: false,
  }
)
</script>

<template>
  <component
    :is="tag"
    class="glass-pane"
    :class="{ 'glass-pane--no-hover': noHover }"
  >
    <slot />
  </component>
</template>

<style scoped>
.glass-pane--no-hover:hover {
  transform: none;
  border-color: var(--glass-border);
  box-shadow: var(--glass-shadow);
}
</style>
