Proceso Factorial
	Definir n,fact Como Entero
	fact<-1
	Mientras n<=1 Hacer
		Escribir "Ingrese un número a sacar factorial:"
		Leer n
	FinMientras
	Para i<-n Hasta 1 Con Paso -1 Hacer
		fact = fact * i
	FinPara
	Escribir "Factorial: ",fact
FinProceso
