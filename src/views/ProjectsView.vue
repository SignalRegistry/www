<script setup>
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import PageDesignSection from '@/components/PageDesignSection.vue'
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

    <PageDesignSection
      eyebrow="Project Lens"
      title="Workflow-centric presentation for project capabilities"
      description="This section reinforces project delivery logic with modular capability framing and integration-aware design cues."
      :chips="['Flow Mapping', 'Capability Matrix', 'Integration Ready', 'Operational UI']"
    />

    <SiteFooter />
  </div>
</template>

<style scoped>
.page-title-area--projects {
  background-color: #000;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.page-title-area--projects::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 0;
}
</style>