const scoreChecker = score => {
  if(score > 100 || score < 0) return "Erro" 
  if(score >= 90) return "A"
  if(score >= 80) return "B"
  if(score >= 70) return "C"
  if(score >= 60) return "D"
  if(score >= 50) return "E"
  if(score < 50) return "F"
}
console.log(scoreChecker(-49))