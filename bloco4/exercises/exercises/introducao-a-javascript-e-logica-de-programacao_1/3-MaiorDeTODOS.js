const greater = (...params) => {
    var maior
    for (let i = 0; i < params.length; i++){
        if (maior == null) maior = params[i]
        if (maior < params[i]) maior = params[i]       
    }
    return maior
}
console.log(greater(10, 11, 24 ,4))

`Maior de qualquer numero`
