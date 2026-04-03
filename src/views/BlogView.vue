<script setup>
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
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

    <SiteFooter />
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
