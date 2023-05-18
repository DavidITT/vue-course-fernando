import {defineComponent, ref, watch} from "vue";
import {useMapStore, usePlacesStore} from "@/composables";
import {Feature} from "@/interfaces/places";

export default defineComponent({
    name: "MyLocationBtn",
    setup() {
        const {isLoadingPlaces, places, userLocation} = usePlacesStore()
        const {map, setPlaceMarkers, getRouteBetweenPoints} = useMapStore()
        const activePlace = ref('')

        watch(places, (newPlaces) => {
            activePlace.value = ''
            setPlaceMarkers(newPlaces)
        })

        return {
            isLoadingPlaces,
            places,
            activePlace,
            onPlaceClicked: (place: Feature) => {
                const [lng, lat] = place.center
                activePlace.value = place.id
                map.value?.flyTo({
                    center: [lng, lat],
                    zoom: 14
                })
            },
            getRouteDirections: (place: Feature) => {
                if (!userLocation.value) return
                const [lng, lat] = place.center
                const [starLng, startLat] = userLocation.value
                const start: [number, number] = [starLng, startLat]
                const end: [number, number] = [lng, lat]

                getRouteBetweenPoints(start, end)

            }
        }
    }
})
