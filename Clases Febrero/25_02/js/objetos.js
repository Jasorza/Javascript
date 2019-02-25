let persona = {
    nombre: 'Carlos',
    edad: 56,
    apellido: 'Macipe',
    trabajo: true,

    musica: ['Rock', 'Pop', 'Metal', 'Tropical'],

    casas: {
        ciudad: 'Medellin',
        departamento: 'Antioquia'
    },
    anioNacimiento: function () {
        return new Date().getFullYear() - this.edad;
    }
}

//**------------------------------------------------------------------------------------------------------- */
document.write('<h1>Recoriendo Objeto Persona</h1>')
for (const key in persona) {

    document.write('<ul>')
    document.write('<li>' + persona[key] + '</li>')
    document.write('</ul>')
}

//**------------------------------------------------------------------------------------------------------- */
document.write(`<h2> Tercer elemento del Arreglo Musica del objeto persona:</h2> ${persona.musica[3]}`);
document.write(`<h2> Elemento Ciudad del objeto Persona:</h2> ${persona.casas.ciudad}`);
document.write(`<h2> Elemento Departamento del objeto Persona:</h2> ${persona.casas.departamento}`);

let anioNacimiento = persona.anioNacimiento();
document.write(`<h2> Año de Nacimiento:</h2> ${anioNacimiento}`);

//**------------------------------------------------------------------------------------------------------- */
document.write('<h1>Reproductor Musica</h1>');
let musica = {
    reproducir: function(cancion) {
        document.write(`Play => ${cancion} <br>`);
    },
    pausar: function(cancion) {
        document.write(`Paused => ${cancion} <br>`);
    },
    parar: function(cancion) {
        document.write(`Stop => ${cancion} <br>`);
    }
}

musica.reproducir('Amnesia');
musica.pausar('Amnesia');
musica.parar('Amnesia');
musica.reproducir('Testimonio');
musica.parar('Testimonio');
musica.reproducir('Vida');