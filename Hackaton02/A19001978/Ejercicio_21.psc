// 21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
Proceso Ejercicio_21
	
	Escribir "Ingrese el numero para hallar el factorial: "
	Leer numeroIngresado
	factorial = 1
	
	Para i <- 1 Hasta numeroIngresado Con Paso 1 Hacer
		
		factorial = factorial * i
		
	FinPara
	
	Escribir "El factorial del numero ingresado es: ", factorial
	
FinProceso
