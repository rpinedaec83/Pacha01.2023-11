//Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
Proceso ejercicio21
	Escribir "Ingrese un n?mero:"
	Leer numero
	factorial = 1
	Si (numero == 0)
		Entonces
		factorial = 1
	Fin Si
	Para i = 1 Hasta numero
		factorial = factorial * i
	Fin Para
	
	Escribir "El factorial de "  numero " es " factorial
FinProceso
