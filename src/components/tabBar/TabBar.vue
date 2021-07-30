<template>
  <div class="tabbar">
    <TabBarIetm v-for="item in tabList" :key="item.name" :path="item.path">
      <template v-slot:icon>
        <div class="icon">
          <span class="iconfont" :class="item.icon"></span>
        </div>
      </template>
      <template v-slot:text>
        <div class="text">{{ item.name }}</div>
      </template>
    </TabBarIetm>
  </div>
</template>

<script>
import TabBarIetm from "./TabBarItem.vue";
export default {
  components: {
    TabBarIetm,
  },
  data() {
    return {
      tabList: [
        {
          name: "首页",
          icon: "icon-home-fill",
          path: "/index",
        },
        {
          name: "分类",
          icon: "icon-all-fill1",
          path: "/list",
        },
        {
          name: "灵感",
          icon: "icon-credit-level-fill",
          path: "/ins",
        },
        {
          name: "文章",
          icon: "icon-integral-fill",
          path: "/article",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.tabbar {
  height: 1rem;
  background: #fff;
  border-top: 1px solid #ccc;
  font-size: 0.3rem;
  display: flex;
  justify-content: space-around;
  // .text {
  //   font-size: 0.3rem;
  // }
}
</style>