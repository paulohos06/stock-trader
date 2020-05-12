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
import Stock from '@/components/Stock.vue'

export default {
  name: 'Stocks',
  components: { Stock },
  computed: {
    stocks() {
      return this.$store.getters.getStocks
    },
    name() {
      return this.$options.name
    },
  },
}
</script>

<style scoped></style>
