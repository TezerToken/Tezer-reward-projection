import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Trend from "vuetrend"

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(Trend)

new Vue({
  render: h => h(App),
}).$mount('#app')
