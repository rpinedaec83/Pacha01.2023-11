Proceso AlgoritmoCuatro
	Definir numeros,count,n,countPares,nMayor,sumaTotal Como Entero
	Dimension numeros[4]
	
	Mientras count<4 Hacer
		Escribir "Ingrese el N°",count+1
		Leer n
		numeros[count+1]=n
		count = count + 1
	FinMientras
	
	nMayor = numeros[1]
	
	Para i<-1 Hasta 4 Hacer
		Si numeros[i] > nMayor Entonces
			nMayor = numeros[i]
		FinSi
		Si numeros[i]%2 = 0 Entonces
			countPares = countPares + 1
		FinSi
		sumaTotal = sumaTotal+numeros[i]
	FinPara
	
	Si countPares>=1 Entonces
		Escribir "Hay ",countPares," número(s) PAR(ES)"
		Si numeros[3]%2=0 Entonces
			Escribir "El cuadrado del 2do número ingresado es:",numeros[2]^2 //
		FinSi
	FinSi
	
	Si numeros[1]>numeros[4] Entonces
		Escribir "El promedio de los 4 números ingresados es: ",sumaTotal/4
	FinSi
	
	Si numeros[2]>numeros[3] y (numeros[3]>=50 y numeros[3]<=700) Entonces
		Escribir "La suma de los 4 números es: ",sumaTotal
	FinSi
	
	Escribir "El número ",nMayor," es el MAYOR"
FinProceso
