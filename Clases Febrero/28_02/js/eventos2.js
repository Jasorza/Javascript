let caja = document.querySelector('.cja');
let btnAdd = document.querySelector('#btnAdd');
let btnAddano = document.querySelector('#btnAddano');
let btnAnimar2 = document.querySelector('btnAnimar2');
let btnAddOnMouseOver = document.querySelector('#btnAddOnMouseOver');

//** -------------------------------------------------------------------------- */
function cambiarColor() {
    let btnColor = document.querySelector('#btnColor');
    let color = btnColor.style.background;

    console.log(color);

    btnColor.style.padding = '30px';
    btnColor.style.border = '10px solid blue';
    if (color == 'red') {
        btnColor.style.background = 'black';
    } else {
        btnColor.style.background = 'red';
    }
};

//** ---------------------------------------------------- */
/** AddEventListener */
btnAdd.addEventListener('click', cambiarCaja);

function cambiarCaja() {
    caja.style.width = '300px';
    caja.style.height = '500px';
    caja.style.background = '#5c5c5c';
};

btnAddano.addEventListener('click', function () {
    caja.style.width = '500px';
    caja.style.height = '300px';
    caja.style.background = '#566565';
});

btnaddOnClick.onclick = cambiarCaja2;

function cambiarCaja2() {
    caja.style.width = '700px';
    caja.style.height = '800px';
    caja.style.background = '#fa8556';
};

//** ---------------------------------------------------- */
btnAddOnMouseOver.onmouseover = function () {
    btnaddmouseover.style.background = 'oragen';
    btnaddmouseover.style.transsition = 'all linear 5s';

};

//** ---------------------------------------------------- */
btnAnimar.onmouseover = function () {
    this.classList.add('.Animar');
};

btnAnimar.onmouseout = function () {
    this.classList.remove('.Animar');
};

//** ---------------------------------------------------- */

btnAnimar.onmouseover = function () {
    this.classList.toggle('.Animar2');
};