<template>
  <div class="newBox">
    <img :src="itemObj.picurl" alt="" />
    <div class="title">{{ itemObj.title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    itemObj: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
};
</script>

<style lang="less" scoped>
.newBox {
  width: 100%;
  background-color: #fff;
  padding: 0.1rem;
  border: 1px solid #e8e8e8;
  // border-radius: 10px;
  break-inside: avoid;
  margin-bottom: 0.15rem;
  img {
    width: 100%;
    // border-radius: 10px;
    display: block;
  }
  .title {
    font-size: 0.28rem;
    text-align: center;
    padding: 0.2rem 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>