Proceso Ejercicio21
	
	//Hacer un algoritmo en Pseint que permita calcular el factorial de un n�mero.
	
		// Definir variables
		Definir numero, factorial, i Como Entero
		
		// Solicitar al usuario ingresar un n�mero
		Escribir "Ingrese un n�mero para calcular su factorial: "
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
