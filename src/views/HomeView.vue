<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import GlassPane from '@/components/GlassPane.vue'

const experience = [
  {
    company: 'Your Company',
    role: 'Software Engineer',
    dates: '2023 — Present',
    description:
      'Building and maintaining services and products. Collaborating with design and product to ship features that scale.',
    span: 6,
  },
  {
    company: 'Previous Role',
    role: 'Software Developer',
    dates: '2021 — 2023',
    description:
      'Developed web and backend solutions. Improved performance and reliability of core systems.',
    span: 6,
  },
]

const projects = [
  {
    title: 'Project Alpha',
    tag: 'Web · Backend',
    description: 'A full-stack product with modern tooling and clear architecture.',
    url: '#',
  },
  {
    title: 'Project Beta',
    tag: 'Mobile · API',
    description: 'Native app with a robust API and thoughtful UX.',
    url: '#',
  },
  {
    title: 'Project Gamma',
    tag: 'Open source',
    description: 'Developer tooling and libraries used by the community.',
    url: '#',
  },
]
</script>

<template>
  <div class="home">
    <AppHeader />
    <main>
      <section id="hero" class="hero">
        <div class="hero__content">
          <p class="mono hero__label">Software Engineer</p>
          <h1 class="hero__title">
            Rennan <span class="hero__accent">Ribas</span>
          </h1>
          <p class="hero__subtitle">
            I build reliable systems and polished products — from backend APIs to native and web apps.
          </p>
          <div class="hero__actions">
            <a href="#projects" class="hero__btn hero__btn--primary">View work</a>
            <a href="#contact" class="hero__btn hero__btn--secondary">Get in touch</a>
          </div>
        </div>
      </section>

      <section id="about" class="about">
        <h2 class="section-title">
          <span class="mono section-title__label">01</span>
          About
        </h2>
        <div class="bento-grid about__grid">
          <GlassPane :no-hover="true" class="about__card about__card--wide">
            <p class="about__text">
              I'm a Software Engineer focused on clean architecture, performance, and user experience.
              I work across the stack — backend services, web frontends, and mobile — and care about
              maintainable code and clear communication.
            </p>
            <p class="about__text">
              When I'm not shipping features, I'm likely exploring new tools, contributing to
              open source, or improving my own side projects.
            </p>
          </GlassPane>
          <GlassPane :no-hover="true" class="about__card">
            <h3 class="about__card-title">Focus</h3>
            <ul class="about__list">
              <li>Backend & APIs</li>
              <li>Web & mobile apps</li>
              <li>System design</li>
              <li>Developer experience</li>
            </ul>
          </GlassPane>
        </div>
      </section>

      <section id="experience" class="experience">
        <h2 class="section-title">
          <span class="mono section-title__label">02</span>
          Experience
        </h2>
        <div class="bento-grid experience__grid">
          <GlassPane
            v-for="(job, i) in experience"
            :key="job.company"
            class="experience__card"
            :class="job.span ? `experience__card--span-${job.span}` : ''"
          >
            <span class="mono experience__dates">{{ job.dates }}</span>
            <h3 class="experience__role">{{ job.role }}</h3>
            <p class="experience__company">{{ job.company }}</p>
            <p class="experience__desc">{{ job.description }}</p>
          </GlassPane>
        </div>
      </section>

      <section id="projects" class="projects">
        <h2 class="section-title">
          <span class="mono section-title__label">03</span>
          Selected work
        </h2>
        <div class="bento-grid projects__grid">
          <GlassPane
            v-for="project in projects"
            :key="project.title"
            tag="a"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="projects__card"
          >
            <span class="mono projects__tag">{{ project.tag }}</span>
            <h3 class="projects__title">{{ project.title }}</h3>
            <p class="projects__desc">{{ project.description }}</p>
          </GlassPane>
        </div>
      </section>

      <section id="contact" class="contact">
        <h2 class="section-title">
          <span class="mono section-title__label">04</span>
          Contact
        </h2>
        <GlassPane :no-hover="true" class="contact__card">
          <p class="contact__text">
            I'm open to new opportunities and conversations. Reach out via email or LinkedIn.
          </p>
          <div class="contact__links">
            <a href="mailto:hello@rennanribas.com" class="contact__link">hello@rennanribas.com</a>
            <a
              href="https://linkedin.com/in/rennanribas"
              target="_blank"
              rel="noopener noreferrer"
              class="contact__link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rennanribas"
              target="_blank"
              rel="noopener noreferrer"
              class="contact__link"
            >
              GitHub
            </a>
          </div>
        </GlassPane>
      </section>
    </main>
    <footer class="footer">
      <p class="mono footer__copy">© {{ new Date().getFullYear() }} Rennan Ribas</p>
    </footer>
  </div>
