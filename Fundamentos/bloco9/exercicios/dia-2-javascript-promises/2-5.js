const promise = new Promise((resolve, reject) => {
  const arr = [];
  for (let i = 0; i < 10; i += 1) {
    arr.push(Math.pow(Math.round(Math.random() * 49) + 1, 2));
  }
  const result = arr.reduce((acc, cur) => acc + cur, 0);
  if (result < 8000) return resolve(result);
  reject(result);
});

promise.then(result => console.log(result))
  .catch(result => console.log(`Error: ${result}`));