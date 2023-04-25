<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <p>{{ ironman }}</p>
    <p>{{ hulk }}</p>

    <button @click="changeIronMan">Cambiar IronMan</button>
    <button @click="changeHulk">Cambiar Hulk</button>

    <h3>Ironman: {{ ironmanIsAlive }}</h3>
    <h3>Hulk: {{ hulkIsAlive }}</h3>

    <button @click="changeStatus">Cambiar </button>
  </div>
</template>

<script>

import {ref, reactive} from "vue";

export default {
  name: 'HomeView',
  setup() {
    const ironman = ref({name: 'Tony', age: 50})
    const hulk = reactive({name: 'Bruce', age: 45}) //Solo funciona con objetos

    const ironmanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)

    const changeStatus = () => {
        hulkIsAlive.value = !hulkIsAlive.value
    }

    return {
      ironman,
      hulk,
      //Methods
      ironmanIsAlive,
      hulkIsAlive,
      changeStatus,
      changeIronMan: () => {
        ironman.value.name = 'Tony Stark'
        ironman.value.age = 55
      },
      changeHulk: () => {
        hulk.name = 'Bruce Banner'
        hulk.age = 60
      }
    }
  }
}
</script>
