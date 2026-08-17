<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import AppleGoTop from '@/components/AppleGoTop.vue'

const preloaderDone = ref(false)

function hidePreloader() {
  preloaderDone.value = true
}

onMounted(() => {
  const root = document.documentElement
  const savedTheme = localStorage.getItem('theme')
  const themeClass = savedTheme === 'theme-dark' ? 'theme-dark' : 'theme-light'
  root.classList.remove('theme-light', 'theme-dark')
  root.classList.add(themeClass)
  localStorage.setItem('theme', themeClass)

  if (document.readyState === 'complete') {
    setTimeout(hidePreloader, 80)
  } else {
    window.addEventListener('load', () => setTimeout(hidePreloader, 80), { once: true })
  }
  setTimeout(hidePreloader, 2000)
})
</script>

<template>
  <div v-if="!preloaderDone" class="preloader">
    <div class="loader">
      <div class="shadow" />
      <div class="box" />
    </div>
  </div>
  <RouterView v-slot="{ Component, route }">
    <Transition name="apple-page" mode="out-in">
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
  <AppleGoTop />
</template>

<style>
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
