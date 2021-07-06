const moveChecker = name =>{
  name = name.toLowerCase()
  switch(name){
    case "rei":
      console.log("Rei -> Qualquer Direçao dentro de 1 pulo")
      break
    case "rainha":
      console.log("Rainha -> Vertical|Horizontal|Diagonais nao pode pular outras peças")
      break
    case "bispo":
      console.log("Bispo -> Diagonais nao pode pular outras peças")
      break
    case "cavalo":
      console.log('Cavalo -> Forma de "l", duas casas em sentido horizontal e mais uma na vertical ou vice-versa, Pode pular outras peças ')
      break
    case "torre":
      console.log('Torre -> Verticais nao pode pular outras peças')
      break
    case "peao":
      console.log('Peao -> O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.')
      break
    default:
      console.error("Essa peca nao existe")
      break
  }
}
moveChecker('rainha')