let array = [2, 3, 2, 5, 8, 2, 3];
let array1 = [2, 3, 2, 5, 8, 8, 8, 8, 8, 2, 3, 3, 3];

const moreRepeats = array => {
  let cache = {};
  for(number of array){
    cache[number]? cache[number] = cache[number] += 1 : cache[number] = 1
  };
  let mostNumberOfRepeats;
  for(index in cache){
    !mostNumberOfRepeats? mostNumberOfRepeats = index : cache[mostNumberOfRepeats] < cache[index]? mostNumberOfRepeats = index : mostNumberOfRepeats;
  };
  return mostNumberOfRepeats;
};

console.log(moreRepeats(array));
console.log(moreRepeats(array1));