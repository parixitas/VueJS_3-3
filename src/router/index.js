import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardsView from '../views/CardsView.vue'
import ScrollView from '../views/ScrollView.vue'
import ThrowView from '../views/ThrowView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cards',
      name: 'cards',
      component: CardsView
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: ScrollView
    },
    {
      path: '/throw',
      name: 'throw',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ThrowView
    }
  ]
})

export default router
