<script setup>
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import IndustryInspiredSection from '@/components/IndustryInspiredSection.vue'
import { getAssetImg } from '@/utils/getAssetImg'

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

    <!-- Start About Section -->
    <section class="about-section ptb-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="about-content">
              <span class="about-label">Enterprise Platform</span>
              <h3>Signal Registry Governance Suite</h3>
              <p class="about-intro">
                <strong>Signal Registry</strong> is Sinyatek's enterprise platform for governing signal registration data with
                operational consistency, security, and full lifecycle control.
              </p>
              <p class="about-intro about-intro--secondary">
                It unifies portfolio-level visibility, analytics, and record-level interventions in one managed workspace,
                enabling faster decisions and stronger compliance posture across environments.
              </p>
              <div class="about-metrics">
                <div class="about-metric-item">
                  <strong>Centralized Control</strong>
                  <span>Single operational workspace across teams</span>
                </div>
                <div class="about-metric-item">
                  <strong>Governance by Design</strong>
                  <span>Traceable actions with policy-aligned workflows</span>
                </div>
                <div class="about-metric-item">
                  <strong>Enterprise Readiness</strong>
                  <span>Security-focused architecture for scale</span>
                </div>
              </div>
              <ul class="about-list">
                <li>
                  <i class="flaticon-tick" />
                  Executive command view with KPI monitoring, trend intelligence, and channel-level performance analytics
                </li>
                <li>
                  <i class="flaticon-tick" />
                  Enterprise-grade security architecture with role-based authorization and controlled session governance
                </li>
                <li>
                  <i class="flaticon-tick" />
                  End-to-end data lifecycle administration with structured editing, traceability, and environment governance
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

@media only screen and (max-width: 767px) {
  .about-content {
    padding: 24px 18px;
  }

  .about-metrics {
    grid-template-columns: 1fr;
    gap: 10px;
    margin: 16px 0 14px;
  }

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