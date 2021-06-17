const checker = state => {
  switch(state){
    case "aprovada": console.log("Parabéns, você foi aprovada(o)!"); break
    case "lista": console.log("Você está na nossa lista de espera"); break
    case "reprovada": console.log("Você foi reprovada(o)"); break
    default:
      console.log('nao se aplica')
      break
    }
}
`usar no console do navegador`