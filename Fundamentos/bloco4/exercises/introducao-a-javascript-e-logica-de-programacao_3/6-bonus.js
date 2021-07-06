const primeNumber = num => {
  let counter = 0
  for(let i = 1; i <= num; i += 1){
    if(num % i === 0){
      counter += 1
    }
  }
  return counter === 2? true : false
}
const listPrimeNumber = n => {
  let list = []
  for (let i = 0; i <= n; i += 1){
    if(primeNumber(i)===true) list.push(i)
  }
  return list
}

console.log(listPrimeNumber(1000))