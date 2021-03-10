import {request} from "./request";


/**
 * 根据用户id获取收藏夹信息
 */
export function favorites (userId){
    return request({
        method: "GET",
        url: "favorites/all",
        params: {
            userId
        }
    })
}
/**
 * 根据用户id获取收藏信息 
 */
export function collection (params){
    return request({
        method: "GET",
        url: "collect/collection",
        params: {
            userId: params.userId,
            favId: params.favId
        }
    })
}

/**
 * 根据id删除文章 
 */
export function deleteBlog(id){
    return request({
        method: "GET",
        url: "article/deleteBlog",
        params: {
            id
        }
    })
}

/**
 * 获取所有板块信息
 */
export function getAllPlate(){
    return request({
        method: 'GET',
        url: 'plate/findAll',
    })
}

/**
 * 发布文章 
 */
export function creation(data){
    return request({
        method: "POST",
        url: "article/creation",
        data: data
    })
}

/**
 * 收藏文章
 */
export function collectArticles(data){
    return request({
        method: "GET",
        url: "collect/addCollect",
        params:{
            userId: data.userId,
            articleId: data.articleId
        }
    })
}

/**
 * 取消收藏文章
 */
export function cancelCollectArticles(data){
    return request({
        method: "GET",
        url: "collect/cancelCollect",
        params:{
            userId: data.userId,
            articleId: data.articleId
        }
    })
}
/**
 * 根据文章id查询单条文章
 */
export function getArticleById(id){
    return request({
        method: 'GET',
        url: 'article/detail',
        params:{
            id
        }
    })
}
/**
 * 根据文章id和当前用户id查询该用户是否收藏文章
 */
export function isCollected(data){
    return request({
        method: 'GET',
        url: 'collect/isCollected',
        params:{
            userId: data.userId,
            articleId: data.articleId
        }
    })
}
/**
 * 用户点击访问文章后，更新浏览量 
  */
export function addPageviews(id){
    return request({
        method: 'GET',
        url: "article/updateViews",
        params:{
            id
        }
    })
}


/**
 * 用户点击访问文章后，更新浏览量 
  */
 export function selfBlogs(data){
    return request({
        method: 'GET',
        url: "article/selfBlogs",
        params: data
    })
}