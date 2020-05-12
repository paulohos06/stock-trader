<template>
  <v-layout row>
    <Stock
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"
      :page="name"
    />
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import Stock from '@/components/Stock.vue'

export default {
  name: 'Portfolio',
  components: { Stock },
  computed: {
    ...mapGetters({ stocks: 'getStocksPortfolio' }),
    name() {
      return this.$options.name
    },
  },
}
</script>
