//36 Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.

Proceso Ejercicio36
	numero = 0
	Escribir "Ingrese un numero: "
	leer numero
	
	a=0
	b=1
	
	Para i<-1 Hasta numero Hacer
		Escribir a
		c = a + b
		a = b
		b = c
	FinPara
FinProceso