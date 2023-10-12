
const apiKey = 'XmVpp3vsSP0WAF36Wy9X8WFG4Jqp8B0I'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
.then( resp => resp.json())
.then( ({data}) => {
    const {url} = data.images.original;
    
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
})
.catch(console.warn);
