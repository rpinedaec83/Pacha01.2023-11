// 21. Hacer un algoritmo en Pseint que permita calcular el factorial de un n�mero.
Proceso Ejercicio21
	Definir n, fact Como Real
	Escribir "Ingrese un n�mero natural"
	Leer n
	Mientras n<0 Hacer
		Escribir "Error: Ingrese un n�mero natural mayor que 0"
		Leer n
	FinMientras
	fact<-1
	Para  i<-1 Hasta n Con Paso 1 Hacer
		Escribir "",i
		fact<-fact*i
	FinPara
	Escribir "El factorial de ",n, " Es: ", fact
FinProceso