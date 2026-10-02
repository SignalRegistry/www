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

</script>

<template>
  <div>
    <SiteNavbar />

    <!-- Use a dedicated background layer; pseudo-element stacks previously caused dull/gray rendering in some browsers. -->
    <div class="main-banner-two site-home-hero">
      <div class="site-home-hero__bg" aria-hidden="true" />
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
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
          <div class="col-lg-6 col-md-12">
            <div class="banner-image">
              <img :src="getAssetImg('home-two/image.png')" alt="Signal Registry dashboard illustration">
            </div>
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
  background: transparent !important;
}

.site-home-hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: linear-gradient(to bottom, #370b6f, #00429b, #006dba, #0095ce, #2dbcdc);
}

.site-home-hero > :deep(.container-fluid) {
  position: relative;
  z-index: 1;
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
