const triangleChecker = (...angules) =>{
  var result = 0
  if (angules.length != 3) return false
  angules.forEach(element => {
    if (element < 0) return false
    else result = result + element
  });
  if (result === 180) return true
  else return false
}
console.log(triangleChecker(90,120,-30))