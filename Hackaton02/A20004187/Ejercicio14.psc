//14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

Algoritmo Ejercicio14
	Definir num Como Entero
	Repetir
		Escribir "Por favor ingrese un numero del 1 al 10"
		Leer num
	Hasta Que num>=1 y num <=10
	
	contar<- 0
	Para i<-2 Hasta num Con Paso 1 Hacer
		si num%i=0 Entonces
			contar<-contar+1
		FinSi
	FinPara
	Si contar=1 Entonces
		Escribir "El ",num," es un número primo "
	SiNo
		Escribir "El ",num," no es un número primo "
	FinSi
	
FinAlgoritmo