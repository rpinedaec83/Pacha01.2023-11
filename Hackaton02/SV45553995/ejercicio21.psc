//21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
Proceso ejercicio21
	Definir numeroingresado,x Como Entero
	Definir factorial Como Real
	Escribir "Ingresa un número: "
	leer numeroingresado
	
	si numeroingresado < 0 Entonces		
		Escribir "El número no se puede calcular"
	SiNo
		factorial = 1
		
		para x = 1 Hasta numeroingresado Con Paso 1 Hacer
			factorial = factorial * x
		FinPara
		
	Escribir "El factorial es: ",factorial
	FinSi     	
FinProceso
