//14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un n�mero primo.

Algoritmo Ejercicio14

	Mientras a<=0 o a>10 Hacer
	Escribir "Por favor ingrese un numero"
	Leer a
	Finmiestras
	
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
	