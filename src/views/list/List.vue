<template>
  <div class="list">
    <HeaderView />
    <div class="listMain">
      <div class="listNav">
        <ListLeft @onIdChange="handleIdChange" />
      </div>
      <div class="listCon">
        <ListRight :myCid="myCid" />
      </div>
    </div>
    <TabBar />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView";
import TabBar from "@/components/tabBar/TabBar";
import ListLeft from "./children/ListLeft.vue";
import ListRight from "./children/ListRight.vue";

export default {
  components: {
    HeaderView,
    TabBar,
    ListLeft,
    ListRight,
  },

  data() {
    return {
      myCid: 47,
    };
  },

  methods: {
    handleIdChange(data) {
      this.myCid = data;
    },
  },
};
</script>

<style lang="less" scoped>
.listMain {
  width: 100%;
  height: calc(100vh - 2rem);
  overflow: hidden;
  font-size: 0.3rem;
  display: flex;
  justify-content: space-between;
  .listNav {
    // flex: 1;
    width: 22%;
    text-align: center;
  }
  .listCon {
    // flex: 4;
    width: 78%;
  }
}
</style>