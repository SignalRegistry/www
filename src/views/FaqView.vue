<script setup>
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { getAssetImg } from '@/utils/getAssetImg'
import { documentMeta, useLanguage } from '@/utils/language'

const { language, t } = useLanguage()
const openIndex = ref(0)
const faqHeroImage = getAssetImg('faq-hero.jpg')

watch(language, () => {
  const meta = documentMeta('faq')
  if (!meta || typeof document === 'undefined') return
  document.title = meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
})

function toggleAccordion(index) {
  // Clicking an open item collapses it; otherwise switch to the selected item.
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<template>
  <div class="centered-logo-mobile">
    <SiteNavbar />

    <!-- Start Page Title Area -->
    <div class="page-title-area page-title-area--faq">
      <div class="container">
        <div class="faq-hero-layout">
          <div class="faq-hero-content">
            <span class="faq-hero-eyebrow">{{ t.faqPage.eyebrow }}</span>
            <h1>{{ t.faqPage.heroTitle }}</h1>
            <p>{{ t.faqPage.heroText }}</p>
            <div class="faq-hero-actions">
              <RouterLink to="/contact" class="default-btn-one">
                {{ t.faqPage.contact }}
                <span />
              </RouterLink>
              <span class="faq-hero-note">{{ t.faqPage.heroNote }}</span>
            </div>
          </div>
          <figure class="faq-hero-figure">
            <img :src="faqHeroImage" :alt="t.faqPage.imageAlt">
            <figcaption>
              <strong>Signal Registry</strong>
              <span>{{ t.faqPage.figureCaption }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>

    <!-- Start Faq Section -->
    <section class="faq-section ptb-100">
      <div class="container">
        <div class="section-title">
          <span>{{ t.faqPage.sectionLabel }}</span>
          <h3>{{ t.faqPage.sectionTitle }}</h3>
        </div>

        <div class="faq-accordion">
          <ul class="accordion">
            <li
              v-for="(item, index) in t.faqPage.items"
              :key="index"
              class="accordion-item"
            >
              <a
                href="javascript:void(0)"
                class="accordion-title"
                :class="{ active: openIndex === index }"
                @click.prevent="toggleAccordion(index)"
              >
                <i class="fa fa-plus" />
                {{ item.title }}
              </a>
              <p
                class="accordion-content"
                :class="{ show: openIndex === index }"
              >
                {{ item.content }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Start Faq Contact Section -->
    <section class="faq-contact-cta pb-100">
      <div class="container">
        <div class="faq-contact-cta__card">
          <span class="faq-contact-cta__eyebrow">{{ t.faqPage.ctaEyebrow }}</span>
          <h3>{{ t.faqPage.ctaTitle }}</h3>
          <p>{{ t.faqPage.ctaText }}</p>
          <div class="faq-contact-cta__signals">
            <div v-for="signal in t.faqPage.signals" :key="signal[0]" class="faq-contact-cta__signal">
              <strong>{{ signal[0] }}</strong>
              <span>{{ signal[1] }}</span>
            </div>
          </div>
          <div class="faq-contact-cta__actions">
            <RouterLink to="/contact" class="default-btn-one">
              {{ t.faqPage.ctaButton }}
              <span />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <SiteFooter />

    <!-- Start Go Top Section -->
  </div>
</template>

<style scoped>
.page-title-area--faq {
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

.page-title-area--faq::before {
  content: none;
  display: none;
}

.faq-hero-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
  gap: 48px;
  align-items: center;
}

.faq-hero-figure {
  margin: 0;
  border-radius: 18px;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.32);
}

.faq-hero-figure img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1024 / 558;
  object-fit: cover;
}

.faq-hero-figure figcaption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 13px 16px;
  background: #f6f8fc;
  border-top: 1px solid #e6ecf5;
}

.faq-hero-figure figcaption strong {
  color: #1e4fa3;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
}

.faq-hero-figure figcaption span {
  min-width: 0;
  color: #5f6f95;
  font-size: 13px;
  line-height: 1.4;
  text-align: right;
}

.faq-hero-content {
  position: relative;
  z-index: 1;
  max-width: 560px;
  color: #ffffff;
  padding: 0;
}

.faq-hero-eyebrow {
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

.faq-hero-content h1 {
  margin-bottom: 14px;
  color: #ffffff;
  font-size: 44px;
  line-height: 1.2;
}

.faq-hero-content p {
  margin-bottom: 22px;
  max-width: 690px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 17px;
  line-height: 1.7;
}

.faq-hero-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.faq-hero-note {
  color: rgba(255, 255, 255, 0.88);
  font-size: 14px;
  font-weight: 500;
}

.faq-contact-cta__card {
  background: #ffffff;
  border: 1px solid #e6ecfa;
  border-radius: 16px;
  padding: 38px 32px;
  text-align: center;
  box-shadow: 0 16px 36px rgba(20, 44, 92, 0.1);
}

.faq-contact-cta__eyebrow {
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
  margin-bottom: 14px;
}

.faq-contact-cta__card h3 {
  margin-bottom: 12px;
}

.faq-contact-cta__card p {
  max-width: 720px;
  margin: 0 auto 20px;
}

.faq-contact-cta__signals {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin: 0 0 22px;
}

.faq-contact-cta__signal {
  border: 1px solid #e7edfb;
  border-radius: 12px;
  background: #fbfdff;
  padding: 14px 12px;
  text-align: left;
}

.faq-contact-cta__signal strong {
  display: block;
  color: #1d2d52;
  font-size: 14px;
  margin-bottom: 4px;
}

.faq-contact-cta__signal span {
  color: #5f6f95;
  font-size: 12px;
  line-height: 1.45;
}

.faq-contact-cta__actions {
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 991px) {
  .page-title-area--faq {
    padding: 118px 0 48px !important;
  }

  .faq-hero-layout {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .faq-hero-content {
    max-width: 100%;
  }

  .faq-hero-figure figcaption {
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
  }

  .faq-hero-figure figcaption span {
    text-align: left;
  }

  .faq-contact-cta__signals {
    grid-template-columns: 1fr;
  }
}

@media only screen and (max-width: 767px) {
  .page-title-area--faq {
    padding: 108px 0 36px !important;
  }

  .faq-hero-content h1 {
    font-size: 30px;
  }

  .faq-hero-content p {
    font-size: 15px;
    line-height: 1.65;
  }

  .faq-contact-cta__card {
    padding: 26px 18px;
  }
}
</style>