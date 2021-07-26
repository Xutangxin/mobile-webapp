<template>
  <div class="article">
    <ArtItem v-for="item in artArrList" :key="item.id" :itemObj="item" />
  </div>
</template>

<script>
import ArtItem from "@/components/ArtItem.vue";
export default {
  components: {
    ArtItem,
  },
  data() {
    return {
      artArrList: [
        {
          id: 1,
          title: "title1",
          time: "2020-02-02",
          hits: 22,
        },
        {
          id: 2,
          title: "title2",
          time: "2020-02-02",
          hits: 33,
        },
        {
          id: 3,
          title: "title2",
          time: "2020-02-02",
          hits: 33,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
</style>

