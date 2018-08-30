import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router/dist/vue-router.js'
import App from './App.vue'
import MoviesGrid from './components/MoviesGrid.vue'
import Form from './components/Form'
import VueSocket from 'vue-socket.io'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueSocket, 'http://localhost:5010')

const routes = [
  { path: '/', component: MoviesGrid, ref: 'movieGrid' },
  { path: '/form', component: Form }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
