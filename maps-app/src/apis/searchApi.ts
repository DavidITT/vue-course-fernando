import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        lenguage: 'es',
        access_token: 'pk.eyJ1IjoiZGF2aWRldjk3IiwiYSI6ImNtNG5idjMyZTA2dTkyaXExcXYwNWozZTkifQ.1B91NC3fayRT3VgV5bEwbw'
    }
})

export default searchApi

