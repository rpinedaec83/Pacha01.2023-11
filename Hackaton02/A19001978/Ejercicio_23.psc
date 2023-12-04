// 23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
Proceso Ejercicio_23
	
	Escribir "El numero de elementos a sumar :"
	Leer numeroElementos
	
	sumaImpares = 0
	
	Para i <- 1 Hasta (numeroElementos + 1) Con Paso 1 Hacer
		Escribir "Ingrese numero a sumar: "
		Leer numerIngresado
		
		Si no (numeroIngresado % 2 = 0) Entonces
			sumaImpares = sumaImpares + numerIngresado
		FinSi
		
	FinPara
	
	Escribir "La suma de los impares es: ", sumaImpares
	
FinProceso
