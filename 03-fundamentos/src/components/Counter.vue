<template>
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <p data-testid="counter">{{ counter }} </p>

  <div class="buttons">
    <button v-on:click="decrease()">-</button>
    <button @click="increase()">+</button>
  </div>
</template>

<script>
export default {
  props:{
    title:String,
    start:{
      type:Number,
      default:100,
      validator(value) {
        return value >= 0
      }
      //required:true
    }
  },
  name: "Counter",

  data() {
    return {
      counter: this.start
    }
  },
  methods: {
    increase() {
      this.counter++
    },
    decrease() {
      this.counter--
    }
  },
  computed: {
    squareCounter() {
      return this.counter * this.counter
    },
    customTitle(){
      //return this.title ?  this.title : 'Counter'
      return this.title || 'Counter'
    }
  }
}
</script>

<style>

button {
  background-color: #41B883;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: rgb(8, 65, 48);
  transition: 0.3s ease-in-out;
}

</style>