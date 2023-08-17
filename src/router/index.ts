import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: 'navbar'
      },
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: {
        layout: 'dashboard'
      },
      component: DashboardView
    },

    {
      path: '/wallet',
      name: 'wallet',
      meta: {
        layout: 'dashboard'
      },
      // route level code-splitting
      // this generates a separate chunk (Wallet.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WalletView.vue')
    },
    {
      path: '/payroll',
      name: 'payroll',
      meta: {
        layout: 'dashboard'
      },
      // route level code-splitting
      // this generates a separate chunk (Payroll.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PayrollView.vue')
    },
  ]
})

export default router