import { createRouter, createWebHistory } from 'vue-router'
import { documentMeta } from '@/utils/language'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const behavior = reduce ? 'auto' : 'smooth'

    if (savedPosition) {
      return { ...savedPosition, behavior }
    }
    if (to.hash) {
      return { el: to.hash, behavior }
    }
    return { top: 0, behavior }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Signal Registry — Signal registration management panel by Sinyatek',
        description:
          "Signal Registry is Sinyatek's signal registration management panel. Track signal records in one place with summary cards, trend and channel charts, and an editable unit table.",
      },
    },
    {
      path: '/home-2',
      redirect: '/404',
    },
    {
      path: '/home-3',
      redirect: '/404',
    },
    {
      path: '/home-4',
      redirect: '/404',
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About — Signal Registry',
        description:
          'Signal Registry is Sinyatek’s enterprise platform for governed signal registration operations, reporting, and controlled record administration.',
      },
    },
    {
      path: '/cart',
      redirect: '/404',
    },
    {
      path: '/coming-soon',
      redirect: '/404',
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: 'Contact — Signal Registry',
        description:
          'Get in touch with Sinyatek for access to Signal Registry, implementation details, and support for your signal registration workflows.',
      },
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FaqView.vue'),
      meta: {
        title: 'FAQ — Signal Registry',
        description:
          'Frequently asked questions about Signal Registry, access, security, and how the signal registration dashboard works.',
      },
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
      meta: {
        title: 'Blog — Signal Registry',
        description:
          'Read insights, best practices, and product updates from Signal Registry and Sinyatek.',
      },
    },
    {
      path: '/partner',
      redirect: '/404',
    },
    {
      path: '/get-started-free',
      name: 'get-started-free',
      component: () => import('../views/PlanActionView.vue'),
      meta: {
        plan: 'free',
        title: 'Get Started Free — Signal Registry',
        description:
          'Request a free Signal Registry workspace for one user, with dashboard summary, basic filtering, and email support.',
      },
    },
    {
      path: '/start-free-trial',
      name: 'start-free-trial',
      component: () => import('../views/PlanActionView.vue'),
      meta: {
        plan: 'team',
        title: 'Start Free Trial — Signal Registry',
        description:
          'Request a Signal Registry Team trial for up to five users, with advanced filters, reporting, and priority support.',
      },
    },
    {
      path: '/contact-sales',
      name: 'contact-sales',
      component: () => import('../views/PlanActionView.vue'),
      meta: {
        plan: 'enterprise',
        title: 'Contact Sales — Signal Registry',
        description:
          'Talk with Sinyatek about an Enterprise Signal Registry deployment, including roles, API planning, and an SLA.',
      },
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('../views/PricingView.vue'),
      meta: {
        title: 'Pricing — Signal Registry',
        description:
          'Explore pricing and engagement options for Signal Registry, Sinyatek’s signal registration management panel.',
      },
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyPolicyView.vue'),
      meta: {
        title: 'Privacy Policy — Signal Registry',
        description:
          'Read how Sinyatek and Signal Registry collect, use, and protect your personal data when you use the signal registration management panel.',
      },
    },
    {
      path: '/terms-condition',
      name: 'terms-condition',
      component: () => import('../views/TermsConditionView.vue'),
      meta: {
        title: 'Terms & Conditions — Signal Registry',
        description:
          'Usage terms and conditions for Signal Registry, the signal registration management panel provided by Sinyatek.',
      },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: {
        title: 'Projects — Signal Registry',
        description:
          'Signal Registry is Sinyatek’s enterprise project for controlled signal registration, operational reporting, and authorized record administration.',
      },
    },
    {
      path: '/api',
      name: 'api',
      component: () => import('../views/ApiView.vue'),
      meta: {
        title: 'API Documentation — Signal Registry',
        description:
          'Signal Registry API documentation: authentication, registry management endpoints, and integration details for your applications.',
      },
    },
    {
      path: '/services',
      redirect: '/404',
    },
    {
      path: '/service-details',
      redirect: '/404',
    },
    {
      path: '/product-details',
      redirect: '/404',
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/Error404View.vue'),
      meta: {
        title: 'Page not found — Signal Registry',
        description: 'The page you are looking for could not be found in Signal Registry.',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
  ],
})

const DEFAULT_TITLE = 'Signal Registry — Signal registration management panel by Sinyatek'
const DEFAULT_DESCRIPTION =
  "Signal Registry is Sinyatek's signal registration management panel. Track signal records in one place with summary cards, trend and channel charts, and an editable unit table."

router.afterEach((to) => {
  if (typeof document === 'undefined') return

  // Use per-route SEO metadata and fall back to global defaults.
  const localized = documentMeta(to.name)
  const title = localized?.title || (to.meta && to.meta.title) || DEFAULT_TITLE
  const description = localized?.description || (to.meta && to.meta.description) || DEFAULT_DESCRIPTION

  document.title = title

  let descTag = document.querySelector('meta[name="description"]')
  if (!descTag) {
    // Ensure description meta exists for crawlers and social preview tools.
    descTag = document.createElement('meta')
    descTag.setAttribute('name', 'description')
    document.head.appendChild(descTag)
  }
  descTag.setAttribute('content', description)

  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', title)

  const ogDesc = document.querySelector('meta[property="og:description"]')
  if (ogDesc) ogDesc.setAttribute('content', description)

  const twitterTitle = document.querySelector('meta[name="twitter:title"]')
  if (twitterTitle) twitterTitle.setAttribute('content', title)

  const twitterDesc = document.querySelector('meta[name="twitter:description"]')
  if (twitterDesc) twitterDesc.setAttribute('content', description)
})

export default router
