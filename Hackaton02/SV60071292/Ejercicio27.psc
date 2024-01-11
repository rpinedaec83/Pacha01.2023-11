Proceso Ejercicio27
	
//	Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de n�meros positivos, se debe acabar el programa al ingresar un n�mero negativo.
	
		// Definir variables
		Definir suma, contador, numero Como Real
		
		// Inicializar la suma y el contador a cero
		suma <- 0
		contador <- 0
		
		// Leer el primer n�mero
		Leer numero
		
		// Procesar n�meros hasta que se ingrese un n�mero negativo
		Mientras numero >= 0 Hacer
			suma <- suma + numero
			contador <- contador + 1
			Leer numero
		FinMientras
		
		// Calcular y mostrar la media si se ingresaron n�meros positivos
		Si contador > 0 Entonces
			Escribir "La media de los n�meros positivos es: ", suma / contador
		Sino
			Escribir "No se ingresaron n�meros positivos."
		FinSi
		
FinProceso
