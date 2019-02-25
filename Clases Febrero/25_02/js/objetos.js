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
    reproducir: function (cancion) {
        document.write(`Play => ${cancion} <br>`);
    },
    pausar: function (cancion) {
        document.write(`Paused => ${cancion} <br>`);
    },
    parar: function (cancion) {
        document.write(`Stop => ${cancion} <br>`);
    }
}

musica.reproducir('Amnesia');
musica.pausar('Amnesia');
musica.parar('Amnesia');
musica.reproducir('Testimonio');
musica.parar('Testimonio');
musica.reproducir('Vida');

//**----------------------  OBJETO LITERAL  ----------------------------------------------- */
let tarea = {
    nombre: 'Aprendiendo',
    tecnologia: 'Javascript'
}
console.log(tarea);

//**----------------------  OBJETO CONSTRUCTOR  ----------------------------------------------- */
function Tarea(nombre, tecnologia) {
    this.nombre = nombre;
    this.tecnologia = tecnologia;
}

let nTarea = new Tarea('Estudiar', 'Javascript');
console.log(nTarea);
console.log(nTarea.no, nTarea.tec);
console.log(nTarea.nombre, nTarea)

//**----------------------  OBJETO CLASS  ----------------------------------------------- */
class Tarea3 {
    constructor(nombre, funcion, valor) {
        this.nombre = nombre;
        this.funcion = funcion;
        this.valor = valor;
    }
}

let tarea3 = new Tarea3('Lorena', 'Aprender', 2030);
console.log(tarea3);

//**------------------------------------------------------------------------------------------------------- */
let personas = [{
        nombre: 'Juan',
        edad: 20
    },
    {
        nombre: 'Pablo',
        edad: 50
    },
    {
        nombre: 'Alejandra',
        edad: 23
    },
    {
        nombre: 'Karen',
        edad: 28
    },
    {
        nombre: 'Miguel',
        edad: 33
    },
]
console.table(personas);

//**Obtener las personas con mas de 25 años */
const mayores = personas.filter(persona => persona.edad > 25)
console.log(mayores);

const persona1 = personas.find(persona => persona.nombre === 'Alejandra')
console.log(persona1);

const total = personas.reduce((edadTotal, persona) =>{
    return edadTotal + persona.edad;
},0);
console.log(total);