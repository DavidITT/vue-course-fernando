import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "About" */ '../views/AboutView.vue')
  },
  {
    path: '/counter',
    name: 'counter',
    component: () => import(/* webpackChunkName: "Counter" */ '../views/Counter.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "Users" */ '../views/UsersView.vue')
  },
  {
    path: '/pokemon-search',
    name: 'pokemon-search',
    component: () => import(/* webpackChunkName: "Search Pokemon" */ '../views/SearchPokemon.vue')
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon-id',
    component: () => import(/* webpackChunkName: "Pokemon" */ '../views/Pokemon.vue')
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import(/* webpackChunkName: "Vuex" */ '../views/TodoVuex.vue')
  },
  {
    path: '/slots',
    name: 'slots',
    component: () => import(/* webpackChunkName: "Slots" */ '../views/CustomSlots.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
