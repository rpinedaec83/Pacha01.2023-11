Proceso Ejercicio14
	
//	Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

		// Definir variable
		Definir numero Como Entero
		
		// Solicitar al usuario ingresar un entero positivo del 1 al 10
		Escribir "Ingrese un entero positivo del 1 al 10: "
		Leer numero
		
		// Verificar si el número es 9 y mostrar un mensaje especial
		Si numero = 9 Entonces
			Escribir "¡El número 9 es un caso especial!"
			Escribir "El número 9 no es primo, pero es un cuadrado mágico."
		Sino
			// Verificar si el número es primo
			Si numero = 2 o numero = 3 o numero = 5 o numero = 7 Entonces
				Escribir "El número ingresado es primo."
			Sino
				Escribir "El número ingresado no es primo."
			FinSi
		FinSi
		
FinProceso


