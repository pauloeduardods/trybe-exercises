const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => names.reduce((acc, cur) => acc + cur.split('').filter(character => character.toLowerCase() === 'a').length ,0);

assert.deepStrictEqual(containsA(), 20);