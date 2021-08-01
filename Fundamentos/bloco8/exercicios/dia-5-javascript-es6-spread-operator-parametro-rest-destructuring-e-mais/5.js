const assert = require('assert');

const myList = [1, 2, 3];

// escreva swap abaixo
const swap = ([elem1, elem2, elem3]) => [elem3, elem2, elem1]; 

const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);