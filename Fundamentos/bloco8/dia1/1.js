const awake = () => 'Acordado';

const coffe = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = func => func();

console.log(doingThings(awake));
console.log(doingThings(coffe));
console.log(doingThings(sleep));
