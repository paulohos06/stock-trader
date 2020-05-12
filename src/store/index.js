import Vue from 'vue'
import Vuex from 'vuex'

import stocks from '@/store/stocks'
import portfolio from '@/store/portfolio'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { stocks, portfolio },
})
