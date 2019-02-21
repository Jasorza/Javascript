var countmen=0;
var countwomen=0;
var agewomen=0;
var agemen=0;
var gender;
var age;
var total;
var averageWomen;
var averageMen;


gender=prompt("Por favor ingrese su género");
age=parseInt(prompt("Por favor ingrese su edad"));


while (age<18){
    alert("No se admiten menores de edad")
    gender=prompt("Por favor ingrese su genero");
    age=parseInt(prompt("Por favor ingrese su edad"));
}

while(gender!=isNaN && isNaN(age)){
    alert("Por favor ingrese valores válidos");
    gender=prompt("Por favor ingrese su genero");
    age=parseInt(prompt("Por favor ingrese su edad"));
}

while (age!=0) {
    if(gender=="Mujer"){
        countwomen++;
        agewomen=agewomen+age;
    }
    else if(gender=="Hombre"){
        countmen++;
        agemen=agemen+age; 
    }
    gender=prompt("Por favor ingrese su genero");
    age=parseInt(prompt("Por favor ingrese su edad"));
}

total=countmen+countwomen;
averageWomen=agewomen/countwomen;
averageMen=agemen/countmen;

document.write("<h1> La cantidad total de personas que ingresó a la fiesta fue de: "+total+"</h1>");
document.write("<h1> La cantidad de hombres que ingresó a la fiesta fue de: " +countmen+ "</h1>");
document.write("<h1> La cantidad de mujeres que ingresó a la fiesta fue de: " +countwomen+"</h1>" );
document.write("<h1> El promedio de edad de los hombres que ingresaron es de: "+averageMen+ "</h1>");
document.write("<h1> El promedio de edad de las mujeres que ingresaron es de: "+averageWomen+"</h1>");