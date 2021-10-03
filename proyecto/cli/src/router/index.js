import Vue from 'vue'
import VueRouter from 'vue-router'
import Productos from '../admmin/Productos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router