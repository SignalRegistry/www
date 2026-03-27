<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { RouterView } from 'vue-router'
import NavThemeToggle from '@/components/NavThemeToggle.vue'

const preloaderDone = ref(false)
const themeMode = ref('light')

function applyTheme(mode) {
  const root = document.documentElement
  root.classList.remove('theme-light', 'theme-dark')
  root.classList.add(mode === 'dark' ? 'theme-dark' : 'theme-light')
}

function toggleTheme() {
  themeMode.value = themeMode.value === 'dark' ? 'light' : 'dark'
}

function handleExternalThemeToggle() {
  toggleTheme()
}

function hidePreloader() {
  preloaderDone.value = true
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || savedTheme === 'light') {
    themeMode.value = savedTheme
  } else {
    themeMode.value = 'light'
  }
  applyTheme(themeMode.value)
  window.dispatchEvent(new CustomEvent('theme-changed', { detail: themeMode.value }))
  window.addEventListener('toggle-theme', handleExternalThemeToggle)

  if (document.readyState === 'complete') {
    setTimeout(hidePreloader, 300)
  } else {
    window.addEventListener('load', () => setTimeout(hidePreloader, 300), { once: true })
  }
  // Fallback: sayfa 3 saniyede yüklenmezse yine gizle
  setTimeout(hidePreloader, 3000)
})

onBeforeUnmount(() => {
  window.removeEventListener('toggle-theme', handleExternalThemeToggle)
})

watch(themeMode, (mode) => {
  applyTheme(mode)
  localStorage.setItem('theme', mode)
  window.dispatchEvent(new CustomEvent('theme-changed', { detail: mode }))
})
</script>

<template>
  <div class="preloader" :class="{ 'preloader-deactivate': preloaderDone }">
    <div class="loader">
      <div class="shadow" />
      <div class="box" />
    </div>
  </div>
  <RouterView />
  <div class="mobile-theme-toggle">
    <NavThemeToggle />
  </div>
</template>

<style scoped>
.mobile-theme-toggle {
  display: none;
}

@media only screen and (max-width: 822px) {
  .mobile-theme-toggle {
    display: block;
    position: fixed;
    right: 14px;
    top: 14px;
    z-index: 1200;
  }
}
</style>
