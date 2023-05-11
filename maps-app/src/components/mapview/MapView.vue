<script lang="ts" src="./MapView.ts"/>

<template>
  <div v-if="!isUserLocationReady" class="loading-map">
    <div>
      <h3>Espere por favor</h3>
      <span>Localizando...</span>
    </div>
  </div>

  <div v-show="isUserLocationReady" class="map-container" ref="mapElement"></div>
</template>

<style scoped>
.loading-map {
  align-items: center;
  background-color: rgb(0, 0, 0, 0.8);
  color: white;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999;
}

.map-container {
  height: 100vh;
  position: fixed;
  width: 100vw;
}
</style>