
function calcularFatorial(numero){

    let totalFatorial = 1
    if(numero == 0){
        return totalFatorial
    }
    for(i = numero; i > 0; i--){
       totalFatorial =  i * totalFatorial


    }
    return totalFatorial
}
console.log(calcularFatorial(0))