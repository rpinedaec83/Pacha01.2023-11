//Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
Proceso ejercicio25
	Escribir "Ingrese un n?mero:"
	Leer n
	Si (n == 0)
		Entonces
		factorial = 1
	Fin Si
	Si (n >= 1)
		Entonces
		factorial = n
		Para i = n - 1 Hasta 1
			factorial = factorial * i
		Fin Para
	Fin Si
	Escribir "El factorial de " n " es " factorial
FinProceso