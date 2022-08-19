
//Object Literal

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    direccion: {
        ciudad: 'New York',
        zip: 65676,
        lat:14.3232,
        lng:34.9867
    }
}

//Spread
//Crea un nuveo objeto con las mismas propiedades y puede ser
// modificable sin cambiar el anterior

const persona2 = { ...persona };
persona2.nombre = 'Peter'
persona2.apellido = 'Parker'


console.log(persona)
console.log(persona2)


