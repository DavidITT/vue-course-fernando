import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview:'simplified',
        steps:false,
        access_token: 'pk.eyJ1IjoiZGF2aWRldjk3IiwiYSI6ImNtNG5idjMyZTA2dTkyaXExcXYwNWozZTkifQ.1B91NC3fayRT3VgV5bEwbw'
    }
})

export default directionsApi