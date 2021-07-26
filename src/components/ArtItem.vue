<template>
  <div class="artItem">
    <div class="pic">
      <img src="@/assets/images/pic1.jpg" alt="" />
    </div>
    <div class="text">
      <div class="title">{{ itemObj.title }}</div>
      <div class="info">
        <div class="time">
          <i class="iconfont icon-clock"></i>
          {{ itemObj.time }}
        </div>
        <div class="hits">
          <i class="iconfont icon-browse"></i>
          {{ itemObj.hits }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemObj: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>


<style lang="less" scoped>
.artItem {
  border: 1px solid #e8e8e8;
  display: flex;
  height: 1.6rem;
  margin-bottom: 0.2rem;
  .pic {
    width: 35%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text {
    font-size: 0.26rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 65%;
    padding: 0.1rem;
    .title {
      font-size: 0.28rem;
      font-weight: 600;
      color: #333;
    }
    .info {
      display: flex;
      justify-content: space-between;
      color: #888;
    }
  }
}
</style>