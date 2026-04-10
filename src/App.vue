<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'

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
    setTimeout(hidePreloader, 300)
  } else {
    window.addEventListener('load', () => setTimeout(hidePreloader, 300), { once: true })
  }
  setTimeout(hidePreloader, 3000)
})
</script>

<template>
  <div v-if="!preloaderDone" class="preloader">
    <div class="loader">
      <div class="shadow" />
      <div class="box" />
    </div>
  </div>
  <RouterView />
</template>
