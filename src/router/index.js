import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () =>
    import ('views/home/home')
    //1.安装插件
Vue.use(VueRouter)

const routes = [{
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home
        }
    ]
    //2.创建路由对象
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router