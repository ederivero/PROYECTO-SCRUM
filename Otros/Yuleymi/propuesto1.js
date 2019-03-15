// 4
var costo_hora;
var c_hora = 7;
var cobrar;


if (c_hora<0) {
    console.log("Cantidad de horas Invalidas");
} else {
    if ((c_hora>=0)&&(c_hora<=2)) {
        costo_hora = 5;
        cobrar = costo_hora*c_hora;

        console.log("Su tarifa es de: " + cobrar +" soles por " +c_hora +" horas.");
        
    } else {
        if ((c_hora>2)&&(c_hora<6)) {
            costo_hora = 4;
            cobrar = (costo_hora*c_hora)+10;
            console.log("Su tarifa es de: " + cobrar+ " soles por " +c_hora +" horas.");
            
        } else {
         if ((c_hora>5)&&(c_hora<11)) {
            costo_hora = 3;
            cobrar = ((costo_hora*c_hora)+22);
            console.log("Su tarifa es de: " + cobrar+ " soles por " +c_hora +" horas.");
        
         } else {
            if ((c_hora>10)) {
                costo_hora = 2;
                cobrar = (costo_hora*c_hora)+37;
                console.log("Su tarifa es de: " + cobrar+ " soles por " +c_hora +" horas.");
              
            } 
        
        }
    }
}
}


// 5
var p = 8;
var b = 3;
var c = 5;

var n_1 = "Marco";
var n_2 = "Luis";
var n_3 = "Alfredo";

if ((p<0)||(b<0)||(c<0)) {
    console.log("Ingreso una edad invalida");
 } else {
    if (p<b && p<c){
        console.log(n_1 + " tiene "+p+" años",n_2 + " tiene "+b
        +" años", n_3 + " tiene "+c+" años." + "El menor es "+n_1+" con "+p+" años. ");
    }else{
        if (b<p && b<c){
            console.log(n_1 + " tiene "+p+" años",n_2 + " tiene "+b
               +" años", n_3 + " tiene "+c+" años." + "El menor es "+n_2+" con "+b+" años. ");
       }else{
            if (c<b && c<p){
                console.log(n_1 + " tiene "+p+" años",n_2 + " tiene "+b
                    +" años", n_3 + " tiene "+c+" años." + "El menor es "+n_3+" con "+c+" años. ");
            }
       }
    }
}

// 6
var p = 150;
var descuento1;
var precio_descuento;

if (0>p) {
    console.log("Ingreso una precio invalido");
 } else {
    if (p>=200){
        precio_descuento = p*0.85;
        descuento1 = p*0.15;
        console.log("Costo del articulo "+p+" soles."+ " Descuento: "+ descuento1+" soles. Precio a pagar: "+precio_descuento
        +" soles. ");
    }else{
        if (200>p && p>100){
            precio_descuento = p*0.88;
            descuento1 = p*0.12;
            console.log("Costo del articulo "+p+" soles."+ " Descuento: "+ descuento1+" soles. Precio a pagar: "+precio_descuento
            +" soles. ");
       }else{
            if (100>p){
                precio_descuento = p*0.90;
                descuento1 = p*0.10;
                console.log("Costo del articulo "+p+" soles."+ " Descuento: "+ descuento1+" soles. Precio a pagar: "+precio_descuento
                +" soles. ");
            }
       }
    }
}











