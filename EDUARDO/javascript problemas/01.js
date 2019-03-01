//19
function eje19() {
    var sexo = document.getElementById("txt19sexo").value,
        edad = document.getElementById("txt19edad").value,
        vacuna;
    if (edad > 70) {
        vacuna = "C";
    } else {
        if (edad >= 16 && edad <= 69) {
            if (sexo == "F") {
                vacuna = "B";
            }
            else {
                vacuna = "A";
            }
        }
        else {
            vacuna = "A";
        }
    }
    document.getElementById("resultado19").innerHTML = `El paciente necesitara la vacuna ${vacuna}`;

}
//20
function eje20() {
    var modelo = document.getElementById("txt20modelo").value,
        tallas = document.getElementById("txt20tallas").value,
        precio = document.getElementById("txt20precio").value;
    switch (modelo) {
        case "A":
            precio = precio * 1.8;
            break;
        case "B":
            precio = precio * 1.95;
    }
    if (tallas == 32 || tallas == 36) {
        precio = precio * 1.04;
    }
    precio = precio * 1.30;

    document.getElementById("resultado20").innerHTML = `El precio es de S/.${precio}`;
}

//21
function eje21() {
    var pagomin = 0,//calc
        montocompra = document.getElementById("txt21montocompra"),
        pagocorteactual = document.getElementById("txt21pagocorteactual"),
        pagocorteanterior = document.getElementById("txt21pagocorteanterior"),
        saldoant = document.getElementById("txt21saldoant"),
        pagoparanogenerarintereses = 0, //calc
        intereses = 0,
        saldoact = montocompra - pagocorteanterior - saldoant;


    if (saldoact > 0) {
        pagomin = saldoact * .15;
        pagoparanogenerarintereses = saldoact * 0.85;
    }
    else {
        pagomin = 0;
        pagoparanogenerarintereses = 0;
    }
    if (pagocorteactual < pagoparanogenerarintereses) {
        intereses = saldoact * 0.12 + 200;
    }
    else {
        intereses = 0;
    }
    document.getElementById("resultado21").innerHTML = `Valor de los intereses: ${intereses}. 
    Valor de pago minimo: ${pagomin}. 
    Valor de pago para no generar intereses: ${pagoparanogenerarintereses}. 
    Valor de saldo actual: ${saldoact}`;
}



