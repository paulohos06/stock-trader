export default {
  state: {
    stocks: [],
    funds: 1000,
  },
  mutations: {
    buyStock(state, payload) {
      const record = state.stocks.find(item => item.id === payload.id)
      if (record) {
        record.quantity += payload.quantity
      } else {
        state.stocks.push({
          id: payload.id,
          quantity: payload.quantity,
        })
      }
      state.funds -= payload.quantity * payload.price
    },
    sellStock(state, payload) {
      const record = state.stocks.find(item => item.id === payload.id)
      if (record.quantity > payload.quantity) {
        record.quantity -= payload.quantity
      } else {
        state.stocks.splice(state.stocks.indexOf(record.id), 1)
      }
      state.funds += payload.quantity * payload.price
    },
  },
  actions: {
    sellStock(context, order) {
      context.commit('sellStock', order)
    },
  },
  getters: {
    getStocksPortfolio(state, getters) {
      return state.stocks.map(stock => {
        const record = getters.getStocks.find(item => item.id === stock.id)
        return {
          id: stock.id,
          name: record.name,
          price: record.price,
          quantity: stock.quantity,
        }
      })
    },
    getFunds(state) {
      return state.funds
    },
  },
}
