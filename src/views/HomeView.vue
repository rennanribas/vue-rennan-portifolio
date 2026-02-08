<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import GlassPane from '@/components/GlassPane.vue'

const ready = ref(false)

onMounted(() => {
  nextTick(() => {
    ready.value = true
  })
})
</script>

<template>
  <div class="home" :class="{ 'home--ready': ready }">
    <section id="hero" class="hero">
        <div class="hero__content">
          <p class="mono hero__label">Remote-ready</p>
          <h1 class="hero__title">
            Rennan <span class="hero__accent">Ribas</span>
          </h1>
          <p class="hero__subtitle">
            Senior Software Engineer. This site is a Vue project — modern stack, official docs, lean code.
          </p>
          <p class="mono hero__links">
            rennanrr@gmail.com · github.com/rennanribas · linkedin.com/in/rennan-ribas
          </p>
          <div class="hero__actions">
            <a href="#contact" class="hero__btn hero__btn--primary">Get in touch</a>
            <a href="#this-site" class="hero__btn hero__btn--secondary">This site</a>
          </div>
        </div>
      </section>

      <section id="about" class="about">
        <h2 class="section-title">
          <span class="mono section-title__label">01</span>
          About
        </h2>
        <GlassPane :no-hover="true" class="about__card">
          <p class="about__text">
            I'm Rennan. I like building things with care: clear structure, less code, and details that matter.
            This portfolio is one of those — a place to introduce myself and to use Vue the way the docs recommend,
            with no extra frameworks unless they earn their place, and then used to the last drop.
          </p>
        </GlassPane>
      </section>

      <section id="this-site" class="projects">
        <h2 class="section-title">
          <span class="mono section-title__label">02</span>
          This site
        </h2>
        <div class="bento-grid projects__grid">
          <GlassPane :no-hover="true" class="projects__card projects__card--static">
            <span class="mono projects__tag">Vue 3 · Vite · TypeScript</span>
            <h3 class="projects__title">Portfolio</h3>
            <p class="projects__desc">
              Built with Composition API and &lt;script setup&gt;, Vue Router, and the design system in the repo.
              Lean markup and CSS, glassmorphism and spring-style motion. No resume here — just an intro and this project.
            </p>
          </GlassPane>
        </div>
      </section>

      <section id="contact" class="contact">
        <h2 class="section-title">
          <span class="mono section-title__label">03</span>
          Contact
        </h2>
        <GlassPane :no-hover="true" class="contact__card">
          <p class="contact__text">
            Open to conversations. Reach out by email or LinkedIn.
          </p>
          <div class="contact__links">
            <a href="mailto:rennanrr@gmail.com" class="contact__link">rennanrr@gmail.com</a>
            <a
              href="https://github.com/rennanribas"
              target="_blank"
              rel="noopener noreferrer"
              class="contact__link"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/rennan-ribas"
              target="_blank"
              rel="noopener noreferrer"
              class="contact__link"
            >
              LinkedIn
            </a>
          </div>
        </GlassPane>
      </section>
  </div>
</template>

<style scoped>
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

