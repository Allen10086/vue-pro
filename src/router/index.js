import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home' // 引入组件

/*后台*/
import Admin from '@/components/admin/Admin' // 后台管理模板
import Index from '@/components/admin/Index' // 数据统计
import Page from '@/components/admin/Page' // 页面管理
import Publish from '@/components/admin/Publish' // 发布文章
import Article from '@/components/admin/Article' // 文章管理
import Label from '@/components/admin/Label' // 标签
import File from '@/components/admin/File' // 文件管理
import Link from '@/components/admin/Link' // 友链
import Settings from '@/components/admin/Settings' // 系统设置
/*前台*/
import Template from '@/components/Template' // 首页模板
import Home from '@/components/front/Home' // 首页
import About from '@/components/front/About' // 关于
import Login from '@/components/front/Login' // 后台登录
import Archives from '@/components/front/Archives' // 归档
import Links from '@/components/front/Links' // 归档
import Laboratory from '@/components/front/Laboratory' // 统计


Vue.use(Router)

export default new Router({
    routes: [{
            // 前台展示页面
            path: '/',
            name: 'template',
            component: Template,
            redirect: '/',
            children: [
                { path: '/', name: 'home', component: Home },
                { path: '/about', name: 'about', component: About },
                { path: '/archives', name: 'archives', component: Archives },
                { path: '/link', name: 'link', component: Links },
                { path: '/laboratory', name: 'laboratory', component: Laboratory },
            ]

        },

        // 后台登录
        { path: '/login', name: 'login', component: Login },


        { // 后台页面管理
            path: '/admin',
            name: 'admin',
            component: Admin,
            children: [
                { path: '/admin/index', name: 'index', component: Index },
                { path: '/admin/page', name: 'page', component: Page },
                { path: '/admin/publish', name: 'publish', component: Publish },
                { path: '/admin/article', name: 'article', component: Article },
                { path: '/admin/file', name: 'file', component: File },
                { path: '/admin/label', name: 'label', component: Label },
                { path: '/admin/link', name: 'link', component: Link },
                { path: '/admin/settings', name: 'settings', component: Settings },
            ]
        },

    ]
})