//24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.
Proceso ejercicio24
	Definir suma,x Como Entero
	
	para x = 1 Hasta 10000 Con Paso 1 Hacer
		Si x % 2 = 0 entonces
			suma = suma + x
		FinSi			
	FinPara
	
	Escribir "La sumatoria de los primeros 1000 números es: ",suma	
FinProceso
