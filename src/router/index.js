import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
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
          'Learn about Signal Registry and how Sinyatek helps you track, analyze, and edit signal registration data from a single dashboard.',
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
      path: '/partner',
      redirect: '/404',
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
          'See how Signal Registry is used in real projects to track and manage signal registration data across environments.',
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

  const title = (to.meta && to.meta.title) || DEFAULT_TITLE
  const description = (to.meta && to.meta.description) || DEFAULT_DESCRIPTION

  document.title = title

  let descTag = document.querySelector('meta[name="description"]')
  if (!descTag) {
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
