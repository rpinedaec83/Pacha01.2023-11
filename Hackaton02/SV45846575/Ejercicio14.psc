//Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
Algoritmo Ejercicio14
	cont <-0
	Escribir " Ingrese un numero"
	Leer num
	para i <-1 hasta num con paso 1 Hacer
		si num mod i=0 Entonces
			cont=cont+1
		FinSi
	fin para
	si cont = 2 Entonces
		escribir num, " Si es un numero primo"
	SiNo
		escribir num," No es un numero primo"
	FinSi
	
FinAlgoritmo
