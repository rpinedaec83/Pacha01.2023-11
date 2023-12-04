// 33. Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
Proceso Ejercicio_33
	
	bandera = 0
	
	Mientras bandera = 0 Hacer
		Escribir "Desea continuar con el programa (S / N)?"
		Leer respuesta
		
		Si respuesta = "S" O respuesta = "s" Entonces
			bandera = 0
		SiNo
			bandera = 1
		FinSi
	FinMientras
	
FinProceso
