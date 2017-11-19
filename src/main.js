// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './assets/css/reset.css'
import './global/rem'

Vue.config.productionTip = false

Vue.use(MintUI)




router.beforeEach((to, from, next) => {
	console.log('==========',to)
	window.document.title = to.name;
	next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
