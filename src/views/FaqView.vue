<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { getAssetImg } from '@/utils/getAssetImg'

const openIndex = ref(0)
// Reuse shared image resolver to keep asset references Vite-safe.
const faqHeroBg = getAssetImg('aboutUs.jpg')

const faqItems = [
  {
    title: 'What is Signal Registry?',
    content: "Signal Registry is Sinyatek's management panel for tracking and managing signal registration data. After signing in, you can view summary cards, trend and channel charts, a unit table, and edit individual records. Dashboard, profile, and record pages are protected and require a valid session.",
  },
  {
    title: 'What can I see on the dashboard?',
    content: "The dashboard shows summary cards, trend graphs, and channel graphs for a quick overview of signal registration data. The unit table lists all units and can be sorted and filtered. You can switch between data sources and rearrange the layout with drag-and-drop.",
  },
  {
    title: 'How is access and security handled?',
    content: "Access to the dashboard and record pages is controlled by sign-in. The application checks your session continuously; if the session is invalid or expires, you are redirected to the sign-in page. Keep your account details secure and contact us at iletisim@sinyatek.com if you notice any suspicious activity.",
  },
  {
    title: 'How can I get access or support?',
    content: "For access to Signal Registry, implementation details, or technical support, please contact us via the Contact page or at iletisim@sinyatek.com. We can also help with custom API or environment setup.",
  },
]

function toggleAccordion(index) {
  // Clicking an open item collapses it; otherwise switch to the selected item.
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<template>
  <div class="centered-logo-mobile">
    <SiteNavbar />

    <!-- Start Page Title Area -->
    <div
      class="page-title-area page-title-area--faq"
      :style="faqHeroBg ? { backgroundImage: `url(${faqHeroBg})` } : {}"
    >
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="faq-hero-content">
              <span class="faq-hero-eyebrow">FAQ Support Hub</span>
              <h1>Find clear answers before you move to action</h1>
              <p>
                Browse the most common questions about access, security, operations, and setup.
                If you need tailored guidance, our team is ready to help.
              </p>
              <div class="faq-hero-actions">
                <RouterLink to="/contact" class="default-btn-one">
                  Contact Team
                  <span />
                </RouterLink>
                <span class="faq-hero-note">Fast support flow. Practical, implementation-ready answers.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Faq Section -->
    <section class="faq-section ptb-100">
      <div class="container">
        <div class="section-title">
          <span>FAQ</span>
          <h3>Frequently Asked Questions</h3>
        </div>

        <div class="faq-accordion">
          <ul class="accordion">
            <li
              v-for="(item, index) in faqItems"
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
          <span class="faq-contact-cta__eyebrow">Support Desk</span>
          <h3>Do You Have Any Questions</h3>
          <p>Get direct support for onboarding, environment setup, and secure access workflows from our product team.</p>
          <div class="faq-contact-cta__signals">
            <div class="faq-contact-cta__signal">
              <strong>Guided Onboarding</strong>
              <span>Structured help for first-time setup and activation</span>
            </div>
            <div class="faq-contact-cta__signal">
              <strong>Technical Assistance</strong>
              <span>Fast guidance for integration and configuration topics</span>
            </div>
            <div class="faq-contact-cta__signal">
              <strong>Operational Support</strong>
              <span>Best practices for secure and reliable team usage</span>
            </div>
          </div>
          <div class="faq-contact-cta__actions">
            <RouterLink to="/contact" class="default-btn-one">
              Contact Support Team
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
  background-color: #000;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.page-title-area--faq::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(16, 18, 37, 0.62);
  z-index: 0;
}

.faq-hero-content {
  position: relative;
  z-index: 1;
  max-width: 760px;
  color: #ffffff;
  padding: 36px 0 28px;
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
  .faq-contact-cta__signals {
    grid-template-columns: 1fr;
  }
}

@media only screen and (max-width: 767px) {
  .faq-hero-content {
    padding: 24px 0 12px;
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