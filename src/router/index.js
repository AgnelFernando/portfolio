import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OpenVla from '../views/blogs/OpenVla.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog/openvla',
    name: 'OpenVla',
    component: OpenVla
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  
]

const router = new VueRouter({
  routes
})

export default router
