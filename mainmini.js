function validar(){
    let a = parseFloat(prompt("Ingrese numero: "));
    while(a <= 0 || isNaN(a)){
        console.log("valor erroneo puta");
        a = parseFloat(prompt("Error, debe ingresar un numero"));
    }

    return a;
}


let vueltas = validar();
console.log('Va a sumar ' + vueltas + ' numeros');

let num1 = validar();  
console.log('Numero base: ' + num1);

let num2 = validar();
console.log('numero suma: ' + num2);

while (vueltas>0){
    num1 += num2
    vueltas--;
    console.log("vueltas:" + vueltas);
    console.log('resultado: ' + num1);
}
console.log('Resultado final: ' + num1);