<template>
  <v-flex class="stock pr-3 pb-3 pt-6" xs12 md6 lg6>
    <v-card class="darken-3 white--text" :class="cardStyle">
      <v-card-title class="body-1">
        <strong>
          {{ stock.name }}
          <small v-if="page === 'Stocks'">(Preço: {{ stock.price }})</small>
          <small v-else>(Preço: {{ stock.price }} | Qte: {{ stock.quantity }})</small>
        </strong>
      </v-card-title>
    </v-card>
    <!-- v-card -->
    <v-card>
      <v-container fill-heigth>
        <v-row>
          <v-col md="7" class="ml-4">
            <v-text-field
              label="Quantidade"
              type="number"
              v-model.number="quantity"
              :error="quantity < 0 || !Number.isInteger(quantity) || manageTransaction"
            />
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <v-btn
              depressed
              class="mt-3 darken-3 white--text"
              :class="cardStyle"
              :disabled="quantity <= 0 || !Number.isInteger(quantity) || manageTransaction"
              @click="transaction"
            >{{ buttonLabel }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <!-- v-card -->
  </v-flex>
</template>

<script>
export default {
  name: 'Stock',
  props: {
    stock: { type: Object, required: true },
    page: { type: String, require: true },
  },
  computed: {
    cardStyle() {
      return this.page === 'Stocks' ? 'green' : 'blue'
    },
    buttonLabel() {
      return this.page === 'Stocks' ? 'Comprar' : 'Vender'
    },
    funds() {
      return this.$store.getters.getFunds
    },
    manageTransaction() {
      if (this.page === 'Stocks') return this.insufficientFunds
      else if (this.page === 'Portfolio') return this.insufficientQuantity
      return false
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds
    },
    insufficientQuantity() {
      return this.quantity > this.stock.quantity
    },
  },
  data() {
    return {
      quantity: 0,
    }
  },
  methods: {
    transaction() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity,
      }
      this.quantity = 0

      if (this.page === 'Stocks') this.$store.dispatch('buyStock', order)
      else this.$store.dispatch('sellStock', order)
    },
  },
}
</script>

<style scoped>
.stock {
  margin-top: 1em;
}
</style>
