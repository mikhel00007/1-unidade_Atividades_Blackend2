function somarDigitos(valor){
    let numero = valor.toString()
    let totalCaracter = 0
    for(i = 0; i < numero.length; i++){
       let valorCaracter =  numero[i]
       let  numeroCaracter = Number(valorCaracter)
       totalCaracter = totalCaracter + numeroCaracter
    }
    return totalCaracter
}
console.log(somarDigitos(15211))