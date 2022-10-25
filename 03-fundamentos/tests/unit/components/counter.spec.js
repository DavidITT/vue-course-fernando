import {shallowMount} from '@vue/test-utils'
import Counter from "@/components/Counter";

describe('Counter Component', () => {

    let wrapper;

    beforeEach( () => {
        wrapper = shallowMount(Counter)
    })
    
    /*test('debe de hacer match con el snapshot', () => {
        const wrapper = shallowMount(Counter)
        expect( wrapper.html() ).toMatchSnapshot()
    })*/

    test('H2 debe tener el valor por defecto', () => {

        expect(wrapper.find('h2').exists()).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        expect(h2Value).toBe('Counter')
    })

    test('El valor por defecto debe ser 100 en el p', () => {

        const pTag = wrapper.find('[data-testid="counter"]').text()

        expect( pTag ).toBe('100')
    })

    test('Debe de incrementar en 3 el valor del contador y despues decrementarlo en 2', async () => {

        const [decreaseButton, increaseButton] = wrapper.findAll('button')

        await increaseButton.trigger('click')
        await increaseButton.trigger('click')
        await increaseButton.trigger('click') //103

        //TODO: Tarea

        await decreaseButton.trigger('click')
        await decreaseButton.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('101')
    })

    test('Debe de establecer el valor por defecto', () => {

       const {start} = wrapper.props()

        const value = wrapper.find('[data-testid="counter"]').text()

        expect( Number( value) ).toBe( start )
    })

    test('Debe de mostrar la prop title', () => {

        const title = 'Hola mundo !!!!'

        const wrapper = shallowMount( Counter, {
            props: {
                title: title
                //start : '5'
            }
        } )

        expect( wrapper.find('h2').text()).toBe(title)


    })
})