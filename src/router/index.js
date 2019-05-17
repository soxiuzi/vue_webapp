import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      meta: {
        title: '关于'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/Login'),
      meta: {
        title: '登录'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let title = to.meta && to.meta.title
  if(title) {
    document.title = title
  }
  // 通过token的存在来判断登录状态
  if(store.getters.token) {
    if(to.path == '/login') {
      next({
        path: '/'
      })
    }else {
      store.dispatch('GetUserInfo').then().catch(err => {
        
      })
      next()
    }
  }else {
    if(to.path == '/login') {
      next()
    }else {
      next('/login')
    }
  }
})

export default router
