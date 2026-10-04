<script setup>
import { watch } from 'vue'
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import IndustryInspiredSection from '@/components/IndustryInspiredSection.vue'
import { getAssetImg } from '@/utils/getAssetImg'
import { documentMeta, useLanguage } from '@/utils/language'

const { language, t } = useLanguage()

watch(language, () => {
  const meta = documentMeta('about')
  if (!meta || typeof document === 'undefined') return
  document.title = meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
})

const officeImage = `${import.meta.env.BASE_URL}about-office.jpg`.replace(/([^:]\/)\/+/g, '$1')
</script>

<template>
  <div class="centered-logo-mobile">
    <SiteNavbar />

    <div class="page-title-area page-title-area--about">
      <div class="container">
        <div class="about-hero-layout">
          <div class="about-hero-content">
            <span class="about-hero-eyebrow">{{ t.aboutPage.eyebrow }}</span>
            <h1>{{ t.aboutPage.heroTitle }}</h1>
            <p>{{ t.aboutPage.heroText }}</p>
            <div class="about-hero-actions">
              <RouterLink to="/contact" class="default-btn-one">
                {{ t.aboutPage.briefing }}
                <span />
              </RouterLink>
              <span class="about-hero-note">{{ t.aboutPage.heroNote }}</span>
            </div>
          </div>
          <figure class="about-office">
            <img :src="officeImage" :alt="t.aboutPage.officeAlt">
            <figcaption>
              <strong>Signal Registry</strong>
              <span>{{ t.aboutPage.officeCaption }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>

    <!-- Start Productive Section -->
    <section class="productive-section ptb-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="productive-content">
              <span>{{ t.aboutPage.platformLabel }}</span>
              <h3>{{ t.aboutPage.platformTitle }}</h3>
              <p>{{ t.aboutPage.platformText }}</p>
              <div class="productive-btn">
                <RouterLink class="productive-btn" to="/projects">
                  {{ t.aboutPage.viewProject }}
                  <span />
                </RouterLink>
                <RouterLink to="/contact" class="productive-btn-one">
                  {{ t.aboutPage.contact }}
                  <span />
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="productive-image">
              <img :src="getAssetImg('productive.png')" :alt="t.aboutPage.imageAlt">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Start About Section -->
    <section class="about-section ptb-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="about-content">
              <span class="about-label">{{ t.aboutPage.enterpriseLabel }}</span>
              <h3>Signal Registry</h3>
              <p class="about-intro">
                <strong>Signal Registry</strong>{{ t.aboutPage.intro }}
              </p>
              <p class="about-intro about-intro--secondary">
                {{ t.aboutPage.introSecondary }}
              </p>
              <div class="about-metrics">
                <div v-for="metric in t.aboutPage.metrics" :key="metric[0]" class="about-metric-item">
                  <strong>{{ metric[0] }}</strong>
                  <span>{{ metric[1] }}</span>
                </div>
              </div>
              <ul class="about-list">
                <li v-for="point in t.aboutPage.points" :key="point">
                  <i class="flaticon-tick" />
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <IndustryInspiredSection />

    <SiteFooter />

    <!-- Start Go Top Section -->
  </div>
</template>

<style scoped>
.page-title-area--about {
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

.page-title-area--about::before {
  content: none;
  display: none;
}

.about-hero-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
  gap: 48px;
  align-items: center;
}

.about-office {
  margin: 0;
  border-radius: 18px;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.32);
}

.about-office img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1024 / 558;
  object-fit: cover;
  object-position: center center;
}

.about-office figcaption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 13px 16px;
  background: #f6f8fc;
  border-top: 1px solid #e6ecf5;
}

.about-office figcaption strong {
  color: #1e4fa3;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
}

.about-office figcaption span {
  color: #5f6f95;
  font-size: 13px;
  line-height: 1.4;
  text-align: right;
}

.about-hero-content {
  position: relative;
  z-index: 2;
  max-width: 560px;
  color: #ffffff;
  padding: 0;
}

.about-hero-eyebrow {
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

.about-hero-content h1 {
  margin-bottom: 14px;
  color: #ffffff;
  font-size: 44px;
  line-height: 1.2;
}

.about-hero-content p {
  margin-bottom: 22px;
  max-width: 690px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 17px;
  line-height: 1.7;
}

.about-hero-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.about-hero-note {
  color: rgba(255, 255, 255, 0.88);
  font-size: 14px;
  font-weight: 500;
}

.about-content {
  background: #ffffff;
  border: 1px solid #e6ecfa;
  border-radius: 16px;
  padding: 38px 36px;
  box-shadow: 0 14px 34px rgba(20, 44, 92, 0.1);
}

.about-label {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid #d7e3fc;
  background: #f6f9ff;
  color: #1e4fa3;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.about-content h3 {
  margin-bottom: 14px;
}

.about-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin: 20px 0 18px;
}

.about-metric-item {
  border: 1px solid #e7edfb;
  border-radius: 12px;
  background: #fbfdff;
  padding: 14px 12px;
}

.about-metric-item strong {
  display: block;
  color: #1d2d52;
  font-size: 14px;
  margin-bottom: 4px;
}

.about-metric-item span {
  color: #5f6f95;
  font-size: 12px;
  line-height: 1.45;
}

.about-intro {
  margin-bottom: 10px;
}

.about-intro--secondary {
  margin-bottom: 18px;
}

@media only screen and (max-width: 991px) {
  .page-title-area--about {
    padding: 118px 0 48px !important;
  }

  .about-hero-layout {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .about-hero-content {
    max-width: 100%;
  }

  .about-office figcaption {
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
  }

  .about-office figcaption span {
    text-align: left;
  }
}

@media only screen and (max-width: 767px) {
  .page-title-area--about {
    padding: 108px 0 36px !important;
  }

  .about-content {
    padding: 24px 18px;
  }

  .about-metrics {
    grid-template-columns: 1fr;
    gap: 10px;
    margin: 16px 0 14px;
  }

  .about-hero-content h1 {
    font-size: 30px;
  }

  .about-hero-content p {
    font-size: 15px;
    line-height: 1.65;
  }
}
</style>