
// const getImagenPromesa = () => 
//      new Promise(resolve => 
//         resolve('https://rgtttttttttttt.com'))
        
//         //return promesa
        
//         getImagenPromesa().then(console.log);
    

 try {
    const getImagen = async() => {
        const apiKey = 'XmVpp3vsSP0WAF36Wy9X8WFG4Jqp8B0I';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await resp.json();
    
        const {url} = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    
        console.log(data)
    }
    
    getImagen();
    
 } catch (error) {
   console.error(error)
 }




