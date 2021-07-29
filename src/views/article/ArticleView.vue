<template>
  <div class="artView">
    <HeaderView />
    <div class="artMain" ref="artMain">
      <div class="content">
        <div class="updown">
          <div v-show="isUpDown">下拉刷新</div>
          <div v-show="!isUpDown">
            <div v-show="isLoading">加载中...</div>
            <div v-show="!isLoading">请求成功</div>
          </div>
        </div>
        <div class="artBox" v-for="item in articleList" :key="item.id">
          <ArtItem :itemObj="item" />
        </div>
        <div class="more">
          <div v-show="isMore">正在加载...</div>
          <div v-show="!isMore">没有更多数据了</div>
        </div>
      </div>
    </div>
    <TabBar />
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import PullDown from "@better-scroll/pull-down";
BScroll.use(Pullup);
BScroll.use(PullDown);
import HeaderView from "@/components/HeaderView";
import ArtItem from "@/components/ArtItem";
import TabBar from "@/components/tabBar/TabBar";
import { getArticleList } from "@/network/innerAxios";

export default {
  components: {
    HeaderView,
    TabBar,
    ArtItem,
  },

  data() {
    return {
      articleList: [],
      resData: [],
      isMore: false,
      isUpDown: true,
      isLoading: true,
      bscroll: null,
      page: 1,
    };
  },

  created() {
    this.getArticleData();
  },

  // async mounted() {
  //   await this.getArticleData();
  //   this.initScroll();
  // },
  mounted() {
    this.initScroll();
  },

  methods: {
    //初始化scroll
    initScroll() {
      this.bscroll = new BScroll(this.$refs.artMain, {
        pullUpLoad: true,
        pullDownRefresh: true,
        click: true,
      });
      this.bscroll.on("pullingUp", this.pullUpFun);
      this.bscroll.on("pullingDown", this.pullDownFun);
    },

    //下拉刷新
    async pullDownFun() {
      this.isUpDown = false;
      this.page = 1;
      this.articleList = [];
      await this.getArticleData();
      this.isLoading = false;
      setTimeout(() => {
        this.bscroll.finishPullDown();
        this.isUpDown = true;
        this.isLoading = true;
      }, 600);
      this.bscroll.refresh();
    },

    //触底加载更多
    async pullUpFun() {
      if (!this.resData.length) {
        this.isMore = false;
        this.bscroll.finishPullUp();
        return;
      }
      this.isMore = true;
      this.page++;
      await this.getArticleData();
      this.bscroll.finishPullUp();
      this.bscroll.refresh();
    },

    //获取文章数据
    async getArticleData() {
      await getArticleList(this.page).then((res) => {
        let oldList = this.articleList;
        let newList = oldList.concat(res.data);
        this.resData = res.data;
        this.articleList = newList;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.artMain {
  height: calc(100vh - 2rem);
  overflow: hidden;
  padding: 0 0.2rem;
  .more,
  .updown {
    font-size: 0.28rem;
    color: #888;
    text-align: center;
    line-height: 3em;
  }
  .updown {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    transform: translateY(-100%);
  }
  .artBox {
    padding-top: 0.1rem;
  }
}
</style>