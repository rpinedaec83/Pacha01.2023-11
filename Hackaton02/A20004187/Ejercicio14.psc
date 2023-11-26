//14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

Algoritmo Ejercicio14
	Escribir "Por favor ingrese un numero"
	Leer a
	
	contar<- 0
	Para i<-1 Hasta a Hacer
		si a%i=0 Entonces
			contar<-contar+1
		FinSi
	FinPara
	Si contar=2 Entonces
		Escribir a, " Es un numero primo "
	SiNo
		Escribir a, " No es un numero primo "
	FinSi
	
	
	
FinAlgoritmo