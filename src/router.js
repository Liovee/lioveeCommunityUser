import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import About from './components/About.vue'
import Welcome from './components/Welcome.vue'
import Users from './components/User/Users.vue'
import Ours from './components/User/Ours.vue'
Vue.use(Router)


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // } ,
    // {
    //   path: '/Demo',
    //   name: 'Demo',
    //   component: () => import('./views/Demo.vue')
    // }
    { path:'/', redirect:'/login' },
    { path:'/login', component: Login },
    { path:'/home', component: Home ,redirect:'/welcome',
    children:[
        {path:'/welcome',component:Welcome},
        {path:'/users',component:Users},
        {path:'/ours',component:Ours}
    ]},
    { path:'/about', component: About },
  ]
})
//挂载路由导航守卫

router.beforeEach((to,from,next) =>{
  if(to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})
export default  router