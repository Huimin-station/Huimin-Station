import { createRouter, createWebHistory } from 'vue-router'
import TouchGoods from '@/views/TouchGoods.vue'
import NewGoods from '@/views/NewGoods.vue'

import LoginPage from '@/views/Login/LoginPage.vue'
import HomePage from '@/views/HomePage/HomePage.vue'
import IntroductionPage from '@/views/IntroductionPage/IntroductionPages.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {path:"/",redirect:"/login"},
    {path:"/home",component:HomePage,children:[{path:"/home/news",component:NewGoods},{path:"/home/touch",component:TouchGoods}]},
    {path:"/introduction",component:IntroductionPage},
    {path:"/login",component:LoginPage}
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    ,
    {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
