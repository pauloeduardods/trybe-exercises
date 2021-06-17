const checker = (score) => {
    if(score >= 80) {console.log("Parabéns, você foi aprovada(o)!"); return}
    if(score < 80 && score >= 60) {console.log("Você está na nossa lista de espera"); return}
    if(score < 60) {console.log("Você foi reprovada(o)"); return}
    else{
        "Algo de errado aconteceu"
    }
}