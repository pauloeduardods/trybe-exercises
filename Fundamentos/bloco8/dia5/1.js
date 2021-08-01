// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maca', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['strogonoff', 'pizza', 'ice'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));