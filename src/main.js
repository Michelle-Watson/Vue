// entry point to vue
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // render app. component inside of a div / element w/ the ID of app
  // Recall: index.html: <div id="app"></div>
  render: h => h(App),
}).$mount('#app')
