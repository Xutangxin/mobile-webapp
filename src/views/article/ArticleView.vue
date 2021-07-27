<template>
  <div class="artView">
    <HeaderView />
    <div class="artMain" ref="artMain">
      <div class="content">
        <ArtItem v-for="item in articleList" :key="item.id" :itemObj="item" />
      </div>
    </div>
    <TabBar />
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
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
    };
  },

  async mounted() {
    await this.getArticleData();
    this.initScroll();
  },

  methods: {
    //初始化scroll
    initScroll() {
      new BScroll(this.$refs.artMain, {});
    },

    //获取文章数据
    async getArticleData() {
      await getArticleList().then((res) => {
        this.articleList = res.data;
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
}
</style>