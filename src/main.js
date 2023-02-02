import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import VueMask from 'v-mask'
Vue.use(VueMask);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
