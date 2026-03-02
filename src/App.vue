<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'

const preloaderDone = ref(false)

function hidePreloader() {
  preloaderDone.value = true
}

onMounted(() => {
  if (document.readyState === 'complete') {
    setTimeout(hidePreloader, 300)
  } else {
    window.addEventListener('load', () => setTimeout(hidePreloader, 300), { once: true })
  }
  // Fallback: sayfa 3 saniyede yüklenmezse yine gizle
  setTimeout(hidePreloader, 3000)
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
</template>
