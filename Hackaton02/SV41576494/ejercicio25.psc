//25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
Proceso ejercicio25
	Definir numeroingresado,x Como Entero
	Definir factorial Como Real
	Escribir "Ingresa un número: "
	leer numeroingresado
	
	si numeroingresado < 0 Entonces		
		Escribir "El número no se puede calcular"
	SiNo
		factorial = 1
		x = 1
		mientras x <= numeroingresado hacer
			factorial = factorial * x
			x = x + 1
		FinMientras
		
		Escribir "El factorial es: ",factorial
	FinSi     	
FinProceso
