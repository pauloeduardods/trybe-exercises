function palindromo(string) {
  let newString = '';
  for(let i = string.length - 1; i >= 0; i -= 1){
    newString += string[i];
  };
  return string === newString? true : false;
};
console.log(palindromo('natan'))