// 27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, 
// se debe acabar el programa al ingresar un número negativo.

Proceso Ejercicio_27
	
	bandera = 0
	contador = 0
	sumaTotal = 0
	media = 0
	
	Mientras bandera = 0 Hacer
		Escribir "Ingrese un numero entero positivo: "
		Leer numeroIngresado
		
		Si numeroIngresado > 0 Entonces
			sumaTotal = sumaTotal + numeroIngresado
			contador = contador + 1
		SiNo
			bandera = 1
		FinSi
		
	FinMientras
	
	media = sumaTotal / contador
	
	Escribir "La media es: ", media
	
FinProceso
