import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AlloyFinger from 'alloyfinger/alloy_finger' // 引入手势库
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger_vue' // 引入手势库
import './utils/validator' // 引入表单验证规则
import './utils/customValidator'
import VueI18n from 'vue-i18n'
import 'normalize.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
