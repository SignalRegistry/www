<script setup>
import { RouterLink } from 'vue-router'
import { getAssetImg } from '@/utils/getAssetImg'
</script>

<template>
  <section class="home-dark-product-hero" aria-labelledby="home-dark-product-heading">
    <div class="home-dark-product-hero__glow" aria-hidden="true" />

    <div class="container">
      <div class="row align-items-center gy-5 gx-lg-4">
        <div class="col-lg-5 order-lg-1 order-2">
          <span class="home-dark-product-hero__eyebrow-wrap">
            <span class="home-dark-product-hero__eyebrow">Product</span>
          </span>
          <h2 id="home-dark-product-heading" class="home-dark-product-hero__title">
            Operate your signal registry from one dashboard.
          </h2>
          <p class="home-dark-product-hero__subtitle">
            Centralize summaries, live charts, device views, and governed record edits in a single workspace—built for teams that need consistency and audit-friendly operations.
          </p>
          <RouterLink to="/pricing" class="home-dark-product-hero__cta">
            Request access
            <i class="fas fa-arrow-right home-dark-product-hero__cta-icon" aria-hidden="true" />
          </RouterLink>
        </div>

        <div class="col-lg-7 order-lg-2 order-1">
          <div class="home-dark-product-hero__browser" role="img" aria-label="Signal Registry dashboard preview">
            <div class="home-dark-product-hero__browser-chrome">
              <span class="home-dark-product-hero__dot" />
              <span class="home-dark-product-hero__dot" />
              <span class="home-dark-product-hero__dot" />
            </div>
            <div class="home-dark-product-hero__browser-body">
              <img
                :src="getAssetImg('home-dashboard-screenshot.png')"
                alt="Signal Registry dashboard showing summary cards, temperature chart, and status distribution"
                width="1200"
                height="750"
                loading="lazy"
                decoding="async"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Palette: main-banner-two + .default-btn (#00b0ee / #3e57d0) */
.home-dark-product-hero {
  position: relative;
  overflow: hidden;
  padding: 5.25rem 0 5.5rem;
  background: linear-gradient(to bottom, #370b6f, #00429b, #006dba, #0095ce, #2dbcdc);
  color: #f8fafc;
}

.home-dark-product-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.14) 0%, transparent 45%, rgba(0, 0, 0, 0.08) 100%);
}

.home-dark-product-hero > .container {
  position: relative;
  z-index: 1;
}

.home-dark-product-hero__glow {
  position: absolute;
  left: -8%;
  bottom: -35%;
  width: 58%;
  max-width: 620px;
  aspect-ratio: 1;
  background:
    radial-gradient(ellipse at 40% 60%, rgba(0, 176, 238, 0.22) 0%, transparent 55%),
    radial-gradient(ellipse at 70% 80%, rgba(62, 87, 208, 0.18) 0%, transparent 50%);
  pointer-events: none;
  filter: blur(1px);
  z-index: 0;
}

.home-dark-product-hero__eyebrow-wrap {
  display: inline-flex;
  margin-bottom: 1.25rem;
}

.home-dark-product-hero__eyebrow {
  display: inline-block;
  padding: 0.3125rem 0;
  padding-left: 0.875rem;
  border-left: 3px solid #00b0ee;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.92);
}

.home-dark-product-hero__title {
  margin: 0 0 1.125rem;
  font-size: clamp(1.6875rem, 3.2vw, 2.375rem);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: #ffffff;
  max-width: 22ch;
}

.home-dark-product-hero__subtitle {
  margin: 0 0 1.875rem;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.82);
  max-width: 34rem;
  font-weight: 400;
}

.home-dark-product-hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  min-height: 2.875rem;
  padding: 0.625rem 1.625rem;
  border-radius: 10px;
  background: #00b0ee;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ffffff;
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.01em;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.08),
    0 8px 24px rgba(0, 66, 155, 0.35);
  transition:
    background 0.36s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.36s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.36s cubic-bezier(0.22, 1, 0.36, 1),
    transform 100ms ease-out;
}

.home-dark-product-hero__cta:hover {
  background: #3e57d0;
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.08),
    0 12px 28px rgba(30, 27, 75, 0.4);
}

.home-dark-product-hero__cta:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 3px;
}

.home-dark-product-hero__cta:active {
  transform: scale(0.97);
}

.home-dark-product-hero__cta-icon {
  font-size: 0.75rem;
  opacity: 0.75;
}

.home-dark-product-hero__browser {
  border-radius: 12px;
  background: #0f172a;
  box-shadow:
    0 28px 56px -12px rgba(15, 13, 41, 0.55),
    0 0 0 1px rgba(0, 176, 238, 0.12),
    0 0 40px rgba(0, 176, 238, 0.08);
  overflow: hidden;
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.home-dark-product-hero__browser:hover {
  transform: translateY(-4px);
  box-shadow:
    0 32px 60px -12px rgba(15, 13, 41, 0.6),
    0 0 0 1px rgba(0, 176, 238, 0.16),
    0 0 48px rgba(0, 176, 238, 0.12);
}

.home-dark-product-hero__browser-chrome {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 11px 16px;
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
  border-bottom: 1px solid rgba(0, 176, 238, 0.1);
}

.home-dark-product-hero__dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
}

.home-dark-product-hero__dot:nth-child(1) {
  background: rgba(248, 113, 113, 0.85);
}

.home-dark-product-hero__dot:nth-child(2) {
  background: rgba(250, 204, 21, 0.85);
}

.home-dark-product-hero__dot:nth-child(3) {
  background: rgba(74, 222, 128, 0.85);
}

.home-dark-product-hero__browser-body {
  line-height: 0;
  background: #0f172a;
}

.home-dark-product-hero__browser-body img {
  width: 100%;
  height: auto;
  display: block;
  vertical-align: top;
}

@media (max-width: 991.98px) {
  .home-dark-product-hero {
    padding: 3.5rem 0 4rem;
  }

  .home-dark-product-hero__title {
    max-width: none;
  }

  .home-dark-product-hero__glow {
    left: -35%;
    bottom: -25%;
    opacity: 0.5;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-dark-product-hero__browser,
  .home-dark-product-hero__cta {
    transition:
      opacity 0.2s ease,
      background 0.2s ease,
      box-shadow 0.2s ease !important;
  }

  .home-dark-product-hero__browser:hover,
  .home-dark-product-hero__cta:active {
    transform: none !important;
  }
}
</style>
