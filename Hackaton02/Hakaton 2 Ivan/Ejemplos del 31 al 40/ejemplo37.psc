Proceso ejemplo37
	
	escribir "Ingrese el primer n�mero: "
	leer a
	
	escribir "Ingrese el segundo n�mero: "
	leer b
	
	si (a < b)
		r = a
		a = b
		b = r
	FinSi
	
	mientras (r <> 0)
		r = a % b
		a = b
		b = r
	FinMientras
	
	escribir "El MCD de los n�meros ingresados es: ", b
FinProceso
