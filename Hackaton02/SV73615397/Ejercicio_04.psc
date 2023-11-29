Proceso OrdenarAscendente
	Definir count,arrayNum,nActual Como Entero
	Dimension arrayNum[3]
	count = 0
	Mientras count < 3 Hacer
		Escribir "Ingrese el N°",(count+1),":"
		Leer arrayNum[count+1]
		count = count + 1
	FinMientras
	para i<-1 Hasta 2 Hacer
		si arrayNum[i]>arrayNum[i+1] Entonces
			nActual = arrayNum[i]
			arrayNum[i] = arrayNum[i+1]
			arrayNum[i+1] = nActual
		FinSi
	FinPara
	Para i <- 1 Hasta 3 Hacer
        Escribir arrayNum[i]
    FinPara
FinProceso
