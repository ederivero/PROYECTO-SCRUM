   
// 1
// console.log("Ejercicio 1");

// var i=2;
// var s=1500.00;
// var q = 6;
// var n = 1;

// while (i<=q) {
//     i = i+1;
//     console.log(`El sueldo del año, ${n}`);
//     n = n+1;
//     s=(s+(s*0.10));
//     console.log(`Es: ${s} soles`);
    
// }
// console.log( `El sueldo del año ${n} es ${s} soles`);

// 2
// console.log("Ejercicio 2");
// var cantidad;
// var cont=1 ; 
// var simple=0;
// var doble=0;
// var triple=0;
// var total_a;
// var total_b;
// var tipo;
// var pago;
// var a;


// cantidad = prompt("Ingrese cuantas hamburguesas desea");

// while (cont<=cantidad) {
//     cont = cont+1;

//     tipo= prompt(`///////TIPOS DE HAMBURGUESA//////
//                     S <- Simple
//                     D <- Doble
//                     T <- Triple
//                     Ingrese la opción`);

//         if (tipo=="S") {
//             simple=simple+20;
//         } else{
//             if (tipo=="D") {
//                 doble=doble+25;
//             }else{
//                 if (tipo=="T") {
//                     triple=triple+28;
//                 }
//             }
  
//         }  
// }

// total_a = (simple+doble+triple);
// pago= prompt(`///////TIPOS DE PAGO//////
//                     a <- Efectivo
//                     b <- Tarjeta
//                     Ingrese la opción`);
// a= "a"
// if (pago == a) {
//     console.log(`Su total a pagar es ${total_a}`);
    
// } else {
//     total_b = total_a+(total_a*5/100);
//     console.log(`Su total a pagar es ${total_b}`);
    
// }


// 3
// console.log(`Ejercicio 3`);

// var iguales = 0;
// var menores = 0;
// var mayores = 0;
// var cont;
// var n = prompt(`Ingresar cantidad de números`);

// for (cont = 0; cont < n; cont++) {
//     var cantidades = prompt(`Ingrese el número ${cont}`);
    
//     if (cantidades==0) {
//         iguales=iguales+1;
//     } else {
//         if (cantidades<0) {
//             menores=menores+1
//         } else {
//             mayores=mayores+1   
//         }
//     }

// }
// console.log(`Los números iguales a 0 son: ${iguales}`);
// console.log(`Los números menores a 0 son: ${menores}`);
// console.log(`Los números mayores a 0 son: ${mayores}`);


// 4
// console.log(`Ejercicio 4`);

// var verdes =0;
// var rojos = 0;
// var blancos = 0;
// var i = 1;
// var n_focos;
// var color;

// n_focos = prompt(`Ingresar N° de Focos`);

// for (i = 0; i < n_focos; i++) {
//     color = prompt(`////Qué color es el foco¿?/////
//                          B <- Blanco
//                          V <- Verde
//                          R <- Rojo
//                 Ingrese el color del foco`);
    
//     if (color=="B") {
//         blancos=blancos+1;
//     } else {
//         if (color=="V") {
//             verdes=verdes+1;
//         } else {
//             if (color=="R") {
//                 rojos=rojos+1;
//             }else{
//                 console.log(`Ingreso un color invalido`);
                
//             }
//         }
//     }
// }
// console.log(`El total de focos rojos es: ${blancos}`);
// console.log(`El total de focos verdes es: ${verdes}`);
// console.log(`El total de focos blancos es: ${rojos}`);


// 5
// no terminado
// console.log(`Ejercicio 5`);
// var ahorro_diario=1;
// var suma_ahorro=0;
// var i=0; 

    
// }

// for a in range(1,366):
//   ahorro_diario=ahorro_diario*3
//   print("su ahorro diario es de : ", ahorro_diario)
//   suma_ahorro=suma_ahorro+ahorro_diario
//   print("su ahorro acumulado es:", suma_ahorro)
// print("el ahorro durante el año fue: ",  suma_ahorro)


// 6
// console.log("Ejercicio 6");

// DESDE, HASTA QUE
// var i;
// var s=1500.00;
// var q = 6;
// var n = 1;

// for (i = 2; i <= q; i++) {
//     console.log(`El sueldo del año, ${n}`);
//     n = n+1;
//     s=(s+(s*0.10));
//     console.log(`Es: ${s} soles`);
// }
// console.log( `El sueldo del año ${n} es ${s} soles`);

// REPITE
// var i=1;
// var s=1500.00;
// var q = 6;
// var n = 1;

// do {
    
