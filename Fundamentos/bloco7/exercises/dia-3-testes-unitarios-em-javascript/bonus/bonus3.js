const assert = require('assert');
// escreva a função removeMiddle aqui
function removeMiddle(array) {
  const { length } = array;
  if (length % 2 === 0) {
    return array.splice(length / 2, 2);
  }
  return array.splice(length / 2, 1);
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);