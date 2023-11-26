Proceso MayorDeTres
	Definir n,numeros,count Como Entero
	Dimension numeros[3]
	Mientras count<3 Hacer
		Escribir "Ingrese el N°",count+1,":"
		Leer n
		numeros[count+1] = n
		count = count + 1
	FinMientras
	Para i<-1 Hasta 2 Hacer
		Si numeros[i]>numeros[i+1] Entonces
			n = numeros[i]
			numeros[i] = numeros[i+1]
			numeros[i+1] = n
		FinSi
	FinPara
	Escribir "El mayor es ",numeros[3]
FinProceso
