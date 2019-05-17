import {
  loginByUserInfo,
  getUserInfo
} from '_api/login'
import {
  setLocalStorage
} from '_utils/localStorage'

const user = {
  state: {
    userInfo: '',
    token: '',
  },

  mutations: {
    // 设置用户信息
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    // 设置token
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },

  actions: {
    // 登录
    LoginByUserInfo({
      commit
    }, userInfo) {
      // 通过账户名和密码登录，成功后保存返回的用户信息
      // return new Promise((resolve, reject) => {
      //   loginByUserInfo(userInfo).then(res => {
      //     setLocalStorage() // 保存token到localStorage
      //     commit('SET_TOKEN')
      //   })
      // })
    },

    // 获取用户信息
    GetUserInfo({
      commit
    }) {
      // 获取用户信息
      // getUserInfo().then(res => {
      //   commit('SET_USERINFO')
      // })
    }
  }
}


export default user
