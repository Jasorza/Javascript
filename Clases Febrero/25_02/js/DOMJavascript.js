'use strict'
let caja = document.getElementById('cja');
let caja2 = document.getElementsByClassName('cajas');
let colores = ['#00FF00', '#B4045F', '#B40431', '#0B610B', '#72A369', '#634307', '#4F4E90', '#2D6F55', '#FF0040'];
let caja3 = document.getElementsByTagName('div');
let caja4 = document.querySelector('#cja');
let caja5 = document.querySelector('.caja');
let caja6 = document.querySelectorAll('.cajas');
let principal = document.querySelector('princippal');
let hr = document.createElement('hr');

//**------------------------------------------------------------------------------------------------------------------------ */
console.log(caja);
console.log(caja2);
console.log(caja3);
console.log('querySelector caja por .ID', caja4);
console.log('querySelector caja por .Class', caja5);
console.log('querySelectorAll Class .Cajas', caja6);

//**------------------------------------------------------------------------------------------------------------------------ */
caja.style.width = '350px';
caja.style.height = '100px';
caja.style.background = 'blue';
caja.innerHTML = 'Partes del DOM';
caja.style.color = ' red';

//**------------------------------------------------------------------------------------------------------------------------ */
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
    caja2[key].innerHTML = key;
    caja2[key].style.color = 'black';
    caja2[key].style.fontSize = '32px';
    caja2[key].style.textAlign = 'center';
    caja2[key].style.lineHeight = '10'
};

clear


//**------------------------------------------------------------------------------------------------------------------------ */