const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.strictEqual(typeof myFizzBuzz, 'function', 'myFizzBuzz is not a function');

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'myFizzBuzz(15) must return fizzbuzz');

assert.strictEqual(myFizzBuzz(6), 'fizz', 'myFizzBuzz(6) must return fizz');

assert.strictEqual(myFizzBuzz(10), 'buzz', 'myFizzBuzz(10) must return buzz');

assert.strictEqual(myFizzBuzz(7), 7, 'myFizzBuzz(7) must return 7');

assert.strictEqual(myFizzBuzz('a'), false, 'myFizzBuzz(string) must return false');