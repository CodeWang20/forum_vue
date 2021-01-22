import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      userLoginInfo: {
          id: "",
          username: "",
          name: "",
          sex: "",
          age: "",
          email: "",
          telephone: "",
          nickname: "",
          created: "",
          last_login: "",
          status: ""
      },
      token: ''
  },
  mutations: {
      SET_TOKEN(state, token){
          state.token = token
          sessionStorage.token = token
      },
      DELETE_TOKEN(state){
          state.token=''
          sessionStorage.removeItem("token")
      },
      SET_USER_LOGIN_INFO(state, userInfo){
          state.userLoginInfo = userInfo
          localStorage.userLoginInfo = userInfo
      },
      DELETE_USER_LOGIN_INFO(state, userInfo){
          state.userLoginInfo = ''
          localStorage.removeItem("userLoginInfo")
      }
  },
  actions: {
  },
  modules: {
  }
})
