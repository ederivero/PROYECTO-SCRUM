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

switch(true){
    case n==1 || n==5 || n==9 || n==15 || n==21:
        alert("=> Es una vocal");
        break;
    case n>0 && n<27:
        alert("=> Es una consonante");
        break;
    default:
        alert(n+" => Es un numero invalido")

}

