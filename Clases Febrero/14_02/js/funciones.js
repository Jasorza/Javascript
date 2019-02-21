'use strict'
//Declaracion de funcion
// function saludar(){
//     console.log('hola');
// }
// saludar();
// // Expresion de funcion
// const suma = function(){
//     console.log(1 + 2);
//}

// function operacion(num1,num2){
//     var res = num1+num2;
//     console.log("res", res)
// }

// operacion(5,8);
// operacion(10,5);
// operacion(5,7);




// function retorno1(){
//      var numero = 5;
//     return numero;
//  }
// retorno1();
// var retorno=retorno1;
// console.log("sin retorno"+retorno);
// console.log("sin retorno"+retorno1());

/** --------------------------------------------------------------------------------*/
// function calcular(base, exp) {
//     var resul = Math.pow(base, exp);
//     return resul;

// }
// var m = calcular(5, 8);
// console.log("el resultado es: " + m);
// //console.log("El resultado es: " + calcular(baseNum, expNum));

// function ValNum() {
//     let Num = prompt('Ingrese un numero:')
//     while (isNan(Num)) {
//         alert('Ingrese solo numero:');
//         Num = prompt('Ingrese un numero: ');
//     }
//     return Num;
// }
// var baseN = ValNum();
// var expN = ValNum();
// console.log("El numero es:" + calcular(baseN, expN));

/** --------------------------------------------------------------------------------*/
// var user = "",
//     pass = "";

// function validauser() {
//     debugger;
//     user = prompt('Ingrese su nombre:');
//     while (!isNan(user)) {
//         alert('usuario incortecto');
//         user = prompt('Ingrese su nombre:');
//     }
//     return user;
// }

// function validapassword() {
//     pass = prompt('Digite su contraseña:');
//     while (isNaN(pass)) {
//         alert('Contraseña incorrecta');
//         pass = prompt('Digite su contraseña:');
//     }
//     return pass;
// }

// var use = validauser();
// var pas = validapassword();
// document.write("Felicitaciones el" + " " + user + " " + "ha sido registrado.");
/** --------------------------------------------------------------------------------*/

// function operaciones(num1, num2, activo = true) {
//     if (!activo) {
//         console.log("Suma " + (num1 + num2) + "</br>");
//         console.log("Suma " + (num1 + num2) + "</br>");
//         console.log("Division " + (num1 / num2) + "</br>");
//         console.console.log("Producto " + (num1 * num2) + "</br>");
//         console.console.log("Activo " + activo + "</br>");
//         console.log("************************");
//     } else {
//         document.write("Suma " + (num1 + num2) + "</br>");
//         document.write("Suma " + (num1 + num2) + "</br>");
//         document.write("Division " + (num1 / num2) + "</br>");
//         document.write("Producto " + (num1 * num2) + "</br>");
//         document.write("Activo " + activo + "</br>");
//         document.write("************************");
//     }
// }

// operaciones(2,3);
// operaciones(3,5,true);
// var num = operaciones();
/** --------------------------------------------------------------------------------*/


// function calcularTrabajo(nombre, trabajo="No esta trabajando") {
//     alert('Hola '+nombre+', tu trabajo es: '+trabajo);
//     document.write(`Hola ${nombre}, tu trabajo es: ${trabajo}`);
// }
// calcularTrabajo("Alberto", "Desarrollador Web");
// calcularTrabajo("Refael",);