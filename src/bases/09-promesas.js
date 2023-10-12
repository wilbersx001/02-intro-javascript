
import {getHeroeById} from './bases/08-import-export'


// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const p1 = getHeroeById(2);
//         resolve(p1);
//         //resolve('No se pudo econtrar el heroe');
//     }, 2000);
// });


// promesa.then((heroe)=> {
//     console.log( heroe)
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync  = (id) =>{

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if(p1){
                resolve(p1);
            }else {
                reject('No se encontro el heroe');
            }
            //resolve(p1);
            //resolve('No se pudo econtrar el heroe');
        }, 2000);
    });
    
  // return promesa;
}

getHeroeByIdAsync(1)
.then(console.log)
.catch( err => console.warn(err))