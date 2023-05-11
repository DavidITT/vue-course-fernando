<script lang="ts" src="./SearchBar.ts"></script>

<template>
  <div class="searchbar-container">
    <input type="text" class="form-control" placeholder="Bucar lugares" v-model="searchTerm">
    <SearchResults/>
  </div>

</template>

<style scoped>

.searchbar-container {
  position: fixed;
  top: 30px;
  left: 30px;
  background-color: white;
  z-index: 999;
  box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.1);
  width: 350px;
  border-radius: 5px !important;
  overflow: hidden;
  padding: 5px;
}

</style>