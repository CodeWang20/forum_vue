import Element from 'element-ui'

export default {
    user(state){
        if(state.userInfo != null){
            return state.userInfo
        }
        // Element.Message({
        //     message: "请先登录！",
        //     type: 'warning',
        //     center: true
        // });
    },
    username(state){
        if(state.userInfo != null){
            return state.userInfo.username
        }
        // Element.Message({
        //     message: "请先登录！",
        //     type: 'warning',
        //     center: true
        // });
    }
}
