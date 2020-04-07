import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
    cartCount: 0,
  },
  mutations: {
    saveUserName(state, username) {
      state.username = username;
    },
    saveCartCount(state, count) {
      state.cartCount = count;
    },
  },
  actions: {
    saveUserName(context, username) {
      context.commit('saveUserName', username);
    },
    saveCartCount(context, count) {
      context.commit('saveCartCount', count);
    },
  },
  modules: {},
});
