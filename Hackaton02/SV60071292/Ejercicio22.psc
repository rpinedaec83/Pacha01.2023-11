Proceso Ejercicio22
	
//	Hacer un algoritmo en Pseint para calcular la suma de los n primeros n�meros.
	
		// Definir variables
		Definir n, suma, i Como Entero
		
		// Solicitar al usuario ingresar un n�mero
		Escribir "Ingrese un n�mero entero positivo para calcular la suma de los primeros n n�meros: "
		Leer n
		
		// Inicializar la suma a cero
		suma <- 0
		
		// Calcular la suma de los primeros n n�meros
		Para i <- 1 Hasta n Hacer
			suma <- suma + i
		FinPara
		
		// Mostrar el resultado
		Escribir "La suma de los primeros ", n, " n�meros es: ", suma
		
FinProceso
