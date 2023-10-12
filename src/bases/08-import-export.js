import heroes, {owners} from '../data/heroes'


export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroeById(3));

export const getHeroesByOwner = (owner ) => heroes.filter((heroe) => heroe.owner === owner);


// console.log(getHeroesByOwner('Marvel'));