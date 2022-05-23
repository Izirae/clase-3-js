let vueltas = "";
let flag = true;
let i = 0;
do {
    vueltas = parseInt(prompt('Ingrese cuantos numeros quiere sumar: '));

    if(Number.isInteger(vueltas)){
        flag = false;
        
    } else {
        console.log('No ingreso un numero');
    };
    
} while (flag);
console.log('Va a sumar ' + vueltas + ' numeros')

let num1 = parseInt(prompt('Ingrese el numero base: '));
flag = true;

if(Number.isInteger(num1)){
    flag = false;
    
} else {
    console.log('No ingreso un numero');
    while (flag){
        num1 = parseInt(prompt('Ingrese el numero base: '));

        if(Number.isInteger(num1)){
            flag = false;
        
        } else {
            console.log('No ingreso un numero');
        };
    };
};
    
console.log('Numero base: ' + num1);

let num2 = "";

while (i<vueltas){
    i++;
    flag = true;
    num2 = parseInt(prompt('Ingrese el numero que va a sumar: '));

    if(Number.isInteger(num2)){
        flag = false;
        
    } else {
        console.log('No ingreso un numero');
        while (flag){
            num2 = parseInt(prompt('Ingrese el numero que va a sumar: '));
    
            if(Number.isInteger(num2)){
                flag = false;
            
            } else {
                console.log('No ingreso un numero');
            };
        };
    };

    console.log('Ingreso numero ' + i + ': ' + num2)

    num1 += num2;

    console.log('Suma numero ' + i + ': '+ num1);
};