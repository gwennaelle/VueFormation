import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router/dist/vue-router.js'
import App from './App.vue'
import MoviesGrid from './components/MoviesGrid.vue'
import Form from './components/Form'

Vue.config.productionTip = false
Vue.use(VueRouter)

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
