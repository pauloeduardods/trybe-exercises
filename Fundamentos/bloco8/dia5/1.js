// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maca', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['strogonoff', 'pizza', 'ice'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));


const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

console.log(saudacoes[1](saudacoes[0])); // Olá

const [element1, elemento2] = saudacoes;

console.log(elemento2(element1));
// Produza o mesmo resultado acima, porém utilizando array destructuring