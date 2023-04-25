<template>
  <h1>Buscar pokemon: {{ pokemonId }}</h1>
  <form @submit.prevent="onSubmit">
    <input type="number"
           v-model="pokemonId"
           placeholder="Numero del pokemon"
           autofocus
           ref="txtSearchId"
    >
  </form>
  <br>
  <span>Presione enter para buscar</span>
</template>

<script>
import {ref, onActivated} from 'vue'
import {useRouter} from 'vue-router'

export default {
  name: "SearchPokemon",
  setup() {
    const router = useRouter()
    const pokemonId = ref(1)
    const txtSearchId = ref()

    onActivated(() => {
      //txtSearchId.value.focus()
      txtSearchId.value.select()
    })

    return {
      pokemonId,
      txtSearchId,
      onSubmit: () => {
        router.push({name: 'pokemon-id', params: {id: pokemonId.value}})
      }
    }
  }
}
</script>

<style scoped>

</style>