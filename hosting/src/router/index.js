import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

import store from '@/store/index.js'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component:Login
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: "active",
  base: process.env.BASE_URL,
  routes
})

// router gards
router.beforeEach((to, from, next) => {
  // はログイン画面の場合
  if (to.matched.some(page => {
    // ログイン画面はリダイレクト対象外
    return (page.path === '/login')
  })) {
    next()
  } else {
    // ログイン画面に飛ばす。ログイン後に元の画面に戻れるよう、backuriパラメーターにリダイレクト前のURLを入れる
    next({path: '/login', query: {backuri: to.fullPath}})
  }
})

export default router
