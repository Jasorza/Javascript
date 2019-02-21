var numero =0;
var txt1="Metodos para procesar texto, imagenes y muchos mas textos";
var txt2="Utiles en archivo de texto";
var ciudades =["Bogota", "Medellin", "Tunja", "Fusagasuga", "Melgar"];
var email = 'sena@misena.edu.co'

//**Longitud de String */
document.write('la longitud de la variable es: '+String(numero).length+'<br>');
document.write('la longitud de txt1 es: '+txt1.length+'<br>');
document.write('la longitud de txt2 es: '+txt2.length+'<br>');
document.write('la longitud de Ciudad es: '+ciudades.length+'<br>');

//**Concatenar dos String */
document.write('Concatenando txt1 y txt2 '+txt1.concat(txt2)+'<br>');

//**Pasando a Mayusculas */
document.write('Pasando a Mayusculas '+txt1.toUpperCase()+'<br>');

//**Pasando a Minusculas */
document.write('Pasando a Mayusculas '+txt1.toLowerCase()+'<br>');

//** Primer Indice */
document.write("Primera coincidencia de textos es: "+txt1.indexOf('textos'));

//**ultimo indice */
document.write('ultima coincidencia de textos es: '+txt1.lastIndexOf('textos')+'<br>');

//** Buscar una palabra */
document.write('buscar una palabra '+txt2.search('archivo')+'<br>');

//** */
document.write('aaaaaaa'+txt2.slice(10,15)+'<br>');

//** */
document.write('buscar incio de letra '+txt2.startsWith('h')+'<br>');
document.write('buscar termina con letra '+txt2.endsWith('o')+'<br>');

//** */
document.write('buscar si inluye alguna palabra '+txt1.includes('para')+'<br>');

//** */
document.write('Buscar @ '+email.includes('@')+'<br>');

//**Convirtiendo en Arrelgos */

console.log('Convirtiendo txt2 a arreglo'+txt2.split(' '));