const factorial = number => {
  if (number < 1) return;
  let result = 1;
  for (let i = 1; i <= number; i += 1) {
    result = result * i;
  }
  return result;
}

console.log(factorial(10));