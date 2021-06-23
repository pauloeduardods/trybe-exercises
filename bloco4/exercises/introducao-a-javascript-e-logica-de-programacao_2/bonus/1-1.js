let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i = 1; i < numbers.length; i+=1){ // aqui comeca no 1 pq se nao to fazendo um loop atoa
  for(let i2 = 0; i2 < i; i2 += 1){
    if(numbers[i2] > numbers[i]){
      let floating = numbers[i]  
      numbers[i] = numbers[i2]
      numbers[i2] = floating    //ele inverte se for maior
    }
  }
}
console.log(numbers)