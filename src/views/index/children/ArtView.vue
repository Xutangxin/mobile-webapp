<template>
  <div class="article">
    <ArtItem v-for="item in artArrList" :key="item.id" :itemObj="item" />
  </div>
</template>

<script>
import ArtItem from "@/components/ArtItem.vue";
import { articleAxios } from "@/network/indexAxios";
export default {
  components: {
    ArtItem,
  },
  data() {
    return {
      artArrList: [],
    };
  },

  mounted() {
    this.getArticleData();
  },

  methods: {
    getArticleData() {
      articleAxios({
        url: "/getArticle.php",
      }).then((res) => {
        this.artArrList = res.data;
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>

