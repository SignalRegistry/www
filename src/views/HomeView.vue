<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { getAssetImg } from '@/utils/getAssetImg'
const email = ref('')

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
                  <RouterLink to="/about" class="nav-link">About Us</RouterLink>
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

    <!-- Start Main Banner Two Area -->
    <div class="main-banner-two">
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
      <div class="creative-shape">
        <img :src="getAssetImg('main-banner-shape/home-shape-2.png')" alt="main-image">
      </div>
      <div class="shape-dot">
        <img :src="getAssetImg('main-banner-shape/dot.png')" alt="image">
      </div>
    </div>

    <!-- Start About Section -->
    <section class="about-section pb-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="about-image">
              <img :src="getAssetImg('about.png')" alt="image">
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-content">
              <span>Why Signal Registry</span>
              <h3>Track signal records in a single interface</h3>
              <p>Signal Registry is Sinyatek's signal registration tracking and management panel. Summary cards, trend and channel charts, unit table, and record editing on one screen—secure access with login and session control.</p>
              <ul class="about-list">
                <li><i class="flaticon-tick" />Summary cards, trend and channel charts</li>
                <li><i class="flaticon-tick" />Draggable, customizable views</li>
                <li><i class="flaticon-tick" />Unit table and record editor (connections/nodes)</li>
                <li><i class="flaticon-tick" />Environment selection (localhost, staging, production)</li>
              </ul>
              <div class="about-btn">
                <RouterLink class="default-btn" to="/about">
                  Read More
                  <span />
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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

    <!-- Start Subscribe Area -->
    <section class="subscribe-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <div class="subscribe-content">
              <h2>Sign Up For Newsletter</h2>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
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
    </section>

    <!-- Start Footer Section -->
    <section class="footer-section ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>About Us</h3></div>
              <p>Sinyatek provides the Signal Registry management panel application for tracking and managing signal registration data.</p>
              <ul class="footer-social">
                <li><a href="https://www.facebook.com/login/" target="_blank"><i class="fab fa-facebook-f" /></a></li>
                <li><a href="https://twitter.com/login" target="_blank"><i class="fab fa-twitter" /></a></li>
                <li><a href="https://www.linkedin.com/company/si%CC%87nyatek/posts/?feedView=all" target="_blank"><i class="fab fa-linkedin" /></a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>Important Links</h3></div>
              <ul class="footer-quick-links">
                <li><RouterLink to="/about">About Us</RouterLink></li>
                <li><RouterLink to="/projects">Project</RouterLink></li>
                                <li><RouterLink to="/contact">Contact</RouterLink></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>Featured Service</h3></div>
              <ul class="footer-quick-links">
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/contact">Contact</RouterLink></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>Contact</h3></div>
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
            <p>© 2026 Signal Registry by Sinyatek. All rights reserved.</p>
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
