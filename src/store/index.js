import Vue from 'vue'
import Vuex from 'vuex'

import stocks from '@/store/stocks'
import portfolio from '@/store/portfolio'
import actions from '@/store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: { stocks, portfolio },
})
