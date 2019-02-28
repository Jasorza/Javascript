function cambiarColor() {
    let btnColor = document.querySelector('#btnColor');
    let color=btnColor.style.background;

    
    console.log(color)


    if (color == 'red') {
        btnColor.style.background = 'black';
    } else {
        color.style.background = 'red'
    }
}