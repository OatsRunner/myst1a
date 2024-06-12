import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import a from '@/views/a.vue'
import b from '@/views/b.vue'
import c from '@/views/c.vue'

const router = createRouter({
  //路由工作模式
  history: createWebHistory(import.meta.env.BASE_URL),
  //路由规则
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/a',
      name: 'a',
      component: a
    },
    {
      path: '/b',
      name: 'b',
      component: b
    },
    {
      path: '/c',
      name: 'c',
      component: c
    }
  ]
})
//暴露路由
export default router
