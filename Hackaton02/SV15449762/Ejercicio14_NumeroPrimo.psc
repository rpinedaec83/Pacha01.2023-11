Proceso NumeroPrimo
	Definir num Como Entero
	Escribir "Escribir un número"
	Leer num	
	Cont <- 0
	
	Mientras num <= 0 o num > 10 Hacer
		Escribir "Ingrese un número válido"
		Leer num
	FinMientras
	
	Para var = 1 Hasta num Con Paso 1 Hacer
		Si num % var = 0 Entonces
			Cont = Cont + 1
		FinSi
	Fin Para
	
	Si Cont = 2 Entonces
		Escribir num " es un número primo"
	SiNo
		Escribir num " NO es un número primo"
	FinSi
	
FinProceso
