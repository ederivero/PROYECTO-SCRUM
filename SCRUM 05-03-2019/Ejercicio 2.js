// Ejercicio 2

var n = parseInt(prompt(`Ingrese el n�mero`));

if (n<0) {
    console.log("Ingreso un n�mero negativo");    
} else {
    if ((n>=0)&&(n<=9)) {
        console.log(`El n�mero ${n} tiene un d�gito`);
        
    } else {
        if ((n>=10)&&(n<=99)) {
            console.log(`El n�mero ${n} tiene dos d�gitos`);
        } else {
            console.log("Ingreso un n�mero de mas de dos d�gitos");
        }
    }
    
}