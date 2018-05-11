// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
//引入index.js（路由配置）
import router from './router'

Vue.config.productionTip = false
Vue.use(VueResource)
//const Vuerouter = new router({
//	mode:"history",
//	base:_dirname,
//	routes:[
//		{path:'/',component:Customers},
//		{path:'/about',component:About}
//	]
//	
//})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
