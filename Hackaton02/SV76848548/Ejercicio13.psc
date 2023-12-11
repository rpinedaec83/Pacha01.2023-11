//13.Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.

Proceso Ejercicio13
	tamano = 10
	
	letra = ''
	bandera = falso
	Escribir "Ingrese una letra: "
	Leer letra
	
	Dimension  arreglo[10]
	arreglo[1] = "a"
	arreglo[2] = "e"
	arreglo[3] = "i"
	arreglo[4] = "o"
	arreglo[5] = "u"
	arreglo[6] = "A"
	arreglo[7] = "E"
	arreglo[8] = "I"
	arreglo[9] = "O"
	arreglo[10] = "U"
	
	Para i<-1 Hasta (tamano) Con Paso 1 Hacer
		posible_vocal = arreglo[i]
		si posible_vocal = letra Entonces
			bandera = Verdadero
			Escribir "La letra ingresada es una vocal"
		FinSi
	Fin Para
	si bandera= falso Entonces
		Escribir "La letra ingresada no es una vocal"
	FinSi
FinProceso
