const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten1 = () => arrays.reduce((acc, current) => [...acc, ...current], []);
const flatten = () => arrays.reduce((acc, current) => acc.concat(current), []); // same thing

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);