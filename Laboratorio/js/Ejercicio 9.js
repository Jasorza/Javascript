var counter=1;
var accumulator=0;
var accumulator1=0;
var accumulator2=0;
var accumulator3=0;
var qualification;

while(counter<=10){
    qualification=prompt("Ingrese la calificación del estudiante " + counter);
   
    counter=counter+1;
    if (qualification>0 && (qualification<=100)){
        if (qualification<50){
            accumulator=accumulator+1;
        } if (qualification>=50 && (qualification<70)){
            accumulator1=accumulator1+1;
        } if (qualification>=70 && (qualification<80)){
            accumulator2=accumulator2+1;
        } if (qualification>80){
            accumulator3=accumulator3+1;
        }        
}
else{
        alert("La calificacion debe estar entre 1 y 100, Error");
        qualification=prompt("Ingrese la calificación del estudiante " + counter);
    }
    
}
document.write("<h1> La cantidad de estudiantes que obtuvieron una calificacion menor a 50: "+accumulator +"</h1>");
document.write("<h1> La cantidad de estudiantes que obtuvieron una calificacion entre 50 a 70: "+accumulator1 + "</h1>");
document.write("<h1> La cantidad de estudiantes que obtuvieron una calificacion entre 70 a 80: "+accumulator2 + "</h1>");
document.write("<h1> La cantidad de estudiantes que obtuvieron una calificacion mayor a 80: "+accumulator3 + "</h1>");

