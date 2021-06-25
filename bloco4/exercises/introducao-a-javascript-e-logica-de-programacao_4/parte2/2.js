let array = [2, 3, 6, 7, 10, 1];

const biggerIndex = array => {
  let bigger
  for(index in array){
    !bigger? bigger = array[index] : bigger < array[index]? bigger = array[index] : bigger
  };
  return array.indexOf(bigger)
};
console.log(biggerIndex(array))