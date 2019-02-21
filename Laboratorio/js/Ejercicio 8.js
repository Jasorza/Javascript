var value = 0;
var aditional=30;
var minute=prompt("Ingrese los minutos: ");


if(minute<=3){
value=200;
}
if(minute>3){
value=(minute*aditional+200)-90;
}

        
document.write( "<h1> El valor de la llamada es: $"+value +"</h1>");
document.write("<h1> La cantidad de minutos hablados es:"+ minute + "</h1>");

