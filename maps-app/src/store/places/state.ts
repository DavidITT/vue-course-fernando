import {Feature} from "@/interfaces/places";

export interface PlacesState {
    isLoadingPlaces: boolean
    isLoading: boolean
    userLocation?: [number, number] //lng, lat
    places:Feature[],
}

function state(): PlacesState {
    return {
        isLoading: true,
        userLocation: undefined,
        places:[],
        isLoadingPlaces: false
    }
}

export default state;