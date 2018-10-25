import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  props: ['setUser'],
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/posts',
      components: {
        sidebar: () => import('./components/Sidebar.vue'),
        posts: () => import('./components/Posts.vue')
      }
    },
    {
      path: '/posts/:id',
      name: 'postdetail',
      component: () => import('./views/postdetail.vue')
    }
  ]
})