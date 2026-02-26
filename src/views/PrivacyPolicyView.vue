<script setup>
import { RouterLink } from 'vue-router'
import { getAssetImg } from '@/utils/getAssetImg'
</script>

<template>
  <div>
    <!-- Navbar -->
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
            <RouterLink class="navbar-brand" to="/">
              <img :src="getAssetImg('logo.png')" class="white-logo" alt="logo">
              <img :src="getAssetImg('logo-black.png')" class="black-logo" alt="logo">
            </RouterLink>
            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item"><RouterLink to="/about" class="nav-link">About Us</RouterLink></li>
                <li class="nav-item"><RouterLink to="/projects" class="nav-link">Projects</RouterLink></li>
                <li class="nav-item"><RouterLink to="/api" class="nav-link">API</RouterLink></li>
                <li class="nav-item"><RouterLink to="/contact" class="nav-link">Contact</RouterLink></li>
                <li class="nav-item"><RouterLink to="/faq" class="nav-link">FAQ</RouterLink></li>
              </ul>
              <div class="other-option">
                <RouterLink class="default-btn" to="/pricing">Free Quote <span /></RouterLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <!-- Page Title -->
    <div class="page-title-area item-bg1">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="page-title-content">
              <h2>Privacy Policy</h2>
              <ul>
                <li><RouterLink to="/">Home</RouterLink></li>
                <li>Privacy Policy</li>
              </ul>
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

    <!-- Footer -->
    <section class="footer-section ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>About Us</h3></div>
              <p>Sinyatek, Signal Registry ile sinyal kayıt verilerini takip ve yönetmek için kullanılan yönetim paneli uygulamasını sunar.</p>
              <ul class="footer-social">
                <li><a href="https://www.facebook.com/login/" target="_blank" rel="noopener"><i class="fab fa-facebook-f" /></a></li>
                <li><a href="https://twitter.com/login" target="_blank" rel="noopener"><i class="fab fa-twitter" /></a></li>
                <li><a href="https://www.linkedin.com/company/si%CC%87nyatek/posts/?feedView=all" target="_blank" rel="noopener"><i class="fab fa-linkedin" /></a></li>
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
  </div>
</template>
