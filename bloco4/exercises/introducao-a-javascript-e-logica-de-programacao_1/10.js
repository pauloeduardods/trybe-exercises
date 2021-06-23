const yield = (cost, endPrice, amount=1, tax=20) => {
  var result
  if(cost < 0 || endPrice < 0) return "Error"
  result = endPrice - cost * (100 + tax)/100
  return result
}

console.log(yield(100, 0))