const greater = (...numbers) => {
  var maior
  for (let i = 0; i < numbers.length; i++){
    if (maior == null) maior = numbers[i]
    if (maior < numbers[i]) maior = numbers[i]
  }
  return maior
}
console.log(greater(10,'ola', 24 ,4))
