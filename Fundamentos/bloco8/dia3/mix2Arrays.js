const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const mixer = (products, prices) => products.map((product, index) => ({[product]: prices[index]}));

const result = mixer(products, prices);

console.log(result);