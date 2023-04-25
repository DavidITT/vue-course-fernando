<template>
  <h1>Lista de tarea de Thanos</h1>
  <h4>Pendientes: {{ pending.length }} </h4>
  <hr>
  <button :class="{'active':currentTab === 'all'}" @click="currentTab = 'all'">Todos</button>
  <button :class="{'active':currentTab === 'pending'}" @click="currentTab = 'pending'">Pendientes</button>
  <button :class="{'active':currentTab === 'completed'}" @click="currentTab = 'completed'">Completados</button>
  <div>
    <ul>
      <li :class="{'completed': todo.completed }"
          v-for="todo in getTodosByTab" :key="todo.id"
          @dblclick="toggleTodo(todo.id)">
        {{ todo.text }}
      </li>
    </ul>
  </div>

  <button @click="openModal">Crear Todo</button>

  <modal v-if="isOpen" @on:close="closeModal">
    <template v-slot:header>
      <h2>Crear Tarea</h2>
    </template>
    <template v-slot:body>
      <form @submit.prevent="createTodo(text); isOpen=false">
        <input type="text" placeholder="Ingresa una tarea" v-model="text">
      </form>
      <br>
      <br>
      <button type="submit">Guardar</button>
    </template>
  </modal>

</template>

<script>
import useTodos from "@/composables/useTodos";
import {ref} from "vue";
import Modal from '../components/Modal'

export default {
  name: "TodoVuex",
  components: {Modal},
  setup() {
    const isOpen = ref(false)
    const text = ref('')
    const {currentTab, getTodosByTab, pending, toggleTodo, createTodo} = useTodos()

    return {
      currentTab, getTodosByTab, pending, toggleTodo, createTodo,
      isOpen,
      text,
      openModal: () => isOpen.value = true,
      closeModal: () => isOpen.value = false
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
}

.active {
  background-color: #2c3e50;
  color: white;
}

.completed {
  text-decoration: line-through;
}
</style>