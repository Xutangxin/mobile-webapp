import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('@/views/index/Index');
const List = () => import('@/views/list/List');
const ArticleView = () => import('@/views/article/ArticleView');



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
    component: ArticleView,
  }, {
    path: '/article',
    component: ArticleView,
  },
  {
    path: '/ins',
    component: ArticleView,
  }

]

const router = new VueRouter({
  routes
})

export default router
