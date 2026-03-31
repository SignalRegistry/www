<script setup>
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import IndustryInspiredSection from '@/components/IndustryInspiredSection.vue'
import { getAssetImg } from '@/utils/getAssetImg'

</script>

<template>
  <div>
    <SiteNavbar />

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

    <!-- Start Home Features Section -->
    <section class="home-feature-grid-section pt-100 pb-70">
      <div class="container">
        <div class="section-title">
          <span>Core Benefits</span>
          <h3>Built for fast and clear operations</h3>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="home-feature-card">
              <div class="home-feature-icon">
                <i class="far fa-object-group" />
              </div>
              <h3>Best practices baked in</h3>
              <p>Signal Registry keeps reusable, modular structures in place so your team can manage records faster and with fewer repeated steps.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="home-feature-card">
              <div class="home-feature-icon">
                <i class="fas fa-bolt" />
              </div>
              <h3>Insane speed</h3>
              <p>Move through tables, filters, and charts quickly to review records and make updates without slowing down your workflow.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="home-feature-card">
              <div class="home-feature-icon">
                <i class="far fa-clock" />
              </div>
              <h3>Privacy-preserving</h3>
              <p>Your data flow remains controlled and purpose-based, helping you process signal records with privacy and operational confidence.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="home-feature-card">
              <div class="home-feature-icon">
                <i class="far fa-comment-alt" />
              </div>
              <h3>Multi-agentic</h3>
              <p>Structure tasks into clear, modular operations so teams can collaborate and manage complex updates in a predictable way.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="home-feature-card">
              <div class="home-feature-icon">
                <i class="far fa-life-ring" />
              </div>
              <h3>Keeps you in the loop</h3>
              <p>Track each action with clear status and progress context so approvals and follow-ups happen without losing visibility.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="home-feature-card">
              <div class="home-feature-icon">
                <i class="far fa-user" />
              </div>
              <h3>Efficient for common operations</h3>
              <p>Handle repetitive management tasks in fewer clicks and keep routine updates consistent across your signal registry.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Start Registry Flow Section -->
    <section class="registry-flow-section pt-100 pb-70">
      <div class="container">
        <div class="section-title">
          <span>Signal Workflow</span>
          <h3>Move from collection to action with a clear operational flow</h3>
        </div>
        <div class="registry-flow-grid">
          <div class="registry-flow-card">
            <span class="flow-step">01</span>
            <h3>Collect</h3>
            <p>Bring incoming signal records into one source of truth to reduce manual handoffs.</p>
          </div>
          <div class="registry-flow-card">
            <span class="flow-step">02</span>
            <h3>Validate</h3>
            <p>Apply required checks and field-level controls before records become operational.</p>
          </div>
          <div class="registry-flow-card">
            <span class="flow-step">03</span>
            <h3>Transform</h3>
            <p>Convert raw entries into standardized, reusable formats for teams and dashboards.</p>
          </div>
          <div class="registry-flow-card">
            <span class="flow-step">04</span>
            <h3>Monitor</h3>
            <p>Track trend and channel behavior continuously so issues are visible early.</p>
          </div>
          <div class="registry-flow-card">
            <span class="flow-step">05</span>
            <h3>Act</h3>
            <p>Approve updates and publish trusted records with full visibility of change status.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Start Platform Lens Section -->
    <section class="platform-lens-section pb-100">
      <div class="container">
        <div class="row g-4 align-items-stretch">
          <div class="col-lg-7">
            <div class="platform-lens-card">
              <span class="platform-eyebrow">Designed for modern teams</span>
              <h3>Engineering discipline for registry operations</h3>
              <p>
                Signal Registry applies transformation-ready thinking to daily operations:
                modular structure, consistent checks, and transparent delivery across teams.
              </p>
              <ul class="platform-lens-list">
                <li><i class="fas fa-check-circle" /> Reusable model-like structure for repeated tasks</li>
                <li><i class="fas fa-check-circle" /> Step-based execution logic inspired by workflow orchestration</li>
                <li><i class="fas fa-check-circle" /> Team-friendly process visibility for reviews and approvals</li>
              </ul>
              <RouterLink class="default-btn-one" to="/projects">
                Explore Use Cases
                <span />
              </RouterLink>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="platform-integrations-card">
              <span class="platform-eyebrow">Works with your stack</span>
              <h3>Common integration landscape</h3>
              <div class="integration-chip-wrap">
                <span class="integration-chip">Data Warehouse</span>
                <span class="integration-chip">API Gateway</span>
                <span class="integration-chip">Analytics Layer</span>
                <span class="integration-chip">Event Streams</span>
                <span class="integration-chip">Quality Controls</span>
                <span class="integration-chip">Monitoring Tools</span>
              </div>
              <RouterLink to="/contact" class="default-btn">
                Talk to Us
                <span />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <IndustryInspiredSection />

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
                <li><RouterLink to="/blog">Blog</RouterLink></li>
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