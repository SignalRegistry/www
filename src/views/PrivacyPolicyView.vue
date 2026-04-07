<script setup>
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { getAssetImg } from '@/utils/getAssetImg'

const privacyHeroBg = getAssetImg('aboutUs.jpg')
</script>

<template>
  <div>
    <SiteNavbar />

    <!-- Page Title -->
    <div
      class="page-title-area page-title-area--privacy"
      :style="privacyHeroBg ? { backgroundImage: `url(${privacyHeroBg})` } : {}"
    >
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="privacy-hero-content">
              <span class="privacy-hero-eyebrow">Privacy & Data Protection</span>
              <h1>Privacy policy built for transparent and secure operations</h1>
              <p>
                Learn how Signal Registry collects, processes, and protects personal data across platform access,
                support interactions, and operational workflows.
              </p>
              <div class="privacy-hero-actions">
                <RouterLink to="/contact" class="default-btn-one">
                  Contact Team
                  <span />
                </RouterLink>
                <span class="privacy-hero-note">Compliance-focused policies. Practical accountability.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Privacy Policy Content -->
    <section class="privacy-policy ptb-100">
      <div class="container">
        <div class="single-privacy">
          <h3 class="mt-0">Privacy Policy — Sinyatek / Signal Registry</h3>
          <p>
            <strong>Sinyatek</strong> provides the <strong>Signal Registry</strong> management panel at
            <strong>dash.signalregistry.net</strong>. Signal Registry is a management panel application for tracking and managing
            signal registration data. This page describes how we collect, use, and protect your personal data when you browse our site, sign in and use Signal Registry, subscribe to our newsletter, or contact us via the contact form or email.
          </p>
          <p>
            Data we process: your login and account information, dashboard usage data (sessions, operations, summary cards, trend and
            channel charts, unit tables, and logs related to record editing), and technical data.
            We use this data to run the platform, improve reliability and performance, provide support, and inform you about product updates.
          </p>

          <h3>Use and sharing of data</h3>
          <p>
            Personal data is processed only for legitimate purposes: account creation and management, providing and improving
            Signal Registry services, platform security (including login and session control), and responding to support requests. We do not sell your personal data.
            We may share your data only with carefully selected service providers (e.g. hosting, email, analytics) who are bound by privacy and data protection obligations.
          </p>
          <p>
            Data is stored in secure environments and retained only for as long as necessary for the above purposes or legal requirements.
            Access is limited to team members who need it to perform their work. Where possible, we aggregate or anonymize data.
            You may contact us at <a href="mailto:iletisim@sinyatek.com">iletisim@sinyatek.com</a> regarding sub-processors or where your data is stored.
          </p>

          <h3>Your rights and contact</h3>
          <p>
            Under applicable legislation (e.g. GDPR or KVKK), you may have rights to access, correct, delete, or restrict processing of your personal data, as well as data portability and the right to object to certain uses. To exercise these rights or ask questions about this policy, you can email us at <a href="mailto:iletisim@sinyatek.com">iletisim@sinyatek.com</a>.
          </p>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, or security practices. For material changes, we will update the "last updated" date on this page and, where appropriate, inform you via the dashboard or email. Your continued use of the services after changes take effect means you accept the updated policy.
          </p>
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<style scoped>
.page-title-area--privacy {
  background-color: #000;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.page-title-area--privacy::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(16, 18, 37, 0.62);
  z-index: 0;
}

.privacy-hero-content {
  position: relative;
  z-index: 1;
  max-width: 760px;
  color: #ffffff;
  padding: 36px 0 28px;
}

.privacy-hero-eyebrow {
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

.privacy-hero-content h1 {
  margin-bottom: 14px;
  color: #ffffff;
  font-size: 44px;
  line-height: 1.2;
}

.privacy-hero-content p {
  margin-bottom: 22px;
  max-width: 690px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 17px;
  line-height: 1.7;
}

.privacy-hero-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.privacy-hero-note {
  color: rgba(255, 255, 255, 0.88);
  font-size: 14px;
  font-weight: 500;
}

@media only screen and (max-width: 767px) {
  .privacy-hero-content {
    padding: 24px 0 12px;
  }

  .privacy-hero-content h1 {
    font-size: 30px;
  }

  .privacy-hero-content p {
    font-size: 15px;
    line-height: 1.65;
  }
}
</style>