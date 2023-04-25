<template>
  <h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>

  <template v-else>
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name"/>
    <br>
  </template>

  <router-link :to="{name:'pokemon-search'}">Regresar</router-link>

</template>

<script>
import {watch} from 'vue'
import {useRoute, onBeforeRouteLeave} from 'vue-router'
import usePokemon from "@/composables/usePokemon"

export default {
  name: "Pokemon",

  setup() {
    const route = useRoute()
    const {errorMessage, isLoading, pokemon, searchPokemon} = usePokemon(route.params.id)

    onBeforeRouteLeave( () => {
      const answer = window.confirm('¿Esta seguro que desea salir?')
      if(!answer) return false //bloquea la salida
    })

    watch(
        () => route.params.id,
        () => searchPokemon(route.params.id)
    )

    return {
      errorMessage,
      isLoading,
      pokemon
    }
  }
}
</script>
