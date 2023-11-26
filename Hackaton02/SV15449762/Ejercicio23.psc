Proceso SumaImpar
	
	Definir i, num, var, sumimp Como Real	
	
	i = 0
	num = 0
	var = 0
	sumimp = 0
	
	Escribir "Ingresa el número"
	Leer num
	
	Para i <- 1 Hasta num Con Paso 2 Hacer
		Si var!= 0 Entonces
			Escribir "Es Par"
		SiNo
			sumimp <- sumimp + i
		FinSi
	Fin Para
	
	Escribir "La suma de impares menores o iguales que N es " sumimp
FinProceso
