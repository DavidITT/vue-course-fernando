//     [Promesas]

//Son funciones asincronas que permiten ejecutar cierto codigo en determinado momento en el tiempo
//Sirven para peticiones asyncronas

//console.log('Inicio')

//new Promise( (resolve, reject) => {
  //  console.log('Cuerpo de la promesa')
    //resolve('Promesa con error')
    //reject('Promesa con error')
//})
// [Forma tradicional]

//.then( msg => console.log(msg) )
//.catch( err => console.log(err) )

// [Forma resumida]
//.then( console.log )
//.catch( console.log )

//console.log('Fin')

import {getHeroById} from './bases/08-imports-and-exports'

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id)

            if(hero){
                resolve(hero)
            }else{
                reject('El heroe no exite')
            }
            
        }, 1000);

    });
}

getHeroByIdAsync(5)
.then(h => {
    console.log(`El Heroe es: ${h.name}`)
})
.catch(console.log)



