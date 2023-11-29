//Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, 
//se debe ingresar sólo veinte números
Proceso ejercicio35
	Definir num, mayorx, menorx Como Entero
	mayor <- 9999
	menor <- 9999
	para i <- 1 hasta 20 Con Paso 1 Hacer
		Escribir "ingrese el numero: " i
		leer num
		si num > mayorx Entonces
			mayorx <- num
		FinSi
		
		si num < menorx Entonces
			menorx <- num
		FinSi
		
	FinPara
	Escribir "el numero mayor es: ", mayorx
	Escribir "el numero menorx es: ", menorx
	
FinProceso