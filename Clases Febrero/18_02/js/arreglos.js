var pendientes = ["Planear", "Proyectar", "Ejecutar", "presupuestar y liquidar"];
console.log("Arreglos pendientes" + pendientes)
var carrito = [{
        id: 1,
        articulo: "guantes"
    },
    {
        id: 2,
        articulo: "chanclas"
    },
    {
        id: 3,
        articulo: "palo"
    },
    {
        id: 4,
        articulo: "escoba"
    },
    {
        id: 5,
        articulo: "recojedor"
    },
    {
        id: 6,
        articulo: "ollas"
    },
    {
        id: 7,
        articulo: "platos"
    }

];
var automovil = {
    Marca: "Chevrolet",
    Modelo: "Camaro",
    Anio: 2014,
    Color: "Negro"
};



//----------------------------------------------------------------//
document.write("<h1>Recorriendo el arreglo con un FOR Classic</h1>");
document.write("<ul>");
for (let index = 0; index < pendientes.length; index++) {
    document.write("<li>" + pendientes[index] + "</li>")
}
document.write("</ul>");

//----------------------------------------------------------------//
document.write("<h1>Recorriendo el arreglo con un FOR IN</h1>");
document.write("<ul>");
for (const key in pendientes) {
    document.write("<li>" + pendientes[key] + "</li>");
}
document.write("</ul>");

//----------------------------------------------------------------//
document.write("<h1>Recorriendo el arreglo con un FOR EACH</h1>");
document.write("<ul>");
pendientes.forEach(element => {
    document.write("<li>" + element + "</li>");
});
document.write("</ul>");

//----------------------------------------------------------------//
document.write("<h1>Recorriendo el arreglo con un FOR OF</h1>");
document.write("<ul>");
for (const iterator of pendientes) {
    document.write("<li>" + iterator + "</li>");
}
document.write("</ul>");

//----------------------------------------------------------------//
document.write("<h1>Recorriendo el objeto Automovil con un FOR IN</h1>")
document.write("<ul>");
for (const key in automovil) {
    document.write("<li>" + key + ": " + automovil[key] + "</li>");

}
document.write("</ul>");

//----------------------------------------------------------------//
document.write("<h1>Recorriendo el objeto Carrito con un FOR OF</h1>")
document.write("<ul>");
Object.keys(carrito).forEach(element => document.write("<li>Elemento " + element + " Del carrito</li>" + "<ol>" + Object.values([element]) + "</ol>" + "<ol>" + Object.values(carrito[element]) + "</ol>"));
document.write("</ul>");

//----------------------------------------------------------------//

document.write("<h1>Recorriendo el objeto Carrito de Compras</h1>");
document.write("<ul>");
for (const key in carrito) {
    document.write(`<li> Elemento ${key} del Carrito</li>`);
    document.write("<ul>");
    Object.values(carrito[key]).forEach(element => {
        document.write("<li>" + element + "</li>");
    });
    document.write("</ul></li>");
}