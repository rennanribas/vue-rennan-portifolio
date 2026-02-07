<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 40
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

function onLogoClick(e: Event) {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
  closeMobileMenu()
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="app-header" :class="{ 'app-header--scrolled': scrolled }">
    <div class="app-header__inner">
      <a href="#" class="app-header__logo" @click="onLogoClick">
        <span class="mono">Rennan Ribas</span>
      </a>
      <button
        type="button"
        class="app-header__toggle"
        aria-label="Toggle menu"
        :aria-expanded="mobileMenuOpen"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <span class="app-header__toggle-bar" />
        <span class="app-header__toggle-bar" />
        <span class="app-header__toggle-bar" />
      </button>
      <nav class="app-header__nav" :class="{ 'app-header__nav--open': mobileMenuOpen }">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="app-header__link"
          @click="closeMobileMenu"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: var(--bento-gap) calc(var(--bento-gap) * 2);
  transition: background var(--spring-duration) var(--spring-easing),
    backdrop-filter var(--spring-duration) var(--spring-easing);
}

.app-header--scrolled {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border-bottom: 1px solid var(--glass-border);
}

.app-header__inner {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--bento-gap);
}

.app-header__logo {
  color: var(--text-primary);
  font-weight: 600;
}

.app-header__logo:hover {
  color: var(--color-signal);
}

.app-header__toggle {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-primary);
}

.app-header__toggle-bar {
  width: 24px;
  height: 2px;
  background: currentColor;
  border-radius: 1px;
  transition: transform var(--spring-duration) var(--spring-easing);
}

.app-header__nav {
  display: flex;
  align-items: center;
  gap: calc(var(--bento-gap) * 1.5);
}

.app-header__link {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  font-weight: 500;
}

.app-header__link:hover {
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .app-header__toggle {
    display: flex;
  }

  .app-header__nav {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(280px, 85vw);
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: var(--bento-gap);
    padding: var(--bento-gap);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    border-left: 1px solid var(--glass-border);
    transform: translateX(100%);
    transition: transform var(--spring-duration) var(--spring-easing);
  }

  .app-header__nav--open {
    transform: translateX(0);
  }

  .app-header__link {
    font-size: 1.125rem;
    padding: 12px 0;
  }
}

@media (min-width: 769px) {
  .app-header__toggle {
    display: none;
  }
}
</style>
