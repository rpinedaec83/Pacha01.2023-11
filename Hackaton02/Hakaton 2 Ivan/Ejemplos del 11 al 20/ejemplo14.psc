Proceso ejemplo14
	escribir "Ingrese un n�mero del 1 al 10: "
	leer numero
	
	si (numero < 1 o numero > 10)
		escribir "El n�mero no es primo"
	FinSi
	
	si (numero == 1)
		escribir "El n�mero no es primo"
	FinSi
	
	contador = 2
	
	mientras (contador < numero)
		si (numero % contador == 0)
			escribir "El n�mero no es primo"
		FinSi
		
		contador = contador + 1
	FinMientras
	
	escribir "El n�mero es primo"

	
FinProceso