.section-title {
  margin-bottom: var(--gap);
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.section-title__label {
  color: var(--accent);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.12em;
}

/* Hero */
.hero {
  padding-top: calc(var(--header-height) + var(--gap) * 3);
  padding-bottom: calc(var(--gap) * 5);
  text-align: center;
}

@media (min-width: 769px) {
  .hero {
    padding-top: calc(var(--header-height) + var(--gap) * 4);
    padding-bottom: calc(var(--gap) * 6);
  }
}

.hero__content {
  max-width: 520px;
  margin: 0 auto;
}

/* Hero stagger: invisible until .home--ready, then animate in sequence */
.hero__label,
.hero__title,
.hero__subtitle,
.hero__links,
.hero__actions {
  opacity: 0;
}

.home--ready .hero__label {
  animation: fade-in-up 0.4s var(--ease-out) calc(var(--stagger-step) * 0) forwards;
}

.home--ready .hero__title {
  animation: fade-in-up 0.4s var(--ease-out) calc(var(--stagger-step) * 1) forwards;
}

.home--ready .hero__subtitle {
  animation: fade-in-up 0.4s var(--ease-out) calc(var(--stagger-step) * 2) forwards;
}

.home--ready .hero__links {
  animation: fade-in-up 0.4s var(--ease-out) calc(var(--stagger-step) * 3) forwards;
}

.home--ready .hero__actions {
  animation: fade-in-up 0.4s var(--ease-out) calc(var(--stagger-step) * 4) forwards;
}

.hero__label {
  display: inline-block;
  margin-bottom: var(--gap);
  padding: 6px 14px;
  border-radius: 6px;
  background: var(--accent-muted);
  color: var(--accent);
  font-size: 0.6875rem;
  letter-spacing: 0.12em;
}

.hero__title {
  font-size: clamp(2.75rem, 10vw, 4.5rem);
  line-height: 1.02;
  margin-bottom: var(--gap);
  letter-spacing: -0.04em;
  font-weight: 700;
  overflow-wrap: break-word;
}

.hero__accent {
  color: var(--accent);
}

.hero__subtitle {
  font-size: clamp(1rem, 2.2vw, 1.125rem);
  color: var(--text-muted);
  margin-bottom: var(--gap);
  line-height: 1.65;
}

.hero__links {
  font-size: 0.75rem;
  color: var(--text-subtle);
  margin-bottom: calc(var(--gap) * 2);
  line-height: 1.6;
  overflow-wrap: break-word;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  justify-content: center;
}

/* Sections: reveal in order after hero (lifecycle-driven) */
.about,
.projects,
.contact {
  opacity: 0;
}

.home--ready .about {
  animation: fade-in-up 0.45s var(--ease-out) 0.28s forwards;
}

.home--ready .projects {
  animation: fade-in-up 0.45s var(--ease-out) 0.4s forwards;
}

.home--ready .contact {
  animation: fade-in-up 0.45s var(--ease-out) 0.52s forwards;
}

.hero__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 14px 28px;
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 0.9375rem;
  letter-spacing: -0.01em;
  transition:
    background var(--duration) var(--ease-out),
    color var(--duration) var(--ease-out),
    border-color var(--duration) var(--ease-out),
    transform var(--duration) var(--ease-out),
    box-shadow var(--duration) var(--ease-out);
}

.hero__btn--primary {
  background: var(--accent);
  color: var(--bg);
}

.hero__btn--primary:hover {
  filter: brightness(1.06);
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(167, 139, 250, 0.28);
}

.hero__btn--secondary {
  border: 1px solid var(--border);
  color: var(--text);
  background: transparent;
}

.hero__btn--secondary:hover {
  border-color: var(--border-hover);
  background: rgba(255, 255, 255, 0.04);
}

.hero__btn:focus-visible {
  outline-offset: 3px;
}

/* About */
.about__card {
  margin-top: calc(var(--gap) * 0.5);
  padding: calc(var(--gap) * 1.75);
  max-width: 580px;
}

.about__text {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.75;
}

/* Projects */
.projects__card--static {
  cursor: default;
}

.projects__grid {
  margin-top: calc(var(--gap) * 0.5);
}

.projects__card {
  padding: calc(var(--gap) * 1.75);
  display: block;
  color: inherit;
  grid-column: span 6;
}

@media (max-width: 600px) {
  .projects__card {
    grid-column: 1;
  }
}

.projects__card:hover {
  color: inherit;
}

.projects__tag {
  display: inline-block;
  margin-bottom: 12px;
  padding: 5px 12px;
  border-radius: 6px;
  background: var(--accent-muted);
  font-size: 0.625rem;
  letter-spacing: 0.1em;
  color: var(--accent);
}

.projects__title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}

.projects__desc {
  color: var(--text-muted);
  font-size: 0.9375rem;
  line-height: 1.7;
}

/* Contact */
.contact__card {
  margin-top: calc(var(--gap) * 0.5);
  padding: calc(var(--gap) * 1.75);
  max-width: 500px;
}

@media (min-width: 769px) {
  .contact__card {
    padding: calc(var(--gap) * 2);
  }
}

.contact__text {
  color: var(--text-muted);
  margin-bottom: var(--gap);
  font-size: 1rem;
  line-height: 1.65;
}

.contact__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  align-items: center;
}

.contact__link {
  font-weight: 500;
  color: var(--accent);
}

.contact__link:hover {
  color: var(--accent-hover);
}

.contact__link:focus-visible {
  outline-offset: 3px;
}
</style>
