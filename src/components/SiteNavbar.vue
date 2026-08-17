<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)
const isDarkTheme = ref(false)
const isSticky = ref(false)
const drawerEl = ref(null)
const backdropEl = ref(null)

const dragX = ref(0)
const isDragging = ref(false)
const settleAnimating = ref(false)
const prefersReducedMotion = ref(false)

const samples = []
const SAMPLE_LIMIT = 5
const AXIS_THRESHOLD = 10
const CLOSE_DISTANCE = 96
const CLOSE_VELOCITY = 650

let pointerId = null
let startX = 0
let startY = 0
let originX = 0
let axisLocked = null
let width = 340
let rafSettle = 0

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
    resetDrag()
  },
)

watch(menuOpen, (open) => {
  if (typeof document === 'undefined') return
  document.body.classList.toggle('site-nav-drawer-open', open)
  if (!open) resetDrag()
})

const drawerLinks = [
  { path: '/about', label: 'About Us', icon: 'fa-box-open' },
  { path: '/projects', label: 'Projects', icon: 'fa-layer-group' },
  { path: '/api', label: 'API', icon: 'fa-book-open' },
  { path: '/pricing', label: 'Pricing', icon: 'fa-tag' },
  { path: '/contact', label: 'Contact', icon: 'fa-envelope' },
  { path: '/faq', label: 'Faq', icon: 'fa-comments' },
]

const drawerStyle = computed(() => {
  // CSS keyframes own idle open/close; inline transform only during gesture & settle.
  if (!isDragging.value && !settleAnimating.value) return undefined
  const x = dragX.value
  return {
    transform: `translate3d(${x}px, 0, 0)`,
    transition: isDragging.value
      ? 'none'
      : prefersReducedMotion.value
        ? 'transform 0.2s ease, opacity 0.2s ease'
        : 'transform 0.42s cubic-bezier(0.32, 0.72, 0, 1)',
    animation: 'none',
    willChange: 'transform',
  }
})

const backdropStyle = computed(() => {
  if (!isDragging.value && !settleAnimating.value) return undefined
  const progress = 1 - Math.min(1, Math.max(0, dragX.value / Math.max(width, 1)))
  return {
    opacity: progress,
    transition: isDragging.value
      ? 'none'
      : prefersReducedMotion.value
        ? 'opacity 0.2s ease'
        : 'opacity 0.36s cubic-bezier(0.22, 1, 0.36, 1)',
  }
})

function linkClass(path) {
  return ['nav-link', 'site-navbar__drawer-link', { active: route.path === path }]
}

function closeDrawer() {
  if (!menuOpen.value) return
  if (prefersReducedMotion.value || isDragging.value) {
    menuOpen.value = false
    resetDrag()
    return
  }
  // Exit along the same path it entered (spatial consistency).
  measureWidth()
  settleTo(width + 24, 0)
}

function openDrawer() {
  resetDrag()
  menuOpen.value = true
}

function toggleDrawer() {
  if (menuOpen.value) closeDrawer()
  else openDrawer()
}

function resetDrag() {
  isDragging.value = false
  settleAnimating.value = false
  dragX.value = 0
  pointerId = null
  axisLocked = null
  samples.length = 0
  if (rafSettle) {
    cancelAnimationFrame(rafSettle)
    rafSettle = 0
  }
}

function rubberband(overshoot, dimension, constant = 0.55) {
  return (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot))
}

function project(initialVelocity, decelerationRate = 0.998) {
  return ((initialVelocity / 1000) * decelerationRate) / (1 - decelerationRate)
}

function pushSample(x, t) {
  samples.push({ x, t })
  if (samples.length > SAMPLE_LIMIT) samples.shift()
}

function releaseVelocity() {
  if (samples.length < 2) return 0
  const first = samples[0]
  const last = samples[samples.length - 1]
  const dt = last.t - first.t
  if (dt <= 0) return 0
  return ((last.x - first.x) / dt) * 1000
}

function measureWidth() {
  width = drawerEl.value?.getBoundingClientRect().width || 340
}

function onPointerDown(e) {
  if (!menuOpen.value || prefersReducedMotion.value) return
  if (e.pointerType === 'mouse' && e.button !== 0) return
  measureWidth()
  pointerId = e.pointerId
  startX = e.clientX
  startY = e.clientY
  originX = dragX.value
  axisLocked = null
  samples.length = 0
  pushSample(e.clientX, e.timeStamp)
  e.currentTarget.setPointerCapture?.(e.pointerId)
}

