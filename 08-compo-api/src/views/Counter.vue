<template>
  <h1>Counter</h1>
  <h3>{{ counter }}</h3>
  <button @click="increase">+</button>
  <button @click="decrease">-</button>
</template>

<script>

import '@/composables/useCounter'
import useCounter from "@/composables/useCounter";

export default {
  name: "Counter",
  setup() {
    const {counter, increase, decrease} = useCounter()
    return {counter, increase, decrease}
  }
}
</script>

