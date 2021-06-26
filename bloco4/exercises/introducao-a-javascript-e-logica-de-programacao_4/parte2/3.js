let array = [2, 4, 6, 7, 10, 0, -3];

const smalletIndex = array => {
  let smallerIndex; 
  for(index in array){
    !smallerIndex? smallerIndex = index : array[smallerIndex] > array[index]? smallerIndex = index : smallerIndex
  };
  return smallerIndex;
};

console.log(smalletIndex(array));