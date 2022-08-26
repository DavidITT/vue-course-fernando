//     [Importaciones y Exportaciones]

// Sirven para segmentar la aplicación

//No se puede importar algo que no este explicitamente previamente exportado

import {owners} from '../data/heroes'

const[dc, marvel] = owners
//console.log(dc, marvel)

//Exportacion por defecto
import superHeroes from '../data/heroes'

//     [Tarea]

//getHeroById (id) -> con funcion flecha usando find
//getHeroByOwner (owner) -> con funcion flecha usando filter

//Funciones
export const getHeroById = (id) => superHeroes.find(hero => hero.id === id)
export const getHerosByOwner = (owner) => superHeroes.filter(hero => hero.owner === owner)

//     [Tarea 2]
//Importacion de metodos desde otro archivo

//import { getHeroById, getHerosByOwner} from './bases/08-imports-and-exports'

//console.log(getHeroById(4))

//console.log(getHerosByOwner('DC'))









