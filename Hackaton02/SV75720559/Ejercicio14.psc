//14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
Proceso CocienteYRestoPorRestas
    Definir dividendo, divisor, cociente, resto como Entero
	
    Escribir "Ingrese el dividendo: "
    Leer dividendo
	
    Escribir "Ingrese el divisor: "
    Leer divisor
	
    cociente <- 0
	
    Mientras dividendo >= divisor Hacer
        dividendo = dividendo - divisor
        cociente = cociente + 1
    Fin Mientras
	
    resto <- dividendo
	
    Escribir "El cociente es: ", cociente
    Escribir "El resto es: ", resto
FinProceso

