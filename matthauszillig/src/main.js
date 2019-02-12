import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue);

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
