<script setup>
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import HomePreFooterCta from '@/components/HomePreFooterCta.vue'
import HomeDarkProductHero from '@/components/HomeDarkProductHero.vue'
import { getAssetImg } from '@/utils/getAssetImg'

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
              <h1>Signal Registry</h1>
              <p>A single management panel to track and manage signal registration data. Sign in to view summary cards, trend and channel charts, and the unit table; edit records one by one. All in Signal Registry.</p>
              <div class="banner-btn">
                <RouterLink to="/about" class="default-btn-one">
                  About Us
                  <span />
                </RouterLink>
                <RouterLink class="default-btn" to="/pricing">
                  Contact Us
                  <span />
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="banner-image">
              <img :src="getAssetImg('home-two/image.png')" alt="image">
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
              <span>Get Started</span>
              <h3>Manage your signal records with Signal Registry</h3>
              <p>With Signal Registry, view signal records in one place, analyze them with charts, and edit records. Contact us for access and information.</p>
              <div class="productive-btn">
                <RouterLink class="productive-btn" to="/projects">
                  Get Started Project
                  <span />
                </RouterLink>
                <RouterLink to="/contact" class="productive-btn-one">
                  Contact With Us
                  <span />
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="productive-image">
              <img :src="getAssetImg('productive.png')" alt="image">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Start Home Features Section -->
    <section class="home-feature-grid-section pt-100 pb-70">
      <div class="container">
        <div class="section-title">
          <span>Core Benefits</span>
          <h3>Built for fast and clear operations</h3>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="home-feature-card">
              <div class="home-feature-icon">
                <i class="far fa-object-group" />
              </div>
              <h3>Best practices baked in</h3>
              <p>Signal Registry keeps reusable, modular structures in place so your team can manage records faster and with fewer repeated steps.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="home-feature-card">
              <div class="home-feature-icon">
                <i class="fas fa-bolt" />
              </div>
              <h3>Insane speed</h3>
              <p>Move through tables, filters, and charts quickly to review records and make updates without slowing down your workflow.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="home-feature-card">
              <div class="home-feature-icon">
                <i class="far fa-clock" />
              </div>
              <h3>Privacy-preserving</h3>
              <p>Your data flow remains controlled and purpose-based, helping you process signal records with privacy and operational confidence.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="home-feature-card">
              <div class="home-feature-icon">
                <i class="far fa-comment-alt" />
              </div>
              <h3>Multi-agentic</h3>
              <p>Structure tasks into clear, modular operations so teams can collaborate and manage complex updates in a predictable way.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="home-feature-card">
              <div class="home-feature-icon">
                <i class="far fa-life-ring" />
              </div>
              <h3>Keeps you in the loop</h3>
              <p>Track each action with clear status and progress context so approvals and follow-ups happen without losing visibility.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="home-feature-card">
              <div class="home-feature-icon">
                <i class="far fa-user" />
              </div>
              <h3>Efficient for common operations</h3>
              <p>Handle repetitive management tasks in fewer clicks and keep routine updates consistent across your signal registry.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <HomeDarkProductHero />

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
</style>