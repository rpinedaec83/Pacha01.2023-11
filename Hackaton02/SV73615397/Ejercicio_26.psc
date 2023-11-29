Proceso DivisionPorRestas
	Definir divisor,dividendo,acum Como Entero
	Mientras dividendo<=0 Hacer
		Escribir "Ingrese el dividendo(D): "
		Leer dividendo
		Si dividendo>0 Entonces
			Mientras divisor<=0 o divisor>dividendo Hacer
				Escribir  "Ingrese el divisor(d): "
				Leer divisor
			FinMientras
		FinSi
	FinMientras
	// 15:4 -> 15-4=11 , 11-4=7 , 7-4=3 , 3-4=-1
	// 15:5 -> 15-5=10 , 10-5=5 , 5-5=0
	Mientras dividendo>=divisor Hacer
		dividendo = dividendo - divisor
		acum = acum + 1
	FinMientras
	Escribir "El cociente es: ",acum,", y el resto es:",dividendo
FinProceso
