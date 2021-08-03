const { rejects } = require("assert");

const promise = new Promise((resolve, reject) => {
  const arr = [];
  for (let i = 0; i < 10; i += 1) {
    arr.push(Math.pow(Math.round(Math.random() * 49) + 1, 2));
  }
  const result = arr.reduce((acc, cur) => acc + cur, 0);
  if (result < 8000) return resolve(result);
  reject(new Error(result));
});

promise.then(result => {
  const dividers = [2, 3, 5, 10];
  return dividers.map(element => result / element);
})
  .catch(error => console.log('É mais de oito mil! Essa promise deve estar quebrada!' + error));

const sum = new Promise((resolve, reject) => {
  
})