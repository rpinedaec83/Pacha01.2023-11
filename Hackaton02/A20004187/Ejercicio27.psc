//27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, 
//se debe acabar el programa al ingresar un número negativo.

Proceso Ejercicio27
	
	// Definir variables
	Definir suma, contador, numero Como Real
	
	// Inicializar la suma y el contador a cero
	suma <- 0
	contador <- 0
	
	// Leer el primer número
	Leer numero
	
	// Procesar números hasta que se ingrese un número negativo
	Mientras numero >= 0 Hacer
		suma <- suma + numero
		contador <- contador + 1
		Leer numero
	FinMientras
	
	// Calcular y mostrar la media si se ingresaron números positivos
	Si contador > 0 Entonces
		Escribir "La media de los números positivos es: ", suma / contador
	Sino
		Escribir "No se ingresaron números positivos."
	FinSi
	
FinProceso