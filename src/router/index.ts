import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { transition: 'slide-left' },
    },
    {
      path: '/projects',
      name: 'projects',
      component: PageNotFound,
      meta: { transition: 'slide-right' },
    },
    {
      path: '/models',
      name: 'models',
      component: PageNotFound,
      meta: { transition: 'slide-right' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: PageNotFound,
      meta: { transition: 'slide-right' },
    },
    {
      path: '/:catchAll(.*)',
      component: PageNotFound,
      meta: { transition: 'slide-right' },
    }
  ],
})

export default router
