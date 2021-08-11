const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => {
  return new Promise((resolve, reject) => {
    const result = Animals.filter((cur) => cur.age === age);
    return result.length !== 0 ? resolve(result) : reject(new Error('Nao tem animal com essa idade'));
  })
}

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

module.exports = { getAnimal, findAnimalByAge };