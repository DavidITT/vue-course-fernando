//     [Fetch]

const apiKey = 'AIAID03EDI5C2uqxgiZ4IHBfY9yifbIP'
//https://api.giphy.com/v1/gifs/random?api_key=AIAID03EDI5C2uqxgiZ4IHBfY9yifbIP


fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append( img )
    })





