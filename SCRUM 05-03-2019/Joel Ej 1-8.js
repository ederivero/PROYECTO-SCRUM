// 1
var repetir = true
do{
    var primernumero = +prompt("ingrese el primer numero")
    var segundonumero = +prompt("ingrese el segundo numero")
    if (primernumero>segundonumero){
        console.log(`la suma es ${primernumero} + ${segundonumero} = ${primernumero+segundonumero}`);
        console.log(`la suma es ${primernumero} - ${segundonumero} = ${primernumero-segundonumero}`);
        repetir=false
    }else{
        if (primernumero<segundonumero){
            console.log(`la multiplicacion es ${primernumero} X ${segundonumero} = ${primernumero*segundonumero}`);
            console.log(`la sdivision es ${primernumero} / ${segundonumero} = ${primernumero/segundonumero}`);
        repetir=false
        }
        else{
            alert(`los numero son iguales, ingrese otros`);
        }
    }
}while(repetir)
// 8
do{
    var validacion = true;
    var numero=+prompt("ingrese el numero al que desea enviar el mensaje");
    var mensaje=prompt("ingrese el mensaje");
    if (numero<1000000000 && numero>=100000000) {
        alert(`mensaje enviado al numero ${numero}`);
        validacion=false
    } else {
        alert(`error ingrese nuevamente el numero`);
    }
}while (validacion);
