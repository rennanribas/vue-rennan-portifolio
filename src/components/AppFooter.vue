<script setup lang="ts">
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="footer">
    <p class="mono footer__copy">© {{ new Date().getFullYear() }} Rennan Ribas</p>
    <a href="#" class="footer__scroll" aria-label="Scroll to top" @click.prevent="scrollToTop">
      <span class="footer__chevron" aria-hidden="true">↑</span>
    </a>
  </footer>
</template>

<style scoped>
.footer {
  padding: var(--gap) var(--container);
  padding-bottom: calc(var(--gap) + 24px);
  border-top: 1px solid var(--border);
  text-align: center;
}

.footer__copy {
  font-size: 0.6875rem;
  color: var(--text-subtle);
  letter-spacing: 0.06em;
}

.footer__scroll {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.04);
  transition: color var(--duration-fast) var(--ease-out),
    background var(--duration-fast) var(--ease-out);
}

.footer__scroll:hover {
  color: var(--accent);
  background: var(--accent-muted);
}

.footer__chevron {
  font-size: 0.875rem;
  line-height: 1;
}
</style>
