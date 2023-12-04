// 36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.

Proceso Ejercicio_36
	
	numAnt = 0
	numSig = 1
	suma = 0
	
	Escribir "Ingrese el numero de elementos que desea generar: "
	Leer numeroElementos
	
	Para i <- 1 Hasta numeroElementos Con Paso 1 Hacer
		suma = numAnt + numSig
		Escribir suma
		
		numAnt = numSig
		numSig = suma
		
	FinPara
	
FinProceso
