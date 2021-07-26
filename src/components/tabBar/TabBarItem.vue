<template>
  <div class="item">
    <slot name="icon"></slot>
    <slot name="text"></slot>
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
.item {
  height: 100%;
  text-align: center;
  color: #999999;
  .iconfont {
    font-size: 0.5rem;
    display: block;
  }
  &.active {
    color: #31c27c;
  }
}
</style>