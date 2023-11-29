//Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y 
//determine si es un número primo.
Proceso ejercicio14
	Escribir "Ingrese un n?mero positivo del 1 al 10:"
	Leer primerNumero
	Mientras primerNumero<=0 o primerNumero>10 Hacer
		Escribir "ingrese un numero positivo:"
		leer primerNumero
	FinMientras
	cont <- 0
	para i <- 1 hasta primerNumero Hacer
		si primerNumero % i = 0 
			Entonces
			cont <- cont + 1
		FinSi
	FinPara
	si cont = 2 Entonces
		escribir primerNumero, " es un numero primo"
	SiNo
		Escribir primerNumero, " no es numero primo"
	FinSi
FinProceso

