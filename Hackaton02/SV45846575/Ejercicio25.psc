//Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
Proceso Ejercicio25
	definir numero, factorial, x Como Entero
	escribir " Dame un numero"
	leer numero
	si numero <0 Entonces
		escribir " El numero no se puede calcular"
	SiNo
		x=1
		factorial =1
		mientras x<= numero hacer
			factorial = factorial *x
			x=x+1
		FinMientras
		escribir " El factorial del numero ", numero," = ",factorial
	FinSi
	
FinProceso
