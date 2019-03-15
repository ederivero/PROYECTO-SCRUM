// Ejercicio 2

var n = parseInt(prompt(`Ingrese el número`));

if (n<0) {
    console.log("Ingreso un número negativo");    
} else {
    if ((n>=0)&&(n<=9)) {
        console.log(`El número ${n} tiene un dígito`);
        
    } else {
        if ((n>=10)&&(n<=99)) {
            console.log(`El número ${n} tiene dos dígitos`);
        } else {
            console.log("Ingreso un número de mas de dos dígitos");
        }
    }
    
}