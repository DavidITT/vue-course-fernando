<template>
  <h1>Indesicion</h1>
  <img v-if="image" :src="image" alt="image">
  <div class="bg-dark"></div>
  <div class="indecision-container">
    <input type="text" placeholder="Realiza una pregunta" v-model="question">
    <p><b>Nota: Recuerda poner un signo de admiración al final (?).</b></p>
    <div v-if="isValid">
      <h2>{{ question }}</h2>
      <h1>{{ answer }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Indecision",

  data() {
    return {
      question: null,
      answer: null,
      image: null,
      isValid: false,
    }
  },
  methods: {
    async getAnswer() {
      try {
        this.answer = 'Pensando...'
        const {answer, image} = await fetch('https://yesno.wtf/api').then(res => res.json())
        this.answer = answer === 'yes' ? 'Si' : 'No'
        this.image = image
      } catch (error) {
        this.answer = 'No se pudo cargar'
        this.image = null
      }
    }
  },
  watch: {
    question(value, oldValue) {
      this.isValid = false
      console.log({value})
      if (!value.includes('?')) return
      console.log({value})
      //TODO: Realizar peticion http
      this.isValid = true
      this.getAnswer()
    }
  }
}
</script>

<style scoped>

img, .bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
}

input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1, h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}

</style>