Proceso Ejercicio25 
	
//	Hacer un algoritmo en Pseint para calcular el factorial de un n�mero de una forma distinta.
	
	
		// Definir variables
		Definir numero, factorial, i Como Entero
		
		// Solicitar al usuario ingresar un n�mero
		Escribir "Ingrese un n�mero para calcular su factorial: "
		Leer numero
		
		// Inicializar el factorial a 1
		factorial <- 1
		i <- 1
		
		// Calcular el factorial usando un bucle Mientras
		Mientras i <= numero Hacer
			factorial <- factorial * i
			i <- i + 1
		FinMientras
		
		// Mostrar el resultado
		Escribir "El factorial de ", numero, " es: ", factorial
		
FinProceso
