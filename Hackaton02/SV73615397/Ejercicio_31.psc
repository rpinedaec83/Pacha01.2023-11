Proceso MediaParesImpares
	Definir n,count,countPares,countImpares,sumaPares,sumaImpares Como Entero
	count<-0
	countPares<-0
	countImpares<-0
	Mientras count<10 Hacer
		Escribir "Ingrese el N°",count+1
		leer n
		Si n>0 Entonces
			count = count+1
			Si n%2=0 Entonces
				countPares = countPares+1
				sumaPares = sumaPares + n
			SiNo
				countImpares = countImpares+1
				sumaImpares = sumaImpares + n
			FinSi
		FinSi
	FinMientras
	si countPares>0 Entonces
		Escribir "La media de los números pares ingresados es: ",sumaPares/countPares	
	FinSi
	Si countImpares>0 Entonces
		Escribir "La media de los números impares ingresados es: ",sumaImpares/countImpares
	FinSi
FinProceso
