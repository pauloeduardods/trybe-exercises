let n = 5
let n1 = 1

if (n % 2 !== 0){
  let lineBreak = (n + 1) / 2
  let spaces = lineBreak - 1
  for(let i = 0; i < lineBreak; i += 1){
    let string = ''
    for(let i1 = 0; i1 < spaces; i1 += 1){
      string += ' '
    }
    spaces -= 1
    for(let i1 = 0; i1 < n1; i1 += 1){
      string += '*'
    }
    n1 += 2
    console.log(string)
  }
}
