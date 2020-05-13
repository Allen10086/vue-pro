import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'  // 引入组件
import Login from '@/components/Login'
import Register from '@/components/Register'
import Survey from '@/components/survey'
import Admin from '@/components/Admin'               // 后台管理
import Index from '@/components/admin/Index'         // 仪表盘
import Page from '@/components/admin/Page'           // 页面管理
import Publish from '@/components/admin/Publish'       // 发布文章
import Article from '@/components/admin/Article'     // 文章管理
import Label from '@/components/admin/Label'         // 标签
import File from '@/components/admin/File'           // 文件管理
import Link from '@/components/admin/Link'           // 友链
import Settings from '@/components/admin/Settings'   // 系统设置

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: 'Home'},
    {path: '/home', component: Home},
    {path: '/login', name: 'login', component: Login},
    {path: '/register', name: 'register', component: Register},
    {path: '/survey', name: 'survey', component: Survey},
    { // 后台页面管理
      path: '/admin', name: 'admin', component: Admin,
      children:
        [
          {path: '/admin/index', name: 'index', component: Index},
          {path: '/admin/page', name: 'page', component: Page},
          {path: '/admin/publish', name: 'publish', component: Publish},
          {path: '/admin/article', name: 'article', component: Article},
          {path: '/admin/file', name: 'file', component: File},
          {path: '/admin/label', name: 'label', component: Label},
          {path: '/admin/link', name: 'link', component: Link},
          {path: '/admin/settings', name: 'settings', component: Settings},
        ]
    },

  ]
})
