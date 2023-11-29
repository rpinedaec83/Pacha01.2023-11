//21 Hacer un algoritmo en Pseint que permita calcular el factorial de un número.

Proceso Ejercicio21
	numero = 0
	Escribir "Ingrese un numero:"
	leer numero
	factorial = 1
	Para i<-1 Hasta (numero-1) Con Paso 1 Hacer
		factorial = (i+1)*factorial
	Fin Para
	
	Escribir "El factorial de ",numero, " es ",factorial
	
FinProceso
