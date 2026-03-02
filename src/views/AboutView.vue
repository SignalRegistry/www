<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { getAssetImg } from '@/utils/getAssetImg'

const email = ref('')
const heroBg = getAssetImg('aboutUs.jpg')
</script>

<template>
  <div>
    <!-- Start Navbar Area -->
    <div class="navbar-area">
      <div class="plamb-responsive-nav">
        <div class="container">
          <div class="plamb-responsive-menu">
            <div class="logo">
              <RouterLink class="navbar-brand logo-text" to="/"><i class="fas fa-bolt" /> Signal Registry</RouterLink>
            </div>
          </div>
        </div>
      </div>

      <div class="plamb-nav">
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-light">
            <RouterLink class="navbar-brand logo-text" to="/"><i class="fas fa-bolt" /> Signal Registry</RouterLink>
            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <RouterLink to="/about" class="nav-link active">About Us</RouterLink>
                </li>
                <li class="nav-item"><RouterLink to="/projects" class="nav-link">Projects</RouterLink></li>
                <li class="nav-item"><RouterLink to="/api" class="nav-link">API</RouterLink></li>
                <li class="nav-item">
                  <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="/faq" class="nav-link">FAQ</RouterLink>
                </li>
              </ul>
              <div class="other-option">
                <RouterLink class="default-btn" to="/pricing">
                  Free Quote
                  <span />
                </RouterLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <!-- Start Page Title Area (custom design for About - navbar unchanged) -->
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
              <div class="footer-heading">
                <h3>About Us</h3>
              </div>
              <p>Signal Registry by Sinyatek is a management panel application for tracking and managing signal registration data.</p>
              <ul class="footer-social">
                <li>
                  <a href="https://www.facebook.com/login/" target="_blank">
                    <i class="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/login" target="_blank">
                    <i class="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/si%CC%87nyatek/posts/?feedView=all" target="_blank">
                    <i class="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading">
                <h3>Important Links</h3>
              </div>
              <ul class="footer-quick-links">
                <li><a href="about.html">About Us</a></li>
                <li><RouterLink to="/projects">Project</RouterLink></li>
                                <li><RouterLink to="/contact">Contact</RouterLink></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading">
                <h3>Featured Service</h3>
              </div>
              <ul class="footer-quick-links">
                <li><a href="index.html">Home</a></li>
                <li><RouterLink to="/contact">Contact</RouterLink></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading">
                <h3>Contact</h3>
              </div>
              <div class="footer-info-contact">
                <i class="flaticon-call-answer" />
                <h3>Phone</h3>
                <span><a href="tel:+882-569-756">+123(456)123</a></span>
              </div>
              <div class="footer-info-contact">
                <i class="flaticon-envelope" />
                <h3>Email</h3>
                <span><a href="mailto:iletisim@sinyatek.com">iletisim@sinyatek.com</a></span>
              </div>
              <div class="footer-info-contact">
                <i class="flaticon-maps-and-flags" />
                <h3>Address</h3>
                <span>Barış Koşu Yolu Caddesi, Gebze, Kocaeli - Kocaeli/Gebze</span>
              </div>
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
            <p>
              © 2026 Signal Registry by Sinyatek. All rights reserved.
            </p>
          </div>
          <div class="col-lg-6 col-md-6">
            <ul>
              <li><RouterLink to="/terms-condition">Terms & Conditions</RouterLink></li>
              <li><RouterLink to="/privacy-policy">Privacy Policy</RouterLink></li>
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
