<script setup>
import { useLanguage } from '@/utils/language'
import { getAssetImg } from '@/utils/getAssetImg'

const { t } = useLanguage()
</script>

<template>
  <section class="flow-editor-showcase" aria-labelledby="flow-editor-heading">
    <div class="container">
      <div class="row align-items-center gy-5">
        <div class="col-lg-5">
          <span class="flow-editor-showcase__eyebrow">{{ t.mobileEyebrow }}</span>
          <h2 id="flow-editor-heading">{{ t.mobileTitle }}</h2>
          <p>{{ t.mobileText }}</p>
          <ul>
            <li v-for="(item, index) in t.mobileList" :key="item">
              <span class="flow-editor-showcase__check" aria-hidden="true">
                <i :class="['fas', ['fa-sitemap', 'fa-share-alt', 'fa-bolt'][index]]" />
              </span>
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="col-lg-7">
          <div class="flow-editor-showcase__window">
            <div class="flow-editor-showcase__window-bar" aria-hidden="true">
              <span /><span /><span />
              <span class="flow-editor-showcase__window-title">Signal Registry · Flow Editor</span>
            </div>
            <img
              :src="getAssetImg('dashboard-flow-editor.png')"
              :alt="t.mobileTitle"
              width="2882"
              height="1432"
              loading="lazy"
              decoding="async"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.flow-editor-showcase {
  padding: 5.5rem 0;
  overflow: hidden;
  background: linear-gradient(180deg, #f5f8ff 0%, #fff 100%);
  color: #253452;
}

.flow-editor-showcase__eyebrow {
  display: inline-block;
  margin-bottom: 1rem;
  color: #078ec6;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.flow-editor-showcase h2 {
  max-width: 22ch;
  margin: 0 0 1rem;
  color: #1e2a4a;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 650;
  letter-spacing: -0.035em;
  line-height: 1.18;
}

.flow-editor-showcase p {
  max-width: 38rem;
  margin: 0 0 1.5rem;
  color: #65718d;
  font-size: 1rem;
  line-height: 1.75;
}

.flow-editor-showcase ul {
  display: grid;
  gap: 0.85rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.flow-editor-showcase li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #354361;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.5;
}

.flow-editor-showcase__check {
  display: inline-flex;
  flex: 0 0 2rem;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 1px solid #d4eaf7;
  border-radius: 0.65rem;
  background: #eaf7fd;
  color: #078ec6;
  font-size: 0.8rem;
}

.flow-editor-showcase__window {
  overflow: hidden;
  border: 1px solid #263757;
  border-radius: 14px;
  background: #070d20;
  box-shadow: 0 28px 60px rgba(22, 43, 84, 0.2), 0 0 0 6px rgba(255, 255, 255, 0.82);
}

.flow-editor-showcase__window-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  min-height: 2.5rem;
  padding: 0 0.9rem;
  border-bottom: 1px solid rgba(145, 171, 216, 0.18);
  background: #0d1730;
}

.flow-editor-showcase__window-bar > span:not(.flow-editor-showcase__window-title) {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #526383;
}

.flow-editor-showcase__window-bar > span:first-child { background: #f47777; }
.flow-editor-showcase__window-bar > span:nth-child(2) { background: #e8b85b; }
.flow-editor-showcase__window-bar > span:nth-child(3) { background: #45c59b; }

.flow-editor-showcase__window-title {
  margin-left: 0.55rem;
  color: #aab9d4;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.flow-editor-showcase__window img {
  display: block;
  width: 100%;
  height: auto;
}

:global(.theme-dark .flow-editor-showcase) {
  background: linear-gradient(180deg, #0b1324 0%, #101a2e 100%);
  color: #e6edf8;
}

:global(.theme-dark .flow-editor-showcase h2) {
  color: #f1f5fb;
}

:global(.theme-dark .flow-editor-showcase p) {
  color: #a9b7ce;
}

:global(.theme-dark .flow-editor-showcase li) {
  color: #d5dfed;
}

:global(.theme-dark .flow-editor-showcase__check) {
  border-color: rgba(75, 185, 229, 0.28);
  background: rgba(27, 117, 157, 0.2);
  color: #65cef2;
}

:global(.theme-dark .flow-editor-showcase__window) {
  border-color: #263957;
  box-shadow: 0 28px 60px rgba(0, 0, 0, 0.38), 0 0 0 6px rgba(255, 255, 255, 0.035);
}

:global(.theme-dark .flow-editor-showcase__window-bar) {
  border-bottom-color: rgba(145, 171, 216, 0.14);
  background: #0b1428;
}

:global(.theme-dark .flow-editor-showcase__window-title) {
  color: #9fb0cc;
}

@media (max-width: 991px) {
  .flow-editor-showcase { padding: 4rem 0; }
}

@media (prefers-reduced-motion: reduce) {
  .flow-editor-showcase * { scroll-behavior: auto !important; }
}
</style>
