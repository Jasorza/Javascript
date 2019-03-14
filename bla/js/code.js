var validar = function () {

	var nombre = document.formulario.nombre;
	if (nombre.value == '') {
		document.getElementById('errorNombre').innerHTML = 'El campo nombre es requerido';
		return;
	}
}
widows.onload = function () {
	var btn = document.getElementById('btn');
	btn.onclick = function () {
		validar();

	}
}
validar();