<script setup>
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'

const route = useRoute()
const sent = ref(false)

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const company = ref('')
const note = ref('')

const plans = {
  free: {
    eyebrow: 'Free plan',
    title: 'Get started free',
    lead: 'Open a single-user Signal Registry workspace. You get the dashboard summary, basic filtering, and the unit list at no monthly charge.',
    price: '$0',
    priceNote: 'per month, one user',
    includes: [
      '1 user',
      'Dashboard summary view',
      'Basic filtering and record listing',
      'Email support',
    ],
    steps: [
      { title: 'Send your details', text: 'Tell us who will use the workspace and which company it belongs to.' },
      { title: 'We open access', text: 'Sinyatek sets up one user on the Free plan and sends the sign-in path.' },
      { title: 'Review your records', text: 'Start from the summary cards, then filter and open individual records.' },
    ],
    formTitle: 'Request free access',
    formLead: 'We use this to open your Free workspace.',
    submitLabel: 'Request free access',
    mailSubject: 'Signal Registry — Free plan',
    defaultNote: 'I want to get started on the Free plan.',
  },
  team: {
    eyebrow: 'Team plan',
    title: 'Start a free trial',
    lead: 'Try Signal Registry with up to five people. The trial includes advanced filters, reporting views, and record update workflows.',
    price: '$29',
    priceNote: 'per month, per user after the trial',
    includes: [
      'Team access for up to 5 users',
      'Advanced filters and reporting views',
      'Record update and monitoring workflows',
      'Priority technical support',
    ],
    steps: [
      { title: 'Name the team', text: 'Share the company and the person who should receive trial access.' },
      { title: 'We open the trial', text: 'Sinyatek prepares a Team workspace and confirms the trial window with you.' },
      { title: 'Work in the panel', text: 'Use filters, reporting views, and monitoring before you decide to continue.' },
    ],
    formTitle: 'Request the trial',
    formLead: 'We use this to open a Team trial workspace.',
    submitLabel: 'Start free trial',
    mailSubject: 'Signal Registry — Team trial',
    defaultNote: 'I want to start a free trial of the Team plan.',
  },
  enterprise: {
    eyebrow: 'Enterprise plan',
    title: 'Contact sales',
    lead: 'Plan a deployment with unlimited users, role controls, custom API work, and a dedicated support contact.',
    price: 'Custom',
    priceNote: 'priced for your deployment',
    includes: [
      'Unlimited users and role management',
      'Enterprise security and access policies',
      'Custom integrations and API planning',
      'SLA and dedicated customer success',
    ],
    steps: [
      { title: 'Describe the scope', text: 'Share the team size, environments, and any procurement or residency needs.' },
      { title: 'We map the rollout', text: 'Sinyatek reviews security, API, and support requirements with you.' },
      { title: 'You get a proposal', text: 'Pricing, SLA, and the implementation path come back as a sales proposal.' },
    ],
    formTitle: 'Talk with sales',
    formLead: 'We use this to start an Enterprise conversation.',
    submitLabel: 'Contact sales',
    mailSubject: 'Signal Registry — Enterprise',
    defaultNote: 'I want to talk with sales about the Enterprise plan.',
  },
}

const plan = computed(() => plans[route.meta.plan])

function onSubmit() {
  const current = plan.value
  const body = [
    `Plan: ${current.title}`,
    `Name: ${firstName.value} ${lastName.value}`,
    `Email: ${email.value}`,
    `Company: ${company.value}`,
    '',
    note.value.trim() || current.defaultNote,
  ].join('\n')

  sent.value = true
  window.location.href = `mailto:iletisim@sinyatek.com?subject=${encodeURIComponent(current.mailSubject)}&body=${encodeURIComponent(body)}`
}
</script>

