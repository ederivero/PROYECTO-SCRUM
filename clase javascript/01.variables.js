//01
var base = 3,
    altura = 4,
    area = (base * altura) / 2;
console.log("El Area es: " + area);
//02
var pesos = 1000,
    tc = 0.05186,
    resultado = pesos * tc;
console.log("El cambio de " + pesos + " pesos es: $" + resultado);
//3
var anio = 1992,
    anio_actual = 2019,
    resultado = anio_actual - anio;
console.log("La persona tiene " + resultado + " años");
//04
var costoxmin = 0.15,
    totaltiempo = 80,
    resultado = costoxmin * totaltiempo;
console.log("La persona debe pagar S/." + resultado);
//05
var area = 10,
    precioxm = 10,
    resultado = area * precioxm;
console.log("El precio es S/." + resultado)
//06
var ladoa = 5,
    ladob = 8,
    hipotenusa = Math.sqrt(ladoa * ladob);
console.log("La hipotenusa es " + hipotenusa);
//07
var distanciakm = 1000,
    precioxkm = 5,
    boleto = distanciakm * precioxkm;
console.log("El boleto para una distancia de " + distanciakm + "km es de " + boleto);
//08
var velocidadkmxh = 10,
    distanciakm = 20,
    totaltiempo = distanciakm / velocidadkmxh;
console.log("El tiempo que demorara para una distancia de " + distanciakm + "km con una velocidad de " + velocidadkmxh + " es de " + totaltiempo);
//09
var tiempollamada = 40,
    costoxmin = 0.5,
    costollamada = costoxmin * tiempollamada;
console.log("El costo de llamada es " + costollamada + " para una llamada de " + tiempollamada + "minutos");
//10
var costoxm3 = 5.40,
    m3 = 50,
    total = costoxm3 * m3;
console.log("El costo por " + m3 + "m3 es de S/." + total);
//15
var corriente=50,
resistencia=4,
voltaje=resistencia*corriente,
potencia=voltaje*corriente;
console.log("Valor de potencia en watts: "+potencia);
console.log("Valor de resistencia en omhs: "+resistencia);
console.log("Valor de voltaje: "+ voltaje);

//16

function check() {
    var base = document.getElementById("valor1").value;
    var altura = document.getElementById("valor2").value;
    var respuesta1=(base*altura)/2;
    document.getElementById("respuesta").value = respuesta1;
}