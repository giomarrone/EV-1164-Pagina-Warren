import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../Pages/Home.vue'
import NewUser from '../Pages/NewUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/register',
    name: 'Register',
    component: NewUser
  }
]

const router = new VueRouter({
  routes
})

export default router