<template>
  <div class="newest">
    <NewestItem v-for="item in listArr" :key="item.id" :itemObj="item" />
  </div>
</template>

<script>
import NewestItem from "@/components/NewestItem";
export default {
  components: {
    NewestItem,
  },

  data() {
    return {
      listArr: [
        {
          id: 1,
          picurl: require("@/assets/images/pic1.jpg"),
          title: "hello world",
        },
        {
          id: 2,
          picurl: require("@/assets/images/pic2.jpg"),
          title: "hello world",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.newest {
  background-color: #f6f6f6;
  padding: 0.3rem 0.2rem;
  margin-top: 0.3rem;
  column-count: 2;
  column-gap: 0.15rem;
}
</style>