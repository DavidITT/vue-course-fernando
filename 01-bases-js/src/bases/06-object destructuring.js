//     [Desestructuracion en objetos]

const person = {
    name: 'Tony',
    age:45,
    codeName:'Tony Stark',
}

const { name, age, codeName, power = 'No tiene'} = person

//En lugar de ahcer esto

console.log(person.name);
console.log(person.age);
console.log(person.codeName);
console.log(person.power);

//Es mejor hacer esto

console.log(name, age, codeName, power);

const createHero = ({ name, age, codeName, power = 'No tiene'}) => {

    //const { name, age, codeName, power = 'No tiene'} = person
    
    return {
        id:123454456,

        //Se puede obviar esto cuando las variables coinciden y se llaman igual 

        //name: name,
        //age: age,
        //codeName: codeName,
        //power: power,
      
        name,
        age,
        codeName,
        power
    }

}


//Tarea sin llaves
//Return implicito

const createHero2 = ({ name, age, codeName, power = 'No tiene'}) => ({
        id:123454456, 
        name,
        age,
        codeName,
        power
})

console.log(createHero2(person))