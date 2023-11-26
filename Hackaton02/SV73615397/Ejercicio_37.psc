Proceso MCDEuclides
	Definir n1,n2,resto Como Entero
	Mientras n1<=0 Hacer
		Escribir "Ingrese el N°1:"
		Leer n1
		Si n1>0 Entonces
			Mientras n2<=0 Hacer
				Escribir "Ingrese el N°2:"
				Leer n2
			FinMientras
		FinSi
	FinMientras
	Mientras n2<>0 Hacer
		resto = n1 % n2
		n1=n2
		n2=resto
	FinMientras
	Escribir "El MCD es: ",n1
FinProceso
