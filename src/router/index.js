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
    path: '/chon-mon/:code',
    name: 'ChonMon',
    component: () => import('../views/ChonMon.vue')
  },
  {
    path: '/hoa-don/:code',
    name: 'HoaDon',
    component: () => import('../views/HoaDon.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
