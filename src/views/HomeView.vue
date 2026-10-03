<script setup>
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import HomePreFooterCta from '@/components/HomePreFooterCta.vue'
import HomeDarkProductHero from '@/components/HomeDarkProductHero.vue'
import HomeFlowEditorSection from '@/components/HomeFlowEditorSection.vue'
import { getAssetImg } from '@/utils/getAssetImg'
import { useLanguage } from '@/utils/language'

const { t } = useLanguage()
const homeHero = `${import.meta.env.BASE_URL}home-hero.jpg`.replace(/([^:]\/)\/+/g, '$1')

</script>

<template>
  <div>
    <SiteNavbar />

    <!-- Use a dedicated background layer; pseudo-element stacks previously caused dull/gray rendering in some browsers. -->
    <div class="main-banner-two site-home-hero">
      <img class="site-home-hero__photo" :src="homeHero" alt="" />
      <div class="site-home-hero__shade" aria-hidden="true" />
      <div class="container">
        <div class="main-banner-content">
          <span class="site-home-hero__eyebrow">{{ t.heroEyebrow }}</span>
          <h1>{{ t.heroTitle }}</h1>
          <p>{{ t.heroText }}</p>
          <div class="banner-btn">
            <RouterLink to="/about" class="default-btn-one">
              {{ t.about }}
              <span />
            </RouterLink>
            <RouterLink class="default-btn" to="/contact">
              {{ t.contact }}
              <span />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Productive Section -->
    <section class="productive-section pt-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="productive-content">
              <span>{{ t.overviewEyebrow }}</span>
              <h3>{{ t.overviewTitle }}</h3>
              <p>{{ t.overviewText }}</p>
              <div class="productive-btn">
                <RouterLink class="productive-btn" to="/about">
                  {{ t.about }}
                  <span />
                </RouterLink>
                <RouterLink to="/contact" class="productive-btn-one">
                  {{ t.contact }}
                  <span />
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="productive-image">
              <img :src="getAssetImg('productive.png')" alt="Signal Registry data platform illustration" loading="lazy">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Start Home Features Section -->
    <section class="home-feature-grid-section pt-100 pb-70">
      <div class="container">
        <div class="section-title">
              <span>{{ t.featuresEyebrow }}</span>
              <h3>{{ t.featuresTitle }}</h3>
        </div>
        <div class="row g-4">
          <div v-for="(feature, index) in t.features" :key="feature[0]" class="col-lg-4 col-md-6">
            <div class="home-feature-card">
              <div class="home-feature-icon">
                <i :class="['fas', ['fa-chart-pie', 'fa-project-diagram', 'fa-map-marker-alt', 'fa-chart-line', 'fa-user-shield', 'fa-globe'][index]]" />
              </div>
              <h3>{{ feature[0] }}</h3>
              <p>{{ feature[1] }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <HomeDarkProductHero />

    <HomeFlowEditorSection />

    <HomePreFooterCta />

    <SiteFooter />

    <!-- Start Go Top Section -->
  </div>
</template>

<style scoped>
.site-home-hero.main-banner-two {
  position: relative;
  isolation: isolate;
  background: #0c1628 !important;
  min-height: 640px;
}

.site-home-hero__photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  z-index: 0;
  pointer-events: none;
}

.site-home-hero__shade {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    #081020 0%,
    #081020 56%,
    rgba(8, 16, 32, 0.4) 68%,
    rgba(8, 16, 32, 0.1) 82%,
    rgba(8, 16, 32, 0.05) 100%
  );
}

.site-home-hero > :deep(.container) {
  position: relative;
  z-index: 2;
}

.site-home-hero :deep(.main-banner-content) {
  margin-left: 0;
  max-width: 620px;
}

.site-home-hero :deep(.main-banner-content h1) {
  max-width: 11em;
  margin-bottom: 18px;
  font-size: 56px;
  line-height: 1.08;
  letter-spacing: -0.03em;
}

.site-home-hero :deep(.main-banner-content p) {
  max-width: 540px;
  color: rgba(255, 255, 255, 0.88);
}

@media (max-width: 991px) {
  .site-home-hero.main-banner-two {
    min-height: 0;
  }

  .site-home-hero :deep(.main-banner-content h1) {
    font-size: 34px;
    max-width: none;
  }

  .site-home-hero__photo {
    object-position: 62% center;
  }

  .site-home-hero__shade {
    background: linear-gradient(
      180deg,
      rgba(8, 16, 32, 0.88) 0%,
      rgba(8, 16, 32, 0.72) 70%,
      rgba(8, 16, 32, 0.5) 100%
    );
  }
}

.site-home-hero__eyebrow {
  display: inline-block;
  margin-bottom: 0.9rem;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
</style>
