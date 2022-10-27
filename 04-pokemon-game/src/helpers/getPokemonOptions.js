import pokemonApi from "@/api/pokemonApi";


//Se contruye el arreglo con los 650 pokemons disponibles de la api
const getPokemons = () => {
    const pokemonsArr = Array.from( Array(650) )
    return pokemonsArr.map(( _ , index) => index + 1)
}

//Se contruye el arreglo con 4 pokemons
const getPokemonsOptions = async () => {
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 )
    //Obtiene nombre y id de los 4 pokemons
    const pokemons = await  getPokemonsNames( mixedPokemons.splice(0,4))
    return pokemons
}

//Api para obtener el nombre y id de los 4 pokemons
const getPokemonsNames = async ( [a,b,c,d] = [] ) => {

    //Peticiones simultaneas
    const promisesArr = [
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`)
    ]
    //Mandar las 4 peticiones con sus respectivos valores
    const [p1, p2, p3 , p4] = await Promise.all(promisesArr)

    return [
        { name: p1.data.name, id: p1.data.id },
        { name: p2.data.name, id: p2.data.id },
        { name: p3.data.name, id: p3.data.id },
        { name: p4.data.name, id: p4.data.id }
    ]


}

export default getPokemonsOptions