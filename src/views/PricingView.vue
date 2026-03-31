<script setup>
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import PageDesignSection from '@/components/PageDesignSection.vue'
import { getAssetImg } from '@/utils/getAssetImg'

const plans = [
  {
    name: 'Free',
    desc: 'Ideal for getting started with tracking signal records in MyDashboard.',
    priceText: '$0',
    priceSuffix: '/month/user',
    action: 'Get Started Free',
    features: [
      '1 User',
      'Dashboard summary view',
      'Basic filtering and record listing',
      'Basic support via email',
    ],
  },
  {
    name: 'Team',
    desc: 'For teams managing Signal Registry operations collaboratively.',
    priceText: '$29',
    priceSuffix: '/month/user',
    action: 'Start Free Trial',
    featured: true,
    features: [
      'Team access for up to 5 users',
      'Advanced filters and reporting views',
      'Record update and monitoring workflows',
      'Priority technical support',
    ],
  },
  {
    name: 'Enterprise',
    desc: 'Custom solution for high-volume record management and enterprise needs.',
    priceText: 'Custom',
    priceSuffix: 'Pricing',
    action: 'Contact Sales',
    features: [
      'Unlimited users and role management',
      'Enterprise security and access policies',
      'Custom integrations and API planning',
      'SLA and dedicated customer success support',
    ],
  },
]
</script>

<template>
  <div>
    <SiteNavbar />

    <!-- Page Title Area (text removed) -->
    <div class="page-title-area item-bg2">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container" />
        </div>
      </div>
    </div>

    <!-- Pricing Area -->
    <section class="pricing-area pricing-area-modern pt-100 pb-70">
      <div class="container">
        <div class="row">
          <div
            v-for="(plan, i) in plans"
            :key="i"
            class="col-lg-4 col-md-6"
            :class="{ 'offset-lg-0 offset-md-3': i === 2 }"
          >
            <div class="single-pricing-box modern-pricing-card" :class="{ featured: plan.featured }">
              <div class="pricing-header">
                <h3>{{ plan.name }}</h3>
                <p>{{ plan.desc }}</p>
              </div>
              <div class="price">
                {{ plan.priceText }}<span>{{ plan.priceSuffix }}</span>
              </div>
              <div class="price-btn">
                <a href="#" class="price-btn-one">{{ plan.action }} <i class="fas fa-chevron-right" /></a>
              </div>
              <ul class="pricing-features">
                <li v-for="(feature, j) in plan.features" :key="j">
                  <i class="fas fa-check" /> {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Subscribe Section -->
    <section class="subscribe-Section pb-100">
      <div class="container">
        <div class="subscribe-content-area pricing-subscribe-panel mb-0">
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
      eyebrow="Pricing Experience"
      title="Clear plan framing with scalable team journey"
      description="The pricing flow is supported by a design layer focused on fast comparison, confidence, and enterprise readiness."
      :chips="['Plan Clarity', 'Fast Comparison', 'Team Scaling', 'Enterprise Path']"
    />

    <!-- Footer -->
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

    <div class="copyright-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <p>© 2026 Signal Registry by Sinyatek. All rights reserved.</p>
            <div class="single-footer-widget">
              <ul class="footer-social copyright-social">
                <li>
                  <a href="https://www.facebook.com/login/" target="_blank" rel="noopener">
                    <i class="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/login" target="_blank" rel="noopener">
                    <i class="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/si%CC%87nyatek/posts/?feedView=all" target="_blank" rel="noopener">
                    <i class="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
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