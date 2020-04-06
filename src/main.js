import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLazyLoad from 'vue-lazyload';
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
axios.interceptors.response.use(
  function(response) {
    let res = response.data;
    if (res.status == 0) {
      return res.data;
    } else if (res.status == 10) {
      window.location.href = '/#/login';
      return Promise.reject(res);
    } else {
      window.alert(res.msg);
      return Promise.reject(res);
    }
  },
  (error) => {
    let res = error.response;
    window.alert(res.data.message);
    return Promise.reject(error);
  }
);
Vue.use(VueAxios, axios);
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg',
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
