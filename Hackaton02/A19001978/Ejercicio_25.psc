// 25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
Proceso Ejercicio_25
	
	Escribir "Ingrese el numero para hallar el factorial: "
	Leer numeroIngresado
	factorial = 1
	
	Para i <- 1 Hasta numeroIngresado Con Paso 1 Hacer
		
		factorial = factorial * i
		
	FinPara
	
	Escribir "El factorial es: ", factorial
	
FinProceso
