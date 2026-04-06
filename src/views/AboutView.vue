<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import PageDesignSection from '@/components/PageDesignSection.vue'
import IndustryInspiredSection from '@/components/IndustryInspiredSection.vue'
import { getAssetImg } from '@/utils/getAssetImg'

const email = ref('')
const heroBg = getAssetImg('aboutUs.jpg')
</script>

<template>
  <div class="centered-logo-mobile">
    <SiteNavbar />

    <!-- Start Page Title Area -->
    <div
      class="page-title-area page-title-area--about"
      :style="heroBg ? { backgroundImage: `url(${heroBg})` } : {}"
    >
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="about-hero-content">
              <span class="about-hero-eyebrow">About Signal Registry</span>
              <h1>Built for teams that need clarity, control, and speed</h1>
              <p>Signal Registry helps organizations monitor signal records, analyze trends, and manage updates from one secure operational workspace.</p>
              <div class="about-hero-actions">
                <RouterLink to="/contact" class="default-btn-one">
                  Request Demo
                  <span />
                </RouterLink>
                <span class="about-hero-note">Trusted workflows. Enterprise-ready support.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Start About Section -->
    <section class="about-section ptb-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="about-image">
              <img :src="getAssetImg('about.png')" alt="image">
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-content">
              <span>About Us</span>
              <h3>Signal Registry</h3>
              <p><strong>Sinyatek</strong> provides <strong>Signal Registry</strong>, a management panel for tracking and managing signal registration data. Users sign in to view a summary of signal records, explore trend and channel data with charts, list units in a table, and edit individual records. Both high-level overview and detailed editing are available in a single interface.</p>
              <ul class="about-list">
                <li>
                  <i class="flaticon-tick" />
                  Summary cards, trend and channel charts, unit table
                </li>
                <li>
                  <i class="flaticon-tick" />
                  Secure login and session control
                </li>
                <li>
                  <i class="flaticon-tick" />
                  Record editing and connection editor (nodes/lines)
                </li>
                <li>
                  <i class="flaticon-tick" />
                  Draggable layouts; environment selection (localhost / staging / production)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Start Productive Section -->
    <section class="productive-section ptb-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="productive-content">
              <span>Get Started</span>
              <h3>Manage your signal records from a single place with Signal Registry</h3>
              <p>With Signal Registry, you can monitor signal records in one place, analyze them with charts, and edit records when needed. Contact us for access and implementation details.</p>
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

    <!-- Start Subscribe Section -->
    <section class="subscribe-Section ptb-100">
      <div class="container">
        <div class="subscribe-content-area mb-0">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6">
              <div class="subscribe-image">
                <img :src="getAssetImg('subscribe.png')" alt="image">
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="subscribe-content">
                <h2>Don't Miss Our News And Updates</h2>
                <p>Subscribe to our newsletter to receive announcements and updates about Signal Registry.</p>
              </div>
              <form class="newsletter-form" @submit.prevent>
                <input
                  v-model="email"
                  type="email"
                  class="input-newsletter"
                  placeholder="Enter your email"
                  name="EMAIL"
                  required
                  autocomplete="off"
                >
                <button type="submit">Subscribe Now</button>
                <div id="validator-newsletter" class="form-result" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <PageDesignSection
      eyebrow="About Experience"
      title="Storytelling structure with engineering-grade clarity"
      description="The About page now follows a layered narrative style: context, capabilities, and action path in one consistent flow."
      :chips="['Narrative Layout', 'Capability Blocks', 'Reusable Sections', 'Action Driven']"
    />

    <IndustryInspiredSection />

    <SiteFooter />

    <!-- Start Go Top Section -->
  </div>
</template>

<style scoped>
.page-title-area--about {
  background-color: #000;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.page-title-area--about::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(16, 18, 37, 0.62);
  z-index: 0;
}

.about-hero-content {
  position: relative;
  z-index: 1;
  max-width: 760px;
  color: #ffffff;
  padding: 36px 0 28px;
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

@media only screen and (max-width: 767px) {
  .about-hero-content {
    padding: 24px 0 12px;
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