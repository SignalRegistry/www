<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)
const isDarkTheme = ref(false)

watch(
  () => route.fullPath,
  () => {
    // Close drawer after navigation to avoid stale open state on new pages.
    menuOpen.value = false
  },
)

watch(menuOpen, (open) => {
  if (typeof document === 'undefined') return
  // Lock body scroll when mobile drawer is open.
  document.body.classList.toggle('site-nav-drawer-open', open)
})

const drawerLinks = [
  { path: '/about', label: 'About Us', icon: 'fa-box-open' },
  { path: '/projects', label: 'Projects', icon: 'fa-layer-group' },
  { path: '/api', label: 'API', icon: 'fa-book-open' },
  { path: '/pricing', label: 'Pricing', icon: 'fa-tag' },
  { path: '/contact', label: 'Contact', icon: 'fa-envelope' },
  { path: '/faq', label: 'Faq', icon: 'fa-comments' },
]

function linkClass(path) {
  return ['nav-link', 'site-navbar__drawer-link', { active: route.path === path }]
}

function closeDrawer() {
  menuOpen.value = false
}

function onResize() {
  if (typeof window === 'undefined') return
  // Force-close mobile drawer once desktop breakpoint is active.
  if (window.matchMedia('(min-width: 992px)').matches) {
    menuOpen.value = false
  }
}

function setTheme(isDark) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  const themeClass = isDark ? 'theme-dark' : 'theme-light'
  // Keep theme class and persisted preference in sync.
  root.classList.remove('theme-light', 'theme-dark')
  root.classList.add(themeClass)
  localStorage.setItem('theme', themeClass)
}

function toggleTheme() {
  setTheme(isDarkTheme.value)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDarkTheme.value = savedTheme === 'theme-dark'
  setTheme(isDarkTheme.value)
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  document.body.classList.remove('site-nav-drawer-open')
})
</script>

<template>
  <div class="navbar-area">
    <Teleport to="body">
      <Transition name="site-nav-backdrop">
        <div
          v-if="menuOpen"
          class="site-navbar__backdrop"
          aria-hidden="true"
          @click="closeDrawer"
        />
      </Transition>
    </Teleport>

    <div class="plamb-nav">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light site-navbar">
          <RouterLink class="navbar-brand logo-text" to="/" @click="closeDrawer">
            <i class="fas fa-bolt" />
            SignalRegistry
          </RouterLink>

          <button
            type="button"
            class="navbar-toggler site-navbar__toggler"
            :class="{ 'is-open': menuOpen }"
            :aria-expanded="menuOpen"
            aria-controls="siteNavCollapse"
            aria-label="Toggle navigation"
            @click="menuOpen = !menuOpen"
          >
            <span class="site-navbar__burger" aria-hidden="true">
              <span class="site-navbar__burger-line" />
              <span class="site-navbar__burger-line" />
              <span class="site-navbar__burger-line" />
            </span>
          </button>

          <div
            id="siteNavCollapse"
            class="collapse navbar-collapse site-navbar__collapse site-navbar__drawer-sheet"
            :class="{ show: menuOpen }"
          >
            <div class="site-navbar__drawer-head">
              <div class="site-navbar__drawer-top">
                <RouterLink class="site-navbar__drawer-home" to="/" @click="closeDrawer">
                  <i class="fas fa-bolt site-navbar__drawer-home-icon" aria-hidden="true" />
                  <span class="site-navbar__drawer-home-text">SignalRegistry</span>
                </RouterLink>
                <button
                  type="button"
                  class="site-navbar__drawer-close"
                  aria-label="Close menu"
                  @click="closeDrawer"
                >
                  <span class="site-navbar__drawer-close-icon" aria-hidden="true" />
                </button>
              </div>
              <p class="site-navbar__drawer-sub">
                Signal registration dashboard — navigate pages below.
              </p>
            </div>
            <div class="site-navbar__links-wrap">
              <ul class="navbar-nav site-navbar__nav" aria-label="Site navigation">
                <li v-for="item in drawerLinks" :key="item.path" class="nav-item">
                  <RouterLink :to="item.path" :class="linkClass(item.path)" @click="closeDrawer">
                    <span class="site-navbar__nav-link-icon" aria-hidden="true">
                      <i :class="['fas', item.icon]" />
                    </span>
                    <span class="site-navbar__nav-link-label">{{ item.label }}</span>
                    <i class="fas fa-chevron-right site-navbar__nav-link-arrow" aria-hidden="true" />
                  </RouterLink>
                </li>
              </ul>
            </div>
            <div class="other-option site-navbar__actions">
              <RouterLink class="default-btn" to="/pricing" @click="closeDrawer">
                Free Quote
                <span />
              </RouterLink>
              <div class="site-navbar__desktop-theme">
                <label class="switch">
                  <input
                    v-model="isDarkTheme"
                    class="switch__input"
                    type="checkbox"
                    role="switch"
                    aria-label="Dark Mode"
                    @change="toggleTheme"
                  />
                  <span class="switch__icon">
                    <span class="switch__icon-part switch__icon-part--1" />
                    <span class="switch__icon-part switch__icon-part--2" />
                    <span class="switch__icon-part switch__icon-part--3" />
                    <span class="switch__icon-part switch__icon-part--4" />
                    <span class="switch__icon-part switch__icon-part--5" />
                    <span class="switch__icon-part switch__icon-part--6" />
                    <span class="switch__icon-part switch__icon-part--7" />
                    <span class="switch__icon-part switch__icon-part--8" />
                    <span class="switch__icon-part switch__icon-part--9" />
                    <span class="switch__icon-part switch__icon-part--10" />
                    <span class="switch__icon-part switch__icon-part--11" />
                  </span>
                  <span class="switch__sr">Dark Mode</span>
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
