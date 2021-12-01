import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/teams/:id',
    name: 'DetailsTeam',
    component: () => import('../components/DetailsTeam.vue')
  },
  {
    path: '/teams',
    name: 'TeamByArea',
    component: () => import('../views/TeamByArea.vue')
  },
  {
    path: '/players/:id',
    name: 'DetailPlayer',
    component: () => import('../components/DetailPlayer.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
