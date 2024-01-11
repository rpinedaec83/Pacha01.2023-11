Proceso Ejercicio13
	
//	Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.
	

		// Definir variable
		Definir letra Como Caracter
		
		// Solicitar al usuario ingresar una letra
		Escribir "Ingrese una letra: "
		Leer letra
		
		// Convertir la letra a minúscula para simplificar la comparación
		letra <- Minusculas (letra)
		
		// Determinar si la letra es una vocal
		Si letra = "a" o letra = "e" o letra = "i" o letra = "o" o letra = "u" Entonces
			Escribir "La letra ingresada es una vocal."
		Sino
			Escribir "La letra ingresada no es una vocal."
		FinSi
		
FinProceso
