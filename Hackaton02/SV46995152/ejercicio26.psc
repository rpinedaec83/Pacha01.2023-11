//Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
Proceso ejercicio26
	
	Escribir "Ingrese el dividendo:"
	Leer dividendo
	Escribir "Ingrese el divisor:"
	Leer divisor
	Si (divisor == 0)
		Entonces
		Escribir "Error: el divisor no puede ser 0"
	Fin Si
	cociente = 0
	resto = dividendo
	Mientras (resto >= divisor)
		resto = resto - divisor
		cociente = cociente + 1
	Fin Mientras
	Escribir "El cociente es "  cociente
	Escribir "El resto es "  resto
	
FinProceso