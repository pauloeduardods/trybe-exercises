const reduce = (array, callback, initial) => {
  array.forEach(cur => initial = callback(initial, cur));
  return initial;
}

const arr = [1, 2, 3];

console.log(reduce(arr, (acc, cur) => acc + cur, 0));
console.log(reduce(arr, (acc, cur) => {
  acc.push(cur);
  return acc;
}, []));