const checker = number => {
  if (number > 0){
    return 'positive'
  }else if(number < 0){
    return 'negative'
  }
  else{
    return 'zero'
  }
}

console.log(checker(-1))