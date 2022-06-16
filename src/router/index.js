import Vue from 'vue'

// 引入 vueRouter
import Router from 'vue-router'

// 注册 vueRouter
Vue.use(Router)

export const constantRoutes  = [
    {
        path: '/',
        redirect: { name: 'home' }
    },
    {
        path: '/Home',
        name: "home",
        component:() => import('@/views/home/index')
    },
    {
        path: '/Channel',
        name: "channel",
        component:() => import('@/views/channel/index')
    },
    {
        path: '/Hotspot',
        name: "hotspot",
        component:() => import('@/views/hotspot/index')
    },{
        path: '/Mine',
        name: "mine",
        component:() => import('@/views/mine/index')
    },
]

export default new Router({
    mode: "history", // 去掉url中的#
    routes: constantRoutes,
});
