import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { autoRoutes } from '../utils/routes'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/1-Test',
      component: () => import('@/layout/index.vue'),
      children: autoRoutes
    }
  ]
})

export default router