<template>
  <div v-if="plan" class="plan-action">
    <SiteNavbar />

    <div class="page-title-area item-bg2">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="plan-action__hero">
              <span class="plan-action__eyebrow">{{ plan.eyebrow }}</span>
              <h1>{{ plan.title }}</h1>
              <p>{{ plan.lead }}</p>
              <div class="plan-action__actions">
                <RouterLink to="/pricing" class="default-btn-one">
                  Back to pricing
                  <span />
                </RouterLink>
                <span class="plan-action__price">{{ plan.price }} <small>{{ plan.priceNote }}</small></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="plan-action__body pt-100 pb-100">
      <div class="container">
        <div class="row g-4 align-items-start">
          <div class="col-lg-5">
            <h2>What you get</h2>
            <ul class="plan-action__includes">
              <li v-for="item in plan.includes" :key="item">
                <i class="fas fa-check" aria-hidden="true" />
                <span>{{ item }}</span>
              </li>
            </ul>
            <h2>What happens next</h2>
            <ol class="plan-action__steps">
              <li v-for="step in plan.steps" :key="step.title">
                <strong>{{ step.title }}</strong>
                <span>{{ step.text }}</span>
              </li>
            </ol>
          </div>
          <div class="col-lg-7">
            <div class="contact-form contact-form--pro plan-action__form">
              <div v-if="sent" class="plan-action__sent">
                <h3>Your email app should open with this request.</h3>
                <p>
                  It is addressed to
                  <a href="mailto:iletisim@sinyatek.com">iletisim@sinyatek.com</a>.
                  Send that message and Sinyatek will follow up on the {{ plan.eyebrow.toLowerCase() }}.
                </p>
                <button type="button" class="submit-btn" @click="sent = false">Edit details</button>
              </div>
              <form v-else @submit.prevent="onSubmit">
                <div class="contact-form__head">
                  <h3>{{ plan.formTitle }}</h3>
                  <p>{{ plan.formLead }}</p>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input v-model="firstName" class="form-control" type="text" name="name" required placeholder="First name" autocomplete="given-name">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input v-model="lastName" class="form-control" type="text" name="last_name" required placeholder="Last name" autocomplete="family-name">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input v-model="email" class="form-control" type="email" name="email" required placeholder="Business email" autocomplete="email">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input v-model="company" class="form-control" type="text" name="company_name" required placeholder="Company name" autocomplete="organization">
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <textarea v-model="note" class="form-control" name="message" rows="5" :placeholder="plan.defaultNote" />
                    </div>
                  </div>
                  <div class="col-12">
                    <p class="contact-form__policy">
                      By sending this request, you agree to our
                      <RouterLink to="/terms-condition">terms</RouterLink>
                      and
                      <RouterLink to="/privacy-policy">privacy policy</RouterLink>.
                    </p>
                    <button type="submit" class="submit-btn">{{ plan.submitLabel }}</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
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

.plan-action__hero {
  max-width: 760px;
  color: #ffffff;
  padding: 36px 0 28px;
}

.plan-action__eyebrow {
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

.plan-action__hero h1 {
  margin-bottom: 14px;
  color: #ffffff;
  font-size: 44px;
  line-height: 1.2;
}

.plan-action__hero p {
  margin-bottom: 22px;
  max-width: 690px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 17px;
  line-height: 1.7;
}

.plan-action__actions {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.plan-action__price {
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.1;
}

.plan-action__price small {
  display: block;
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 13px;
  font-weight: 500;
}

.plan-action__body {
  background: #f8fbff;
}

.plan-action__body h2 {
  margin: 0 0 16px;
  color: #393953;
  font-size: 28px;
}

.plan-action__includes,
.plan-action__steps {
  margin: 0 0 32px;
  padding: 0;
  list-style: none;
}

.plan-action__includes li,
.plan-action__steps li {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 14px;
  color: #4a5578;
  line-height: 1.6;
}

.plan-action__includes i {
  margin-top: 6px;
  color: #00b0ee;
  font-size: 12px;
}

.plan-action__steps {
  counter-reset: step;
}

.plan-action__steps li {
  flex-direction: column;
  gap: 4px;
  padding-left: 36px;
  position: relative;
}

.plan-action__steps li::before {
  counter-increment: step;
  content: counter(step);
  position: absolute;
  left: 0;
  top: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #e7f6fd;
  color: #0095ce;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.plan-action__steps strong {
  color: #1d2d52;
}

.plan-action__form {
  background: #ffffff;
  border: 1px solid #e8efff;
  border-radius: 16px;
  box-shadow: 0 8px 28px rgba(20, 34, 66, 0.08);
  padding: 28px 26px;
}

.plan-action__form :deep(.contact-form__policy a) {
  color: #00b0ee;
  font-weight: 700;
}

.plan-action__sent h3 {
  margin-bottom: 10px;
  color: #1d2d52;
  font-size: 28px;
}

.plan-action__sent p {
  margin-bottom: 18px;
  color: #4a5578;
  line-height: 1.65;
}

.plan-action__sent a {
  color: #00b0ee;
  font-weight: 700;
}

@media only screen and (max-width: 767px) {
  .plan-action__hero {
    padding: 24px 0 12px;
  }

  .plan-action__hero h1 {
    font-size: 30px;
  }

  .plan-action__hero p {
    font-size: 15px;
  }
}

html.theme-dark .plan-action__body {
  background: #0b1220;
}

html.theme-dark .plan-action__body h2,
html.theme-dark .plan-action__includes li,
html.theme-dark .plan-action__steps li,
html.theme-dark .plan-action__steps strong,
html.theme-dark .plan-action__sent h3,
html.theme-dark .plan-action__sent p {
  color: #e2e8f0;
}

html.theme-dark .plan-action__form {
  background: #111827;
  border-color: rgba(255, 255, 255, 0.12);
}

html.theme-dark .plan-action__steps li::before {
  background: #0f2740;
  color: #7ddfff;
}
</style>
