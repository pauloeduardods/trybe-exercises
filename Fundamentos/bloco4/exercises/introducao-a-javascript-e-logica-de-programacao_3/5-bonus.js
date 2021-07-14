let n = 11

if(n % 2 !== 0){
  let lineBreak = (n+1)/2
  let spaces = lineBreak - 1
  let spacesBetween
  for(let i = 0; i < lineBreak; i += 1){
    let string = ''
    if(i === lineBreak - 1){
      for(let i1 = 0; i1 < n; i1 += 1){
        string += '*'
      }
    }else{
      for(let i1 = 0; i1 < spaces; i1 += 1){
        string += ' '
      }
      spaces -= 1
      string += '*'
      for(let i1 = 0; i1 < spacesBetween; i1 += 1){
        string += ' '
      }
      spacesBetween += 2
      if(i !== 0){
        string += '*'
      }else{
        spacesBetween = 1
      }
    }
    console.log(string)
  }
}
