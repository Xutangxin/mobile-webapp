<template>
  <div class="insView">
    <HeaderView />
    <div class="insMain" ref="insMain">
      <div class="content">
        <div class="updown">
          <div v-show="isUpDown">下拉刷新</div>
          <div v-show="!isUpDown">
            <div v-show="isLoading">加载中...</div>
            <div v-show="!isLoading">请求成功</div>
          </div>
        </div>
        <div class="insItem" v-for="item in insList" :key="item.id">
          <NewestItem :itemObj="item" />
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
import TabBar from "@/components/tabBar/TabBar";
import NewestItem from "@/components/NewestItem";
import { getInsFun } from "@/network/innerAxios";

export default {
  components: {
    HeaderView,
    TabBar,
    NewestItem,
  },

  data() {
    return {
      insList: [],
      isMore: false,
      isUpDown: true,
      isLoading: true,
      bscroll: null,
      page: 1,
      resData: [],
    };
  },

  created() {
    this.getInsData();
  },

  mounted() {
    this.initScroll();
  },

  methods: {
    //获取文章数据
    async getInsData() {
      await getInsFun(this.page).then((res) => {
        let oldList = this.insList;
        let newList = oldList.concat(res.data);
        this.resData = res.data;
        this.insList = newList;
      });
    },

    //初始化bscroll
    initScroll() {
      this.bscroll = new BScroll(this.$refs.insMain, {
        pullUpLoad: true,
        pullDownRefresh: true,
        click: true,
      });
      this.bscroll.on("pullingUp", this.pullUpFun);
      this.bscroll.on("pullingDown", this.pullDownFun);
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
      await this.getInsData();
      this.bscroll.finishPullUp();
      this.bscroll.refresh();
    },

    //下拉刷新
    async pullDownFun() {
      this.isUpDown = false;
      this.page = 1;
      this.insList = [];
      await this.getInsData();
      this.isLoading = false;
      setTimeout(() => {
        this.bscroll.finishPullDown();
        this.isUpDown = true;
        this.isLoading = true;
      }, 600);
      this.bscroll.refresh();
    },
  },
};
</script>

<style lang="less" scoped>
.insMain {
  padding: 0 0.2rem;
  height: calc(100vh - 2rem);
  overflow: hidden;
  .content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .insItem {
      width: 48%;
      padding-top: 0.2rem;
    }
    .more,
    .updown {
      font-size: 0.28rem;
      color: #888;
      text-align: center;
      line-height: 3em;
      width: 100%;
    }
    .updown {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      transform: translateY(-100%);
    }
  }
}
</style>