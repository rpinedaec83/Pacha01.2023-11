Proceso MayorMenor
	Definir n,nMayor,nMenor,numeros Como Real
	count<-0
	Dimension numeros[20]
	Mientras count<20 Hacer
		Escribir "Ingrese el N°",count+1
		Leer n
		numeros[count+1]=n
		count = count + 1
	FinMientras
	nMayor = numeros[1]
	nMenor = numeros[1]
	Para i<-1 Hasta 20 Hacer
		Si numeros[i]>nMayor Entonces
			nMayor = numeros[i]
		FinSi
		Si numeros[i]<nMenor Entonces
			nMenor = numeros[i]
		FinSi
	FinPara
	Escribir "El número mayor es ",nMayor
	Escribir "El número menor es ",nMenor
FinProceso
