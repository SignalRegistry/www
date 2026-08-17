<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const visible = ref(false)
const prefersReducedMotion = ref(false)

function onScroll() {
  visible.value = window.scrollY > 520
}

function goTop() {
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion.value ? 'auto' : 'smooth',
  })
}

onMounted(() => {
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <Transition name="apple-go-top">
    <button
      v-if="visible"
      type="button"
      class="apple-go-top"
      aria-label="Back to top"
      @click="goTop"
    >
      <i class="fas fa-chevron-up" aria-hidden="true" />
    </button>
  </Transition>
</template>

<style scoped>
.apple-go-top {
  position: fixed;
  right: max(1.1rem, env(safe-area-inset-right));
  bottom: max(1.25rem, env(safe-area-inset-bottom));
  z-index: 1200;
  width: 2.75rem;
  height: 2.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 999px;
  color: #0f172a;
  background: rgba(255, 255, 255, 0.72);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.55) inset,
    0 10px 28px rgba(15, 23, 42, 0.18);
  cursor: pointer;
  transition:
    transform 100ms ease-out,
    background 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.apple-go-top:hover {
  background: rgba(255, 255, 255, 0.88);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.65) inset,
    0 14px 32px rgba(15, 23, 42, 0.22);
}

.apple-go-top:active {
  transform: scale(0.94);
}

.apple-go-top:focus-visible {
  outline: 2px solid #00b0ee;
  outline-offset: 3px;
}

.apple-go-top i {
  font-size: 0.875rem;
}

.apple-go-top-enter-active,
.apple-go-top-leave-active {
  transition:
    opacity 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.36s cubic-bezier(0.32, 0.72, 0, 1);
}

.apple-go-top-enter-from,
.apple-go-top-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.92);
}

@media (prefers-reduced-motion: reduce) {
  .apple-go-top,
  .apple-go-top-enter-active,
  .apple-go-top-leave-active {
    transition: opacity 0.2s ease !important;
  }

  .apple-go-top:active,
  .apple-go-top-enter-from,
  .apple-go-top-leave-to {
    transform: none !important;
  }
}

:global(html.theme-dark) .apple-go-top {
  color: #f8fafc;
  background: rgba(15, 23, 42, 0.72);
  border-color: rgba(255, 255, 255, 0.14);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.08) inset,
    0 12px 28px rgba(0, 0, 0, 0.4);
}
</style>
