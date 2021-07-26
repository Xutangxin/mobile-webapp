import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('@/views/index/Index');
const List = () => import('@/views/list/List');



Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: '/index'
  },
  {
    path: "/index",
    component: Index,
  },
  {
    path: "/list",
    component: List,
  }

]

const router = new VueRouter({
  routes
})

export default router
