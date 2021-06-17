const checker = state => {
    switch(state){
        case "aprovada": console.log("Parabéns, você foi aprovada(o)!")
        case "lista": console.log("Você está na nossa lista de espera")
        case "reprovada": console.log("Você foi reprovada(o)")
        default:
            console.log('nao se aplica')
    }
}
`usar no console do navegador`