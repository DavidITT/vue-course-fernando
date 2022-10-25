import {shallowMount} from '@vue/test-utils'
import Indecision from "@/components/Indecision"


describe('Indecision component', () => {

    let wrapper
    let clgSpy

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            'answer': 'yes',
            'forced': false,
            'image': 'https://yesno.wtf/assets/yes/7-653c8ee5d3a6bbafd759142c9c18d76c.gif'
        })
    }))

    beforeEach(() => {
        wrapper = shallowMount(Indecision)
        clgSpy = jest.spyOn(console, 'log')

        jest.clearAllMocks()
    })

    test('debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Escribir en el input no debe de disparar nada (console.log)', async () => {

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Hola mundo')

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).not.toHaveBeenCalled()

        //console.log(wrapper.vm)

    })

    test('Al escrbir el simbolo (?) se debe deisparar el getAnswer', async () => {

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Hola mundo?')

        expect(clgSpy).toHaveBeenCalledTimes(2)
        expect(getAnswerSpy).toHaveBeenCalled()
    })

    test('Pruebas en getAnswer()', async () => {
        await wrapper.vm.getAnswer()
        const img = wrapper.find('img')

        expect( img.exists() ).toBeTruthy()
        expect( wrapper.vm.image ).toBe('https://yesno.wtf/assets/yes/7-653c8ee5d3a6bbafd759142c9c18d76c.gif')
        expect( wrapper.vm.answer ).toBe('Si')
        //console.log(wrapper.vm.image)
        //console.log(wrapper.vm.answer)
    })

    test('Pruebas en getAnswer() - Fallo en el API', async () => {

        //TODO: Fallo en el API
        fetch.mockImplementationOnce( () => Promise.reject('API is down'))

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect( img.exists() ).toBeFalsy()
        expect( wrapper.vm.answer ).toBe('No se pudo cargar')

    })


})