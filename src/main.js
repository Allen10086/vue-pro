import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' // 引入element-ui 所有组件
import 'element-ui/lib/theme-chalk/index.css' // 引入element-ui CSS样式
import axios from '../node_modules/axios'

import Router from 'vue-router'; //如果已引用，不需要重复引用
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}
import mavonEditor from 'mavon-editor' // 引入markdown 所有组件
import 'mavon-editor/dist/css/index.css'




Vue.prototype.$axios = axios;
Vue.config.productionTip = false

Vue.use(ElementUI); // 在vue脚手架中使用ElementUI
Vue.use(mavonEditor) // markdown  挂在到全局
    // Vue.use(router)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})