import Vue from "vue";
import VueRouter from "vue-router";

import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import User from "../views/User.vue";
import Mall from "../views/Mall.vue";
import PageOne from "../views/PageOne.vue";
import PageTwo from "../views/PageTwo.vue";

Vue.use(VueRouter)


//1.创建路由组件
//2.将路由与组件进行映射
//3.创建router实例

const routes = [
    {
        path: '/',
        component: Main,
        redirect: '/home',
        children: [
            //子路由
            {path: 'home', component: Home},//首页
            {path: 'user', component: User},//用户管理
            {path: 'mall', component: Mall},//商品管理
            {path: 'page1', component: PageOne},//商品管理
            {path: 'page2', component: PageTwo},//商品管理
        ]
    }
]

const router = new VueRouter({
    routes //(缩写)相当于routes:routes
})

export default router