function onPointerMove(e) {
  if (pointerId !== e.pointerId || !menuOpen.value) return

  const dx = e.clientX - startX
  const dy = e.clientY - startY

  if (!axisLocked) {
    if (Math.abs(dx) < AXIS_THRESHOLD && Math.abs(dy) < AXIS_THRESHOLD) return
    axisLocked = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y'
    if (axisLocked === 'y') {
      pointerId = null
      return
    }
    isDragging.value = true
    settleAnimating.value = false
  }

  if (axisLocked !== 'x') return

  e.preventDefault()
  pushSample(e.clientX, e.timeStamp)

  let next = originX + dx
  if (next < 0) {
    next = -rubberband(-next, width)
  } else if (next > width) {
    next = width + rubberband(next - width, width)
  }
  dragX.value = next
}

function settleTo(target, velocity = 0) {
  isDragging.value = false
  settleAnimating.value = true

  // Hand off velocity feel: slight overshoot when flicking closed, critically damped open.
  if (!prefersReducedMotion.value && Math.abs(velocity) > 400 && target > 0) {
    const peek = Math.min(18, Math.abs(velocity) / 120)
    dragX.value = Math.min(width, dragX.value + peek)
    rafSettle = requestAnimationFrame(() => {
      dragX.value = target
    })
  } else {
    dragX.value = target
  }

  const onEnd = () => {
    settleAnimating.value = false
    if (target >= width * 0.9) {
      menuOpen.value = false
      dragX.value = 0
    } else {
      dragX.value = 0
    }
    drawerEl.value?.removeEventListener('transitionend', onEnd)
  }
  drawerEl.value?.addEventListener('transitionend', onEnd)
  // Fallback if transitionend is skipped
  setTimeout(onEnd, 480)
}

function onPointerUp(e) {
  if (pointerId !== e.pointerId) return
  const wasDragging = isDragging.value
  const v = releaseVelocity()
  pointerId = null
  axisLocked = null
  samples.length = 0

  if (!wasDragging) {
    isDragging.value = false
    return
  }

  const projected = dragX.value + project(v)
  const shouldClose = v > CLOSE_VELOCITY || projected > CLOSE_DISTANCE || dragX.value > CLOSE_DISTANCE

  settleTo(shouldClose ? width + 24 : 0, v)
}

function onPointerCancel(e) {
  if (pointerId !== e.pointerId) return
  pointerId = null
  if (isDragging.value) settleTo(0, 0)
}

function onResize() {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(min-width: 992px)').matches) {
    menuOpen.value = false
  }
  measureWidth()
}

function onScroll() {
  isSticky.value = window.scrollY > 48
}

function setTheme(isDark) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  const themeClass = isDark ? 'theme-dark' : 'theme-light'
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
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  onScroll()
  window.addEventListener('resize', onResize)
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  window.removeEventListener('scroll', onScroll)
  document.body.classList.remove('site-nav-drawer-open')
  resetDrag()
})
</script>

<template>
  <div class="navbar-area" :class="{ 'is-sticky': isSticky }">
    <Teleport to="body">
      <Transition name="site-nav-backdrop">
        <div
          v-if="menuOpen"
          ref="backdropEl"
          class="site-navbar__backdrop"
          :style="backdropStyle"
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
            @click="toggleDrawer"
          >
            <span class="site-navbar__burger" aria-hidden="true">
              <span class="site-navbar__burger-line" />
              <span class="site-navbar__burger-line" />
              <span class="site-navbar__burger-line" />
            </span>
          </button>

          <div
            id="siteNavCollapse"
            ref="drawerEl"
            class="collapse navbar-collapse site-navbar__collapse site-navbar__drawer-sheet"
            :class="{ show: menuOpen, 'is-dragging': isDragging, 'is-settling': settleAnimating }"
            :style="drawerStyle"
            @pointerdown="onPointerDown"
            @pointermove="onPointerMove"
            @pointerup="onPointerUp"
            @pointercancel="onPointerCancel"
          >
            <div class="site-navbar__sheet-handle" aria-hidden="true">
              <span class="site-navbar__sheet-handle-bar" />
            </div>
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
