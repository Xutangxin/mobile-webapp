<template>
  <div class="index">
    <HeaderView />
    <BannerView />
    <Newest />
    <ArtView />
    <TabBar />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import BannerView from "./children/BannerView.vue";
import Newest from "./children/Newest.vue";
import ArtView from "./children/ArtView.vue";
import TabBar from "@/components/tabBar/TabBar.vue";

export default {
  components: {
    HeaderView,
    BannerView,
    Newest,
    ArtView,
    TabBar,
  },
};
</script>

<style>
</style>