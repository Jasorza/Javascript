let name = document.querySelector('#name');
let validar = document.querySelector('.valida')

//** ------------ Evento Focus ------------ */
name.onfocus = function () {
    console.log('Este es el envento Focus');
    name.style.background = 'rgba(0,0,245,.3)';
}

//** ------------ Evento Fuera de Focus ------------ */
name.onblur = function () {
    console.log('Estoy fuera de foco');
    name.style.background = 'white';
    if (name.value == '') {
        alert('Rellenar el campo');
        name.style.background = 'red';
        validar.innerHTML = '* Este Campo es obligatorio'
        validar.style.color = 'red';
    } else {
        validar.style.display = 'none';
    }
}
//** Evento Key Down */
name.onkeydown=function(tecla){
    console.log('precionando la tecla repetiva veces ',tecla.keyCode);
    console.log('Presionando la tecla repetiva veces', String.fromCharCode(tecla.keyCode));
}

//** Evento KeyPress */
name.onkeypress=function(tecla){
    console.log('Manteniendo Presionando la tecla ',tecla.keyCode);
    console.log('Manteniendo Presionando la tecla ',String.fromCharCode(tecla.keyCode));
}

//** Evento KeyUp */
name.onkeyup=function(tecla){
    console.log('Soltando la tecla ',tecla.keyCode);
    console.log('Manteniendo Presionando la tecla ',String.fromCharCode(tecla.keyCode));
}