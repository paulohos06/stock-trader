import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Portfolio from '@/components/Portfolio.vue'
import Stocks from '@/components/Stocks.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/acoes', name: 'Stocks', component: Stocks },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
