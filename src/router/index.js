import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ExplorePage from '@/pages/ExplorePage.vue'
import FavoritsPage from '@/pages/FavoritsPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'
import Details from '@/pages/Details.vue'

//Auth
import { useAuth } from '@/stores/auth'
import Login from '@/components/AuthComponents/Login.vue'
import Register from '@/components/AuthComponents/Register.vue'
import { storeToRefs } from 'pinia'

//book
import BookTicket from '@/pages/BookTicket.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/explore',
      name: 'Explore',
      component: ExplorePage,
      meta: {
        title: 'Explore'
      }
    },
    {
      path: '/favorits',
      name: 'Favorits',
      component: FavoritsPage,
      meta: {
        title: 'Favorits'
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfilePage,
      meta: {
        title: 'Profile',
        requiresAuth: true
      }
    },
    {
      path: '/details/:id',
      props: true,
      name: 'movie-details',
      component: Details,
      meta: {
        title: 'Details'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: 'Login',
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        title: 'Register',
        requiresGuest: true
      }
    },
    {
      path: '/book-ticket/:id',
      props: true,
      name: '/book-ticket',
      component: BookTicket,
      meta: {
        title: 'book',
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Home'

  const authStore = useAuth()
  const { isAuth } = storeToRefs(authStore)

  if (to.matched.some((record) => record.meta.requiresGuest) && isAuth.value) {
    next({ path: '/' })
  } else if (to.matched.some((record) => record.meta.requiresAuth) && !isAuth.value) {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router
