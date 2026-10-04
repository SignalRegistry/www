<script setup>
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { getAssetImg } from '@/utils/getAssetImg'
import { documentMeta, useLanguage } from '@/utils/language'

const { language, t } = useLanguage()

watch(language, () => {
  const meta = documentMeta('projects')
  if (!meta || typeof document === 'undefined') return
  document.title = meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
})

const operationsImage = `${import.meta.env.BASE_URL}projects-workspace.jpg`.replace(/([^:]\/)\/+/g, '$1')
const activeStep = ref(0)

function selectStep(index) {
  activeStep.value = index
}
</script>

<template>
  <div class="centered-logo-mobile">
    <SiteNavbar />

    <div class="page-title-area page-title-area--projects">
      <div class="container">
        <div class="projects-hero-layout">
          <div class="projects-hero-content">
            <span class="projects-hero-eyebrow">{{ t.projectsPage.eyebrow }}</span>
            <h1>{{ t.projectsPage.heroTitle }}</h1>
            <p>{{ t.projectsPage.heroText }}</p>
            <div class="projects-hero-actions">
              <RouterLink to="/contact" class="default-btn-one">
                {{ t.projectsPage.demo }}
                <span />
              </RouterLink>
              <span class="projects-hero-note">{{ t.projectsPage.heroNote }}</span>
            </div>
          </div>
          <figure class="projects-operations">
            <img :src="operationsImage" :alt="t.projectsPage.imageAlt">
            <figcaption>
              <strong>Signal Registry</strong>
              <span>{{ t.projectsPage.imageCaption }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>

    <!-- Intro Section -->
    <section class="project-section pt-100 pb-70">
      <div class="container">
        <div class="section-title">
          <span>{{ t.projectsPage.overviewLabel }}</span>
          <h3>{{ t.projectsPage.overviewTitle }}</h3>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <p class="text-center mb-4">{{ t.projectsPage.overviewLead }}</p>
            <p class="text-center">{{ t.projectsPage.overviewBody }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="how-flow ptb-100" aria-labelledby="how-flow-heading">
      <div class="container">
        <div class="section-title">
          <span>{{ t.projectsPage.flowLabel }}</span>
          <h3 id="how-flow-heading">{{ t.projectsPage.flowTitle }}</h3>
        </div>
        <div class="how-flow__layout">
          <ol class="how-flow__steps">
            <li v-for="(step, index) in t.projectsPage.steps" :key="step.label">
              <button
                type="button"
                class="how-flow__step"
                :class="{ 'is-active': activeStep === index }"
                :aria-current="activeStep === index ? 'step' : undefined"
                @click="selectStep(index)"
              >
                <span class="how-flow__index">{{ index + 1 }}</span>
                <span class="how-flow__label">{{ step.label }}</span>
              </button>
            </li>
          </ol>

          <div class="how-flow__stage">
            <div class="how-flow__chrome" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div class="how-flow__canvas" :aria-label="t.projectsPage.steps[activeStep].title">
              <div v-if="activeStep === 0" class="mock-signin">
                <aside class="mock-signin__aside">
                  <span class="mock-signin__mark" aria-hidden="true">
                    <svg viewBox="0 0 16 16" focusable="false">
                      <path d="M9.2 1.2 3.4 9.1h3.7L6.6 14.8l6-8.2H8.7l.5-5.4Z" />
                    </svg>
                  </span>
                  <div>
                    <strong>Signal Registry</strong>
                    <p>{{ t.projectsPage.mock.sessionNote }}</p>
                  </div>
                </aside>
                <div class="mock-signin__form">
                  <div class="mock-signin__brand">
                    <strong>{{ t.projectsPage.mock.signIn }}</strong>
                    <small>{{ t.projectsPage.mock.signInHint }}</small>
                  </div>
                  <div class="mock-field">
                    <span>{{ t.projectsPage.mock.workEmail }}</span>
                    <em>name@company.com</em>
                  </div>
                  <div class="mock-field">
                    <span>{{ t.projectsPage.mock.password }}</span>
                    <em class="is-secret">••••••••••</em>
                  </div>
                  <span class="mock-btn">{{ t.projectsPage.mock.signIn }}</span>
                </div>
              </div>

              <div v-else-if="activeStep === 1" class="mock-cards">
                <article>
                  <div class="mock-cards__top">
                    <small>{{ t.projectsPage.mock.records }}</small>
                    <span class="mock-cards__delta">+18</span>
                  </div>
                  <strong>128</strong>
                  <em>{{ t.projectsPage.mock.acrossSource }}</em>
                </article>
                <article>
                  <div class="mock-cards__top">
                    <small>{{ t.projectsPage.mock.active }}</small>
                    <span class="mock-cards__delta">75%</span>
                  </div>
                  <strong>96</strong>
                  <span class="mock-cards__meter" aria-hidden="true"><i style="width: 75%" /></span>
                </article>
                <article>
                  <div class="mock-cards__top">
                    <small>{{ t.projectsPage.mock.source }}</small>
                    <span class="mock-cards__live">{{ t.projectsPage.mock.live }}</span>
                  </div>
                  <strong>{{ t.projectsPage.mock.depot }}</strong>
                  <em>{{ t.projectsPage.mock.centralDepot }}</em>
                </article>
              </div>

              <div v-else-if="activeStep === 2" class="mock-charts">
                <div class="mock-trend" aria-hidden="true">
                  <header class="mock-trend__head">
                    <div>
                      <small>{{ t.projectsPage.mock.trend }}</small>
                      <strong>1,284</strong>
                    </div>
                    <span class="mock-trend__delta">+12.4%</span>
                  </header>
                  <svg class="mock-trend__chart" viewBox="0 0 520 112" focusable="false">
                    <defs>
                      <linearGradient id="mockTrendFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#00b0ee" stop-opacity="0.32" />
                        <stop offset="100%" stop-color="#00b0ee" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                    <g class="mock-trend__grid">
                      <line x1="0" y1="28" x2="520" y2="28" />
                      <line x1="0" y1="56" x2="520" y2="56" />
                      <line x1="0" y1="84" x2="520" y2="84" />
                    </g>
                    <path
                      class="mock-trend__area"
                      fill="url(#mockTrendFill)"
                      d="M16 78 C48 78 64 64 96 64 C136 64 144 70 176 70 C216 70 224 40 256 40 C296 40 304 50 336 50 C376 50 384 22 416 22 C456 22 468 28 500 28 L500 112 L16 112 Z"
                    />
                    <path
                      class="mock-trend__line"
                      d="M16 78 C48 78 64 64 96 64 C136 64 144 70 176 70 C216 70 224 40 256 40 C296 40 304 50 336 50 C376 50 384 22 416 22 C456 22 468 28 500 28"
                    />
                    <circle class="mock-trend__halo" cx="500" cy="28" r="8" />
                    <circle class="mock-trend__dot" cx="500" cy="28" r="3.5" />
                  </svg>
                  <div class="mock-trend__axis">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
                <div class="mock-bars" aria-hidden="true">
                  <header class="mock-bars__head">
                    <small>{{ t.projectsPage.mock.channels }}</small>
                    <strong>4</strong>
                  </header>
                  <div class="mock-bars__plot">
                    <span style="--h: 46%"><i>VHF</i></span>
                    <span style="--h: 78%"><i>UHF</i></span>
                    <span style="--h: 34%"><i>HF</i></span>
                    <span style="--h: 62%"><i>SAT</i></span>
                  </div>
                </div>
              </div>

              <div v-else-if="activeStep === 3" class="mock-table">
                <header class="mock-table__head">
                  <div>
                    <small>{{ t.projectsPage.mock.units }}</small>
                    <strong>3</strong>
                  </div>
                  <span>{{ t.projectsPage.mock.inReview }}</span>
                </header>
                <div class="mock-table__cols" aria-hidden="true">
                  <span>{{ t.projectsPage.mock.unit }}</span>
                  <span>{{ t.projectsPage.mock.status }}</span>
                </div>
                <div
                  v-for="(unit, index) in t.projectsPage.units"
                  :key="unit.name"
                  class="mock-row"
                  :class="{ 'is-open': index === 1 }"
                >
                  <span>{{ unit.name }}</span>
                  <em :class="unit.review ? 'is-review' : 'is-active'">{{ unit.status }}</em>
                </div>
              </div>

              <div v-else class="mock-editor" aria-hidden="true">
                <header class="mock-editor__head">
                  <div>
                    <small>{{ t.projectsPage.mock.recordLinks }}</small>
                    <strong>3</strong>
                  </div>
                  <span>{{ t.projectsPage.mock.sourceSelected }}</span>
                </header>
                <div class="mock-editor__graph">
                  <svg class="mock-editor__lines" viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false">
                    <path d="M50 30 V50 H18 V74" />
                    <path d="M50 50 H82 V74" />
                  </svg>
                  <span class="mock-node is-selected mock-node--source">
                    <small>{{ t.projectsPage.mock.selected }}</small>
                    {{ t.projectsPage.mock.sourceNode }}
                  </span>
                  <span class="mock-node mock-node--trigger">
                    <small>{{ t.projectsPage.mock.input }}</small>
                    {{ t.projectsPage.mock.trigger }}
                  </span>
                  <span class="mock-node mock-node--monitor">
                    <small>{{ t.projectsPage.mock.watch }}</small>
                    {{ t.projectsPage.mock.monitor }}
                  </span>
                </div>
              </div>
            </div>
            <div class="how-flow__copy">
              <h4>{{ t.projectsPage.steps[activeStep].title }}</h4>
              <p>{{ t.projectsPage.steps[activeStep].text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Productive Section -->
    <section class="productive-section ptb-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="productive-content">
              <span>{{ t.projectsPage.engageLabel }}</span>
              <h3>{{ t.projectsPage.engageTitle }}</h3>
              <p>{{ t.projectsPage.engageText }}</p>
              <div class="productive-btn">
                <RouterLink class="productive-btn" to="/pricing">{{ t.projectsPage.pricing }} <span /></RouterLink>
                <RouterLink to="/contact" class="productive-btn-one">{{ t.projectsPage.contact }} <span /></RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="productive-image">
              <img :src="getAssetImg('productive.png')" :alt="t.projectsPage.productiveAlt">
            </div>
          </div>
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<style scoped>
.page-title-area.page-title-area--projects {
  height: auto !important;
  min-height: 0 !important;
  background-image: none !important;
  background-color: #071422 !important;
  background:
    radial-gradient(720px 320px at 88% 0%, rgba(0, 176, 238, 0.16), transparent 62%),
    linear-gradient(180deg, #071422 0%, #0c1c33 100%) !important;
  position: relative;
  overflow: hidden;
  padding: 132px 0 76px;
}

.page-title-area--projects::before {
  content: none;
  display: none;
}

.projects-hero-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
  gap: 48px;
  align-items: center;
}

.projects-operations {
  margin: 0;
  border-radius: 18px;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.32);
}

.projects-operations img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1024 / 558;
  object-fit: cover;
  object-position: center 78%;
}

.projects-operations figcaption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 13px 16px;
  background: #f6f8fc;
  border-top: 1px solid #e6ecf5;
}

.projects-operations figcaption strong {
  color: #1e4fa3;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
}

.projects-operations figcaption span {
  min-width: 0;
  color: #5f6f95;
  font-size: 13px;
  line-height: 1.4;
  text-align: right;
}

.projects-hero-content {
  position: relative;
  z-index: 2;
  max-width: 560px;
  color: #ffffff;
  padding: 0;
}

.projects-hero-eyebrow {
  display: inline-flex;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.24);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.projects-hero-content h1 {
  margin-bottom: 14px;
  color: #ffffff;
  font-size: 44px;
  line-height: 1.2;
}

.projects-hero-content p {
  margin-bottom: 22px;
  max-width: 690px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 17px;
  line-height: 1.7;
}

.projects-hero-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.projects-hero-note {
  color: rgba(255, 255, 255, 0.88);
  font-size: 14px;
  font-weight: 500;
}

.how-flow {
  background: #f8fbff;
}

.how-flow__layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 28px;
  align-items: start;
}

