<script setup>
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import { getAssetImg } from '@/utils/getAssetImg'

const posts = [
  {
    title: 'How to standardize signal records across teams',
    excerpt:
      'A practical guide to building modular registration structures, reducing manual edits, and improving data consistency.',
    tag: 'Operations',
  },
  {
    title: 'From monitoring to action: designing reliable workflows',
    excerpt:
      'Learn how step-based review and approval flows help teams detect issues earlier and move faster with confidence.',
    tag: 'Workflow',
  },
  {
    title: 'Environment strategy for secure deployments',
    excerpt:
      'Best practices for managing localhost, staging, and production while keeping access and change control predictable.',
    tag: 'Security',
  },
]
</script>

<template>
  <div>
    <SiteNavbar />

    <div class="page-title-area item-bg1">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="page-title-content" />
          </div>
        </div>
      </div>
    </div>

    <section class="blog-modern-section pt-100 pb-70">
      <div class="container">
        <div class="section-title">
          <span>Insights</span>
          <h3>Latest articles from Signal Registry</h3>
        </div>
        <div class="row g-4">
          <div v-for="post in posts" :key="post.title" class="col-lg-4 col-md-6">
            <article class="blog-modern-card">
              <span class="blog-modern-tag">{{ post.tag }}</span>
              <h3>{{ post.title }}</h3>
              <p>{{ post.excerpt }}</p>
              <RouterLink to="/contact" class="blog-modern-link">
                Read more
                <i class="fas fa-arrow-right" />
              </RouterLink>
            </article>
          </div>
        </div>
      </div>
    </section>

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
  </div>
</template>

<style scoped>
.blog-modern-card {
  height: 100%;
  border: 1px solid #dbe7ff;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 10px 28px rgba(46, 63, 110, 0.1);
  padding: 24px 20px;
}

.blog-modern-tag {
  display: inline-block;
  margin-bottom: 10px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: #00b0ee;
}

.blog-modern-card h3 {
  font-size: 23px;
  margin-bottom: 10px;
}

.blog-modern-card p {
  color: #6f7a9c;
  margin-bottom: 16px;
}

.blog-modern-link {
  color: #00b0ee;
  font-weight: 700;
}

.blog-modern-link i {
  margin-left: 6px;
}

:global(.theme-dark) .blog-modern-card {
  background: #000000;
  border-color: #242435;
  box-shadow: none;
}

:global(.theme-dark) .blog-modern-card h3,
:global(.theme-dark) .blog-modern-card p,
:global(.theme-dark) .blog-modern-link {
  color: #ffffff;
}
</style>
