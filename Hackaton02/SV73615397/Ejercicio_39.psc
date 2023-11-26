Proceso AproximacionPI
	Definir n como Entero
	Mientras n<=0 Hacer
		Escribir "Ingrese el número de términos para aproximar Pi: "
		Leer n
	FinMientras
	Definir npi Como Real
	npi = 0
	Para i<-0 Hasta n-1 Hacer
		//La formula es f(n) = 4(2*n + 1)
		npi = npi + (-1)^i*4/((2*i)+1)
	FinPara
	Escribir "El resultado es: ",npi
FinProceso
