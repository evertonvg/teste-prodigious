import Vue from 'vue'
import App from './App.vue'
import VueMask from 'v-mask'
import Router from './router'
import {makeServer} from './server'


Vue.config.productionTip = false

if(process.env.NODE_ENV === 'development'){
  makeServer()
}

Vue.use(VueMask)

new Vue({
  router:Router,
  render: h => h(App),
}).$mount('#app') 
