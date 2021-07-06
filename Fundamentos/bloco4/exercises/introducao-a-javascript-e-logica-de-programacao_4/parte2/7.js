const verifier = (word, endsWith) => {
  let endWithIndex = 0;
  for(let i = word.length - endsWith.length; i <= word.length - 1; i += 1){
    if(word[i] !== endsWith[endWithIndex]){
      return false;
    };
    endWithIndex += 1;
  };
  return true;
};

console.log(verifier('trybe', 'be'))
console.log(verifier('joaofernando', 'fernan'))