var totalConsoantes= 0
var totalVogais = 0
function contarConsoantesf(nome){
    for(i = 0; i < nome.length; i++){
        const caracter = nome[i]
        caracter.toLocaleLowerCase
            if(caracter == " "){
                continue
        }
            if(caracter == "a" || caracter == "e" || caracter == "i" || caracter ==  "o" || caracter == "u"){
                totalVogais++
        }   
            if(caracter == "b" || caracter == "c" || caracter == "d" || caracter ==  "e" || caracter == "f" || caracter == "g" || caracter == "p" || caracter ==  "i" || caracter == "j" || caracter == "k" || caracter == "l" || caracter ==  "m" || caracter == "n" || caracter == "o" || caracter == "p" || caracter ==  "q" || caracter == "r" || caracter == "s" || caracter == "t" || caracter ==  "u" || caracter == "v" || caracter == "w" || caracter == "x" || caracter ==  "y" || caracter == "z"){
                totalConsoantes++
            }
            else{

            }
    }
}
contarConsoantesf("#Mikael Ícaro Santos")
console.log(totalVogais)
console.log(totalConsoantes)

