<template>
  <div class="home">
    <h1 class="display-1 font-weight-black text-center mt-4">Stock Trader</h1>
    <p class="subtitle-1 text-center mb-10">Negocie e Consulte suas Ações</p>

    <v-alert :elevation="5" type="info">Você pode salvar e carregar os dados.</v-alert>
    <v-alert
      :elevation="5"
      class="mt-3"
      type="info"
    >Clique em "Finalizar dia" para iniciar um novo dia.</v-alert>
    <v-divider class="my-5" />
    <v-alert :elevation="5" :type="type">Seu saldo hoje: {{ funds }}</v-alert>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters({ funds: 'getFunds' }),
    type() {
      return this.funds >= 300 ? 'success' : 'warning'
    },
  },
}
</script>

<style scoped>
.alerts {
  margin: 1.5em auto;
}
</style>
