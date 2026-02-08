<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#this-site', label: 'This site' },
  { href: '/#contact', label: 'Contact' },
  { to: '/features', label: 'Features', isRouter: true },
]

function onScroll() {
  scrolled.value = window.scrollY > 40
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

watch(mobileMenuOpen, (open) => {
  document.body.classList.toggle('menu-open', open)
})

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.classList.remove('menu-open')
})
</script>

<template>
  <header class="app-header" :class="{ 'app-header--scrolled': scrolled }">
    <div
      v-if="mobileMenuOpen"
      class="app-header__overlay"
      aria-hidden="true"
      @click="closeMobileMenu"
    />
    <div class="app-header__inner">
      <RouterLink to="/" class="app-header__logo" @click="closeMobileMenu">
        <span class="mono">Rennan Ribas</span>
      </RouterLink>
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
        <template v-for="link in navLinks" :key="link.label">
          <RouterLink
            v-if="link.isRouter"
            :to="link.to"
            class="app-header__link"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </RouterLink>
          <a
            v-else
            :href="link.href"
            class="app-header__link"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </a>
        </template>
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
  padding: var(--gap) var(--container);
  transition: background var(--duration) var(--ease-out),
    backdrop-filter var(--duration) var(--ease-out);
}

.app-header__overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 0;
}

.app-header__inner {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap);
}

@media (min-width: 769px) {
  .app-header__overlay {
    display: none;
  }
}

.app-header--scrolled {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border-bottom: 1px solid var(--glass-border);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
}

.app-header__logo {
  color: var(--text);
  font-weight: 600;
  letter-spacing: -0.02em;
}

.app-header__logo .mono {
  color: inherit;
}

.app-header__logo:hover {
  color: var(--accent);
}

.app-header__toggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  min-width: 44px;
  min-height: 44px;
  padding: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text);
  border-radius: var(--radius);
}

.app-header__toggle-bar {
  width: 22px;
  height: 2px;
  background: currentColor;
  border-radius: 1px;
  transition: transform var(--duration) var(--ease-out);
}

.app-header__nav {
  display: flex;
  align-items: center;
  gap: calc(var(--gap) * 1.5);
}

.app-header__link {
  color: var(--text-muted);
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.app-header__link:hover {
  color: var(--text);
}

.app-header__link:focus-visible,
.app-header__logo:focus-visible,
.app-header__toggle:focus-visible {
  border-radius: 6px;
}

@media (max-width: 768px) {
  .app-header__overlay {
    display: block;
  }

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
    gap: var(--gap);
    padding: var(--gap);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    border-left: 1px solid var(--border);
    box-shadow: -8px 0 32px rgba(0, 0, 0, 0.35);
    transform: translateX(100%);
    transition: transform var(--duration) var(--ease-out);
  }

  .app-header__nav--open {
    transform: translateX(0);
  }

  .app-header__link {
    font-size: 1.0625rem;
    padding: 14px 0;
    min-height: 48px;
    display: flex;
    align-items: center;
  }
}

@media (min-width: 769px) {
  .app-header__toggle {
    display: none;
  }
}
</style>
