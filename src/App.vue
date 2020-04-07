<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.axios.get("/user").then(res => {
        // todo use vuex
        console.log(res);
      });
    },
    getCartCount() {
      this.axios.get("/carts/products/count").then(() => {});
    }
  }
};
</script>
<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/button.scss";
@import "./assets/scss/modal.scss";
@import "./assets/scss/base.scss";
</style>
