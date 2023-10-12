//import React, { useState } from 'react';

const personajes = ['Goku','Vegeta','Trunks'];

// console.log(personajes);

const [ p1, p2, p3] = personajes;

console.log(p1);
// console.log(p2);
// console.log(p3);

const retornarArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornarArreglo();
console.log(letras, numeros);

//Tarea

const u1seState1 = ( valor ) => {
    return [valor, ()=>{ console.log('Hola mundo') } ];
    
}

const [nombre, setNombre] = u1seState1('Goku');

console.log(nombre);
setNombre();




