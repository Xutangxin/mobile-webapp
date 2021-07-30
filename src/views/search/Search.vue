<template>
  <div class="search">
    <div class="header">
      <div class="icon" @click="goBack">
        <span class="iconfont icon-arrow-left"></span>
      </div>
      <div class="title">搜索</div>
    </div>

    <div class="searchTop">
      <input type="text" class="kwd" v-model="kwd" />
      <input type="button" value="搜索" class="btn" />
    </div>

    <div class="history">
      <div class="top">
        <div class="title">历史记录</div>
        <div class="icon">
          <span class="iconfont icon-ashbin"></span>
        </div>
      </div>
      <div class="list">
        <div class="item">item</div>
        <div class="item">he</div>
        <div class="item">item</div>
        <div class="item">she</div>
        <div class="item">item</div>
        <div class="item">he</div>
        <div class="item">item item</div>
        <div class="item">she</div>
        <div class="item">item</div>
        <div class="item">he</div>
        <div class="item">item</div>
        <div class="item">she</div>
      </div>
    </div>

    <div class="seaMain">
      <div class="row">hello</div>
      <div class="row">hello</div>
      <div class="row">hello</div>
      <div class="row">hello world how are you?</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kwd: "search...",
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>


<style lang="less" scoped>
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
.searchTop {
  height: 0.9rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background: #31c27c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
  input {
    outline: none;
  }
  .kwd {
    width: 80%;
    height: 0.6rem;
    border: none;
    border-radius: 0.06rem;
    padding: 0 0.1rem;
    font-size: 0.36rem;
    color: #555;
  }
  .btn {
    width: 18%;
    border: none;
    height: 0.6rem;
    background: #fff;
    color: #333;
    border-radius: 0.06rem;
  }
}

.history {
  padding: 0.3rem 0.2rem;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 0.3rem;
    }
    .icon {
      .iconfont {
        font-size: 0.45rem;
        display: block;
      }
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    padding: 0.2rem 0;
    .item {
      background: #efefef;
      color: #333;
      padding: 0.1rem 0.2rem;
      font-size: 0.28rem;
      border-radius: 10rem;
      margin-right: 0.2rem;
      margin-bottom: 0.1rem;
    }
  }
}

.noData {
  width: 7.1rem;
  padding: 2rem 0.2rem;
  text-align: center;
  margin: 0 auto;
  font-size: 0.44rem;
  color: #888;
  .iconfont {
    font-size: 2rem;
    padding-bottom: 0.4rem;
  }
}

.seaMain {
  width: 7.1rem;
  padding: 0.2rem;
  margin: 0 auto;
  background: #fafafa;
  border-radius: 0.1rem;
  .row {
    font-size: 0.32rem;
    color: #333;
    line-height: 2.5em;
    padding-left: 0.3rem;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &::before {
      display: block;
      content: "";
      position: absolute;
      width: 0.08rem;
      height: 0.08rem;
      background: #31c27c;
      border-radius: 50%;
      left: 0;
      top: calc(50% - 0.04rem);
      box-shadow: 0 0 0.1rem rgba(49, 194, 124, 0.5);
    }
  }
}
</style>