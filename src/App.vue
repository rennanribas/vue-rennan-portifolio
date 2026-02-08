<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <a href="#main" class="skip-link">Skip to main content</a>
    <AppHeader />
    <main id="main">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </Transition>
      </RouterView>
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.skip-link {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
  padding: 12px var(--container);
  background: var(--accent);
  color: var(--bg);
  font-weight: 600;
  transform: translateY(-100%);
  transition: transform var(--duration) var(--ease-out);
}

.skip-link:focus-visible {
  transform: translateY(0);
}
</style>
