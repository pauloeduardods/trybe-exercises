const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = array => {
  const returnArray = [];
  for (let word of array) {
    returnArray.push(word.length);
  }
  return returnArray;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);