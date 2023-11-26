Proceso AproximacionPI
	Definir n como Entero
	Mientras n<=0 Hacer
		Escribir "Ingrese el número de términos para aproximar Pi: "
		Leer n
	FinMientras
	Definir npi Como Real
	npi=3
	Para i<-1 Hasta n Con Paso 1 Hacer
		//La formula es f(n) = 4/(2*n)(2*n + 1)(2*n+2)
		npi = npi + ((-1)^i)*(4 / ((2 * i) * (2 * i + 1) * (2 * i + 2)))		
	FinPara
	Escribir "El resultado es : ",npi
FinProceso
