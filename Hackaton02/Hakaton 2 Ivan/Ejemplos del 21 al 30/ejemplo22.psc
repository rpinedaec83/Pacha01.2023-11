Proceso ejemplo22
	
	escribir "Ingrese el n�mero de n�meros: "
	leer n
	
	si (n < 1)
		escribir "No hay suma"
	FinSi
	
	suma = 0
	
	i = 1
	mientras (i <= n)
		suma = suma + i
		i = i + 1
	FinMientras
	
	escribir "La suma de los ", n, " primeros n�meros es: ", suma

FinProceso
