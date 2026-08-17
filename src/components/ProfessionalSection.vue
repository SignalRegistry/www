<script setup>
defineProps({
  title: {
    type: String,
    default: 'Enterprise-ready operations, from day one',
  },
  subtitle: {
    type: String,
    default:
      'Signal Registry combines clear workflows, measurable outcomes, and production-grade governance for teams.',
  },
  roadmapTitle: {
    type: String,
    default: 'Implementation roadmap',
  },
})
</script>

<template>
  <section class="professional-section pb-100">
    <div class="container">
      <div class="professional-head text-center">
        <span class="professional-eyebrow">Operational Excellence</span>
        <h3>{{ title }}</h3>
        <p>{{ subtitle }}</p>
      </div>

      <div class="professional-metrics">
        <div class="metric-card">
          <span class="metric-label">Availability</span>
          <span class="metric-value">99.9%</span>
          <p>Operational availability target</p>
        </div>
        <div class="metric-card">
          <span class="metric-label">Access Model</span>
          <span class="metric-value">Role-Based</span>
          <p>Access and permission governance</p>
        </div>
        <div class="metric-card">
          <span class="metric-label">Auditability</span>
          <span class="metric-value">Audit-Ready</span>
          <p>Traceable updates and change visibility</p>
        </div>
        <div class="metric-card">
          <span class="metric-label">Onboarding</span>
          <span class="metric-value">&lt;2 Weeks</span>
          <p>Typical onboarding timeline</p>
        </div>
      </div>

      <div class="professional-roadmap">
        <h4>{{ roadmapTitle }}</h4>
        <div class="roadmap-grid">
          <div class="roadmap-item">
            <span class="roadmap-step">01</span>
            <h5>Discovery</h5>
            <p>Map your current record lifecycle, roles, and integration requirements.</p>
          </div>
          <div class="roadmap-item">
            <span class="roadmap-step">02</span>
            <h5>Configuration</h5>
            <p>Set environments, policy controls, and workflow rules for operational teams.</p>
          </div>
          <div class="roadmap-item">
            <span class="roadmap-step">03</span>
            <h5>Scale</h5>
            <p>Roll out dashboards, monitoring loops, and continuous improvement practices.</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.professional-section {
  --pro-card-bg: #ffffff;
  --pro-roadmap-bg: #f8fbff;
  --pro-border: #dbe7ff;
  --pro-item-border: #e4edff;
}

.professional-head {
  max-width: 780px;
  margin: 0 auto 28px;
}

.professional-eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #00a7df;
  margin-bottom: 8px;
}

.professional-head h3 {
  margin-bottom: 10px;
  font-size: 38px;
}

.professional-head p {
  margin-bottom: 0;
  color: #667197;
}

.professional-metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 24px;
}

.metric-card {
  background: var(--pro-card-bg) !important;
  border: 1px solid var(--pro-border);
  border-radius: 16px;
  padding: 20px 18px;
  box-shadow: 0 12px 28px rgba(40, 58, 107, 0.12);
  transition:
    transform 0.36s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.36s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.36s cubic-bezier(0.22, 1, 0.36, 1);
}

.metric-card:hover {
  transform: translateY(-5px);
  border-color: #b8ccf7;
  box-shadow: 0 16px 34px rgba(40, 58, 107, 0.16);
}

.metric-card:active {
  transform: translateY(-1px) scale(0.99);
}

.metric-value {
  display: inline-block;
  margin-bottom: 6px;
  color: #155e9a;
  font-size: 24px;
  font-weight: 700;
}

.metric-label {
  display: block;
  margin-bottom: 4px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #7b8ab3;
  font-weight: 700;
}

.metric-card p {
  margin-bottom: 0;
  color: #667197;
  font-size: 14px;
}

.professional-roadmap {
  border: 1px solid var(--pro-border);
  border-radius: 16px;
  padding: 24px 20px;
  background: var(--pro-roadmap-bg) !important;
  margin-bottom: 24px;
}

.professional-roadmap h4 {
  margin-bottom: 18px;
  font-size: 24px;
}

.roadmap-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.roadmap-item {
  position: relative;
  background: var(--pro-card-bg) !important;
  border: 1px solid var(--pro-item-border);
  border-radius: 14px;
  padding: 16px 14px 14px;
  transition:
    transform 0.36s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.36s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.36s cubic-bezier(0.22, 1, 0.36, 1);
}

.roadmap-item:hover {
  transform: translateY(-4px);
  border-color: #b8ccf7;
  box-shadow: 0 12px 26px rgba(40, 58, 107, 0.12);
}

.roadmap-step {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 999px;
  border: 1px solid #bfe7fb;
  color: #00a7df;
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 10px;
  background: #f0fbff;
}

.roadmap-item h5 {
  margin: 7px 0 7px;
  font-size: 18px;
}

.roadmap-item p {
  margin-bottom: 0;
  color: #667197;
  font-size: 14px;
}

@media only screen and (max-width: 991px) {
  .professional-head h3 {
    font-size: 32px;
  }
  .professional-metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .roadmap-grid {
    grid-template-columns: 1fr;
  }
}

@media only screen and (max-width: 767px) {
  .professional-head h3 {
    font-size: 28px;
  }
  .professional-metrics {
    grid-template-columns: 1fr;
  }
}
</style>

<style>
html.theme-dark .professional-section {
  --pro-card-bg: #111827;
  --pro-roadmap-bg: #0f172a;
  --pro-border: rgba(255, 255, 255, 0.12);
  --pro-item-border: rgba(255, 255, 255, 0.1);
}

html.theme-dark .professional-section .professional-head h3 {
  color: #e2e8f0 !important;
}

html.theme-dark .professional-section .professional-head p {
  color: #94a3b8 !important;
}

html.theme-dark .professional-section .professional-eyebrow {
  color: #7ddfff !important;
}

html.theme-dark .professional-section .metric-card {
  box-shadow: none !important;
}

html.theme-dark .professional-section .metric-card:hover {
  border-color: rgba(125, 223, 255, 0.5) !important;
}

html.theme-dark .professional-section .metric-label {
  color: #94a3b8 !important;
}

html.theme-dark .professional-section .metric-value {
  color: #7ddfff !important;
}

html.theme-dark .professional-section .metric-card p {
  color: #cbd5e1 !important;
}

html.theme-dark .professional-section .professional-roadmap h4 {
  color: #e2e8f0 !important;
}

html.theme-dark .professional-section .roadmap-item h5 {
  color: #e2e8f0 !important;
}

html.theme-dark .professional-section .roadmap-item p {
  color: #94a3b8 !important;
}

html.theme-dark .professional-section .roadmap-step {
  border-color: rgba(125, 223, 255, 0.45) !important;
  color: #7ddfff !important;
  background: rgba(125, 223, 255, 0.1) !important;
}
</style>
