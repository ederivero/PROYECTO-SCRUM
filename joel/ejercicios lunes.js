// 1
console.log("ejercicio 1");
var edad = 18;
if (edad > 17) {
    console.log("puedes votar");
} else {
    console.log("no puedes votar");
}
// 2
console.log("ejercicio 2");
var horas = 45;
var sueldoxhora = 30.00;
var excedente = 0;
var sueldototal = horas * sueldoxhora
if (horas > 39) {
    excedente = horas - 40;
    sueldototal = horas * sueldoxhora + excedente * sueldoxhora;
}
console.log("tu sueldo es " + sueldototal);
// 3
console.log("ejercicio 3");
var Presupuesto = 50;
if(Presupuesto < 11){
    console.log("compra tarjeta")
    }
if (Presupuesto > 10 && Presupuesto < 101){
    console.log("compra chocolates")
    }
if (Presupuesto > 100 && Presupuesto < 251){
    console.log("compra flores")
    }
if (Presupuesto > 251){
    console.log("compra anillo")
}


//  Ejercicio 4

var horas = 6;

if ((horas >= 0) && (horas <= 2)) {
    var c_1 = horas*5;
            console.log("La tarifa por " + horas+ " es: " + c_1 + "pesos");
} else {
    if ((horas >= 3)&&(horas < 6 )) {
        var c_2 = horas*4;
        console.log("La tarifa por " + horas+ " es: " + c_2 + "pesos");
    } else {
        if  ((horas >= 6)&&(horas < 11 )) {
            var c_3 = horas*3;
            console.log("La tarifa por " + horas+ " es: " + c_3 + "pesos");
        } else {
            if (horas >= 11) {
                var c_4 = horas*2;
                console.log("La tarifa por " + horas+ " es: " + c_4 + "pesos");
            } else {
                console.log("Cantidad de horas invalida");
                
            }
        }
    }    
}

// Ejercicio 5

var a = "mauricio";
var d = 27;

var b = "carlos";
var e = 89;

var c = "eder";
var f = 1;

if ((f<=0) || (e<=0) || (d<=0) ){
    console.log("Ingreso una edad invalida");
} else {
    if ((f>=e)&&(e>=d)) {
        console.log("El menor es " + a);
    } else {
        if ((e>=d)&&(d>=f)) {
            console.log("El menor es " + c);
        } else {
            if ((d>=f)&&(f>=e)) {
                console.log("El menor es " + b);
            }        
        }
    }
}

// Ejercicio 6

var p = 210;


if (p<0) {
    console.log("Precio Invalido");
} else {
    if ((p>=200)) {
        var p_desc = p - (p*0.15);
        console.log("El precio es "+ p +" su precio con descuento es " + p_desc);
    } else {
       if ((p>100)&&(p<200)) {
        var p_desc = p - (p*0.12);
        console.log("El precio es "+ p +" su precio con descuento es " + p_desc);  
       } else {
           if (p<100) {
            var p_desc = p - (p*0.10); 
            console.log("El precio es "+ p +" su precio con descuento es " + p_desc);  
             } else{
                 console.log("El precio es de " + p);
                 
            }
        }
    }
}




// 16
console.log("ejercicio 16");
var puntos = 150;
if(puntos >= 0 && puntos < 101){
    console.log("1 salario")
    }
if (puntos > 100 && puntos < 151){
    console.log("2 salarios minimos")
    }
if (puntos > 150){
    console.log("3 salarios minimos")
    }
// 17
var Presupuesto = 30000;
if(Presupuesto < 10000){
    console.log("comprar 1 par de zapatos, 2 camisas y 2 pantalones")
    }
if (Presupuesto >= 10000 && Presupuesto < 20000){
    console.log("comprar 2 pares de zapatos, 3 camisas y 3 pantalones")
    }
if (Presupuesto >= 20000  && Presupuesto < 50000){
    console.log("comprar una grabadora, 3 pares de zapatos, 5 camisas y 5 pantalones")
    }
if (Presupuesto >= 50000){
    console.log("comprar una television, un modular, 3 pares de zapatos, 5 camisas y 5 pantalones")
}
// 18
var sueldo = 1000;
var antiguedad = 3;
if(sueldo < 2000 || antiguedad > 4){
    console.log("el bono sera "+ sueldo*0.25);
}else{
    console.log("el bono sera "+ sueldo*0.20);
}