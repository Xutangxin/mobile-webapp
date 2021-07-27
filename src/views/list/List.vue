<template>
  <div class="list">
    <HeaderView />
    list
    <TabBar />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView";
import TabBar from "@/components/tabBar/TabBar";

export default {
  components: {
    HeaderView,
    TabBar,
  },
};
</script>

<style lang="less" scoped>
</style>