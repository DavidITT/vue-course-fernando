<template>
  <h1>Pokemon: #{{ id }}</h1>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" width="200" height="200">
  </div>
  <!--  <h1>Pokemon: #{{ $route.params.id }}</h1>-->
</template>

<script>
export default {
  name: "PokemonPage",

  props: {
    id: {
      type: Number,
      required: true
    },
  },

  data() {
    return {
      pokemon: null
    }
  },

  methods: {
    async getPokemon() {
      try {
        this.pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(r => r.json())
      } catch (error) {
        this.$router.push('/')
        console.log('No hay nada que hacer aqui')
      }
    }
  },
  watch: {
    id() {
      this.getPokemon()
    }
  },
  created() {
    //const {id} = this.$route.params.id
    //console.log(id)
    //this.id = id
    this.getPokemon()
  }
}
</script>

<style scoped>

</style>