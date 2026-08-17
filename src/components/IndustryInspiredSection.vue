<template>
  <section class="industry-inspired-section pb-100">
    <div class="container">
      <div class="section-title">
        <span>Inspired Patterns</span>
        <h3>Principles, ecosystem, and execution in one layer</h3>
      </div>

      <div class="row g-4">
        <div class="col-lg-4 col-md-6">
          <div class="inspired-card">
            <h4>Workflow Principles</h4>
            <ul>
              <li><i class="fas fa-check-circle" /> Scalable task orchestration</li>
              <li><i class="fas fa-check-circle" /> Dynamic operation flows</li>
              <li><i class="fas fa-check-circle" /> Extensible integration points</li>
              <li><i class="fas fa-check-circle" /> Explicit and observable steps</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="inspired-card">
            <h4>Transformation Culture</h4>
            <ul>
              <li><i class="fas fa-check-circle" /> Modular SQL-oriented logic</li>
              <li><i class="fas fa-check-circle" /> Testable data operations</li>
              <li><i class="fas fa-check-circle" /> Version-friendly change model</li>
              <li><i class="fas fa-check-circle" /> Shared team documentation mindset</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="inspired-card">
            <h4>Execution Speed</h4>
            <ul>
              <li><i class="fas fa-check-circle" /> Formula-to-query approach</li>
              <li><i class="fas fa-check-circle" /> Guided, approval-based flow</li>
              <li><i class="fas fa-check-circle" /> Fast handling of repeat operations</li>
              <li><i class="fas fa-check-circle" /> Privacy-aware architecture choices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.industry-inspired-section {
  background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);
  margin-top: 24px !important;
  padding-top: 24px !important;
}

.inspired-card {
  height: 100%;
  border: 1px solid #dbe7ff;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 10px 24px rgba(37, 56, 102, 0.1);
  padding: 24px 20px;
  transition:
    transform 0.36s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.36s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.36s cubic-bezier(0.22, 1, 0.36, 1);
}

.inspired-card:hover {
  transform: translateY(-5px);
  border-color: #b8cfff;
  box-shadow: 0 14px 28px rgba(37, 56, 102, 0.14);
}

.inspired-card:active {
  transform: translateY(-1px) scale(0.99);
}

.inspired-card h4 {
  margin-bottom: 14px;
  font-size: 22px;
}

.inspired-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.inspired-card li {
  color: #667197;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.7;
}

.inspired-card li i {
  color: #00b0ee;
  margin-right: 8px;
}

:global(html.theme-dark) .industry-inspired-section {
  background: linear-gradient(180deg, #0b1220 0%, #0f172a 100%);
}

:global(html.theme-dark) .industry-inspired-section .section-title h3 {
  color: #e2e8f0;
}

:global(html.theme-dark) .industry-inspired-section .section-title span {
  color: #7ddfff;
}

:global(html.theme-dark) .inspired-card {
  border-color: rgba(255, 255, 255, 0.12);
  background: #111827;
  box-shadow: none;
}

:global(html.theme-dark) .inspired-card:hover {
  border-color: rgba(125, 223, 255, 0.5);
  box-shadow: 0 8px 22px rgba(2, 6, 23, 0.45);
}

:global(html.theme-dark) .inspired-card h4 {
  color: #e2e8f0;
}

:global(html.theme-dark) .inspired-card li {
  color: #94a3b8;
}

:global(html.theme-dark) .inspired-card li i {
  color: #7ddfff;
}

</style>

<style>
html.theme-dark .industry-inspired-section {
  background: linear-gradient(180deg, #0b1220 0%, #0f172a 100%) !important;
}

html.theme-dark .industry-inspired-section .section-title h3 {
  color: #e2e8f0 !important;
}

html.theme-dark .industry-inspired-section .section-title span {
  color: #7ddfff !important;
}

html.theme-dark .industry-inspired-section .inspired-card {
  border-color: rgba(255, 255, 255, 0.12) !important;
  background: #111827 !important;
  box-shadow: none !important;
}

html.theme-dark .industry-inspired-section .inspired-card:hover {
  border-color: rgba(125, 223, 255, 0.5) !important;
  box-shadow: 0 8px 22px rgba(2, 6, 23, 0.45) !important;
}

html.theme-dark .industry-inspired-section .inspired-card h4 {
  color: #e2e8f0 !important;
}

html.theme-dark .industry-inspired-section .inspired-card li {
  color: #94a3b8 !important;
}

html.theme-dark .industry-inspired-section .inspired-card li i {
  color: #7ddfff !important;
}
</style>
