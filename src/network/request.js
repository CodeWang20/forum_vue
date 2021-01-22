import axios from "axios";
import Element from 'element-ui'


axios.defaults.baseURL='http://127.0.0.1:8080/forum/'
/**通用请求 */
export function request(config) {
    const instance = axios.create({
        dataType: 'json',
        headers:
            {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            }
    });

    // 响应拦截
    instance.interceptors.response.use(config=>{
        if(config.data.msg != ""){
            Element.Message({
                message: config.data.msg,
                type: 'success',
                center: true
            });
        }
        return config.data
    },error => {
        return error
    })
    return instance(config)
}
/**登录用请求 */
export function loginRequest(config) {
    const instance = axios.create({
        dataType: 'json',
        headers:
            {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            }
    });

    // 响应拦截
    instance.interceptors.response.use(config=>{
        if(config.data.code == 200){
            Element.Message({
                message: config.data.msg,
                type: 'success',
                center: true
            });
            return config
        }
        Element.Message({
            message: config.data.msg,
            type: 'error',
            center: true
        });
        return Promise.reject(config.data.msg);
    },error => {
    })
    return instance(config)
}