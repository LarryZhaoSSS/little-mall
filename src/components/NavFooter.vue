<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href target="_blank">
        cl1024最新
        <span>|</span>
      </a>
      <a href target="_blank">
        pornhub
        <span>|</span>
      </a>
      <a href target="_blank">
        twitter
        <span>|</span>
      </a>
      <a href target="_blank">
        facebook
        <span>|</span>
      </a>
      <a href target="_blank">
        google
        <span>|</span>
      </a>
    </div>
    <div class="copyright">Copyright © 2020</div>
  </div>
</template>
<script>
export default {
  name: "nav-footer"
};
</script>
<style lang="scss" scoped>
.footer {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333;
  color: #999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999;
      display: inline-block;
      vertical-align: top;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
}
</style>