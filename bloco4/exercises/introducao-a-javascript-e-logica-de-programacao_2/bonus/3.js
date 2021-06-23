let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = []
for(let i = 0; i < numbers.length; i+=1){
  i+1 === numbers.length? newArray.push(numbers[i] * 2): newArray.push(numbers[i] * numbers[i + 1])
}

console.log(newArray)