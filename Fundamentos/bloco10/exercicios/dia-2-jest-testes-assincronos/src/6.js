const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

// const findAnimalByName = (name) => (
//   // Adicione o código aqui.
// );

const getAnimal = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Animals.find((cur) => cur.name === name);
      if (result) return resolve(result);
      reject('Nenhum animal com esse nome!');
    }, 200);
  })
  
};
// ---------------------

module.exports = getAnimal ;