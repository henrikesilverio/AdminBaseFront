import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import api from './api'
import { setupInterceptors } from './plugins/axiosInterceptor';

Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
  created() {
    setupInterceptors(store);
  },
}).$mount('#app')
