let n = 5
let n1 = 0

for(let i = 0; i < n; i += 1){
  let string = ''
  n1 += 1
  for(let i1 = 0; i1 < n - n1; i1 += 1){
    string += ' '
  }
  for(let i1 = 0; i1 < n1; i1 += 1){
    string += '*'
  }
  console.log(string)
}