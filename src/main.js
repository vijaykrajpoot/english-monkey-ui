import Vue from 'vue'
import BootStrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import App from './App.vue'

Vue.use(BootStrapVue)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
