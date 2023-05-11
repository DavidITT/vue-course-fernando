import {ActionTree} from 'vuex';
import {PlacesState} from './state';
import {StateInterface} from '../index';
import {searchApi} from "@/apis";
import {Feature, PlacesResponse} from "@/interfaces/places";


const actions: ActionTree<PlacesState, StateInterface> = {

    getInitialLocation({commit}) {
        //TODO: Colocar loading
        navigator.geolocation.getCurrentPosition(
            ({coords}) => commit('setLngLat', {lng: coords.longitude, lat: coords.latitude}),
            (err) => {
                console.log(err)
                throw  new Error('No geolocation :(')
            }
        )
    },

    async searchPlacesByTerm({commit, state}, query: string):Promise<Feature[]> {
        //TODO colocar el valor de retorno
        if(query.length === 0){
            commit('setPlaces', [])
            return []
        }
        if(!state.userLocation){
            throw new Error('No hay ubicación del usuario')
        }

        commit('setIsLoadingPlaces')

        const res = await searchApi.get<PlacesResponse>(`/${query}.json`, {
           params: {
               proximity: state.userLocation?.join(',')
           }
        })

        commit('setPlaces', res.data.features)

        return res.data.features

    }
}


export default actions;