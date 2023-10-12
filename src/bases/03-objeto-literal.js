


const persona = {
    nombre: 'Toni',
    apellido: 'Musk',
    edad: 45,
    direccion: {
        ciudad: 'San Victor',
        zip: 56000,
        lat: 14.3236,
        longitud:25.00
    }
}

console.log( persona );


const persona2 = {...persona};
persona2.nombre = 'David';

console.log(persona2);