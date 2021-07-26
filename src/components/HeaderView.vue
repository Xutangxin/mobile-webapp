<template>
  <div class="headerView">
    <img src="@/assets/images/logo.png" alt="" />
    <div class="search">
      <span class="iconfont icon-search"></span>
    </div>
  </div>
</template>

<script>
export default {};
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

  .search {
    color: #fff;
    span {
      display: block;
      font-size: 0.7rem;
    }
  }
}
</style>