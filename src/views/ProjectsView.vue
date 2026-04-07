<script setup>
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { getAssetImg } from '@/utils/getAssetImg'

const projectsHeroBg = getAssetImg('projects_image.jpg')
</script>

<template>
  <div class="centered-logo-mobile">
    <SiteNavbar />

    <!-- Page Title -->
    <div
      class="page-title-area page-title-area--projects"
      :style="projectsHeroBg ? { backgroundImage: `url(${projectsHeroBg})` } : {}"
    >
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="projects-hero-content">
              <span class="projects-hero-eyebrow">Signal Registry Project</span>
              <h1>Built for operational projects that require accuracy and control</h1>
              <p>
                Signal Registry delivers end-to-end visibility for signal records, from executive-level monitoring to
                record-level interventions in one secure and structured environment.
              </p>
              <div class="projects-hero-actions">
                <RouterLink to="/contact" class="default-btn-one">
                  Request Project Demo
                  <span />
                </RouterLink>
                <span class="projects-hero-note">Implementation-ready workflows. Enterprise support model.</span>
              </div>
            </div>
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

    <SiteFooter />
  </div>
</template>

<style scoped>
.page-title-area--projects {
  background-color: #000;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.page-title-area--projects::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(16, 18, 37, 0.62);
  z-index: 0;
}

.projects-hero-content {
  position: relative;
  z-index: 1;
  max-width: 760px;
  color: #ffffff;
  padding: 36px 0 28px;
}

.projects-hero-eyebrow {
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

.projects-hero-content h1 {
  margin-bottom: 14px;
  color: #ffffff;
  font-size: 44px;
  line-height: 1.2;
}

.projects-hero-content p {
  margin-bottom: 22px;
  max-width: 690px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 17px;
  line-height: 1.7;
}

.projects-hero-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.projects-hero-note {
  color: rgba(255, 255, 255, 0.88);
  font-size: 14px;
  font-weight: 500;
}

@media only screen and (max-width: 767px) {
  .projects-hero-content {
    padding: 24px 0 12px;
  }

  .projects-hero-content h1 {
    font-size: 30px;
  }

  .projects-hero-content p {
    font-size: 15px;
    line-height: 1.65;
  }
}
</style>