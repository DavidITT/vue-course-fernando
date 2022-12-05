<template>
  <h1>Counte - Vuex</h1>
  <h2>Direct Access: {{ $store.state.counter.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>
  <hr>
  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="incrementRandomInt" :disabled="isLoading">Random</button>
  <hr>
  <h1>Map State</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>

  <h2>Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "Counter",

  //computed: mapState(['count'])

  methods: {
    increment() {
      this.$store.commit('counter/increment')
    },
    incrementBy() {
      this.$store.commit('counter/incrementBy', 5)
    },

    ...mapActions('counter',['incrementRandomInt'])

    /*...mapActions('counter', {
        randomInt: 'incrementRandomInt'
    })*/
  },

  computed: {
    countComputed() {
      return this.$store.state.counter.count
    },

    ...mapState('counter',['state', 'lastMutation','isLoading'])

    /*...mapState({
      count: state => state.count,
      lastMutation: state => state.lastMutation
    })*/
  }


}
</script>

<style scoped>

</style>