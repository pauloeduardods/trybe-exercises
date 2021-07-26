const assert = require('assert');

const removeVowels = (word) => {
  const results = [];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let acctualNum = 1;
  for (let index = 0; index < word.length; index += 1) {
    if (vowels.includes(word[index])) {
      results.push(acctualNum);
      acctualNum += 1;
    } else results.push(word[index]);
  }
  return results.join('');
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(removeVowels(parameter), result)