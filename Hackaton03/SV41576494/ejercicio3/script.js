function ejercicio03(){

    let num2;
    let num1 = parseInt( prompt("Escribe un numero"))
    
    num2=num1%10;

    if (num2==4)
        {
            document.write("El número termina en cuatro (4)");
        }
    else
        {
            document.write("El número No termina en cuatro (4)");
        }
    }