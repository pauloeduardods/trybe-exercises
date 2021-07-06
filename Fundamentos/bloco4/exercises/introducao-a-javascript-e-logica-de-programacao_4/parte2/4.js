let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

const biggestName = names => {
  let bigger;
  for(let name of names){
    !bigger? bigger = name : name.length > bigger.length? bigger = name : bigger
  };
  return bigger;
};

console.log(biggestName(array));