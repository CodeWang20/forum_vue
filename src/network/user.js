import {request} from "./request";

/**
 * 更新用户信息
 */
export function updateUserInfo(data){
    return request({
        method: "POST",
        url: "profile/updateProfile",
        data: data
    })
}
/**
 * 获取用户信息
 */
export function userProfile(id){
    return request({
        method: "GET",
        url: "profile/userProfile",
        params: {
            id
        }
    })
}
