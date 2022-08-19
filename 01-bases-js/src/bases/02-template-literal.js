
//Template Literal (Strings)

const nombre = 'David'
const apellido = 'Villeda'

//const nombreCompleto = nombre + ' ' + apellido 

const nombreCompleto = `${ nombre } ${ apellido }` 


console.log(nombreCompleto)
console.log(`Resultado: ${ 1 + 5}`)


function getSaludo(nombre){
    return 'Hola ' + nombre
}

console.log(`Este es un texto ${ getSaludo(nombre)}`)

