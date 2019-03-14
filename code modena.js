function moneda (){
	this.nombre
	this.tipodeCambio
	this.mensaje = [
	'mensaje 1',
	'menasje 2',
	'mensaje 3'
	]

	this. convertir = function(monto){
		conversionResultado = monto = this.tipodeCambio

		var mensajeHTML

		if (conversionResultado <= 0){
			mensajeHTML = this.mensaje[0]
		} else if (monto == 13){
			mensajeHTML = this.mensaje[1]
		} else if (monto > 1000){
			mensajeHTML = this.mensaje[2]
		} else {
			mensajeHTML = monto+' dolares son '+conversionResultado+' '+ this.nombre
		}

		document.getElementById('resultadodelCambio').innerHTML = mensajeHTML
	}
}

var modena1 = new moneda()
modena1.nombre='Yenes'
modena1.tipodeCambio=99.5

var moneda2 = new moneda2()
moneda2.nombre='Soles'
moneda2.tipodeCambio=2.7


function convertirModena(tipodedeMoneda){
	var montoSelecionado = document.getElementById('monto').value
	
	if (tipodedeMoneda == modena1){
		modena1.convertir(montoSelecionado)
	}else if(tipodedeMoneda == 'moneda2'){
		modena2.convertir(montoSelecionado)
	}
	
}
