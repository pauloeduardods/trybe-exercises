const pairChecker = (var1, var2, var3) =>{
  const array = [var1, var2, var3]
  var result = false
  array.forEach(element => {
    if (element % 2 === 0){
      result = true
    }
  });
  return result
}
console.log(pairChecker(1, 5, 3))