function validarvueltas (){
    let a = parseFloat(prompt("Ingrese cuantos numeros quiere sumar: "));
    while(a <= 0 || isNaN(a)){
        console.log("valor erroneo puta");
        a = parseFloat(prompt("Error, debe ingresar un numero"));
    }

    return a;
}

function validarnum1 (){
    let a = parseFloat(prompt("Ingrese el numero base: "));
    while(a <= 0 || isNaN(a)){
        console.log("valor erroneo puta");
        a = parseFloat(prompt("Error, debe ingresar un numero"));
    }

    return a;
}

function validarnum2 (){
    let a = parseFloat(prompt("Ingrese el numero que va a sumar: "));
    while(a <= 0 || isNaN(a)){
        console.log("valor erroneo puta");
        a = parseFloat(prompt("Error, debe ingresar un numero"));
    }

    return a;
}

let vueltas = validarvueltas();
console.log('Va a sumar ' + vueltas + ' numeros');

let num1 = validarnum1();  
console.log('Numero base: ' + num1);

let num2 = validarnum2();
console.log('numero suma: ' + num2);

while (vueltas>0){
    num1 += num2
    vueltas--;
    console.log("vueltas:" + vueltas);
    console.log('resultado: ' + num1);
}
console.log('Resultado final: ' + num1);