//     [Desestructuracion en arregloes]

const characters = ['Goku','Vegeta','Trunks']

//const goku = characters[0]
//const vegeta = characters[1]
//const trunks = characters[2]

///console.log(goku, vegeta, trunks)

//Usando desestructuracion

//const [goku, vegeta, trunks] = characters
//console.log(goku, vegeta, trunks)

//Si solo quisieramos el tercer valor

const [ g, v, t, goten = 'No tiene valor'] = characters
console.log(goten)

//Desestructuracion con return implicito

const returnArray = ( [ letter, number] ) => ([letter, number])


const [ letters, numbers] = returnArray(['AZR',987])

console.log(letters, numbers)



