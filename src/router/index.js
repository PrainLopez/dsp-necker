import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/selector',
      name: 'selector',
      component: () => import('../views/SelectorView.vue')
    },
    {
      path: '/',
      name: 'panel',
      component: () => import('../views/PanelView.vue')
    }
  ]
})

export default router
