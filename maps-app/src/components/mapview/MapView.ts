import {defineComponent, onMounted, ref, watch} from "vue";
import Mapboxgl from "mapbox-gl";
import {usePlacesStore, useMapStore} from "@/composables";

export default defineComponent({
    name: 'MapView',
    setup() {
        const mapElement = ref<HTMLDivElement>()
        const {userLocation, isUserLocationReady} = usePlacesStore()
        const {setMap} = useMapStore()

        const initMap = async () => {
            if ( !mapElement.value ) throw new Error('Div Element no exits');
            if ( !userLocation.value ) throw new Error('user location no existe');

            await Promise.resolve()

            const map = new Mapboxgl.Map({
                container: mapElement.value!, // container ID
                style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
                center: userLocation.value,
                zoom: 15 // starting zoom
            });

            const myLocationPopup = new Mapboxgl.Popup({offset:[0,-30]})
                .setLngLat(userLocation.value)
                .setHTML(`<h4>Aqui estoy</h4><p>Actualmente en el trabajo</p><p>${userLocation.value}</p>`)

            const myLocationMarker = new Mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopup)
                .addTo(map)

            //TODO: Establecer mapa en vuex

            setMap(map)

        }

        onMounted(() => {
            if (isUserLocationReady.value) return initMap()
        })

        watch(isUserLocationReady, (newVal) => {
            if (isUserLocationReady.value) initMap()
        })

        return {
            isUserLocationReady, mapElement
        }
    }
})