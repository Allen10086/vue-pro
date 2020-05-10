// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'             // 引入element-ui 所有组件
import 'element-ui/lib/theme-chalk/index.css'  // 引入element-ui CSS样式
import axios from '../node_modules/axios'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(ElementUI);    // 在vue脚手架中使用ElementUI
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
