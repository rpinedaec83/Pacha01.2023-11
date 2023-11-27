//22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.
Proceso Ejercicio22
	
	// Definir variables
	Definir n, suma, i Como Entero
	
	// Solicitar al usuario ingresar un n?mero
	Escribir "Ingrese un número entero positivo para calcular la suma de los primeros n números: "
	Leer n
	
	// Inicializar la suma a cero
	suma <- 0
	
	// Calcular la suma de los primeros n números
	Para i <- 1 Hasta n Hacer
		suma <- suma + i
	FinPara
	
	// Mostrar el resultado
	Escribir "La suma de los primeros ", n, " números es: ", suma
	
FinProceso