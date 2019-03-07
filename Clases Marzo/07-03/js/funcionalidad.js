//  **** OBJETO PARA REALIZAR VALIDACIONES

var valForm = {
    //Función que valida textos con  valores maximos, minimos,y expresiones 
    //regulares

    valText: function (min, max, propVal, inpVal, menError, expresionRegular) {


        if (propVal.length < min || propVal.length > max || !expresionRegular.test(propVal)) {
            //Al existir un error se muestra un mensaje de advertencia en un span 
            inpVal.innerHTML = '<span style="color:red">*Error al ingresar los datos: ' + menError + '</span>';

            return false;

        } else {
            //Si no existe error borramos el  span
            inpVal.parentNode.removeChild(inpVal);

            return true;

        }

    },
    //Método para validar expresiones regulares 
    valExpRegular: function (expresionRegular, propFormVal, inpVal, menError) {

        if (!expresionRegular.test(propFormVal)) {
            //Si es incorrecta la validación se muestra el mensaje de advertencia
            inpVal.innerHTML = '<span style="color:red">*Error al ingresar los datos: ' + menError + '</span>';

            return false;

        } else {

            //En caso contrario se elimina el mensaje que anteriormente fue creado
            inpVal.parentNode.removeChild(inpVal);

            return true;
        }

    }
}

//Obejto para las propiedades del Formulario
var proForm = {
    entradas: document.querySelectorAll('input.validar'),
    valorInput: null,
    expresionRegular: null
}

var metForm = {
    inicio: function () {
        proForm.entradas.forEach(element => {
            element.addEventListener('focus', metForm.inpFoco);
            element.addEventListener('blur', metForm.inpFueraFoco);
            element.addEventListener('change', metForm.inpchange);
        });
    },
    inpFoco: function (input) {
        console.log(input);
        proForm.valorInput = input.target.value;
        if (proForm.valorInput == null) {
            document.querySelector('#' + input.target.id).style.backgraund = '#rgba(255, 0, 0, .05)';
            document.querySelector('#' + input.target.id).style.borderBottom = '6px solid rgba(255, 0, 0, 0.8)';
            document.querySelector('[for=' + input.target.id + '] .obligatorio').style.display = 'block';
        }
        document.querySelector('[for=' + input.target.id + ']').appendChild(document.createElement('div')).setAttribute('class', 'error');
    },
    inpFueraFoco: function (input) {
        document.querySelector('[for=' + input.target.id + '] .obligatorio').style.display = 'none';
        document.querySelector('[for=' + input.target.id + '] .obligatorio').style.backgraund = '#fff';
        document.querySelector('[for=' + input.target.id + '] .obligatorio').style.borderBottom = '3px solid crissmon';
    },
    inpchange: function (input) {
        console.log('Estoy cambiando a ' + input.target.id);
    },
    inpchange: function (input) {
        let validar = false;
        var tipo = input.target.type;
        switch (tipo) {
            case 'text':
                console.log('Esto es un input tipo texto');
                propForm.expresionRegular = /^[a-zA-Z]+$/;
                validar = valForm.valText(2, 6, proForm.valorInput, document.querySelector('[for=' + input.target.id + '] .error'), input.target.placeholder, proForm.expresionRegular);
                break;
            case 'password':
                console.log('Esto es un input tipo password');
                break;
            case 'date':
                console.log('Esto es un input tipo date');
                break;
            case 'number':
                console.log('Esto es un input tipo number');
                break;

            default:
                break;
        }
    }
}
metForm.inicio();