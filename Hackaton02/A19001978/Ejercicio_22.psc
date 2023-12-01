// 22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.
Proceso Ejercicio_22
	
	Escribir "Ingrese el numero de elementos que desea sumar: "
	Leer numeroElementos
	
	sumaTotal = 0
	
	Para i <- 1 Hasta (numeroElementos + 1) Con Paso 1 Hacer
		Escribir "Ingrese el numero a sumar: "
		Leer numeroIngresado
		
		sumaTotal = sumaTotal + numeroIngresado
	FinPara
	
	Escribir "La suma total es: ", sumaTotal
	
FinProceso
