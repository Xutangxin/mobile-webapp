<template>
  <div class="listLeft">
    <div
      class="row"
      :class="activeId == item.id ? 'active' : ''"
      @click="clickRow(item.id)"
      v-for="item in listLeftArr"
      :key="item.id"
    >
      {{ item.classname }}
    </div>
  </div>
</template>

<script>
import { getNavFun } from "@/network/innerAxios";
export default {
  data() {
    return {
      listLeftArr: [],
      activeId: 47,
    };
  },

  created() {
    this.getLeftData();
  },

  methods: {
    getLeftData() {
      getNavFun().then((res) => {
        this.listLeftArr = res.data;
      });
    },

    clickRow(id) {
      this.activeId = id;
      this.$emit("onIdChange", id);
    },
  },
};
</script>

<style lang="less" scoped>
.listLeft {
  background: #f8f8f8;
  height: 100%;
  .row {
    line-height: 1rem;
    padding-left: 0.25rem;
    font-size: 0.3rem;
    border-bottom: 1px solid #e8e8e8;
    color: #333;
    &.active {
      background: #fff;
      color: #31c27c;
    }
  }
}
</style>