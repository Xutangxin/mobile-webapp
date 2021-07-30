<template>
  <div class="headerView">
    <!-- <img src="@/assets/images/logo.png" alt="" /> -->
    <div class="text" @click="goHome">Explore the bigger world</div>
    <div class="search">
      <span class="iconfont icon-search" @click="goSearch"></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      if (this.$route.path !== "/index") {
        this.$router.replace("/index");
      }
    },

    goSearch() {
      this.$router.push("/search");
    },
  },
};
</script>

<style lang="less" scoped>
.headerView {
  width: 100%;
  height: 1rem;
  background-color: #31c27c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.3rem;
  img {
    height: 0.8rem;
  }
  .text {
    font-size: 0.35rem;
    font-weight: bolder;
    color: #fff;
  }

  .search {
    color: #fff;
    span {
      display: block;
      font-size: 0.7rem;
    }
  }
}
</style>