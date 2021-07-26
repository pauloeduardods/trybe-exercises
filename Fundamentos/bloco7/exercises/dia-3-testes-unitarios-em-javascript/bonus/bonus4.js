const assert = require('assert');

const getLargestNumber1 = (array) => {
  let largestNumber;
  for (let index = 0; index < array.length; index += 1) {
    if (!largestNumber) largestNumber = array[index];
    if (array[index] > largestNumber) {
      largestNumber = array[index];
    }
  }
  return largestNumber;
}

const getLargestNumber = array => {
  return Math.max(...array);
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;

assert.deepStrictEqual(getLargestNumber(parameter), result);