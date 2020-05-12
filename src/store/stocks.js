import data from '@/data/stocks'

export default {
  state: {
    stocks: [],
  },
  mutations: {
    setStocks(state, payload) {
      state.stocks = payload
    },
  },
  actions: {
    initStocks(context) {
      context.commit('setStocks', data)
    },
    buyStock({ commit }, order) {
      commit('buyStock', order)
    },
  },
  getters: {
    getStocks(state) {
      return state.stocks
    },
  },
}
