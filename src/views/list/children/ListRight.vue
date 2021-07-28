<template>
  <div class="listRight" ref="listRight">
    <div class="content">
      <div class="itemRow" v-for="item in listArr" :key="item.id">
        <NewestItem :itemObj="item" />
      </div>

      <div class="more">
        <div v-show="isMore">正在加载中...</div>
        <div v-show="!isMore">没有更多数据了</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

import { getListFun } from "@/network/innerAxios";
import NewestItem from "@/components/NewestItem";
BScroll.use(Pullup);

export default {
  props: ["myCid"],

  components: {
    NewestItem,
  },

  data() {
    return {
      isMore: false,
      listArr: [],
      resData: [],
      bscroll: null,
      page: 1,
      cid: 47,
    };
  },

  async mounted() {
    await this.getListData();
    this.initScroll();
  },

  watch: {
    myCid(val) {
      this.cid = val;
      this.listArr = [];
      this.page = 1;
      this.bscroll.scrollTo(0, 0, 400);
      this.getListData();
      this.bscroll.refresh();
    },
  },

  methods: {
    initScroll() {
      this.bscroll = new BScroll(this.$refs.listRight, {
        pullUpLoad: true,
        click: true,
      });
      this.bscroll.on("pullingUp", this.pullupFun);
    },

    // 触底方法
    async pullupFun() {
      this.isMore = true;
      if (!this.resData.length) {
        this.isMore = false;
        this.bscroll.finishPullUp();
        return;
      }
      this.page++;
      await this.getListData();
      this.bscroll.finishPullUp();
      this.bscroll.refresh();
    },

    async getListData() {
      await getListFun(this.page, this.cid).then((res) => {
        let oldList = this.listArr;
        let nsList = oldList.concat(res.data);
        this.listArr = nsList;
        this.resData = res.data;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.listRight {
  padding: 0 0.1rem;
  height: 100%;
  overflow: hidden;
  .content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .itemRow {
      padding-top: 0.1rem;
      width: 49%;
    }
    .more {
      font-size: 0.28rem;
      color: #888;
      text-align: center;
      line-height: 3em;
      width: 100%;
    }
  }
}
</style>
