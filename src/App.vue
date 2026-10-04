<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterView } from 'vue-router'
import AppleGoTop from '@/components/AppleGoTop.vue'
import { useLanguage } from '@/utils/language'

const { t } = useLanguage()
const preloaderDone = ref(false)
const shownAt = performance.now()
let hideTimer = 0

function hidePreloader() {
  if (preloaderDone.value || hideTimer) return
  const remaining = Math.max(0, 700 - (performance.now() - shownAt))
  hideTimer = window.setTimeout(() => {
    preloaderDone.value = true
    document.body.style.overflow = ''
  }, remaining)
}

onMounted(() => {
  const root = document.documentElement
  const savedTheme = localStorage.getItem('theme')
  const themeClass = savedTheme === 'theme-dark' ? 'theme-dark' : 'theme-light'
  root.classList.remove('theme-light', 'theme-dark')
  root.classList.add(themeClass)
  localStorage.setItem('theme', themeClass)

  document.body.style.overflow = 'hidden'

  if (document.readyState === 'complete') {
    setTimeout(hidePreloader, 80)
  } else {
    window.addEventListener('load', () => setTimeout(hidePreloader, 80), { once: true })
  }
  setTimeout(hidePreloader, 2000)
})

onBeforeUnmount(() => {
  if (hideTimer) window.clearTimeout(hideTimer)
  document.body.style.overflow = ''
})
</script>

<template>
  <Transition name="site-splash">
    <div v-if="!preloaderDone" class="site-splash" role="status" :aria-label="t.navDescription">
      <div class="site-splash__panel">
        <p class="site-splash__name">
          <i class="fas fa-bolt" aria-hidden="true" />
          <span>SignalRegistry</span>
        </p>
        <p class="site-splash__note">{{ t.navDescription }}</p>
        <div class="site-splash__track" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  </Transition>
  <RouterView v-slot="{ Component, route }">
    <Transition name="apple-page" mode="out-in">
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
  <AppleGoTop />
</template>

<style>
.site-splash {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  background: #071422;
  color: #ffffff;
}

.site-splash__panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(100%, 420px);
  text-align: center;
}

.site-splash__name {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  color: #ffffff;
  font-family: "Dosis", "Open Sans", sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.1;
}

.site-splash__name .fa-bolt {
  color: #00b0ee;
  font-size: 1.15rem;
}

.site-splash__note {
  margin: 14px 0 0;
  max-width: 28rem;
  color: #b7c3d4;
  font-family: "Open Sans", sans-serif;
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 1.5;
}

.site-splash__track {
  width: 88px;
  height: 2px;
  margin-top: 28px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.16);
}

.site-splash__track span {
  display: block;
  width: 100%;
  height: 100%;
  background: #00b0ee;
  transform: scaleX(0);
  transform-origin: left center;
  animation: site-splash-fill 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.12s forwards;
}

.site-splash-leave-active {
  transition: opacity 0.32s ease;
}

.site-splash-leave-to {
  opacity: 0;
}

@keyframes site-splash-fill {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@media (max-width: 575.98px) {
  .site-splash__name {
    font-size: 1.45rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .site-splash__track span {
    animation: none;
    transform: none;
  }

  .site-splash-leave-active {
    transition: opacity 0.15s ease;
  }
}
.apple-page-enter-active,
.apple-page-leave-active {
  transition:
    opacity 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.36s cubic-bezier(0.22, 1, 0.36, 1);
}

.apple-page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.apple-page-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

@media (prefers-reduced-motion: reduce) {
  .apple-page-enter-active,
  .apple-page-leave-active {
    transition: opacity 0.2s ease !important;
  }

  .apple-page-enter-from,
  .apple-page-leave-to {
    transform: none !important;
  }
}
</style>
