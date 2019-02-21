var sumaValores=0;
var sumaMultiplotres=0;
var sumaUltimocinco=0;
var nContador=1;
var nResultado=1;
    
while (nContador<=10) {
    nResultado=nContador*nContador-2*nContador;
    if ((nResultado % 3)==0){
        document.write( nResultado +"<br>");
        sumaMultiplotres=sumaMultiplotres+nResultado;
      }
      if ((nResultado%5)==0){
          if ((nResultado%10)==0){
            document.write(nResultado +"<br>");
              sumaUltimocinco=sumaUltimocinco+nResultado;    
          }           
      }
    sumaValores=sumaValores+nResultado;
    nContador=nContador+1;


document.write("<h1> mul", sumaMultiplotres +"<br>");
document.write( sumaUltimocinco +"<br>");
document.write( "sumv"+sumaValores  +"<br>");
    }
    
