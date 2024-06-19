import { createRouter, createWebHistory } from 'vue-router'

import login from '@/views/login.vue'
import home from '@/views/home.vue'
import Page404 from '@/views/404.vue'

const router = createRouter({
  //路由工作模式
  history: createWebHistory(import.meta.env.BASE_URL),
  //路由规则
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/404',
      name: 'Page404',
      component: Page404
    },
  ]
})
//暴露路由
export default router
