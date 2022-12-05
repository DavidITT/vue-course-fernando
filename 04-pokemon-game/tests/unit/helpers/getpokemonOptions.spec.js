import getPokemonsOptions, {getPokemons, getPokemonsNames} from "@/helpers/getPokemonOptions";
import getPokemonOptions from "@/helpers/getPokemonOptions";
//Afuera exportacion por defect, adentro export


describe('getPokemonOptions', () => {
    test('Debe de regresar un arreglo de numeros', () => {
        const pokemons = getPokemons()

        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[649]).toBe(650)
    })

    test('Debe de retornar un array de 4 elementos con nombre de pokemosn', async () => {
        const pokemons = await getPokemonsNames([1, 2, 3, 4])

        expect(pokemons).toStrictEqual([
            {name: 'bulbasaur', id: 1},
            {name: 'ivysaur', id: 2},
            {name: 'venusaur', id: 3},
            {name: 'charmander', id: 4}
        ])
    })

    test('getPokemonOptions debe de retornar un array mezclado', async () => {

        const pokemons = await getPokemonOptions()

        expect(pokemons.length).toBe(4)

        expect(pokemons).toEqual([
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            }
        ])

    })
})