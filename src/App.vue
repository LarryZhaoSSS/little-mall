<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import Storage from './storage/index';
export default {
  mounted() {
    Storage.setItem('a', 1);
  }
};
</script>
<style lang="scss">
@import './assets/scss/reset.scss';
</style>
