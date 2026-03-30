<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
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
            <div class="page-title-content page-title-content--about" />
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

    <!-- Start Footer Section -->
    <section class="footer-section ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>Developers</h3></div>
              <ul class="footer-quick-links">
                <li><a href="https://github.com/SignalRegistry" target="_blank" rel="noopener">GitHub</a></li>
                
                <li><RouterLink to="/api">API</RouterLink></li>
                
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>Resources</h3></div>
              <ul class="footer-quick-links">
                <li><a href="#">Blog</a></li>
                <li><a href="#">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>Stay in Touch</h3></div>
              <ul class="footer-quick-links">
                <li><a href="mailto:iletisim@sinyatek.com">Email</a></li>
                <li><a href="https://www.linkedin.com/company/si%CC%87nyatek/posts/?feedView=all" target="_blank" rel="noopener">LinkedIn</a></li>
                <li><RouterLink to="/contact">Contact Us</RouterLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="lines">
        <div class="line" />
        <div class="line" />
        <div class="line" />
      </div>
      <div class="partner-shape-img1">
        <img :src="getAssetImg('shape/partnar-shape-2.png')" alt="image">
      </div>
    </section>

    <!-- Start Copy Right Section -->
    <div class="copyright-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <p>Copyright © 2026 Sinyatek. All Rights Reserved</p>
          </div>
          <div class="col-lg-6 col-md-6">
            <ul>
              <li><RouterLink to="/privacy-policy">Privacy Policy</RouterLink></li>
              <li><RouterLink to="/terms-condition">Terms & Conditions</RouterLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Go Top Section -->
  </div>
</template>

<style scoped>
/* About page hero: new design, navbar unchanged */
.page-title-area--about {
  background-color: #000;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 120px 0 80px;
}
.page-title-area--about::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 0;
}
.page-title-content--about {
  margin-top: 0;
}
.page-title-content--about h2 {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}
.page-title-content--about ul li {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
}
.page-title-content--about ul li a {
  color: rgba(255, 255, 255, 0.9);
  transition: color 0.2s ease;
}
.page-title-content--about ul li a:hover {
  color: #007bff;
}
</style>