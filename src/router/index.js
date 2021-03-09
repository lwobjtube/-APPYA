import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';
import Login from '../views/login.vue';
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    }, {
        path: '/home',
        name: 'Home',
        component: Home
    },
    // {
    //     path: '/Test',
    //     name: 'Test',
    //     component: () => import('../components/Test.vue')
    // }

]

const router = new VueRouter({
    routes
});
router.beforeEach((to, from, next) => {
    console.log(to)//   /home
    if(to.fullPath=="/")
        next()
    else {
        let userInfo  =localStorage.getItem("userInfo") 
        if(userInfo!=null && userInfo != "") {
            next()
        }else {
            next("/")
        }
    }
  })

export default router