let array = [2, 3, 6, 7, 10, 1];

const biggerIndex = array => {
  let bigger
  for(number of array){
    !bigger? bigger = number : bigger < number? bigger = number : bigger
  };
  return array.indexOf(bigger)
};
console.log(biggerIndex(array))