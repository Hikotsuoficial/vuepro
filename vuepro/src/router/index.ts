import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import index from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: index
  },
  {
    path: '/profiles',
    name: 'profiles',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfilePage/ProfileSection.vue')
  },
  {
    path: '/us',
    name: 'us',
    component: index
  },
  {
    path: '/contact',
    name: 'contact',
    component: index
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
