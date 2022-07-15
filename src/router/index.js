import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/',
        redirect: '/page'
      },
      {
        path: '/page',
        name: 'page',
        component: () => import('@/views/Page')
      },
      {
        path: '/find',
        name: 'find',
        component: () => import('@/views/Find')
      },
      {
        path: '/consulting',
        name: 'consulting',
        component: () => import('@/views/Consulting')
      },
      {
        path: '/myde',
        name: 'myde',
        component: () => import('@/views/Myde')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
