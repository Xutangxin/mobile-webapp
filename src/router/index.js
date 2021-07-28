import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('@/views/index/Index');
const List = () => import('@/views/list/List');
const ArticleView = () => import('@/views/article/ArticleView');
const InsView = () => import('@/views/ins/InsView');




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
  }, {
    path: '/article',
    component: ArticleView,
  },
  {
    path: '/ins',
    component: InsView,
  }

]

const router = new VueRouter({
  routes
})

export default router
