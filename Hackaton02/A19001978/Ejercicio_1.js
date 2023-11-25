// / 1. Hacer un algoritmo en Pseint que lea un n�mero por el teclado y determinar si tiene tres d�gitos

let numero = prompt("Ingrese un numero: ")
resultado = ""

if (numero > 99 && numero < 1000) {
    resultado = "El numero tiene 3 digitos"
} else {
    if (numero > 99)
        resultado = "El numero tiene mas de 3 digitos"
    else
        resultado = "El numero tiene menos de 3 digitos"
}

console.log(resultado)