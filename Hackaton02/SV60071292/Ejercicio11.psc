Proceso Ejercicio11
	
//Hacer un algoritmo en Pseint que lea tres n�meros y diga cu�l es el mayor.

		// Definir variables
		Definir num1, num2, num3 Como Real
		
		// Solicitar al usuario ingresar tres n�meros
		Escribir "Ingrese el primer n�mero: "
		Leer num1
		
		Escribir "Ingrese el segundo n�mero: "
		Leer num2
		
		Escribir "Ingrese el tercer n�mero: "
		Leer num3
		
		// Determinar el mayor entre los tres n�meros
		Si num1 >= num2 y num1 >= num3 Entonces
			Escribir "El n�mero mayor es: ", num1
		Sino
			Si num2 >= num1 y num2 >= num3 Entonces
				Escribir "El n�mero mayor es: ", num2
			Sino
				Escribir "El n�mero mayor es: ", num3
			FinSi
		FinSi
FinProceso