</template>

<style scoped>
.section-title {
  margin-bottom: var(--bento-gap);
  padding-left: var(--bento-gap);
  font-size: clamp(1.5rem, 4vw, 2rem);
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.section-title__label {
  color: var(--color-signal);
  font-size: 0.7rem;
}

/* Hero */
.hero {
  padding-top: calc(80px + var(--bento-gap) * 3);
  padding-bottom: calc(var(--bento-gap) * 4);
  text-align: center;
}

.hero__content {
  max-width: 640px;
  margin: 0 auto;
}

.hero__label {
  margin-bottom: var(--grid-unit);
  color: var(--color-signal);
}

.hero__title {
  font-size: clamp(2.5rem, 8vw, 4rem);
  line-height: 1.1;
  margin-bottom: var(--bento-gap);
  letter-spacing: -0.03em;
}

.hero__accent {
  color: var(--color-signal);
}

.hero__subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: calc(var(--bento-gap) * 1.5);
  line-height: 1.6;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--bento-gap);
  justify-content: center;
}

.hero__btn {
  display: inline-block;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9375rem;
  transition:
    background var(--spring-duration) var(--spring-easing),
    color var(--spring-duration) var(--spring-easing),
    transform var(--spring-duration) var(--spring-easing);
}

.hero__btn--primary {
  background: var(--color-signal);
  color: var(--color-obsidian);
}

.hero__btn--primary:hover {
  filter: brightness(1.08);
  transform: translateY(-2px);
}

.hero__btn--secondary {
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
}

.hero__btn--secondary:hover {
  border-color: var(--color-signal);
  color: var(--color-signal);
}

/* About */
.about__grid {
  margin-top: calc(var(--bento-gap) * 0.5);
}

.about__card {
  padding: calc(var(--bento-gap) * 1.5);
}

.about__card--wide {
  grid-column: span 8;
}

@media (max-width: 768px) {
  .about__card--wide {
    grid-column: 1;
  }
}

.about__text {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1em;
}

.about__text:last-child {
  margin-bottom: 0;
}

.about__card-title {
  font-size: 1rem;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.about__list {
  list-style: none;
  color: var(--text-secondary);
  font-size: 0.9375rem;
  line-height: 1.8;
}

.about__list li::before {
  content: '→ ';
  color: var(--color-signal);
}

/* Experience */
.experience__grid {
  margin-top: calc(var(--bento-gap) * 0.5);
}

.experience__card {
  padding: calc(var(--bento-gap) * 1.5);
}

.experience__card--span-6 {
  grid-column: span 6;
}

@media (max-width: 768px) {
  .experience__card--span-6 {
    grid-column: 1;
  }
}

.experience__dates {
  display: block;
  margin-bottom: 8px;
  font-size: 0.7rem;
  color: var(--color-signal);
}

.experience__role {
  font-size: 1.125rem;
  margin-bottom: 4px;
}

.experience__company {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  margin-bottom: 12px;
}

.experience__desc {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  line-height: 1.6;
}

/* Projects */
.projects__grid {
  margin-top: calc(var(--bento-gap) * 0.5);
}

.projects__card {
  padding: calc(var(--bento-gap) * 1.5);
  display: block;
  color: inherit;
  grid-column: span 4;
}

@media (max-width: 900px) {
  .projects__card {
    grid-column: span 6;
  }
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
  display: block;
  margin-bottom: 8px;
  font-size: 0.65rem;
  color: var(--color-signal);
}

.projects__title {
  font-size: 1.25rem;
  margin-bottom: 8px;
}

.projects__desc {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  line-height: 1.6;
}

/* Contact */
.contact__card {
  margin-top: calc(var(--bento-gap) * 0.5);
  padding: calc(var(--bento-gap) * 2);
  max-width: 560px;
}

.contact__text {
  color: var(--text-secondary);
  margin-bottom: var(--bento-gap);
  line-height: 1.6;
}

.contact__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--bento-gap);
}

.contact__link {
  font-weight: 500;
}

/* Footer */
.footer {
  padding: var(--bento-gap) calc(var(--bento-gap) * 2);
  border-top: 1px solid var(--glass-border);
  text-align: center;
}

.footer__copy {
  font-size: 0.7rem;
  color: var(--text-secondary);
}
</style>
