<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'

const plans = [
  {
    name: 'Free',
    desc: 'Ideal for getting started with tracking signal records in MyDashboard.',
    priceText: '$0',
    priceSuffix: '/month/user',
    action: 'Get Started Free',
    features: [
      '1 User',
      'Dashboard summary view',
      'Basic filtering and record listing',
      'Basic support via email',
    ],
  },
  {
    name: 'Team',
    desc: 'For teams managing Signal Registry operations collaboratively.',
    priceText: '$29',
    priceSuffix: '/month/user',
    action: 'Start Free Trial',
    featured: true,
    features: [
      'Team access for up to 5 users',
      'Advanced filters and reporting views',
      'Record update and monitoring workflows',
      'Priority technical support',
    ],
  },
  {
    name: 'Enterprise',
    desc: 'Custom solution for high-volume record management and enterprise needs.',
    priceText: 'Custom',
    priceSuffix: 'Pricing',
    action: 'Contact Sales',
    features: [
      'Unlimited users and role management',
      'Enterprise security and access policies',
      'Custom integrations and API planning',
      'SLA and dedicated customer success support',
    ],
  },
]

const planColumns = [
  { name: 'Free', label: 'For individuals' },
  { name: 'Team', label: 'Most popular', featured: true },
  { name: 'Enterprise', label: 'For regulated scale' },
]

const compareSections = [
  {
    title: 'Platform',
    rows: [
      {
        feature: 'User access',
        values: ['1 user', 'Up to 5 users', 'Unlimited users'],
      },
      {
        feature: 'Dashboard summary cards',
        values: [true, true, true],
      },
      {
        feature: 'Signal trend and channel charts',
        values: ['Basic view', 'Advanced filters', 'Advanced + custom views'],
      },
      {
        feature: 'Role and permission controls',
        values: [false, true, true],
      },
      {
        feature: 'Security controls',
        values: ['Standard', 'Priority controls', 'Enterprise policy set'],
      },
    ],
  },
  {
    title: 'Workflows',
    rows: [
      {
        feature: 'Record edit workflows',
        values: ['Single record edit', 'Bulk-friendly workflows', 'Custom workflow design'],
      },
      {
        feature: 'Monitoring and alerts',
        values: ['Manual follow-up', 'Team monitoring', 'Dedicated monitoring setup'],
      },
      {
        feature: 'Audit activity logs',
        values: [false, true, true],
      },
      {
        feature: 'Release and change management',
        values: ['Latest stable', 'Staged updates', 'Staged + rollback planning'],
      },
    ],
  },
  {
    title: 'Integrations & Support',
    rows: [
      {
        feature: 'API and integration planning',
        values: [false, 'Starter API scope', 'Custom integration support'],
      },
      {
        feature: 'Support channel',
        values: ['Email support', 'Priority technical support', 'Dedicated customer success'],
      },
      {
        feature: 'SLA commitment',
        values: [false, false, true],
      },
    ],
  },
]

const openPricingFaqIndex = ref(0)

const pricingFaqItems = [
  {
    title: 'How does billing work for Signal Registry?',
    content: 'Free has no monthly charge. Team is billed per active user per month. Enterprise pricing is tailored to your deployment scope, support model, and compliance requirements.',
  },
  {
    title: 'Can we pay by invoice?',
    content: 'Invoice-based billing is available for Enterprise plans. Team plans typically use standard monthly billing, and we can review annual procurement options for larger teams.',
  },
  {
    title: 'Can we upgrade or downgrade our plan?',
    content: 'Yes. You can move between Free and Team as your operational needs change. For Enterprise transitions, our team supports migration planning and rollout coordination.',
  },
  {
    title: 'What happens if we cancel our subscription?',
    content: 'You retain access until the current billing period ends. We provide guidance for secure offboarding and data export steps when required by your internal policies.',
  },
  {
    title: 'How is our data protected?',
    content: 'Signal Registry applies authenticated access controls and role-based management options. Enterprise includes advanced policy alignment and dedicated support for governance workflows.',
  },
]

function togglePricingFaq(index) {
  // Behaves like an accordion: one open item at a time.
  openPricingFaqIndex.value = openPricingFaqIndex.value === index ? -1 : index
}
</script>

