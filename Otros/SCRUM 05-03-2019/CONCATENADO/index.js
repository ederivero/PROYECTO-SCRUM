function prob01() {
    var repetir = true
    do {
        var primernumero = +document.getElementById("n11").value;
        var segundonumero = +document.getElementById("n12").value;
        if (primernumero > segundonumero) {
            document.getElementById("resultado01").innerHTML = `la suma es ${primernumero} + ${segundonumero} = ${primernumero + segundonumero} <br> 
            la suma es ${primernumero} - ${segundonumero} = ${primernumero - segundonumero}`;
            repetir = false
        } else {
            if (primernumero < segundonumero) {
                document.getElementById("resultado01").innerHTML = `la multiplicacion es ${primernumero} X ${segundonumero} = ${primernumero * segundonumero} <br>
                la division es ${primernumero} / ${segundonumero} = ${primernumero / segundonumero}`;
                repetir = false
            }
            else {
                document.getElementById("resultado01").innerHTML = `los numero son iguales, ingrese otros`;
                repetir = false;
            }
        }
    } while (repetir)
}
function prob02() {
    var n = document.getElementById("n21").value;

    if (n < 0) {
        document.getElementById("resultado02").innerHTML="Ingreso un numero negativo";
    } else {
        if ((n >= 0) && (n <= 9)) {
            document.getElementById("resultado02").innerHTML=`El numero ${n} tiene un digito`;

        } else {
            if ((n >= 10) && (n <= 99)) {
                document.getElementById("resultado02").innerHTML=`El numero ${n} tiene dos digitos`;
            } else {
                document.getElementById("resultado02").innerHTML="Ingreso un numero de mas de dos digitos";
            }
        }

    }
}
function prob03() {
    var numero = document.getElementById("n31").value;
    if (numero > 0)
        document.getElementById("resultado03").innerHTML = numero + " => Es un numero positivo";
    else if (numero == 0)
        document.getElementById("resultado03").innerHTML = numero + "=> Es cero";
    else
        document.getElementById("resultado03").innerHTML = numero + " => Es un numero negativo";
}
function prob04() {
    var n = document.getElementById("n41").value;
    var caracter=String.fromCharCode(n+64) ;
    switch (true) {
        case n == 1 || n == 5 || n == 9 || n == 15 || n == 21:
            document.getElementById("resultado04").innerHTML = caracter+"=> Es una vocal";
            break;
        case n > 0 && n < 27:
            document.getElementById("resultado04").innerHTML =caracter+"=> Es una consonante";
            break;
        default:
            document.getElementById("resultado04").innerHTML = caracter+" => No es consonante ni voca";
    }
}
function prob05() {
    var numero = +document.getElementById("n51").value;
    var cont = 0;
    multiplos = 9;
    if (numero <= 9 & numero != 0) {
        for (cont = 0; cont <= multiplos; cont++) {
            document.getElementById("resultado05").innerHTML = `> ${numero} Resultado : ${numero}x ${cont} = ${numero * cont}`;
        }
    }
    else {
        document.getElementById("resultado05").innerHTML = `dato fuera del rango 1-9`;

    }
}
function prob06() {
    var numero = 0;
    numero = +document.getElementById("n61").value;

    if (numero <= 7 && numero > 0) {
        if (numero == 1) {
            document.getElementById("resultado06").innerHTML = `el dia de la semana segun ${numero} es Lunes`;
        }

        if (numero == 2) {
            document.getElementById("resultado06").innerHTML = `el dia de la semana segun ${numero} es Martes`;
        }
        if (numero == 3) {
            document.getElementById("resultado06").innerHTML = `el dia de la semana segun ${numero} es Miercoles`;
        }
        if (numero == 4) {
            document.getElementById("resultado06").innerHTML = `el dia de la semana segun ${numero} es Jueves`;
        }
        if (numero == 5) {
            document.getElementById("resultado06").innerHTML = `el dia de la semana segun ${numero} es Viernes`;
        }

        if (numero == 6) {
            document.getElementById("resultado06").innerHTML = `el dia de la semana segun ${numero} es Sabado`;
        }
        if (numero == 7) {
            document.getElementById("resultado06").innerHTML = `el dia de la semana segun ${numero} es Domingo`;
        }
    }
    else {
        document.getElementById("resultado06").innerHTML = "ingrese un valor 1-7";
    }





}
function prob07() {

}
function prob08() {
    do {
        var validacion = true;
        var numero = document.getElementById("n81").value;
        var mensaje = document.getElementById("t82").value;
        if (numero < 1000000000 && numero >= 100000000) {
            document.getElementById("resultado08").innerHTML = `mensaje enviado al numero ${numero}`;
            document.getElementById("t82").value = ``;
            document.getElementById("n81").value = ``;
            validacion = false
        } else {
            document.getElementById("resultado08").innerHTML = `error ingrese nuevamente el numero`;
            validacion = false
        }
    } while (validacion);

}
