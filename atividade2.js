function impost(valor,taxa){
    var resultado = valor * taxa
    var preco = valor + resultado
    return preco
}
console.log(impost(10,0.20))
console.log(impost(10,0.30))
console.log(impost(10,0.20))