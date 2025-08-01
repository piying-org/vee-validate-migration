import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'piying',
      component: () => import('../views/PiyingView.vue'),
    },
  ],
})

export default router
