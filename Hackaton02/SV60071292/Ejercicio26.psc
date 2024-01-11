Proceso Ejercicio26
	
//	Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
	
		// Definir variables
		Definir dividendo, divisor, cociente, resto Como Entero
		
		// Solicitar al usuario ingresar el dividendo y el divisor
		Escribir "Ingrese el dividendo: "
		Leer dividendo
		Escribir "Ingrese el divisor: "
		Leer divisor
		
		// Inicializar el cociente y el resto a cero
		cociente <- 0
		resto <- 0
		
		// Calcular el cociente y el resto mediante restas sucesivas
		Mientras dividendo >= divisor Hacer
			dividendo <- dividendo - divisor
			cociente <- cociente + 1
		FinMientras
		
		// El valor final de dividendo es el resto
		resto <- dividendo
		
		// Mostrar el resultado
		Escribir "El cociente es: ", cociente
		Escribir "El resto es: ", resto
		
FinProceso
