import Vue from 'vue'
import VueAxios from './plugins/axios'
import VueGtag from 'vue-gtag'

import '@/assets/css/main.css'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueAxios)
Vue.use(VueGtag, {
  config: { id: 'UA-113251543-3' }
}, router)

Vue.filter('capitalize', (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
})

Vue.filter('kilo', (value) => {
  return `${+(value / 1000).toFixed(1)}k`
})

Vue.filter('secToTime', (sec, dotNotation = false) => {
  const min = Math.floor(sec / 60)
  let newSec = Math.floor(sec - min * 60)
  newSec = newSec < 10 ? '0' + newSec : newSec

  return dotNotation ? `${min}:${newSec}` : `${min}m${newSec}s`
})

Vue.filter('percent', (value) => {
  return `${+value.toFixed(1)}%`
})

Vue.filter('round', (value, decimals = 2) => {
  return parseFloat(value.toFixed(decimals))
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
