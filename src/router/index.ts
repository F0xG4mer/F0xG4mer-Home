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
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: PageNotFound
    },
    {
      path: '/models',
      name: 'models',
      component: PageNotFound
    },
    {
      path: '/contact',
      name: 'contact',
      component: PageNotFound
    },
    {
      path: '/:catchAll(.*)',
      component: PageNotFound
    }
  ],
})

export default router
