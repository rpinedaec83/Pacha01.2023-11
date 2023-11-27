//21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.

Proceso Ejercicio21
	
	// Definir variables
	Definir numero, factorial, i Como Entero
	
	// Solicitar al usuario ingresar un número
	Escribir "Ingrese un número para calcular su factorial: "
	Leer numero
	
	// Inicializar el factorial a 1
	factorial <- 110
	
	// Calcular el factorial
	Para i <- 1 Hasta numero Hacer
		factorial <- factorial * i
	FinPara
	
	// Mostrar el resultado
	Escribir "El factorial de ", numero, " es: ", factorial
	
FinProceso