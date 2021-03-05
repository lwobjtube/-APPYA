import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home.vue';
Vue.use(VueRouter)

const routes =[
    {
        path:'/',
        name:'home',
       component:home
    },{
        path:'/minsse',
        name:'minsse',
        component:()=>import('../views/minsse.vue')
    },{
        path: '/login',
        name: 'login',
       component:()=>import('../views/login.vue')
    },
    {
        path: '/Test',
        name: 'Test',
       component:()=>import('../components/Test.vue')
    }



]

const router =new VueRouter({
    mode:'history',
    base:process.env.BASE_URL,
    routes
})

export default router