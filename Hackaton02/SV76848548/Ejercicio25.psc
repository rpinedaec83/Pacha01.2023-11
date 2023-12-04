//25 Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.

Proceso Ejercicio25
    Definir numero, factorial Como Entero
	
    Escribir("Ingrese un numero:")
    Leer numero
	
    Si numero < 0 Entonces
        Escribir("El factorial no permite numeros negativos")
    Sino
        factorial <- 1

        Mientras numero > 0 Hacer
            factorial <- factorial * numero
            numero <- numero - 1
        FinMientras

        Escribir "El factorial es: ", factorial
    FinSi
FinProceso
