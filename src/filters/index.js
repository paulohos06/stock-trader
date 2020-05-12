import Vue from 'vue'

const currency = value => `R$ ${value.toLocaleString()}`

Vue.filter('currency', currency)
