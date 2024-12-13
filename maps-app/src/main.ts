import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRldjk3IiwiYSI6ImNtNG5idjMyZTA2dTkyaXExcXYwNWozZTkifQ.1B91NC3fayRT3VgV5bEwbw';

if(!navigator.geolocation){
    alert('Tu navegador no soporta la GeoLocation')
    throw new Error('Tu navegador no soporta la GeoLocation')
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
