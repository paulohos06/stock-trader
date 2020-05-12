<template>
  <v-app>
    <Header />
    <v-content>
      <v-container>
        <transition
          mode="out-in"
          enter-active-class="animated fadeInUp"
          leave-active-class="animated fadeOut"
        >
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components: { Header },
  created() {
    this.$store.dispatch('initStocks')
  },
}
</script>
