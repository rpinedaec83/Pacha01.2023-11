Proceso ejemplo21
	
	escribir "Ingrese un n�mero: "
	leer numero
	
	si (numero < 0)
		escribir "El n�mero no tiene factorial"
	FinSi
	
	si (numero == 0)
		factorial = 1
	FinSi
	
		factorial = 1
	mientras (numero > 1)
		factorial = factorial * numero
		numero = numero - 1
	FinMientras
	
	escribir "El factorial de ", numero, " es: ", factorial

FinProceso
