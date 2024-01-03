import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/NeckerView.vue')
    },
    {
      path: '/utility',
      name: 'utility',
      component: () => import('../views/UtilityView.vue')
    }
  ]
})

export default router
