<template>
  <div class="detail">
    <div class="header">
      <div class="icon">
        <span class="iconfont icon-arrow-left"></span>
      </div>
      <div class="title">{{ detail.title }}</div>
    </div>

    <div class="detailTop">
      <div class="title">{{ detail.title }}</div>
      <div class="pic">
        <img :src="detail.picurl" alt="" />
      </div>
    </div>

    <div class="description">
      {{ detail.description }}
    </div>

    <div class="detaMain" v-html="detail.content"></div>

    <div class="detaInfo">
      <div class="row">
        分类：<span>{{ detail.className }}</span>
      </div>
      <div class="row">
        发布时间：<span>{{ formatDate(detail.posttime) }}</span>
      </div>
      <div class="row">
        阅读量：<span>{{ detail.hits }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getDetailFun, getNavFun } from "@/network/innerAxios";
import common from "@/assets/js/common";
export default {
  data() {
    return {
      detail: {},
      id: 0,
      cid: 8,
      type: "img",
    };
  },

  created() {
    this.id = this.$route.query.id;
    console.log(this.id);
    this.getDetailData();
  },

  // mounted() {
  //   this.id = this.$route.query.id;
  //   console.log(this.id);
  // },

  methods: {
    async getDetailData() {
      let res = await getDetailFun(this.id, this.cid, this.type);
      console.log(res);
      let cid = res.data.classid;
      let cidArr = await getNavFun();
      console.log(cidArr.data);
      cidArr.data.forEach((item) => {
        if (item.id == cid) {
          res.data.className = item.classname;
        }
      });

      this.detail = res.data;
    },

    formatDate(time) {
      return common.myDate(time, 3);
    },
  },
};
</script>

<style lang="less" scoped>
.detail {
  .header {
    height: 1rem;
    background: #31c27c;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    .icon {
      flex: 1;
      .iconfont {
        font-size: 0.7rem;
        display: block;
      }
    }
    .title {
      flex: 5;
      font-size: 0.4rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding-left: 0.4rem;
      padding-right: 0.8rem;
    }
  }
}

.detailTop {
  font-size: 0.44rem;
  text-align: justify;
  color: #333;
  display: flex;
  padding: 0.4rem 0.2rem;
  .title {
    width: 70%;
    padding-right: 0.2rem;
  }
  .pic {
    width: 30%;
    img {
      width: 100%;
      display: block;
    }
  }
}

.description {
  font-size: 0.26rem;
  color: #888;
  padding: 0.2rem;
  border-top: 1px solid #efefef;
  line-height: 1.8em;
}

.detaMain {
  //   width: 100%;
  padding: 0.2rem;
  font-size: 0.32rem;
}

.detaInfo {
  font-size: 0.26rem;
  color: #999;
  padding: 0.6rem 0.2rem;
  line-height: 2em;
  .row {
    span {
      font-size: 0.28rem;
      color: #666;
    }
  }
}
</style>

<style scoped>
.detaMain >>> img {
  max-width: 100%;
}
</style>