<template>
  <div>
    <SiteNavbar />

    <!-- Pricing Hero Area -->
    <div class="page-title-area item-bg2">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="pricing-hero-content">
              <span class="pricing-hero-eyebrow">Pricing Plans</span>
              <h1>Flexible pricing for every Signal Registry stage</h1>
              <p>Start with essential monitoring, scale with team collaboration, and move to enterprise-grade governance when your operational scope grows.</p>
              <div class="pricing-hero-actions">
                <RouterLink to="/contact" class="default-btn-one">
                  Request Demo
                  <span />
                </RouterLink>
                <span class="pricing-hero-note">No hidden fees. Cancel anytime.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pricing Area -->
    <section class="pricing-area pricing-area-modern pt-100 pb-70">
      <div class="container">
        <div class="row">
          <div
            v-for="(plan, i) in plans"
            :key="i"
            class="col-lg-4 col-md-6"
            :class="{ 'offset-lg-0 offset-md-3': i === 2 }"
          >
            <div class="single-pricing-box modern-pricing-card" :class="{ featured: plan.featured }">
              <div class="pricing-header">
                <h3>{{ plan.name }}</h3>
                <p>{{ plan.desc }}</p>
              </div>
              <div class="price">
                {{ plan.priceText }}<span>{{ plan.priceSuffix }}</span>
              </div>
              <div class="price-btn">
                <a href="#" class="price-btn-one">{{ plan.action }} <i class="fas fa-chevron-right" /></a>
              </div>
              <ul class="pricing-features">
                <li v-for="(feature, j) in plan.features" :key="j">
                  <i class="fas fa-check" /> {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="plan-compare-area pb-100">
      <div class="container">
        <div class="section-title mb-4">
          <span>Plan Comparison</span>
          <h3>A transparent feature matrix for every stage</h3>
          <p>Compare capabilities side by side and choose the package that fits your operational and compliance requirements.</p>
        </div>

        <div class="plan-compare-card">
          <div class="table-responsive">
            <table class="table plan-compare-table mb-0">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th v-for="column in planColumns" :key="column.name" scope="col" :class="{ 'is-featured-column': column.featured }">
                    <div class="column-head">
                      <span class="column-title">{{ column.name }}</span>
                      <span class="column-subtitle">{{ column.label }}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <template v-for="section in compareSections" :key="section.title">
                  <tr class="section-row">
                    <td colspan="4">{{ section.title }}</td>
                  </tr>
                  <tr v-for="row in section.rows" :key="row.feature">
                    <th scope="row">{{ row.feature }}</th>
                    <td v-for="(value, index) in row.values" :key="`${row.feature}-${index}`">
                      <i v-if="value === true" class="fas fa-check compare-check" aria-hidden="true" />
                      <span v-else-if="value === false" class="compare-dash">-</span>
                      <span v-else>{{ value }}</span>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>

        <div class="plan-compare-note">
          Need a custom deployment model, data residency, or procurement support?
          <RouterLink to="/contact">Talk to our team</RouterLink>
        </div>
      </div>
    </section>

    <section class="pricing-faq-area pb-100">
      <div class="container">
        <div class="section-title mb-4">
          <span>Billing & Security FAQs</span>
          <h3>Answers for pricing, billing, and plan operations</h3>
        </div>

        <div class="faq-accordion">
          <ul class="accordion">
            <li
              v-for="(item, index) in pricingFaqItems"
              :key="item.title"
              class="accordion-item"
            >
              <a
                href="javascript:void(0)"
                class="accordion-title"
                :class="{ active: openPricingFaqIndex === index }"
                @click.prevent="togglePricingFaq(index)"
              >
                <i class="fa fa-plus" />
                {{ item.title }}
              </a>
              <p
                class="accordion-content"
                :class="{ show: openPricingFaqIndex === index }"
              >
                {{ item.content }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<style scoped>
.page-title-area.item-bg2 {
  position: relative;
}

.page-title-area.item-bg2::before {
  background: rgba(16, 18, 37, 0.62);
}

.pricing-hero-content {
  max-width: 760px;
  color: #ffffff;
  padding: 36px 0 28px;
}

.pricing-hero-eyebrow {
  display: inline-flex;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.24);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.pricing-hero-content h1 {
  margin-bottom: 14px;
  color: #ffffff;
  font-size: 44px;
  line-height: 1.2;
}

.pricing-hero-content p {
  margin-bottom: 22px;
  max-width: 690px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 17px;
  line-height: 1.7;
}

.pricing-hero-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.pricing-hero-note {
  color: rgba(255, 255, 255, 0.88);
  font-size: 14px;
  font-weight: 500;
}

.plan-compare-card {
  border: 1px solid #eae8ff;
  border-radius: 18px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 16px 44px rgba(102, 72, 245, 0.1);
}

.plan-compare-table th,
.plan-compare-table td {
  border-color: #f0edff;
  vertical-align: middle;
  padding: 16px 18px;
  font-size: 14px;
  color: #4a4873;
}

.plan-compare-table thead th {
  background: linear-gradient(180deg, #f8f6ff 0%, #f4f1ff 100%);
  border-color: #f0edff;
  color: #22203f;
  font-size: 15px;
  font-weight: 700;
  padding-top: 18px;
  padding-bottom: 18px;
}

.plan-compare-table tbody th {
  min-width: 210px;
  color: #302d57;
  font-weight: 600;
}

.plan-compare-table .section-row td {
  background: #faf9ff;
  color: #5d5891;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.plan-compare-table .column-head {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.plan-compare-table .column-title {
  color: #221f43;
  font-weight: 700;
  line-height: 1.2;
}

.plan-compare-table .column-subtitle {
  color: #726f98;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
}

.plan-compare-table .is-featured-column {
  position: relative;
}

.plan-compare-table .is-featured-column::after {
  content: 'Recommended';
  position: absolute;
  top: 8px;
  right: 12px;
  background: #6648f5;
  color: #ffffff;
  border-radius: 20px;
  padding: 3px 10px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2px;
}

.plan-compare-table .compare-check {
  color: #6648f5;
}

.plan-compare-table .compare-dash {
  color: #a2a0bf;
}

.plan-compare-note {
  margin-top: 18px;
  color: #676488;
  font-size: 14px;
  font-weight: 500;
}

.plan-compare-note a {
  margin-left: 6px;
  color: #6648f5;
  font-weight: 700;
}

@media only screen and (max-width: 767px) {
  .pricing-hero-content {
    padding: 24px 0 12px;
  }

  .pricing-hero-content h1 {
    font-size: 30px;
  }

  .pricing-hero-content p {
    font-size: 15px;
    line-height: 1.65;
  }

  .plan-compare-table th,
  .plan-compare-table td {
    padding: 12px;
    font-size: 13px;
    min-width: 140px;
  }

  .plan-compare-table tbody th {
    min-width: 180px;
  }

  .plan-compare-table .is-featured-column::after {
    position: static;
    display: inline-block;
    margin-top: 6px;
    width: fit-content;
  }
}
</style>