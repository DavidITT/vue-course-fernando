<script lang="ts" src="./SearchResults.ts"></script>

<template>
  <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
    <h5>Cargando</h5>
    <p>Espere por favor...</p>
  </div>
  <ul class="list-group mt-3" v-else-if="places.length > 0" v-for="place in places" :key="place.id">
    <li class="list-group-item list-group-item-action p-3"
        :class="{'active' : place.id === activePlace}"
        @click="onPlaceClicked(place)">
      <h5>{{ place.text }}</h5>
      <p class="small">{{ place.place_name }}</p>
      <div class="d-flex justify-content-end">
        <button class="btn btn-sm btn-outline-primary"  :class="(place.id === activePlace) ? 'btn-outline-light' : 'btn-outline-primary'"
                @click.self="getRouteDirections(place)">
          Direcciones
        </button>
      </div>
    </li>
  </ul>
</template>

<style scoped>

li {
  cursor: pointer;
}

p {
  font-size: 12px;
  color: #989595;
}

h5 {
  font-size: 16px;
}

.active{
  background-color: #092943;
  color: white;
}

</style>