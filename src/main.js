// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Toast from './components/Toast/index'

import VueTinymce from './index'

Vue.prototype.$toast = Toast

Vue.config.productionTip = false

Vue.use(VueTinymce)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