.how-flow__steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.how-flow__step {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border: 1px solid #e8efff;
  border-radius: 14px;
  background: #ffffff;
  color: #393953;
  text-align: left;
  font-weight: 600;
}

.how-flow__step.is-active {
  border-color: #00b0ee;
  background: #f2f8ff;
  color: #0b6f96;
}

.how-flow__index {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #e7f6fd;
  color: #0095ce;
  font-size: 12px;
  font-weight: 700;
  flex: 0 0 auto;
}

.how-flow__step.is-active .how-flow__index {
  background: #00b0ee;
  color: #ffffff;
}

.how-flow__stage {
  background: #ffffff;
  border: 1px solid #e8efff;
  border-radius: 18px;
  box-shadow: 0 8px 28px rgba(20, 34, 66, 0.08);
  overflow: hidden;
}

.how-flow__chrome {
  display: flex;
  gap: 6px;
  padding: 12px 16px;
  background: #f4f7fb;
  border-bottom: 1px solid #e8efff;
}

.how-flow__chrome span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #c5d0e4;
}

.how-flow__canvas {
  min-height: 220px;
  padding: 28px 24px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.how-flow__copy {
  padding: 8px 24px 24px;
}

.how-flow__copy h4 {
  margin-bottom: 8px;
  color: #393953;
  font-size: 22px;
}

.how-flow__copy p {
  margin: 0;
  max-width: 640px;
  color: #5c6788;
  line-height: 1.65;
}

.mock-signin {
  width: 100%;
  display: grid;
  grid-template-columns: minmax(180px, 0.85fr) 1.15fr;
  min-height: 248px;
  overflow: hidden;
  border: 1px solid #e6edf5;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 12px 32px rgba(16, 34, 66, 0.06);
}

.mock-signin__aside {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  padding: 24px 22px;
  background: linear-gradient(165deg, #12304f 0%, #0c1c33 100%);
  color: #ffffff;
}

.mock-signin__aside strong {
  display: block;
  margin: 2px 0 8px;
  color: #ffffff;
  font-size: 18px;
  letter-spacing: -0.03em;
}

.mock-signin__aside p {
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 13px;
  line-height: 1.55;
}

.mock-signin__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  padding: 22px 24px;
}

.mock-signin__brand strong {
  display: block;
  color: #1c2434;
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: -0.03em;
}

.mock-signin__brand small {
  color: #8b97b3;
  font-size: 12px;
}

.mock-signin__mark {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #00b0ee;
  flex: 0 0 auto;
}

.mock-signin__mark svg {
  width: 16px;
  height: 16px;
}

.mock-signin__mark path {
  fill: #ffffff;
}

.mock-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mock-field span {
  color: #3d4866;
  font-size: 12px;
  font-weight: 600;
}

.mock-field em {
  display: block;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #e2e8f2;
  background: #f8fafc;
  color: #1c2434;
  font-style: normal;
  font-size: 13px;
  line-height: 1.3;
}

.mock-field em.is-secret {
  letter-spacing: 0.16em;
  color: #5c6788;
}

.mock-btn {
  display: block;
  margin-top: 2px;
  border-radius: 10px;
  padding: 11px 12px;
  background: #00b0ee;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  box-shadow: 0 8px 16px rgba(0, 176, 238, 0.22);
}

.mock-cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  align-items: stretch;
}

