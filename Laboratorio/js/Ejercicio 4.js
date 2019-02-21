var number=0;
var sum=0;
var value1,value2,value3,value4;

number=prompt(" Ingrese un número ");


value1= number/10;
value2= number%10;
sum= sum+value2;
value1= value1-(value2*0.1);

while (value1>0){
    value3=value1/10;
    value4 = value1%10;
    sum = sum+value4;
    value1=value3-(value4*0.1);
    
    }
document.write("<h1>El numero ingresado es: "+number+" y la suma de sus digitos es: "+ sum+ "</h1>");

