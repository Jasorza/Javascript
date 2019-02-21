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

var nombres = new Array('Roxana', 'Gomez', 'Carlos', 'Miguel');
document.write(nombres[0]);

var nombre2 = new Array();
nombre2[0] = 'Dilan';
nombre2[1] = 'Santiago';
nombre2[2] = 'Sebastian';