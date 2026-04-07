<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="home-prefooter-cta" aria-labelledby="home-prefooter-heading">
    <div class="container position-relative">
      <div class="row align-items-center gy-4 gx-lg-5">
        <div class="col-lg-7">
          <span class="home-prefooter-cta__eyebrow-wrap">
            <span class="home-prefooter-cta__eyebrow">Partnership</span>
          </span>
          <h2 id="home-prefooter-heading" class="home-prefooter-cta__title">
            Great registry work never happens alone.
          </h2>
          <p class="home-prefooter-cta__lead">
            Documentation, API access, and direct support—so your team can standardize operations,
            share practices, and keep records accurate.
          </p>
          <div class="home-prefooter-cta__actions">
            <RouterLink to="/contact" class="home-prefooter-cta__btn home-prefooter-cta__btn--primary">
              Get in touch
            </RouterLink>
            <RouterLink to="/api" class="home-prefooter-cta__btn home-prefooter-cta__btn--ghost">
              Explore resources
            </RouterLink>
          </div>
        </div>
        <div class="col-lg-5">
          <ul class="home-prefooter-cta__features" role="list">
            <li>Clear docs &amp; API reference</li>
            <li>Structured workflows for your team</li>
            <li>Direct support when you need it</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Matches .home-feature-grid-section (#f8fbff) and default-btn palette */
.home-prefooter-cta {
  position: relative;
  overflow: hidden;
  margin-top: 0;
  padding: 4.75rem 0 5.25rem;
  color: #393953;
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 48%, #f3f8ff 100%);
  border-top: 1px solid #edf2ff;
}

.home-prefooter-cta .container {
  z-index: 1;
}

.home-prefooter-cta__eyebrow-wrap {
  display: inline-flex;
  margin-bottom: 1.125rem;
}

.home-prefooter-cta__eyebrow {
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

.home-prefooter-cta__title {
  margin: 0 0 1.125rem;
  font-size: clamp(1.625rem, 2.7vw, 2.25rem);
  font-weight: 600;
  line-height: 1.22;
  letter-spacing: -0.025em;
  max-width: 26rem;
  color: #393953;
}

.home-prefooter-cta__lead {
  margin: 0 0 1.75rem;
  max-width: 38rem;
  font-size: 1rem;
  line-height: 1.7;
  font-weight: 400;
  color: #737b9a;
}

.home-prefooter-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
}

.home-prefooter-cta__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.875rem;
  padding: 0.625rem 1.375rem;
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  text-decoration: none;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.15s ease;
}

.home-prefooter-cta__btn--primary {
  background: #00b0ee;
  color: #ffffff;
  border: 1px solid rgba(0, 176, 238, 0.35);
  border-radius: 10px;
  box-shadow:
    0 1px 2px rgba(57, 57, 83, 0.06),
    0 8px 20px rgba(0, 176, 238, 0.22);
}

.home-prefooter-cta__btn--primary:hover {
  background: #3e57d0;
  border-color: rgba(62, 87, 208, 0.45);
  color: #ffffff;
  box-shadow:
    0 1px 2px rgba(57, 57, 83, 0.08),
    0 10px 24px rgba(62, 87, 208, 0.28);
}

.home-prefooter-cta__btn--primary:focus-visible {
  outline: 2px solid #00b0ee;
  outline-offset: 3px;
}

.home-prefooter-cta__btn--ghost {
  background: #ffffff;
  color: #00b0ee;
  border: 2px solid #00b0ee;
  border-radius: 10px;
}

.home-prefooter-cta__btn--ghost:hover {
  background: #eef5ff;
  border-color: #3e57d0;
  color: #3e57d0;
}

.home-prefooter-cta__btn--ghost:focus-visible {
  outline: 2px solid #3e57d0;
  outline-offset: 3px;
}

.home-prefooter-cta__btn:active {
  transform: translateY(1px);
}

.home-prefooter-cta__features {
  margin: 0;
  padding: 1.25rem 0 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
}

@media (min-width: 992px) {
  .home-prefooter-cta__features {
    padding: 1.5rem 0 1.5rem 1.75rem;
    margin-left: 0.5rem;
    border-left: 1px solid #edf2ff;
    border-radius: 0 12px 12px 0;
    background: rgba(255, 255, 255, 0.65);
  }
}

.home-prefooter-cta__features li {
  position: relative;
  padding-left: 1.75rem;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.55;
  color: #393953;
}

.home-prefooter-cta__features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.35em;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 50%;
  background: #eef5ff;
  border: 1px solid #d8e4ff;
  box-sizing: border-box;
}

.home-prefooter-cta__features li::after {
  content: '';
  position: absolute;
  left: 5px;
  top: calc(0.35em + 5px);
  width: 5px;
  height: 9px;
  border: solid #00b0ee;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  box-sizing: border-box;
}

@media (max-width: 991.98px) {
  .home-prefooter-cta {
    padding: 3.5rem 0 4rem;
  }

  .home-prefooter-cta__features {
    padding-top: 0.5rem;
    padding-left: 0;
    margin-left: 0;
    border-left: none;
    background: transparent;
  }
}
</style>
