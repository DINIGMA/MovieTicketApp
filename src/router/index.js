import { createRouter, createWebHistory } from 'vue-router'

//pages
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
import Checkout from '@/pages/Checkout.vue'

//Profile
import YourTickets from '@/pages/Settings/YourTickets.vue'
import PersonalData from '@/pages/Settings/PersonalData.vue'
import TicketDetails from '@/pages/Settings/TicketDetails.vue'

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
      name: 'book-ticket',
      component: BookTicket,
      meta: {
        title: 'booking',
        requiresAuth: true
      }
    },
    {
      path: '/book-ticket/checkout',
      name: 'checkoutTicket',
      component: Checkout,
      meta: {
        title: 'checkout',
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage,
      meta: {
        title: 'Profile',
        requiresAuth: true
      }
    },
    {
      path: '/profile/personal-data',
      name: 'personalData',
      component: PersonalData,
      meta: {
        title: 'Personal Data',
        requiresAuth: true
      }
    },
    {
      path: '/profile/your-tickets',
      name: 'yourTickets',
      component: YourTickets,
      meta: {
        title: 'Tickets',
        requiresAuth: true
      }
    },
    {
      path: '/profile/your-tickets/:id',
      props: true,
      name: 'ticketDetails',
      component: TicketDetails,
      meta: {
        title: 'Ticket Details',
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
