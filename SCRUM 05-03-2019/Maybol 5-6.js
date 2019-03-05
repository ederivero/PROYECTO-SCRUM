//dia
var numero=0;
numero=parseInt(prompt(`ingrese un numero para mostrarle 
    que dia de la semana es: `))
  
//problema 5 numeros a multiplicar 1-9

 var numero=parseInt(prompt("ingrese el numero que desea multiplicar"));
var cont=0;
multiplos=9;
if (numero<=9& numero!=0){
    for(cont=0;cont<=multiplos;cont++){
        console.log(`> ${numero} Resultado : ${numero}x ${cont} = ${numero*cont}`);
    }
}
else{
    console.log(`dato fuera del rango 1-9`);
    
}

 //6 dia de la semana 

if(numero<=7 && numero>0){
        if (numero==1){
            alert(`el dia de la semana segun ${numero} es Lunes`);
        }

        if (numero==2){
            alert(`el dia de la semana segun ${numero} es Martes`);
        }
        if (numero==3){
            alert(`el dia de la semana segun ${numero} es Miercoles`);
        }
        if (numero==4){
            alert(`el dia de la semana segun ${numero} es Jueves`);
        }
        if (numero==5){
            alert(`el dia de la semana segun ${numero} es Viernes`);
        }

        if (numero==6){
            alert(`el dia de la semana segun ${numero} es Sabado`);
        }
        if (numero==7){
            alert(`el dia de la semana segun ${numero} es Domingo`);
        }
    }
    else{
        alert("ingrese un valor 1-7")
    }



