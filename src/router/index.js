import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:username',
        component:Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
        path: '/:username/blogs/edit',
        name: 'Edit',
        component: () => import("@/views/Article/Edit.vue")
    },
    {
        path: '/:username/blogs/edit/:id',
        name: 'Edit',
        component: () => import("@/views/Article/Edit.vue")
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: () => import("@/views/Article/Detail.vue")
    },{
        path: '/:username/home',
        name: 'UserHome',
        component: () => import("@/views/User/Home.vue")
    },{
        path: '/:username/article',
        name: 'Article',
        component: () => import("@/views/Article/Article.vue")
    }
]

// 解决重复点击路由报错的BUG
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err)
}


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
