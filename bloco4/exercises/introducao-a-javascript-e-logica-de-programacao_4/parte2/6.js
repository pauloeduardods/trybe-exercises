const summation = n => {
  let result = 0;
  for(let i = 1; i <= 5; i+= 1){
    result += i
  }
  return result;
};

console.log(summation(5))