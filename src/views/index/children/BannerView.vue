<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="item in bannerList"
          :key="item.id"
          @click="toDetail(item.id, item.classid)"
        >
          <img :src="item.picurl" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
// import { bnrAxios } from "@/network/indexAxios";
import Swiper, { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import { bannerAxios } from "@/network/indexAxios";

Swiper.use([Pagination, Autoplay]);

export default {
  data() {
    return {
      bannerList: [],
    };
  },

  //异步处理同步化， 为了获取数据后再初始化轮播图
  async mounted() {
    await this.getBannerData();
    this.initSwiper();
  },

  methods: {
    //获取banner数据
    async getBannerData() {
      await bannerAxios().then((res) => {
        this.bannerList = res.data;
      });
    },

    //初始化swiper
    initSwiper() {
      this.mySwiper = new Swiper(".banner .swiper-container", {
        loop: true,
        slidesPerView: 1.2,
        centeredSlides: true,
        pagination: {
          el: ".banner .swiper-pagination",
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    },

    //点击去往详情页
    toDetail(id, cid) {
      this.$router.push(`/detail?id=${id}&&cid=${cid}`);
    },
  },
};
</script>

<style lang="less" scoped>
.banner {
  height: 5rem;
  margin-top: 0.2rem;
  .swiper-slide {
    img {
      width: 100%;
      height: 100%;
      transform: scale(0.9);
      transition: 0.3s;
      border-radius: 0.2rem;
    }
    &.swiper-slide-active {
      img {
        transform: scale(1);
        box-shadow: 0 0.08rem 0.12rem rgba(0, 0, 0, 0.2);
      }
    }
  }
  .swiper-container {
    --swiper-pagination-color: #31c37c;
  }
}
</style>