// 35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

Proceso Ejercicio_35
	
	numMayor = -9999
	numMenor = 9999
	
	Para i <- 1 Hasta 20 Con Paso 1 Hacer
		Escribir "Ingrese un numero: "
		Leer numeroIngresado
		
		Si numeroIngresado > numMayor Entonces
			numMayor = numeroIngresado
		FinSi
		
		Si numeroIngresado < numMenor Entonces
			numMenor = numeroIngresado
		FinSi
		
	FinPara
	
	Escribir "Numero mayor: ", numMayor
	Escribir "Numero menor: ", numMenor
	
FinProceso
