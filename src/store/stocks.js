import data from '@/data/stocks'

export default {
  state: {
    stocks: [],
  },
  mutations: {
    setStocks(state, payload) {
      state.stocks = payload
    },
    randomizeStocks(state) {
      state.stocks.map(stock => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.45))
      })
    },
  },
  actions: {
    initStocks(context) {
      context.commit('setStocks', data)
    },
    buyStock({ commit }, order) {
      commit('buyStock', order)
    },
    randomizeStocks(context) {
      context.commit('randomizeStocks')
    },
  },
  getters: {
    getStocks(state) {
      return state.stocks
    },
  },
}
