
const app = Vue.createApp({
    //template:
    //`<
    //    h1>Hola mundo</h1>
    //    <p> Desde app.js </p>
    // `

    data() {
        return {
            message: "I'm batman",
            author: "- Bruce Wayne"
        }
    },
    methods: {
        changeQuote() {
            console.log('Hola mundo')
            this.author = '- David Villeda'
            this.capitalize()
        },
        capitalize() {
            this.message = this.message.toUpperCase()
        }
    }
})

app.mount('#myApp')