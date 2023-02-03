import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faX } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faX)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

import VueMask from 'v-mask'
Vue.use(VueMask);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