//     i = i+1;
//     console.log(`El sueldo del año, ${n}`);
//     n = n+1;
//     s=(s+(s*0.10));
//     console.log(`Es: ${s} soles`);

// } while (i<q);
//     console.log( `El sueldo del año ${n} es ${s} soles`);

// 7
// console.log(`Ejercicio 7`);

// MIENTRAS
// var cantidad;
// var cont=1 ; 
// var simple=0;
// var doble=0;
// var triple=0;
// var total_a;
// var total_b;
// var tipo;
// var pago;
// var a;


// cantidad = prompt("Ingrese cuantas hamburguesas desea");

// while (cont<=cantidad) {
//     cont = cont+1;

//     tipo= prompt(`///////TIPOS DE HAMBURGUESA//////
//                     S <- Simple
//                     D <- Doble
//                     T <- Triple
//                     Ingrese la opción`);

//         if (tipo=="S") {
//             simple=simple+20;
//         } else{
//             if (tipo=="D") {
//                 doble=doble+25;
//             }else{
//                 if (tipo=="T") {
//                     triple=triple+28;
//                 }
//             }
  
//         }  
// }

// total_a = (simple+doble+triple);
// pago= prompt(`///////TIPOS DE PAGO//////
//                     a <- Efectivo
//                     b <- Tarjeta
//                     Ingrese la opción`);
// a= "a"
// if (pago == a) {
//     console.log(`Su total a pagar es ${total_a}`);
    
// } else {
//     total_b = total_a+(total_a*5/100);
//     console.log(`Su total a pagar es ${total_b}`);
    
// }


// DESDE
// var cantidad;
// var cont=1 ; 
// var simple=0;
// var doble=0;
// var triple=0;
// var total_a;
// var total_b;
// var tipo;
// var pago;
// var a;

// cantidad = prompt("Ingrese cuantas hamburguesas desea");

// for (cont = 1; cont <=cantidad; cont++) {
    
//     tipo= prompt(`///////TIPOS DE HAMBURGUESA//////
//                         S <- Simple
//                         D <- Doble
//                         T <- Triple
//                         Ingrese la opción`);

//         if (tipo=="S") {
//             simple=simple+20;
//             } else{
//                 if (tipo=="D") {
//                     doble=doble+25;
//                 }else{
//                     if (tipo=="T") {
//                         triple=triple+28;
//                     }
//                 }

//             }
// }
// total_a = (simple+doble+triple);
// pago= prompt(`///////TIPOS DE PAGO//////
//                     a <- Efectivo
//                     b <- Tarjeta
//                     Ingrese la opción`);
// a= "a"
// if (pago == a) {
//     console.log(`Su total a pagar es ${total_a}`);
    
// } else {
//     total_b = total_a+(total_a*5/100);
//     console.log(`Su total a pagar es ${total_b}`);
    
// }


// 8
// console.log(`Ejercicio 8`);

// var cont=1;
// var mayor_200=0;
// var entre_100_200=0;
// var menor_100=0;
// var cantidad;
// var costo;
// var suma_total;

// cantidad = prompt("Ingrese en N° de articulos");

// while (cont<=cantidad) {
//     cont= cont+1;
//     costo = prompt("Ingrese el costo del articulo");  
    
//     if (costo>=200) {
//         console.log(`El costo del articulo es ${costo} soles`);
//         console.log(`El descuento sera del 15%`);
//         costo=costo-(costo*0.15);
//         console.log(`El costo del articulo con descuento es ${costo} soles`);
//         mayor_200=mayor_200+costo;
       
//     } else {
//         if ((costo>100)&&(costo<200)) {
//             console.log(`El costo del articulo es ${costo} soles`);
//             console.log(`El descuento sera del 12%`);
//             costo=costo-(costo*0.12);
//             console.log(`El costo del articulo con descuento es ${costo} soles`);
//             entre_100_200=entre_100_200+costo;

//         } else {
//             if (costo<=100) {
//                 console.log(`El costo del articulo es ${costo} soles`);
//                 console.log(`El descuento sera del 10%`);
//                 costo=costo-(costo*0.10);
//                 console.log(`El costo del articulo con descuento es ${costo} soles`);
//                 menor_100 = menor_100+costo;
//             } 
//         }
        
//     }
// }

// suma_total = menor_100+mayor_200+entre_100_200;
// console.log(`El monto total a pagar es ${suma_total}`);


// 9
console.log("Ejercicio 9");

var suma = 0;
meses = años * 12

var anios= prompt("Ingrese la cantidad a depositar");
for (anio = 0; index < array.length; index++) {
    const element = array[index];
    
}






























        







