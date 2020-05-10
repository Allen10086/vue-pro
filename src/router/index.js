import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'  // 引入组件
import Login from '@/components/Login'
import Register from '@/components/Register'
import Survey from '@/components/survey'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/survey',
      name: 'survey',
      component: Survey
    }
  ]
})
