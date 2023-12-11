Proceso Ejercicio17
	
//	Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.

		// Definir variables
		Definir hora, minuto, segundo Como Entero
		// Solicitar al usuario ingresar la hora, minuto y segundo
		Escribir "Ingrese la hora: "
		Leer hora
		
		Escribir "Ingrese el minuto: "
		Leer minuto
		
		Escribir "Ingrese el segundo: "
		Leer segundo
		
		// Incrementar el segundo
		segundo <- segundo + 1
		
		// Ajustar los valores si es necesario
		Si segundo >= 60 Entonces
			segundo <- 0
			minuto <- minuto + 1
			
			Si minuto >= 60 Entonces
				minuto <- 0
				hora <- hora + 1
				
				Si hora >= 24 Entonces
					hora <- 0
				FinSi
			FinSi
		FinSi
		
		// Mostrar la nueva hora
		Escribir "La hora después de un segundo es: ", hora, ":", minuto, ":", segundo
		
FinProceso
