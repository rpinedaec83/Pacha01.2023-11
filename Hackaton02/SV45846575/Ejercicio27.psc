//Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.//
Proceso Ejercicio27
	definir nro,lista, cont como entero;
	definir media como real;
	escribir "Ingrese el numero";
	leer nro
	lista = 0;
	cont= 0;
	media = 0;
	mientras nro > 0 Hacer
		lista = lista + nro;
		cont = cont +1;
		leer nro
	FinMientras
media = lista/cont;
Imprimir " La media de la lista de numeros positivos es : ",media;
FinProceso