.mock-cards article {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 138px;
  padding: 16px 16px 14px;
  border: 1px solid #e4ebf5;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
}

.mock-cards__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.mock-cards article small {
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
}

.mock-cards strong {
  color: #1c2434;
  font-size: 28px;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.mock-cards em {
  margin-top: auto;
  color: #8b97b3;
  font-style: normal;
  font-size: 12px;
  font-weight: 600;
}

.mock-cards__delta {
  padding: 3px 7px;
  border-radius: 999px;
  background: #e8f8ef;
  color: #0d7a3c;
  font-size: 11px;
  font-weight: 700;
}

.mock-cards__live {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #0d7a3c;
  font-size: 11px;
  font-weight: 700;
}

.mock-cards__live::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #12b76a;
}

.mock-cards__meter {
  display: block;
  height: 6px;
  margin-top: auto;
  border-radius: 999px;
  background: #e8eef6;
  overflow: hidden;
}

.mock-cards__meter i {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #00b0ee, #1a7fd4);
}

.mock-cards small,
.mock-trend small,
.mock-bars small {
  display: block;
  color: #8b97b3;
  font-size: 12px;
}


.mock-charts {
  width: 100%;
  display: grid;
  grid-template-columns: 1.6fr 0.7fr;
  gap: 12px;
  align-items: stretch;
}

