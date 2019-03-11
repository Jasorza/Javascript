//--------Funciones iies----------//
(function () {
   console.log('AQUI ESTOY!!');
})();


//--------Funciones REST----------//
function listarObjetos(obj1, obj2, ...restObj) {
   console.log("obj1", obj1);
   console.log("obj2", obj2);
   console.log("restObj", restObj);
}
listarObjetos("Item1", "Item2", "Item3", "Item4", "Item5", "Item6");


//--------Funciones Spread----------//
// function listarfrutas2(fruta1, fruta2, ...restFruta) {
//    console.log("fruta1", fruta1);
//    console.log("fruta2", fruta2);
//    console.log("restFruta", restFruta);
// }
// var frutas = ('Melon', 'Uva');
// listarfrutas2(...frutas, "Naranja", "Manzana", "Sandia", "Pera", "Durazno", "Coco");


//--------Funciones Anonima----------//
var resultado = function (num1, num2) {
    var res = num1 + num2;
    return res;
}
console.log("Resultado de la funcion Aninima", resultado(10, 20));


//--------Funciones lamda----------//

var resultado = (num1, num2) => {
   var res = num1 + num2;
   return res;
}
console.log("Resultado de la funcion Lamba", resultado(90, 30));


// //---------------------------------//
// function viajarMundo(destino){
//     let viajar = "Viajando por "+destino;
//     return viajar;
// }

// let destino = viajarMundo("Londres");
// console.log(destino);

// let destino2 = function (destino) {
//     let viajar = "Viajando por "+destino
//     return viajar;
// }
// console.log(destino2("Paris"));

// let destino3 = (destino) => "Viajando por "+destino;
// console.log(destino3("EUA"));


// //--------Funciones Callback----------//
// function adicion(num1,num2,suma,prod,resta) {
//     console.log("num1",num1);
//     console.log("num2",num2);
//     var res = num1+num2;
//     suma(res);
//     prod(res);
//     resta(num1,num2);
// }
// adicion(5,7,function(total){
//     console.log("la suma es: "+total);
// },function (total) {
//     console.log("El doble de:"+total+" es "+total*2);
// },function (total) {
//     console.log("La resta de: "+n1+" - "+n2+" es "+(n1-n2));
// });


