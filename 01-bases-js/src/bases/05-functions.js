//     [Funciones normales] 

// -------- FORMA TRADICIONAL ---------------

//function saludar(nombre){
//  return `Hola ${nombre}`
//}

// ------ ASIGNACION A VARIABLE --------------

//const saludar = function(nombre){
// return `Hola ${nombre}`
//}

// ----- FUNCION FLECHA -------------

//const saludar = (nombre) => {
//   return `Hola ${nombre}`
//}

//Forma corta

const saludar = (nombre) => `Hola ${nombre}`

const nombre = 'Tony'

console.log(saludar(nombre))

const getUser = () => ({
    uid: 'USER-12',
    username: 'David003'
})

console.log(getUser())

const heroes = [
    {
        id: 1,
        name: 'Batman',
        power: 'Fight'
    },
    {
        id:2,
        name: 'Superman',
        power: 'Vision'
    }
]

//Some: Evalua si algun elemento del array cumple la condicion, 
//si cumple regresa TRUE si no FALSE

console.log(heroes.some( (heroe) => heroe.id === 1))

//El find retorna el elemento como tal con toda su informacion, si no
//lo encuentra regresa undefined

//Forma simple
const heroe = heroes.find( (heroe) => heroe.id === 2)
console.log(heroe.name)

//Desestructuracion de arreglo (obtiene una propiedad o propiedades en especifico)
const { name, power } = heroes.find( (heroe) => heroe.id === 2)
console.log(`Heroe: ${name} \nPoder: ${power}`)