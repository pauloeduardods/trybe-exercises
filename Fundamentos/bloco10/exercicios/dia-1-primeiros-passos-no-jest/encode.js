function encode(string) {
  const encoder = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  let result = '';
  for (let character of string) {
    if (character in encoder) result += encoder[character];
    else result += character;
  }
  return result;
}

function decode(string) {
  const decoder = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let result = '';
  for (let character of string) {
    if (character in decoder) result += decoder[character];
    else result += character;
  }
  return result;
}

module.exports = {
  encode, decode
}