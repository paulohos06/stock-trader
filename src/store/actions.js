import Vue from 'vue'

export default {
  async loadData({ commit }) {
    const res = await Vue.prototype.$http.get('data.json')
    if (res.data) {
      commit('setStocks', res.data.stocks)
      commit('setStocksPortfolio', {
        funds: res.data.funds,
        stocksPortfolio: res.data.stocksPortfolio,
      })
    }
  },
}
