//     [Async / Await]

const miPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve('Tenemos un valor en la promesa')
            reject('Reject en miPromesa')
        }, 1000);
    })
}

const medirTiempoAsync = async () => {
    try {
        console.log('Inicio')
        const resp = await miPromesa()
        console.log(resp)
        console.log('Fin')
        return 'Fin de medir async'

    } catch (error) {
        throw 'Error en medirTiempoAsync'
    }

    //throw 'Error en medir tiempo async'

}

medirTiempoAsync()
    .then(valor => console.log('Then exitoso: ' ,valor))
    .catch(err => console.log('error: ', err))





