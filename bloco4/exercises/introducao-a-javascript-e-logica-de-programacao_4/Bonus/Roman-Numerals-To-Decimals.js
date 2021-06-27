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
  string = string.toLowerCase();
  let result = 0;
  for(let i = 0; i < string.length; i += 1){
    if(romanNumerals[string[i + 1]] === undefined) {
      result += romanNumerals[string[i]];
    };
    if(romanNumerals[string[i]] >= romanNumerals[string[i + 1]]) result += romanNumerals[string[i]];
    if(romanNumerals[string[i]] < romanNumerals[string[i + 1]]) result -= romanNumerals[string[i]];
  };
  return result;
};

console.log(romanNumeralsToDecimals('X'))//10
console.log(romanNumeralsToDecimals('XI'))//11
console.log(romanNumeralsToDecimals('XII'))//12
console.log(romanNumeralsToDecimals('XIII'))//13
console.log(romanNumeralsToDecimals('XIV'))//14
console.log(romanNumeralsToDecimals('XV'))//15
console.log(romanNumeralsToDecimals('XVI'))//16
console.log(romanNumeralsToDecimals('XVII'))//17
console.log(romanNumeralsToDecimals('XVIII'))//18
console.log(romanNumeralsToDecimals('XIX'))//19
console.log(romanNumeralsToDecimals('XX'))//20
console.log(romanNumeralsToDecimals('CMI'))//901
console.log(romanNumeralsToDecimals('CMXCIII'))//993
console.log(romanNumeralsToDecimals('CMXCIV'))//994
console.log(romanNumeralsToDecimals('CMXCIX'))//999
console.log(romanNumeralsToDecimals('DCLXVI'))//666
console.log(romanNumeralsToDecimals('MMMCCLXXIII'))//3273: 
console.log(romanNumeralsToDecimals('MMMCCXXXVIII'))//3238
console.log(romanNumeralsToDecimals('MDCCLX'))//1760
console.log(romanNumeralsToDecimals('MDCCCXI'))//1811
console.log(romanNumeralsToDecimals('MDCCCLIII'))//1853
console.log(romanNumeralsToDecimals('DCCLXXXVIII'))//788
