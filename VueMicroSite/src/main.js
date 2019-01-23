import Vue from 'vue'
import App from './App.vue'
import router from './router'
import anime from 'animejs'
import axios from 'axios'

Vue.config.productionTip = false

// add animejs as property on Vue
Object.defineProperty(Vue.prototype, '$anime', { value: anime });
Object.defineProperty(Vue.prototype, '$axios', { value: axios });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
