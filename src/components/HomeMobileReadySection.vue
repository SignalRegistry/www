<script setup>
import { RouterLink } from 'vue-router'
import { getAssetImg } from '@/utils/getAssetImg'
</script>

<template>
  <section class="home-mobile-ready" aria-labelledby="home-mobile-ready-heading">
    <div class="container">
      <div class="row align-items-center gy-5 gx-lg-5">
        <div class="col-lg-6 order-lg-1 order-2">
          <span class="home-mobile-ready__eyebrow-wrap">
            <span class="home-mobile-ready__eyebrow">Mobile Ready</span>
          </span>
          <h2 id="home-mobile-ready-heading" class="home-mobile-ready__title">
            Monitor signals on the go—same clarity, smaller screen.
          </h2>
          <p class="home-mobile-ready__subtitle">
            Charts, monitors, and record actions stay readable and touch-friendly on mobile,
            so your team can review live data without switching to a desktop.
          </p>

          <ul class="home-mobile-ready__list" role="list">
            <li>
              <span class="home-mobile-ready__list-icon" aria-hidden="true">
                <i class="fas fa-chart-line" />
              </span>
              <span>Touch-optimized charts with live point highlights</span>
            </li>
            <li>
              <span class="home-mobile-ready__list-icon" aria-hidden="true">
                <i class="fas fa-mobile-alt" />
              </span>
              <span>Compact navigation for dashboard and refresh flows</span>
            </li>
            <li>
              <span class="home-mobile-ready__list-icon" aria-hidden="true">
                <i class="fas fa-shield-alt" />
              </span>
              <span>Secure access to the same governed records</span>
            </li>
          </ul>

          <RouterLink to="/pricing" class="home-mobile-ready__cta">
            Request access
            <i class="fas fa-arrow-right home-mobile-ready__cta-icon" aria-hidden="true" />
          </RouterLink>
        </div>

        <div class="col-lg-6 order-lg-2 order-1">
          <div class="home-mobile-ready__stage">
            <div class="home-mobile-ready__glow" aria-hidden="true" />
            <div class="home-mobile-ready__phone" role="img" aria-label="Signal Registry mobile dashboard preview">
              <img
                :src="getAssetImg('home-mobile-dashboard.png')"
                alt="Signal Registry mobile dashboard with source and monitor charts"
                width="505"
                height="1024"
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
.home-mobile-ready {
  position: relative;
  overflow: hidden;
  padding: 5rem 0 5.25rem;
  background: linear-gradient(180deg, #ffffff 0%, #f5f9ff 55%, #eef5ff 100%);
  color: #393953;
  border-top: 1px solid #edf2ff;
}

.home-mobile-ready__eyebrow-wrap {
  display: inline-flex;
  margin-bottom: 1.125rem;
}

.home-mobile-ready__eyebrow {
  display: inline-block;
  padding: 0.35rem 0.9rem;
  border-radius: 6px;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #00b0ee;
  background: #eef5ff;
  border: 1px solid #d8e4ff;
}

.home-mobile-ready__title {
  margin: 0 0 1.125rem;
  font-size: clamp(1.625rem, 2.8vw, 2.25rem);
  font-weight: 600;
  line-height: 1.22;
  letter-spacing: -0.025em;
  color: #1e2a4a;
  max-width: 22ch;
}

.home-mobile-ready__subtitle {
  margin: 0 0 1.75rem;
  font-size: 1rem;
  line-height: 1.7;
  color: #667197;
  max-width: 34rem;
}

.home-mobile-ready__list {
  list-style: none;
  margin: 0 0 2rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.home-mobile-ready__list li {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  font-size: 0.9375rem;
  line-height: 1.55;
  color: #4a5678;
  font-weight: 500;
}

.home-mobile-ready__list-icon {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 10px;
  background: linear-gradient(145deg, #e8f7ff 0%, #dceaff 100%);
  border: 1px solid #cfe4ff;
  color: #00a7df;
  font-size: 0.875rem;
}

.home-mobile-ready__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  min-height: 2.875rem;
  padding: 0.625rem 1.625rem;
  border-radius: 10px;
  background: #00b0ee;
  border: 1px solid rgba(0, 176, 238, 0.35);
  color: #ffffff;
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.01em;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.06),
    0 8px 22px rgba(0, 147, 206, 0.28);
  transition:
    background 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.15s ease;
}

.home-mobile-ready__cta:hover {
  background: #3e57d0;
  color: #ffffff;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.06),
    0 10px 26px rgba(62, 87, 208, 0.32);
}

.home-mobile-ready__cta:focus-visible {
  outline: 2px solid #3e57d0;
  outline-offset: 3px;
}

.home-mobile-ready__cta:active {
  transform: translateY(1px);
}

.home-mobile-ready__cta-icon {
  font-size: 0.75rem;
  opacity: 0.85;
}

.home-mobile-ready__stage {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 28rem;
}

.home-mobile-ready__glow {
  position: absolute;
  width: 78%;
  max-width: 340px;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 45%, rgba(0, 176, 238, 0.28) 0%, transparent 62%),
    radial-gradient(circle at 60% 70%, rgba(62, 87, 208, 0.18) 0%, transparent 55%);
  filter: blur(8px);
  pointer-events: none;
  z-index: 0;
}

.home-mobile-ready__phone {
  position: relative;
  z-index: 1;
  width: min(100%, 300px);
  line-height: 0;
  border-radius: 40px;
  overflow: hidden;
  box-shadow:
    0 28px 48px rgba(15, 30, 70, 0.35),
    0 0 28px rgba(0, 176, 238, 0.12);
  transform: translateY(0);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.home-mobile-ready__phone:hover {
  transform: translateY(-6px);
  box-shadow:
    0 36px 56px rgba(15, 30, 70, 0.4),
    0 0 36px rgba(0, 176, 238, 0.16);
}

.home-mobile-ready__phone img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 40px;
}

@media (max-width: 991.98px) {
  .home-mobile-ready {
    padding: 3.75rem 0 4rem;
  }

  .home-mobile-ready__title {
    max-width: none;
  }

  .home-mobile-ready__stage {
    min-height: 0;
  }

  .home-mobile-ready__phone {
    width: min(100%, 260px);
  }
}
</style>

<style>
html.theme-dark .home-mobile-ready {
  background: linear-gradient(180deg, #0b1220 0%, #0f172a 55%, #111827 100%) !important;
  border-top-color: rgba(255, 255, 255, 0.08) !important;
  color: #e2e8f0 !important;
}

html.theme-dark .home-mobile-ready__eyebrow {
  color: #7ddfff !important;
  background: rgba(125, 223, 255, 0.08) !important;
  border-color: rgba(125, 223, 255, 0.25) !important;
}

html.theme-dark .home-mobile-ready__title {
  color: #f1f5f9 !important;
}

html.theme-dark .home-mobile-ready__subtitle {
  color: #94a3b8 !important;
}

html.theme-dark .home-mobile-ready__list li {
  color: #cbd5e1 !important;
}

html.theme-dark .home-mobile-ready__list-icon {
  background: rgba(125, 223, 255, 0.1) !important;
  border-color: rgba(125, 223, 255, 0.28) !important;
  color: #7ddfff !important;
}

html.theme-dark .home-mobile-ready__phone {
  box-shadow:
    0 28px 48px rgba(0, 0, 0, 0.55),
    0 0 28px rgba(0, 176, 238, 0.14) !important;
}
</style>
