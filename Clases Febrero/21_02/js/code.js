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

//** Agregando */
codes.push('Swift');

function printArray(arreglo, opcion) {
    document.write('<h1>Imprimiendo Arreglo de ' + opcion + '</h1>');
    document.write('<ul>');
    for (const key in arreglo) {
        document.write('<li>' + arreglo[key] + '</li>');
    }
    document.write('</ul>');
}
printArray(codes, 'Lenguajes de Programación');
printArray(movies, 'Peliculas de Super Heroes');
//** --------------------------------------------------------------- */

//** Borrando el ultimo */
movies.pop();
printArray(movies, 'Peliculas de Super Heroes');
//** --------------------------------------------------------------- */

//** */
var indice = prompt('Ingrese el Indice');

var Array = prompt('Ingrese L para Programación o P para Peliculas');
//** --------------------------------------------------------------- */

//** */
// var categorias = ['Comedia', 'Terror', 'Accion', 'Ficcion'];
// var movies2 = ['X-Men', 'Toy Story', 'Rapidos y Furiosos', 'Tictanic'];
// var cine = [categorias, movies2];
// console.log('cine', cine);
// console.log(cine[0][3]);
// console.log(cine[1][2]);

// Crear un arreglo multimensio de 4 filas y 3 columnas, cada columna corresponde al genero de una pelicula
// Eje: La columna 0 = ficcionm, Columna 1 = Terror, Columna 2 = Accion. 
// Es asi como se tendra que imprimir:
// Ficcion: Jumanji                Terror: XXXXX           Accion: XXXXX
// Ficcion: Harry Potter           Terror: XXXXX           Accion: XXXXX
// Ficcion: Dia de Independcia     Terror: XXXXX           Accion: XXXXX
// Ficcion: X-Men                  Terror: XXXXX           Accion: XXXXX

var categorias = ['Ficcion', 'Terror', 'Accion'];
var movies3 = ['Maze Runner', 'Divergente', 'Yo, Robot', 'Ready Player One', 'Saw', 'Anabelle', 'Exterminio', 'El Resplandor', 'Battle Angel', 'Bumbleble', 'Jhon Wick', 'Venom'];
var cine2 = [categorias, movies3];
console.log('cine', cine2);
console.log(cine2[0][2]);
console.log(cine2[1][2]);
>>>>>>> 27d4ad2b03b4166b3ebd7bc1070d257ebdf256d8
