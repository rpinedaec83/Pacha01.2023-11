Proceso Ejercicio4
	
//	Hacer un algoritmo en Pseint que lea tres n�meros enteros y los muestre de menor a mayor.
	
		// Definir variables
		Definir num1, num2, num3 Como Entero
		
		// Solicitar al usuario ingresar tres n�meros
		Escribir "Ingrese el primer n�mero: "
		Leer num1
		
		Escribir "Ingrese el segundo n�mero: "
		Leer num2
		
		Escribir "Ingrese el tercer n�mero: "
		Leer num3
		
		// Ordenar los n�meros de menor a mayor y mostrarlos
		Si num1 <= num2 y num1 <= num3 Entonces
			Si num2 <= num3 Entonces
				Escribir num1, num2, num3
			Sino
				Escribir num1, num3, num2
			FinSi
		FinSi
		
		Si num2 <= num1 y num2 <= num3 Entonces
			Si num1 <= num3 Entonces
				Escribir num2, num1, num3
			Sino
				Escribir num2, num3, num1
			FinSi
		FinSi
		
		Si num3 <= num1 y num3 <= num2 Entonces
			Si num1 <= num2 Entonces
				Escribir num3, num1, num2
			Sino
				Escribir num3, num2, num1
			FinSi
		FinSi

FinProceso
