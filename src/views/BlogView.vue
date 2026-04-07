<script setup>
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { getAssetImg } from '@/utils/getAssetImg'

const blogHeroBg = getAssetImg('aboutUs.jpg')

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

    <div
      class="page-title-area page-title-area--blog"
      :style="blogHeroBg ? { backgroundImage: `url(${blogHeroBg})` } : {}"
    >
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="blog-hero-content">
              <span class="blog-hero-eyebrow">Blog & Insights</span>
              <h1>Explore practical knowledge for secure signal operations</h1>
              <p>
                Discover implementation notes, workflow best practices, and platform guidance designed to help teams
                scale Signal Registry with confidence.
              </p>
              <div class="blog-hero-actions">
                <RouterLink to="/contact" class="default-btn-one">
                  Contact Team
                  <span />
                </RouterLink>
                <span class="blog-hero-note">Actionable content. Built for operational teams.</span>
              </div>
            </div>
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

    <SiteFooter />
  </div>
</template>

<style scoped>
.page-title-area--blog {
  background-color: #000;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.page-title-area--blog::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(16, 18, 37, 0.62);
  z-index: 0;
}

.blog-hero-content {
  position: relative;
  z-index: 1;
  max-width: 760px;
  color: #ffffff;
  padding: 36px 0 28px;
}

.blog-hero-eyebrow {
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

.blog-hero-content h1 {
  margin-bottom: 14px;
  color: #ffffff;
  font-size: 44px;
  line-height: 1.2;
}

.blog-hero-content p {
  margin-bottom: 22px;
  max-width: 690px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 17px;
  line-height: 1.7;
}

.blog-hero-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.blog-hero-note {
  color: rgba(255, 255, 255, 0.88);
  font-size: 14px;
  font-weight: 500;
}

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

@media only screen and (max-width: 767px) {
  .blog-hero-content {
    padding: 24px 0 12px;
  }

  .blog-hero-content h1 {
    font-size: 30px;
  }

  .blog-hero-content p {
    font-size: 15px;
    line-height: 1.65;
  }
}
</style>
