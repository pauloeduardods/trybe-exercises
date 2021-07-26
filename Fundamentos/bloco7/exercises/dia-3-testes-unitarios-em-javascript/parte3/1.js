const assert = require('assert');

const greetPeople = (people) => {
  const resultArray = [];
  for (const person of people) {
    resultArray.push(`Hello ${person}`);
  }
  return resultArray;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);
