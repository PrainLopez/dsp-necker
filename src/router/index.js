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
      path: '/panel',
      name: 'panel',
      component: () => import('../views/PanelView.vue')
    }
  ]
})

export default router
