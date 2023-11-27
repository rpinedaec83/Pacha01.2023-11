//17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
Proceso Ejercicio17
	
	// Definir variables
	Definir hora, minuto, segund Como Entero
	// Solicitar al usuario ingresar la hora, minuto y segundo
	Escribir "Ingrese la hora: "
	Leer hora
	
	Escribir "Ingrese el minuto: "
	Leer minuto
	
	Escribir "Ingrese el segundo: "
	Leer segund
	
	// Incrementar el segundo
	segund <- segund + 1
	
	// Ajustar los valores si es necesario
	Si segund >= 60 Entonces
		segund <- 0
		minuto <- minuto + 1
	FinSi
	
	Si minuto >= 60 Entonces
			minuto <- 0
			hora <- hora + 1
	FinSi
		
	Si hora >= 24 Entonces
				hora <- hora-24
	FinSi
	
	// Mostrar la nueva hora
	Escribir "La hora después de un segundo es: ", hora, ":", minuto, ":", segund
	
FinProceso