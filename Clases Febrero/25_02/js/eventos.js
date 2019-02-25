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