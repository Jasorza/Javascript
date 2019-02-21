//** --------------------------------------------------------------- */

var text1 = '            procesando textos    imagenes           ';
document.write('Valor de text3' + '<pre>' + text1 + '</pre>');
//** --------------------------------------------------------------- */

var sinpre = text1.trim();
document.write('Valor de text3' + '<pre>' + sinpre + '</pre>');
//** --------------------------------------------------------------- */

var tex = 'Quiero Imagenes'
var res = tex.replace('Imagenes', 'videos');
document.write('reemplazando palabras ' + res + '<br>');
//** --------------------------------------------------------------- */

//** 1ra Forma para hacer un Array */
var nombres = new Array('Roxana', 'Gomez', 'Carlos', 'Miguel');
document.write(nombres[0]);

//** 2da Forma para hacer un Array */
var nombre2 = new Array();
nombre2[0] = 'Dilan';
nombre2[1] = 'Santiago';
nombre2[2] = 'Sebastian';
nombre2[3] = 'Lorena';

//** 3ra Forma para hacer un Array */
var nombre3 = ['Jhon', 'Carlor', 'Brayan', 'Camilo'];
//** --------------------------------------------------------------- */

//** Metodos de Arreglos */
var codes = ['Js', 'Ruby', 'Java', 'PHP', 'C#'];
var movies = ['Watchmen', 'Avengers', 'Deadpool'];

//** Agrando */
codes.push('Swift');

function printArray(arreglo, opcion) {
    document.write('<h1>Imprimiendo Arreglo de ' + opcion + '</h1>');
    document.write('<ul>');
    for (const key in arreglo) {
        document.write('<li>'+arreglo[key]+'</li>');
    }
    document.write('</ul>');
}
printArray(codes,'Lenguajes de Programación');
printArray(movies,'Peliculas de Super Heroes');
//** --------------------------------------------------------------- */

//** Borrando el ultimo */
movies.pop();
printArray(movies,'Peliculas de Super Heroes');
//** --------------------------------------------------------------- */

//** Borrando el ultimo */
var indice = prompt('Ingrese el Indice');
var Array = prompt('Ingrese L para Programación o P para Peliculas');