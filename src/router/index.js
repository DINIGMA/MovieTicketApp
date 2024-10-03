import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ExplorePage from '@/pages/ExplorePage.vue'
import FavoritsPage from '@/pages/FavoritsPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/explore',
      name: 'Explore',
      component: ExplorePage
    },
    {
      path: '/favorits',
      name: 'Favorits',
      component: FavoritsPage
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfilePage
    }
  ]
})

export default router
