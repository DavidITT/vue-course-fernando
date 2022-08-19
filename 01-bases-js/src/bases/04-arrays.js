//Arrays (Arreglos)

const arreglo = [1,2,3,4]

//Inserta
arreglo.push(5)

const arreglo2 = [...arreglo]
arreglo2.push(6)

//Itera cada uno de los elementos de arreglo y 
//hace algo con cada uno de ellos ademas de que
//devuelve un nuevo array

const arreglo3 = arreglo2.map( function(n){
    return n * 2
})

arreglo3.push(14)

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)
