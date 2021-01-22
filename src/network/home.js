import {request} from "./request";
import {loginRequest} from "./request";

/**
 * 根据用户id查询作者信息
 */
export function getAuthorInfoById(id){
    return request({
        method: "GET",
        url: "user/authorInfo",
        params: {
            id
        }
    })
}


/**
 * 用户登录
 */
export function login(data) {
    return loginRequest({
        method: 'POST',
        url: 'login',
        data: data
    })
}

/**
 * 查询热门文章
 */
export function hotArticles() {
    return request({
        method: 'GET',
        url: 'article/popular',
    })
}

/**
 * 首页  查询单个
 */
export function getOne() {
    return request({
        method: 'GET',
        url:  'user/one'
    })
}
