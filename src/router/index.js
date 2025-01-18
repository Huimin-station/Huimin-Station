import { createRouter, createWebHistory } from 'vue-router'
import TouchGoods from '@/views/TouchGoods.vue'
import NewGoods from '@/views/NewGoods.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:"/news",component:NewGoods},
    {path:"/touch",component:TouchGoods}
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
