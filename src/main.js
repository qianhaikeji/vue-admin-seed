import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app'
import store from './store'
import routers from './router'
import ElementUI from 'element-ui'
import VueMoment from 'vue-moment'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueMoment)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: routers,
  store: store,
  template: '<app/>',
  components: { app }
})

