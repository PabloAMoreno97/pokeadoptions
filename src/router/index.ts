import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdoptionsView from '../views/AdoptionsView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/adoptions',
      name: 'adoptions',
      component: AdoptionsView
    },
    {
      path: '/about',
      name:'about',
      component: AboutView
    }
  ]
})

export default router
