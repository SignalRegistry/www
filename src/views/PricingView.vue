<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'

const plans = [
  {
    name: 'Free',
    desc: 'One authorized user, for record review and summary reporting.',
    priceText: '$0',
    priceSuffix: 'per user, monthly',
    action: 'Request access',
    actionTo: '/get-started-free',
    features: [
      'One authorized user',
      'Summary view',
      'Record listing and standard filters',
      'Email support',
    ],
  },
  {
    name: 'Team',
    desc: 'A defined operating group, for shared reporting and record administration.',
    priceText: '$29',
    priceSuffix: 'per user, monthly',
    action: 'Request a trial',
    actionTo: '/start-free-trial',
    featured: true,
    features: [
      'Access for up to five users',
      'Advanced filters and reporting',
      'Record updates and monitoring',
      'Priority technical support',
    ],
  },
  {
    name: 'Enterprise',
    desc: 'A governed deployment, arranged with Sinyatek for scope, policy, and support.',
    priceText: 'Custom',
    priceSuffix: 'Engagement',
    action: 'Request a briefing',
    actionTo: '/contact-sales',
    features: [
      'Unlimited users and role administration',
      'Enterprise access policy',
      'Integration planning',
      'Service commitment and dedicated support',
    ],
  },
]

const planColumns = [
  { name: 'Free', label: 'Single user' },
  { name: 'Team', label: 'Operating group', featured: true },
  { name: 'Enterprise', label: 'Governed deployment' },
]

const compareSections = [
  {
    title: 'Platform',
    rows: [
      {
        feature: 'User access',
        values: ['One user', 'Up to five users', 'Unlimited users'],
      },
      {
        feature: 'Dashboard summary cards',
        values: [true, true, true],
      },
      {
        feature: 'Trend and channel reports',
        values: ['Standard view', 'Advanced filters', 'Advanced and custom views'],
      },
      {
        feature: 'Role and permission controls',
        values: [false, true, true],
      },
      {
        feature: 'Security controls',
        values: ['Standard controls', 'Priority controls', 'Enterprise policy'],
      },
    ],
  },
  {
    title: 'Workflows',
    rows: [
      {
        feature: 'Record administration',
        values: ['Single record', 'Defined workflows', 'Custom workflow design'],
      },
      {
        feature: 'Monitoring and alerts',
        values: ['Manual review', 'Team monitoring', 'Dedicated monitoring'],
      },
      {
        feature: 'Audit records',
        values: [false, true, true],
      },
      {
        feature: 'Change management',
        values: ['Current release', 'Staged updates', 'Staged release with rollback'],
      },
    ],
  },
  {
    title: 'Integrations and support',
    rows: [
      {
        feature: 'API and integration planning',
        values: [false, 'Defined API scope', 'Arranged with Sinyatek'],
      },
      {
        feature: 'Support channel',
        values: ['Email', 'Priority technical support', 'Dedicated support'],
      },
      {
        feature: 'Service commitment',
        values: [false, false, true],
      },
    ],
  },
]

const pricingHero = `${import.meta.env.BASE_URL}pricing-hero.jpg`.replace(/([^:]\/)\/+/g, '$1')

const openPricingFaqIndex = ref(0)

const pricingFaqItems = [
  {
    title: 'How is Signal Registry billed?',
    content: 'Free carries no monthly charge. Team is billed per active user each month. Enterprise terms are arranged according to deployment scope, support, and compliance requirements.',
  },
  {
    title: 'Is invoice billing available?',
    content: 'Invoice billing is available for Enterprise. Team is billed monthly. Annual procurement may be arranged for a larger operating group.',
  },
  {
    title: 'Can an engagement be changed?',
    content: 'Movement between Free and Team is available as the operating requirement changes. An Enterprise transition, including migration and rollout, is planned with Sinyatek.',
  },
  {
    title: 'What follows cancellation?',
    content: 'Access continues until the end of the current billing period. Offboarding and export are provided where internal policy requires them.',
  },
  {
    title: 'How is data protected?',
    content: 'Access is authenticated. Role-based administration is available on Team and Enterprise. Enterprise includes policy alignment and dedicated support for governance.',
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
    <div class="page-title-area page-title-area--pricing">
      <div class="container">
        <div class="pricing-hero-layout">
          <div class="pricing-hero-content">
            <span class="pricing-hero-eyebrow">Pricing</span>
            <h1>Defined terms for Signal Registry</h1>
            <p>Signal Registry is offered in three engagements. Scope, access, and support are set according to the operating requirement.</p>
            <div class="pricing-hero-actions">
              <RouterLink to="/contact" class="default-btn-one">
                Request a briefing
                <span />
              </RouterLink>
              <span class="pricing-hero-note">Defined procedures. Enterprise support.</span>
            </div>
          </div>
          <figure class="pricing-hero-figure">
            <img :src="pricingHero" alt="Signal Registry operational reporting" />
            <figcaption>
              <strong>Signal Registry</strong>
              <span>Operational reporting</span>
            </figcaption>
          </figure>
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
                <RouterLink :to="plan.actionTo" class="price-btn-one">
                  {{ plan.action }} <i class="fas fa-chevron-right" />
                </RouterLink>
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
          <span>Scope</span>
          <h3>Capability by engagement</h3>
          <p>The table sets out access, workflow, and support for each engagement.</p>
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
          A custom deployment, data residency, or procurement arrangement is confirmed with Sinyatek.
          <RouterLink to="/contact">Contact us</RouterLink>
        </div>
      </div>
    </section>

    <section class="pricing-faq-area pb-100">
      <div class="container">
        <div class="section-title mb-4">
          <span>Billing and governance</span>
          <h3>Pricing, billing, and operating terms</h3>
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
.page-title-area--pricing {
  height: auto !important;
  min-height: 0 !important;
  background-image: none !important;
  background-color: #071422 !important;
  background:
    radial-gradient(720px 320px at 88% 0%, rgba(0, 176, 238, 0.16), transparent 62%),
    linear-gradient(180deg, #071422 0%, #0c1c33 100%) !important;
  position: relative;
  overflow: hidden;
  padding: 132px 0 76px;
}

.page-title-area--pricing::before {
  content: none;
  display: none;
}

.pricing-hero-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
  gap: 48px;
  align-items: center;
}

.pricing-hero-figure {
  margin: 0;
  border-radius: 18px;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.32);
}

.pricing-hero-figure img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1024 / 558;
  object-fit: cover;
  object-position: center 42%;
}

.pricing-hero-figure figcaption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 13px 16px;
  background: #f6f8fc;
  border-top: 1px solid #e6ecf5;
}

.pricing-hero-figure figcaption strong {
  color: #1e4fa3;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
}

.pricing-hero-figure figcaption span {
  min-width: 0;
  color: #5f6f95;
  font-size: 13px;
  line-height: 1.4;
  text-align: right;
}

.pricing-hero-content {
  position: relative;
  z-index: 2;
  max-width: 560px;
  color: #ffffff;
  padding: 0;
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
  content: 'Principal';
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

@media only screen and (max-width: 991px) {
  .page-title-area--pricing {
    padding: 118px 0 48px !important;
  }

  .pricing-hero-layout {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .pricing-hero-content {
    max-width: 100%;
  }

  .pricing-hero-figure figcaption {
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
  }

  .pricing-hero-figure figcaption span {
    text-align: left;
  }
}

@media only screen and (max-width: 767px) {
  .page-title-area--pricing {
    padding: 108px 0 36px !important;
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