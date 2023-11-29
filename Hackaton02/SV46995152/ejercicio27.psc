//Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al 
//ingresar un número negativo.
Proceso ejercicio27
	Definir c Como Entero
	definir x, suma Como Real
	x=1
	Mientras x >= 0 Hacer
		Escribir "ingresar un numero"
		leer x
		si x >= 0 
			Entonces
			suma = suma + x
			c = c + 1
		FinSi
	FinMientras
	si c > 0 
		Entonces
		Escribir "la media de los numeros es: ", suma / c
	FinSi
FinProceso