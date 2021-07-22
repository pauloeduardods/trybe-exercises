const factorial = number => {
  if (number < 1) return;
  let result = 1;
  for (let i = 1; i <= number; i += 1) {
    result = result * i;
  }
  return result;
};

console.log(factorial(10));

const longestWord = string => {
  const words = string.split(' ');
  let longestWord;
  for (let i = 0; i < words.length; i += 1) {
    if (!longestWord || longestWord.length < words[i].length) longestWord = words[i];
  }
  return longestWord;
};

console.log(longestWord('ola olaa olaaa olaaa olaaaaaaaaaaa olaaaaaaaaaaa'));

const replaceX = (string, param) => string.replace('x', param);
console.log(replaceX('Tryber x aqui!', 'Ice de Gelato'));

const skills = ['javascript', 'html', 'css', 'dom', 'soft-skills'];

const secondFunctions = (string, param) => {
  string = replaceX(string, param);
  let skillsSorted = skills.sort();
  string += `${string} ${skillsSorted.join(' ')}`;
  return string;
};
console.log(secondFunctions('Tryber x aqui!', 'Athanos'));