.mock-trend,
.mock-bars {
  position: relative;
  min-height: 210px;
  padding: 14px 16px 12px;
  border: 1px solid #e4ebf5;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
}

.mock-trend {
  display: flex;
  flex-direction: column;
}

.mock-trend__head,
.mock-bars__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.mock-trend__head small,
.mock-bars__head small {
  position: static;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
}

.mock-trend__head strong,
.mock-bars__head strong {
  display: block;
  margin-top: 2px;
  color: #1c2434;
  font-size: 22px;
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.mock-trend__delta {
  margin-top: 2px;
  padding: 4px 8px;
  border-radius: 999px;
  background: #e8f8ef;
  color: #0d7a3c;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.mock-trend__chart {
  width: 100%;
  height: auto;
  margin-top: 6px;
  display: block;
  overflow: visible;
}

.mock-trend__grid line {
  stroke: #e8eef6;
  stroke-width: 1;
}

.mock-trend__line {
  fill: none;
  stroke: #00b0ee;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mock-trend__halo {
  fill: rgba(0, 176, 238, 0.18);
}

.mock-trend__dot {
  fill: #00b0ee;
  stroke: #ffffff;
  stroke-width: 1.5;
}

.mock-trend__axis {
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
  color: #98a2b8;
  font-size: 11px;
  font-weight: 600;
}

.mock-bars {
  display: flex;
  flex-direction: column;
}

.mock-bars__plot {
  flex: 1;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  min-height: 120px;
  margin-top: 14px;
  padding-bottom: 18px;
  border-bottom: 1px solid #e8eef6;
}

.mock-bars__plot span {
  position: relative;
  flex: 1;
  height: var(--h);
  border-radius: 6px 6px 2px 2px;
  background: linear-gradient(180deg, #3ec8f5, #00b0ee 55%, #1a7fd4);
}

.mock-bars__plot i {
  position: absolute;
  left: 50%;
  bottom: -18px;
  transform: translateX(-50%);
  color: #98a2b8;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.mock-table {
  width: 100%;
  padding: 14px 16px 8px;
  border: 1px solid #e4ebf5;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
}

.mock-table__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.mock-table__head small {
  display: block;
  color: #8b97b3;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.mock-table__head strong {
  display: block;
  margin-top: 2px;
  color: #1c2434;
  font-size: 22px;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.mock-table__head > span {
  margin-top: 2px;
  padding: 4px 8px;
  border-radius: 999px;
  background: #fff6e8;
  color: #9a6700;
  font-size: 12px;
  font-weight: 700;
}

.mock-table__cols,
.mock-row {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 12px;
}

.mock-table__cols {
  padding: 0 12px 8px;
  border-bottom: 1px solid #e8eef6;
  color: #98a2b8;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.mock-row {
  margin-top: 4px;
  padding: 11px 12px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: #1c2434;
  font-weight: 600;
}

.mock-row.is-open {
  background: #f2f8ff;
  box-shadow: inset 3px 0 0 #00b0ee;
}

.mock-row em {
  padding: 3px 8px;
  border-radius: 999px;
  font-style: normal;
  font-size: 12px;
  font-weight: 700;
}

.mock-row em.is-active {
  background: #e8f8ef;
  color: #0d7a3c;
}

.mock-row em.is-review {
  background: #fff6e8;
  color: #9a6700;
}

.mock-editor {
  width: 100%;
  padding: 14px 16px 18px;
  border: 1px solid #e4ebf5;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
}

.mock-editor__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.mock-editor__head small {
  display: block;
  color: #8b97b3;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.mock-editor__head strong {
  display: block;
  margin-top: 2px;
  color: #1c2434;
  font-size: 22px;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.mock-editor__head > span {
  margin-top: 2px;
  padding: 4px 8px;
  border-radius: 999px;
  background: #e7f6fd;
  color: #0b6f96;
  font-size: 12px;
  font-weight: 700;
}

.mock-editor__graph {
  position: relative;
  height: 210px;
  margin-top: 6px;
}

.mock-editor__lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.mock-editor__lines path {
  fill: none;
  stroke: #00b0ee;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  vector-effect: non-scaling-stroke;
}

.mock-node {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  min-width: 112px;
  padding: 10px 14px;
  border: 1px solid #e4ebf5;
  border-radius: 12px;
  background: #ffffff;
  color: #1c2434;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
  transform: translateX(-50%);
}

.mock-node small {
  color: #8b97b3;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.mock-node--source {
  left: 50%;
  top: 0;
}

.mock-node--trigger {
  left: 18%;
  top: 72%;
}

.mock-node--monitor {
  left: 82%;
  top: 72%;
}

.mock-node.is-selected {
  border-color: #00b0ee;
  background: #f2f8ff;
  color: #0b6f96;
  box-shadow: 0 0 0 3px rgba(0, 176, 238, 0.12);
}

@media only screen and (max-width: 991px) {
  .page-title-area.page-title-area--projects {
    padding: 118px 0 48px !important;
  }

  .projects-hero-layout {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .projects-hero-content {
    max-width: 100%;
  }

  .projects-operations figcaption {
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
  }

  .projects-operations figcaption span {
    text-align: left;
  }

  .how-flow__layout {
    grid-template-columns: 1fr;
  }

  .how-flow__steps {
    flex-direction: column;
    overflow: visible;
    gap: 8px;
  }

  .how-flow__step {
    width: 100%;
    white-space: normal;
  }
}

@media only screen and (max-width: 767px) {
  .page-title-area.page-title-area--projects {
    padding: 108px 0 36px !important;
  }

  .projects-hero-content {
    padding: 0;
  }

  .projects-hero-content h1 {
    font-size: 30px;
  }

  .projects-hero-content p {
    font-size: 15px;
    line-height: 1.65;
  }

  .how-flow__canvas {
    min-height: 0;
    padding: 16px 12px 4px;
  }

  .how-flow__copy {
    padding: 4px 16px 18px;
  }

  .mock-cards,
  .mock-charts,
  .mock-table,
  .mock-signin {
    grid-template-columns: 1fr;
  }

  .mock-signin__aside {
    gap: 12px;
    padding: 18px 18px 16px;
  }
}

html.theme-dark .how-flow {
  background: #0b1220;
}

html.theme-dark .how-flow__step,
html.theme-dark .how-flow__stage,
html.theme-dark .mock-signin,
html.theme-dark .mock-cards article,
html.theme-dark .mock-trend,
html.theme-dark .mock-bars,
html.theme-dark .mock-table,
html.theme-dark .mock-editor,
html.theme-dark .mock-row,
html.theme-dark .mock-node {
  background: #111827;
  border-color: rgba(255, 255, 255, 0.12);
  color: #e2e8f0;
}

html.theme-dark .how-flow__step.is-active,
html.theme-dark .mock-row.is-open,
html.theme-dark .mock-node.is-selected {
  background: #0f2740;
  color: #7ddfff;
}

html.theme-dark .mock-node.is-selected {
  box-shadow: 0 0 0 3px rgba(0, 176, 238, 0.18);
}

html.theme-dark .mock-editor__head > span {
  background: rgba(0, 176, 238, 0.16);
  color: #7ddfff;
}

html.theme-dark .mock-node small,
html.theme-dark .mock-editor__head small {
  color: #94a3b8;
}

html.theme-dark .mock-row {
  background: transparent;
  color: #e2e8f0;
}

html.theme-dark .mock-table__cols,
html.theme-dark .mock-table__head small {
  color: #94a3b8;
  border-bottom-color: rgba(255, 255, 255, 0.08);
}

html.theme-dark .mock-row em.is-active {
  background: rgba(16, 185, 129, 0.16);
  color: #6ee7b7;
}

html.theme-dark .mock-table__head > span,
html.theme-dark .mock-row em.is-review {
  background: rgba(245, 158, 11, 0.16);
  color: #fcd34d;
}

html.theme-dark .how-flow__chrome {
  background: #0f172a;
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

html.theme-dark .how-flow__copy h4,
html.theme-dark .mock-signin strong,
html.theme-dark .mock-cards strong,
html.theme-dark .mock-trend__head strong,
html.theme-dark .mock-bars__head strong,
html.theme-dark .mock-table__head strong,
html.theme-dark .mock-editor__head strong,
html.theme-dark .mock-node {
  color: #e2e8f0;
}

html.theme-dark .mock-trend__delta,
html.theme-dark .mock-cards__delta {
  background: rgba(16, 185, 129, 0.16);
  color: #6ee7b7;
}

html.theme-dark .mock-cards__live {
  color: #6ee7b7;
}

html.theme-dark .mock-cards em,
html.theme-dark .mock-cards__meter {
  color: #94a3b8;
  background: rgba(255, 255, 255, 0.08);
}

html.theme-dark .mock-cards em {
  background: transparent;
}

html.theme-dark .mock-trend__grid line,
html.theme-dark .mock-bars__plot {
  stroke: rgba(255, 255, 255, 0.08);
  border-bottom-color: rgba(255, 255, 255, 0.08);
}

html.theme-dark .mock-trend__dot {
  stroke: #111827;
}

html.theme-dark .mock-trend__axis,
html.theme-dark .mock-bars__plot i {
  color: #94a3b8;
}

html.theme-dark .how-flow__copy p,
html.theme-dark .mock-row,
html.theme-dark .mock-field em {
  color: #cbd5e1;
}

html.theme-dark .mock-field {
  background: transparent;
  border-color: transparent;
}

html.theme-dark .mock-field em {
  background: #0b1220;
  border-color: rgba(255, 255, 255, 0.12);
}

html.theme-dark .mock-field em.is-secret,
html.theme-dark .mock-signin__brand small,
html.theme-dark .mock-field span {
  color: #94a3b8;
}

html.theme-dark .mock-signin__form {
  background: #111827;
}

html.theme-dark .mock-signin__aside,
html.theme-dark .mock-signin__aside strong {
  color: #ffffff;
}
</style>