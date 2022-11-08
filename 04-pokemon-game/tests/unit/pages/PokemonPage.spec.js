import {shallowMount, mount} from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import {pokemons} from "../mocks/pokemons.mock";

describe('PokemonPage Component', () => {
    let wrapper


    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })

    test('Debe de hacer match con el snapshoot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Debe de llamar el mixPokemonArray al montar', () => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        shallowMount(PokemonPage)

        expect(mixPokemonArraySpy).toHaveBeenCalled()

    })

    test('Debe de hacer match con el snapshot cuadno cargan los pokemons', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    answer: false,
                    message: ' ',
                    classMessage: ''
                }
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    answer: false,
                    message: ' ',
                    classMessage: ''
                }
            }
        })

        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')

        expect(picture.exists()).toBeTruthy()
        expect(options.exists()).toBeTruthy()


        expect(picture.attributes('pokemonid')).toBe('1')
        expect(options.attributes('options')).toBeTruthy()

    })

    test('Pruebas con checkAnswer', async () => {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    answer: false,
                    message: ' ',
                    classMessage: ''
                }
            }
        })

       await wrapper.vm.checkAnswer(1)

        expect(wrapper.find('#answer').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBe(true)
        expect(wrapper.find('#answer').text()).toBe('Respuesta correcta')

        await wrapper.vm.checkAnswer(2)

        expect(wrapper.vm.message).toBe('Respuesta incorrecta')


    })
})