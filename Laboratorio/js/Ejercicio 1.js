var deposit=parseInt(prompt("Ingrese la cantidad de dinero que depositó sin puntos ni comas"));
if(isNaN (deposit)){
    alert("Valor ingresado incorrecto")
}

else {
    document.write ("<h1>Valor consignado: "+ deposit +"</h1>");
}

var interest=0.02;
document.write("<h1> El valor del interés al 2% mensual es de: "+ deposit* interest+"</h1>");

var balance= Math.pow(1+interest,60);
var total= balance*deposit;
document.write("<h1> Valor futuro en 5 años: " + total +"</h1>");