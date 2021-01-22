import {_local} from"../utils/storage"

export default {
    SET_TOKEN(state, token){
        state.token = token
        localStorage.setItem("token", token)
    },
    DELETE_TOKEN(state){
        state.token=null
        localStorage.removeItem("token")
    },
    SET_USERINFO(state, userInfo){
        state.userInfo = userInfo
        sessionStorage.setItem("userInfo", JSON.stringify(userInfo))
    },
    DELETE_USERINFO(state){
        state.userInfo = null
        sessionStorage.removeItem("userInfo")
    }
}
