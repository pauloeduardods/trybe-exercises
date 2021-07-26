const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

assert.strictEqual(typeof myRemoveWithoutCopy, 'function', 'myRemoveWithoutCopy is not a function');

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], 'myRemoveWithoutCopy([1, 2, 3, 4], 3) must return [1, 2, 4]');

assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'myRemoveWithoutCopy([1, 2, 3, 4], 3) must not return [1, 2, 3, 4]');

const array = [1, 2, 3, 4];
myRemoveWithoutCopy(array, 3);
assert.deepStrictEqual(array, [1, 2, 4], 'myRemoveWithoutCopy isn\'t changing the array');

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], 'myRemoveWithoutCopy([1, 2, 3, 4], 5) must return [1, 2, 3, 4]');
