import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

import getPageTitle from '@/utils/GetPageTitle'

Vue.use(VueRouter)

// router.

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '主页' },
    children: [
      {
        path: '/Article',
        name: 'Article',
        component: () => import('@/views/Article'),
        meta: { title: '管理文章' }
      },
      {
        path: '/AddArticle',
        name: 'AddArticle',
        component: () => import('@/views/AddArticle'),
        meta: { title: '添加文章' }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
  scrollBehavior: () => ({ y: 0 })
})

router.beforeEach((to, from, next) => {
  document.title = getPageTitle(to.meta.title)
  next()
})

export default router
