var manzanas=4200
var kilos=0;
var kilos=prompt("Ingrese la cantidad de manzanas que desea comprar (en kilos)");
if(isNaN (kilos)){
    alert("Valor ingresado incorrecto")
}
var valor=kilos*manzanas;
var descuento=0;



if (kilos<=2){
    document.write ("<h1> La compra de "+ kilos + " kilos tiene un valor de $" +valor+ 
    ", no tiene descuento");
}

else if(kilos>2.01 <=5){
    descuento=valor*0.10;
    document.write ("<h1> La compra de "+ kilos + " kilos tiene un valor de $" +valor+ 
    ", pero tiene un descuento por valor de $"+descuento+ " por lo tanto el valor a pagar es: $" + (valor-descuento) +"</h1>");


}


else if (kilos>5.1 <10){
    descuento=valor*0.15;
    document.write ("<h1> La compra de "+ kilos + " kilos tiene un valor de $" +valor+ 
    ", pero tiene un descuento por valor de $"+descuento+ " por lo tanto el valor a pagar es: $" + (valor-descuento) +"</h1>");
}

else if(kilos==10.1){
    descuento=valor*0.20;
    document.write ("<h1> La compra de "+ kilos + " kilos tiene un valor de $" +valor+ 
    ", pero tiene un descuento por valor de $"+descuento+ " por lo tanto el valor a pagar es: $" + (valor-descuento) +"</h1>");
}
