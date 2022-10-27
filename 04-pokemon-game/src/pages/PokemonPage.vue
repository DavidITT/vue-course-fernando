<template>
  <div class="d-flex flex-column justify-content-center align-items-center vh-100">

    <div v-if="pokemon">
      <h1 class="mb-5">¿Quien es este pokemon?</h1>
      <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
      <PokemonOptions :options="pokemonArr" @selection="checkAnswer"/>
      <button v-if="answer" class="btn btn-primary" @click="resetGame">Reiniciar</button>
    </div>

    <div v-else class="d-flex flex-column">
      <div class="spinner-border mb-3 text-info" style="width: 6rem; height: 6rem;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <span>Espere ...</span>
    </div>

    <div v-if="answer" class="alert d-flex align-items-center w-100 fixed-top" :class="classMessage" role="alert">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill"
           viewBox="0 0 16 16">
        <path
            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
      </svg>
      <div class="mx-3">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'
import getPokemonsOptions from '@/helpers/getPokemonOptions'

export default {
  name: "PokemonPage",

  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      answer: false,
      message: ' ',
      classMessage: ''
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonsOptions()
      const randomInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[randomInt]
    },
    checkAnswer(pokemonId) {
      if (this.pokemon.id === pokemonId) {
        this.showPokemon = true
        this.answer = true
        this.message = 'Respuesta correcta'
        this.classMessage = 'alert-success'
      } else {
        this.answer = true
        this.message = 'Respuesta incorrecta'
        this.classMessage = 'alert-danger'
      }
    },
    resetGame() {
      this.pokemonArr = []
      this.pokemon = null
      this.showPokemon = false
      this.answer = false
      this.message = ' '
      this.classMessage = ''
      this.mixPokemonArray()

    }
  },
  components: {
    PokemonPicture,
    PokemonOptions
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>

