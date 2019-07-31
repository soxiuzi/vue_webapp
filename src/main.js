import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AlloyFinger from 'alloyfinger/alloy_finger' // 引入手势库
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger_vue' // 引入手势库
import './utils/validator' // 引入表单验证规则
import './utils/customValidator'
import 'normalize.css'
import fastclick from 'fastclick' // 快速点击，取消移动端300ms延迟
import VConsole from 'vconsole' // 控制台
import VueLazyload from 'vue-lazyload'

// Vue.use(VueLazyload, {
//   preload: 1.3, // 预压高度比例
//   error: 'xxx.png', // 显示错误的图标
//   loading: 'xxx.png', // 图片正在加载时显示的图片
//   attempt: 1 // 图像尝试加载次数
// })


const vConsole = new VConsole()

fastclick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
