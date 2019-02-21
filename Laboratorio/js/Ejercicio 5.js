var cc=prompt("Ingrese su número de cédula");
while (isNaN(cc)) {
    alert("Valor ingresado incorrecto");
    cc=prompt("Ingrese su número de cédula"); 
}

var name=prompt("Ingrese su nombre");

var salary=prompt("Ingrese el salario");
while (isNaN(salary)) {
        alert("Valor ingresado incorrecto");
        salary=prompt("Ingrese el salario"); 
    }
var days=prompt("Digite la cantidad de días laborados");
while (isNaN(days)) {
        alert("Valor ingresado incorrecto");
        days=prompt("Digite la cantidad de días laborados"); 
    }
var sales=prompt("Digite la cantidad de ventas generadas");
while (isNaN(sales)) {
        alert("Valor ingresado incorrecto");
        sales=prompt("Digite la cantidad de ventas generadas"); 
    }
var loan=prompt("Ingrese los prestamos del empleado");
var transport=0;
var salaryD=0;
var total_loan=0;
var total_devengado;
var salaryN=0;
var days;




salaryD = salary*days/30;   
transport = 88211*days/30;
commission = sales*0.02;
total_d = salaryD + commission;
total_loan =  loan;
        
if (salary <= 781242*2) {
total_d = total_d + transport;
salaryN= total_d - total_loan;
        }

if (salary > 781242*2) {
   transport=0;
   salaryN= total_d-total_loan;
}
    


document.write("<h1>Cédula Empleado: "+ cc);
document.write("<h1>Nombre Empleado: "+ name);
document.write("<h1>Salario Básico:"+ salary);
document.write("<h1>Auxilio de Transporte:"+ transport);
document.write("<h1>Comisión de ventas:"+ commission);
document.write("<h1>Préstamos:"+ loan);
document.write("<h1>Salario Neto a Recibir:"+ salaryN);



