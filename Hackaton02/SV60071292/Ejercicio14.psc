Proceso Ejercicio14
	
//	Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un n�mero primo.

		// Definir variable
		Definir numero Como Entero
		
		// Solicitar al usuario ingresar un entero positivo del 1 al 10
		Escribir "Ingrese un entero positivo del 1 al 10: "
		Leer numero
		
		// Verificar si el n�mero es 9 y mostrar un mensaje especial
		Si numero = 9 Entonces
			Escribir "�El n�mero 9 es un caso especial!"
			Escribir "El n�mero 9 no es primo, pero es un cuadrado m�gico."
		Sino
			// Verificar si el n�mero es primo
			Si numero = 2 o numero = 3 o numero = 5 o numero = 7 Entonces
				Escribir "El n�mero ingresado es primo."
			Sino
				Escribir "El n�mero ingresado no es primo."
			FinSi
		FinSi
		
FinProceso


