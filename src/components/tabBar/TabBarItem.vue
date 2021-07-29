<template>
  <div class="item" :class="isActive" @click="clickTabBar">
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: "/index",
    },
  },

  methods: {
    clickTabBar() {
      this.$router.replace(this.path);
    },
  },

  computed: {
    isActive() {
      return this.$route.path === this.path ? "active" : "";
    },
  },
};
</script>

<style lang="less" scoped>
.item {
  height: 100%;
  text-align: center;
  padding-top: 0.03rem;
  color: #999999;
  .iconfont {
    font-size: 0.4rem;
    display: block;
  }
  &.active {
    color: #31c27c;
  }
}
</style>