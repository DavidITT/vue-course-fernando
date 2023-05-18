import {ActionTree} from 'vuex';
import {MapState} from './state';
import {StateInterface} from '../index';
import {directionsApi} from "@/apis";
import {DirectionsResponse} from "@/interfaces/directions";

export type LngLat = [number, number]

const actions: ActionTree<MapState, StateInterface> = {
    async getRouteBetweenPoints({commit}, {start, end}: { start: LngLat, end: LngLat }) {
        const res = await directionsApi.get<DirectionsResponse>(`${start.join(',')};${end.join(',')}`)

        if(res.data.code === 'NoRoute') {
            alert('No se puede trazar esta ruta')
            return
        }

        commit('setDistanceDuration', {
            distance: res.data.routes[0].distance,
            duration: res.data.routes[0].duration
        })

        const coordinates = res.data.routes[0].geometry.coordinates
        commit('setRoutePolyline', coordinates)
    }
}


export default actions;