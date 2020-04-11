<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>
          {{title}}
          <slot name="tip"></slot>
        </h2>
      </div>
      <div class="username">
        <a href="javascript:;">{{username}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    title: String
  },
  computed: {
    ...mapState(["username"])
  }
};
</script>

<style lang="scss" >
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "../assets/scss/base.scss";
.order-header {
  padding: 30px 0;
  .header-logo {
    display: inline-block;
    width: 55px;
    height: 55px;
    background-color: #ff6600;
    float: left;
    a {
      display: inline-block;
      width: 110px;
      height: 55px;
      &:before {
        content: "";
        @include bgImg(55px, 55px, "/imgs/mi-logo.png");
        transition: margin 0.2s;
      }
      &:after {
        @include bgImg(55px, 55px, "/imgs/mi-home.png");
        content: "";
      }
      &:hover:before {
        margin-left: -55px;
        transition: margin 0.2s;
      }
    }
  }
  .title,
  .username {
    display: inline-block;
    height: 55px;
    line-height: 55px;
  }
  .title {
    font-size: 28px;
    float: left;
    margin-left: 54px;
    color: #333333;
    span {
      font-size: 14px;
      margin-left: 17px;
      color: #999999;
      font-weight: bold;
    }
  }
  .username {
    float: right;
    a {
      color: #666666;
      font-size: 16px;
    }
  }
}
</style>
