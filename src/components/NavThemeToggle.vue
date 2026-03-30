<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isDarkMode = ref(document.documentElement.classList.contains('theme-dark'))

function onThemeChanged(event) {
  isDarkMode.value = event.detail === 'dark'
}

function handleThemeToggle() {
  window.dispatchEvent(new Event('toggle-theme'))
}

onMounted(() => {
  window.addEventListener('theme-changed', onThemeChanged)
})

onBeforeUnmount(() => {
  window.removeEventListener('theme-changed', onThemeChanged)
})
</script>

<template>
  <button
    type="button"
    class="navbar-theme-toggle"
    :class="{ 'is-dark': isDarkMode }"
    :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="handleThemeToggle"
  >
    <i
      class="fas navbar-theme-toggle__icon"
      :class="isDarkMode ? 'fa-sun' : 'fa-moon'"
      aria-hidden="true"
    />
  </button>
</template>

<style scoped>
.navbar-theme-toggle {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid #dbe2ea;
  background: rgba(255, 255, 255, 0.95);
  color: #1f2937;
  font-size: 16px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(31, 41, 55, 0.12);
  transition: all 0.2s ease;
}

.navbar-theme-toggle__icon {
  font-size: 0.9375rem;
  line-height: 1;
  color: inherit;
}

.navbar-theme-toggle:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(31, 41, 55, 0.16);
}

.navbar-theme-toggle:focus-visible {
  outline: 2px solid #00b0ee;
  outline-offset: 2px;
}

.navbar-theme-toggle.is-dark {
  background: rgba(17, 24, 39, 0.95);
  color: #f9fafb;
  border-color: #374151;
}

:global(.plamb-nav .navbar .other-option) {
  display: flex !important;
  align-items: center;
  gap: 8px;
}
</style>
