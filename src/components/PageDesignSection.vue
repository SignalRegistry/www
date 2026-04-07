<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  eyebrow: {
    type: String,
    default: 'Platform Design',
  },
  title: {
    type: String,
    default: 'Built with operational clarity and modern workflow thinking',
  },
  description: {
    type: String,
    default:
      'This page follows a modular, fast, and workflow-oriented layout language tailored for Signal Registry operations.',
  },
  chips: {
    type: Array,
    default: () => ['Modular UI', 'Workflow Steps', 'Team Visibility', 'Scalable Structure'],
  },
})
</script>

<template>
  <section class="page-design-band pb-100">
    <div class="container">
      <div class="row g-4 align-items-stretch">
        <div class="col-lg-8">
          <div class="page-design-card page-design-card--primary">
            <span class="page-design-eyebrow">{{ eyebrow }}</span>
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
            <RouterLink class="default-btn-one" to="/contact">
              Contact Team
              <span />
            </RouterLink>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="page-design-card page-design-card--side">
            <h4>Design Signals</h4>
            <div class="page-design-chip-wrap">
              <span v-for="chip in chips" :key="chip" class="page-design-chip">{{ chip }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-design-card {
  height: 100%;
  border-radius: 18px;
  padding: 30px 24px;
}

.page-design-card--primary {
  background: linear-gradient(140deg, #1d3f89 0%, #0f68ad 55%, #00a7d9 100%);
  color: #ffffff;
  box-shadow: 0 14px 30px rgba(17, 60, 109, 0.25);
}

.page-design-card--primary h3 {
  color: #ffffff;
  margin-bottom: 14px;
}

.page-design-card--primary p {
  color: #dceaff;
  margin-bottom: 20px;
}

.page-design-eyebrow {
  display: inline-block;
  margin-bottom: 12px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.page-design-card--side {
  border: 1px solid #dbe7ff;
  background: #ffffff;
  box-shadow: 0 12px 24px rgba(44, 61, 109, 0.1);
}

.page-design-card--side h4 {
  margin-bottom: 14px;
}

.page-design-chip-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.page-design-chip {
  border: 1px solid #d4e2ff;
  background: #f7faff;
  color: #3b4870;
  border-radius: 999px;
  font-size: 12px;
  padding: 7px 12px;
  font-weight: 600;
}

@media only screen and (max-width: 767px) {
  .page-design-card {
    padding: 24px 18px;
  }
}
</style>
