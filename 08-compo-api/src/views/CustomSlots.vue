<template>
  <h1>Aprendiendo Slots</h1>
  <button @click="openModal">Abrir Modal</button>
  <modal v-if="isOpen"
         title="Hola mundo"
         @on:close="closeModal">
    <template v-slot:header>
      <h2>Titulo del modal</h2>
    </template>
    <template v-slot:footer>
      <button @click="closeModal">Cerrar</button>
    </template>
    <template v-slot:body>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus acis repellat!</p>
    </template>
    <template v-slot:exposed="{newTitle}">
      <h2>{{ newTitle }}</h2>
    </template>
  </modal>
</template>

<script>
import {ref} from "vue";
import Modal from '../components/Modal'

export default {
  name: "CustomSlots",
  components: {Modal},
  setup() {
    const isOpen = ref(false)
    return {
      isOpen,
      openModal: () => isOpen.value = true,
      closeModal: () => isOpen.value = false
    }
  }
}
</script>

<style scoped>

</style>