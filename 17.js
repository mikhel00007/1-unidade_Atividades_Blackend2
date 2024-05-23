function descobrirPalindrmo(nome){
    var nomeInverso = ""
    for(i = nome.length-1; i >= 0;i--){
       let caracter = nome[i]
        nomeInverso = caracterTexto + caracter
        
    }
    if(nomeInverso == nome){
        return "Palindromo"
    }
    else{
        return "Não é palindromo"
    }
}
console.log(descobrirPalindrmo("ovo"))
