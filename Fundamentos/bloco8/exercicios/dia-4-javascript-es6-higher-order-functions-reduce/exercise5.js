const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsAa = () => names.reduce((acc, cur) => acc + cur.split('').filter(character => character.toLowerCase() === 'a').length ,0);

// OR

const containsA = () => names.reduce((acc, cur) => acc + cur.split('').reduce((acc, cur) => cur.toLowerCase() === 'a' ? acc += 1 : acc, 0), 0);

assert.deepStrictEqual(containsA(), 20);