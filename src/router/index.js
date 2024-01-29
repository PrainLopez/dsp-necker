import { createRouter, createWebHistory } from 'vue-router'
import PanelView from '../views/PanelView.vue'
import SelectorView from '../views/SelectorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/selector',
      name: 'selector',
      component: SelectorView
    },
    {
      path: '/',
      name: 'panel',
      component: PanelView
    }
  ]
})

export default router
