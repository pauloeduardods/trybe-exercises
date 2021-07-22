const factorial = number => {
  if (number < 1) return;
  let result = 1;
  for (let i = 1; i <= number; i += 1) {
    result = result * i;
  }
  return result;
}

console.log(factorial(10));

const bigWord = string => {
  const words = string.split(' ');
  let bigWord;
  for (let i = 0; i < words.length; i += 1) {
    if (!bigWord || bigWord.length < words[i].length) bigWord = words[i];
  }
  return bigWord;
}

console.log(bigWord('ola olaa olaaa olaaa olaaaaaaaaaaa olaaaaaaaaaaa'));