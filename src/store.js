import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
    isLogin: false,
    token: null,
    user: null,
    starLoading: false,
    notification: {
      show: false,
      color: "info",
      message: ""
    }
  },
  mutations: {
    SET_BAR_IMAGE(state, payload) {
      state.barImage = payload
    },
    SET_DRAWER(state, payload) {
      state.drawer = payload
    },
    SET_NOTIFICATION(state, payload) {
      state.notification = payload
    },
    SET_LOADING(state, payload) {
      state.starLoading = payload
    },
    resetState(state) {
      state.isLogin = false;
      state.token = null;
      state.user = null;
    }
  },
  actions: {
    NOTIFICATION_ERROR({ commit }, message) {
      commit('SET_NOTIFICATION', {
        show: true,
        color: "error",
        message: message
      });
    },
    NOTIFICATION_INFO({ commit }, message) {
      commit('SET_NOTIFICATION', {
        show: true,
        color: "info",
        message: message
      });
    },
    SHOW_LOADING({ commit }) {
      commit('SET_LOADING', true);
    },
    HIDE_LOADING({ commit }) {
      commit('SET_LOADING', false);
    },
    clearState({ commit }) {
      commit('resetState');
    },
  },
})
