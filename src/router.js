import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('./views/HomeView.vue'), name: 'HomeView'},
  { path: '/product/', component: () => import('./views/ProductView.vue'), name: 'ProductView'},
  { path: '/about/', component: () => import('./views/AboutView.vue'), name: 'AboutView'},
  { path: '/testimonials/', component: () => import('./views/TestimonialView.vue'), name: 'TestimonialView'},
  { path: '/contact/', component: () => import('./views/ContactView.vue'), name: 'ContactView'},
  { path: '/pricing/', component: () => import('./views/PricingView.vue'), name: 'PricingView'},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router