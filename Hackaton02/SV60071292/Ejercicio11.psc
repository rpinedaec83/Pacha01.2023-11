Proceso Ejercicio11
	
//Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.

		// Definir variables
		Definir num1, num2, num3 Como Real
		
		// Solicitar al usuario ingresar tres números
		Escribir "Ingrese el primer número: "
		Leer num1
		
		Escribir "Ingrese el segundo número: "
		Leer num2
		
		Escribir "Ingrese el tercer número: "
		Leer num3
		
		// Determinar el mayor entre los tres números
		Si num1 >= num2 y num1 >= num3 Entonces
			Escribir "El número mayor es: ", num1
		Sino
			Si num2 >= num1 y num2 >= num3 Entonces
				Escribir "El número mayor es: ", num2
			Sino
				Escribir "El número mayor es: ", num3
			FinSi
		FinSi
FinProceso
