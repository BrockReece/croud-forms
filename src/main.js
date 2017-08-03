import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.use(require('croud-vue-semantic'))

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
})
