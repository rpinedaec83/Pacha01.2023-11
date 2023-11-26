Proceso ListarNPrimos
	Definir n,suma Como Entero
	Mientras n<=0 Hacer
		Escribir "Ingrese la cantidad de números a sumar: "
		Leer n
	FinMientras
	suma = n*(n+1)/2
	Escribir "La suma total de los primeros ",n," números es: ",suma
FinProceso
