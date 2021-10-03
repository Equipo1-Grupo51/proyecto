import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import './views/style.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

//importando las paginas de /views
import Home from './views/index.vue'
import Login from './views/login.vue'
import Admin from './views/admin.vue'
import Tienda from './views/tienda.vue'


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)

axios.defaults.baseURL = 'http://localhost:3000/api';

Vue.config.productionTip = false

//creando las rutas de navegación.
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login},
  { path: '/admin', component: Admin},
  { path: '/tienda', component: Tienda}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
