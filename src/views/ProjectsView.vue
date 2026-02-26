<script setup>
import { RouterLink } from 'vue-router'
import { getAssetImg } from '@/utils/getAssetImg'

const projectsHeroBg = getAssetImg('project/project-hero-dashboard.png')
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
            <RouterLink class="navbar-brand logo-text" to="/"><i class="fas fa-bolt" /> Signal Registry</RouterLink>
            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item"><RouterLink to="/about" class="nav-link">About Us</RouterLink></li>
                <li class="nav-item"><RouterLink to="/projects" class="nav-link active">Projects</RouterLink></li>
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
    <div
      class="page-title-area page-title-area--projects"
      :style="projectsHeroBg ? { backgroundImage: `url(${projectsHeroBg})` } : {}"
    >
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="page-title-content" />
          </div>
        </div>
      </div>
    </div>

    <!-- Intro Section -->
    <section class="project-section pt-100 pb-70">
      <div class="container">
        <div class="section-title">
          <span>Signal Registry</span>
          <h3>About This Project</h3>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <p class="text-center mb-4">
              Signal Registry is Sinyatek's management panel (dashboard) for tracking and managing signal registration data. Users sign in to view a summary of signal records, explore trend and channel data with charts, list units in a table, and edit individual records. Both status overview and detailed editing are available in a single interface.
            </p>
            <p class="text-center">
              Access to the dashboard, profile, and record pages is protected: the session is checked continuously, and if it becomes invalid, the user is redirected to the sign-in page. The main screen includes summary cards, trend charts, channel charts, and a unit table. Views can be rearranged with drag-and-drop, and you can switch between different data sources (e.g. central depot or field cabinet). For more detail or to get access, contact us.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features / How It Works -->
    <section class="productive-section ptb-100 bg-f9f9f9">
      <div class="container">
        <div class="section-title">
          <span>Capabilities</span>
          <h3>What Signal Registry Offers</h3>
        </div>
        <div class="row">
          <div class="col-lg-6 mb-4">
            <h4 class="mb-3">Dashboard & overview</h4>
            <p>After signing in, you see summary cards, trend graphs, and channel graphs that give you a quick picture of signal registration data. The unit table lists all units and can be sorted and filtered. All main views are draggable so you can arrange the layout to your preference. You can also switch between data sources (e.g. central depot vs. field cabinet) from the same screen.</p>
          </div>
          <div class="col-lg-6 mb-4">
            <h4 class="mb-3">Record editor & connections</h4>
            <p>When you open a specific record, an editor opens where connections and relationships are shown as nodes and lines. You can edit records using drag-and-drop, and changes can be reflected in real time over the connection (e.g. WebSocket). This makes it easy to adjust links between units and keep data consistent.</p>
          </div>
          <div class="col-lg-6 mb-4">
            <h4 class="mb-3">Security & access</h4>
            <p>Dashboard, profile, and record pages are only available after sign-in. The application checks the session continuously; if the session is invalid or expires, you are redirected to the sign-in page. This keeps access secure and ensures that only authorized users work with the data.</p>
          </div>
          <div class="col-lg-6 mb-4">
            <h4 class="mb-3">Environment & API</h4>
            <p>The backend server is chosen automatically based on the environment (e.g. localhost, staging, or production). When needed, you can set a custom API address from the sign-in screen or via the browser address bar, so you can point the panel to the right server for development or testing.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Productive Section -->
    <section class="productive-section ptb-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="productive-content">
              <span>Get Started</span>
              <h3>Manage your signal records with Signal Registry</h3>
              <p>Signal Registry is Sinyatek's management panel for tracking and managing signal registration data. View summaries, trend and channel charts, unit table, and edit records in one place. Contact us for access.</p>
              <div class="productive-btn">
                <RouterLink class="productive-btn" to="/pricing">Get Started Project <span /></RouterLink>
                <RouterLink to="/contact" class="productive-btn-one">Contact With Us <span /></RouterLink>
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

    <!-- Subscribe Section -->
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
                <p>Stay informed about Signal Registry updates and new features. Subscribe to our newsletter.</p>
              </div>
              <form class="newsletter-form" @submit.prevent>
                <input type="email" class="input-newsletter" placeholder="Enter your email" name="EMAIL" required autocomplete="off">
                <button type="submit">Subscribe Now</button>
                <div id="validator-newsletter" class="form-result" />
              </form>
            </div>
          </div>
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

<style scoped>
.page-title-area--projects {
  background-color: #000;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 24px 0 24px 24px;
  overflow: hidden;
}
.page-title-area--projects::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 0;
  border-radius: inherit;
}
</style>
