// 24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.
Proceso Ejercicio_24
	
	sumaPares = 0
	
	Para i <- 1 Hasta 1001 Con Paso 1 Hacer
		
		Si i % 2 = 0 Entonces
			sumaPares = sumaPares + i
		FinSi
		
	FinPara
	
	Escribir "La suma de los pares es: " sumaPares
	
FinProceso
