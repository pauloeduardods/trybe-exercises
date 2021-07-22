const fibonacci = (number, a = 1, b = 0) => number === 0? a : fibonacci(number-1, a + b, a) 

console.log(fibonacci(1475));