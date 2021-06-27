const romanNumeralsToDecimals = string => {
  const romanNumerals = {
    i : 1,
    v : 5,
    x : 10,
    l : 50,
    c : 100,
    d : 500,
    m : 1000,
    v1 : 5000
  };
  string = string.toLocaleLowerCase();
  let result = 0;
  for(let i = 0; i < string.length; i += 1){
    let currentNum = romanNumerals[string[i]]
    let nextNum = romanNumerals[string[i + 1]]
    let nextOfNextNum = romanNumerals[string[i + 2]]
    if(nextNum === undefined) {
      result += currentNum;
    };
    if(currentNum === nextNum){
      if(nextNum === nextOfNextNum){
        result += currentNum + nextNum + nextOfNextNum;
        i += 2;
      }else{
        result += currentNum + nextNum;
        i += 1
      };
    };
    if(currentNum > nextNum) result += currentNum;
    if(currentNum < nextNum) result -= currentNum;
  };
  return result;
};

console.log(romanNumeralsToDecimals('MMMCCXXXVIII'))