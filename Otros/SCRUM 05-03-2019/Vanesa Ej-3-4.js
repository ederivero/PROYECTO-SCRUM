//Ejercicio 3

var numero;

numero=parseFloat(prompt(`######  Ejercicio 3 #####
Ingrese un numero:`));
if (numero>0)
    alert(numero+" => Es un numero positivo");
else if(numero==0)
    alert(numero+"=> Es cero");
else
    alert(numero+" => Es un numero negativo");

//Ejericicio 4
var n;
n=+prompt(`######  Ejercicio 4 #####
Ingrese un numero:`)

//var abecedario=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//console.log(abecedario[n-1]);

var caracter=String.fromCharCode(n+64) ;
var valor=n+64;


switch(true){
    case n==1 || n==5 || n==9 || n==15 || n==21:
        alert(caracter+"=> Es una vocal");
        break;
    case n>0 && n<27:
        alert(caracter+"=> Es una consonante");
        break;
    default:
        alert(caracter+" => No es consonante ni vocal");

}
