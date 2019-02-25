'use strict'
let caja = document.getElementById('cja');
let caja2 = document.getElementsByClassName('cajas');
let colores = ['#00FF00', '#B4045F', '#B40431', '#0B610B', '#72A369', '#634307', '#4F4E90', '#2D6F55', '#FF0040'];
console.log(caja);
console.log(caja2);

caja.style.width = '150px';
caja.style.height = '100px';
caja.style.background = 'blue';
caja.innerHTML = 'Partes del DOM';
caja.style.color = ' red';

caja2[2].style.width = '200px';
caja2[2].style.height = '150px';
caja2[2].style.background = 'red';
caja2[2].innerHTML = 'Seleccion por ClassName';
caja2[2].style.color = 'white';

for (const key in caja2) {
    caja2[key].style.width = '300px';
    caja2[key].style.height = '300px';
    caja2[key].style.background = colores[key];
    caja2[key].style.float = 'left';
    caja2[key].style.marginRight = '2%';
    caja2[key].style.marginTop = '2%';
}