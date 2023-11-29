//27 Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, 
//se debe acabar el programa al ingresar un número negativo.


Proceso Ejercicio27
	bandera = Verdadero
	contador = 0
	promedio = 0
	Mientras bandera Hacer
		escribir "ingrese numero"
		leer numero
		
		si numero < 0 entonces
			bandera = falso
			Escribir  "la media es : ", (promedio/contador)
		SiNo
			contador = contador + 1
			promedio = (promedio+numero)
		FinSi
	FinMientras
FinProceso
