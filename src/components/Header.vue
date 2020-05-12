<template>
  <v-app-bar app dense>
    <v-toolbar-title class="title text-uppercase mr-12">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn text small to="/">Início</v-btn>
      <v-btn text small to="/portfolio">Portfólio</v-btn>
      <v-btn text small to="/acoes">Ações</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text small @click="endDay">Finalizar Dia</v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text small v-on="on">Opções</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in menuItems" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-layout align-center>
        <span
          text
          small
          class="text-uppercase caption grey--text text--darken-1"
          >Saldo: {{ funds | currency }}</span
        >
      </v-layout>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      menuItems: [
        { id: 0, title: 'Salvar dados' },
        { id: 1, title: 'Carregar dados' },
      ],
    }
  },
  computed: {
    funds() {
      return this.$store.getters.getFunds
    },
  },
  methods: {
    ...mapActions(['randomizeStocks']),
    endDay() {
      this.randomizeStocks()
    },
  },
}
</script>

<style scoped></style>
