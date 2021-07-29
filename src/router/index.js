import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('@/views/index/Index');
const List = () => import('@/views/list/List');
const ArticleView = () => import('@/views/article/ArticleView');
const InsView = () => import('@/views/ins/InsView');
const Detail = () => import('@/views/detail/Detail');


Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: '/index'
  },
  {
    path: "/index",
    component: Index,
    meta: {
      keepAlive: true,
      title: '首页'
    }
  },
  {
    path: "/list",
    component: List,
    meta: {
      keepAlive: true,
      title: '分类'
    }
  }, {
    path: '/article',
    component: ArticleView,
    meta: {
      keepAlive: true,
      title: '文章'
    }
  },
  {
    path: '/ins',
    component: InsView,
    meta: {
      keepAlive: true,
      title: '灵感'

    }
  },
  {
    path: '/detail',
    component: Detail,
    meta: {
      title: '详情'
    }
  }

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router
