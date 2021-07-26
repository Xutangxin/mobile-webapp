<template>
  <div class="index">
    <HeaderView />
    <BannerView />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import BannerView from "./children/BannerView.vue";

export default {
  components: {
    HeaderView,
    BannerView,
  },
};
</script>

<style>
</style>