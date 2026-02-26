<script setup>
import { RouterLink } from 'vue-router'
import { getAssetImg } from '@/utils/getAssetImg'
</script>

<template>
  <div>
    <!-- Start Error Area -->
    <section class="error-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="error-content">
              <img :src="getAssetImg('404.jpg')" alt="error">
              <h3>Page Not Found</h3>
              <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
              <RouterLink to="/" class="default-btn-one">
                Go to Home
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
