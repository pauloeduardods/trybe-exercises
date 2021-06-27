let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

const arrayOfNumbers = vector => {
  let result = [];
  for(let array of vector){
    for(let number of array){
      if(number % 2 === 0) result.push(number);
    };
  };
  return result;
};

console.log(arrayOfNumbers(vector))