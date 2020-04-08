<template>
  <div class="nav-bar" :class="{'isFixed':isFixed}">
    <div class="container">
      <div class="pro-title">小米8</div>
      <div class="pro-param">
        <a href="javascript:;">概述</a>
        <span>|</span>
        <a href="javascript:;">参数</a>
        <span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  data() {
    return {
      isFixed: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.initHeight, false);
  },
  methods: {
    initHeight() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > 160 ? true : false;
    }
  }
};
</script>

<style lang="scss" >
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
.nav-bar {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid #e5e5e5;
  background-color: $colorG;
  &.isFixed {
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 2px 2px lighten($colorE, 30%);
  }
  .container {
    display: flex;
    justify-content: space-between;
    .pro-title {
      font-size: $fontH;
      color: $colorB;
      font-weight: bold;
    }
    .pro-param {
      font-size: $fontJ;
      color: $colorC;
      span {
        margin: 0 10px;
      }
      a {
        color: $colorC;
      }
    }
  }
}
</style>