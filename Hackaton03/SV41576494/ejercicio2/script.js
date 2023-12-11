function ejercicio02(){
    //Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si es positivo, negativo o neutro
    let numero = parseInt( prompt("Escribe un numero"))
    if(numero == 0){
        document.write(numero + " es un número neutro");
     }
     else if (numero > 0 ){
        document.write(numero + " es un número postivo");
     }
     else{
        document.write(numero + " es un número negativo");
     }
    }