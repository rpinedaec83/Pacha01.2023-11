Proceso ejemplo36
	escribir "Ingrese el n�mero de t�rminos: "
	leer n
	
	a = 0
	b = 1
	
	escribir a
	para c desde 2 hasta n
		c = a + b
		escribir c
		a = b
		b = c
	FinPara
FinProceso
