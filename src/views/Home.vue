<template>
  <div class="home">
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export default {
  name: 'Home',
  components: {
    NavHeader,
    NavFooter
  }
};
</script>
