<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import NavThemeToggle from '@/components/NavThemeToggle.vue'

const route = useRoute()
const menuOpen = ref(false)

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)

watch(menuOpen, (open) => {
  if (typeof document === 'undefined') return
  document.body.classList.toggle('site-nav-drawer-open', open)
})

const drawerLinks = [
  { path: '/about', label: 'Product', icon: 'fa-box-open' },
  { path: '/projects', label: 'Solutions', icon: 'fa-layer-group' },
  { path: '/api', label: 'Resources', icon: 'fa-book-open' },
  { path: '/faq', label: 'Community', icon: 'fa-comments' },
  { path: '/pricing', label: 'Pricing', icon: 'fa-tag' },
]

function linkClass(path) {
  return ['nav-link', 'site-navbar__drawer-link', { active: route.path === path }]
}

function closeDrawer() {
  menuOpen.value = false
}

function onResize() {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(min-width: 992px)').matches) {
    menuOpen.value = false
  }
}

onMounted(() => {
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
                <NavThemeToggle />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
