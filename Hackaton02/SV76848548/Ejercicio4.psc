//4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.

Proceso Ejercicio4
	tamano = 3
	
	numero1= 0
	numero2= 0
	numero3= 0
	
	Escribir "Ingrese un numero 1: "
	Leer numero1
	Escribir "Ingrese un numero 2: "
	Leer numero2
	Escribir "Ingrese un numero 3: "
	Leer numero3
	
	Dimension  arreglo[3]
	arreglo[1] = numero1
	arreglo[2] = numero2
	arreglo[3] = numero3
	
	Para i<-1 Hasta (tamano-1) Con Paso 1 Hacer
		Para j<-(i+1) Hasta tamano Con Paso 1 Hacer
			si arreglo[i] > arreglo[j] Entonces
				num <- arreglo[i]
				arreglo[i] <- arreglo[j]
				arreglo[j] <- num
				i<-1
				j<-(i+1)
			FinSi
		Fin Para
	Fin Para
	Para i<-1 Hasta tamano Con Paso 1 Hacer
		Escribir arreglo[i]
	Fin Para
	
FinProceso
