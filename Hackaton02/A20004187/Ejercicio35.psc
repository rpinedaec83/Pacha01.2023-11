//35 Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

Proceso Ejercicio35
	total = 20
	Dimension  arreglo[total]
	
	Para i <- 1 Hasta total Hacer
		Escribir "Ingrese numero: "
		leer arreglo[i]
	FinPara
	//ordenar de menor a mayor
	Para i<-1 Hasta (total-1) Con Paso 1 Hacer
		Para j<-(i+1) Hasta total Con Paso 1 Hacer
			si arreglo[i] > arreglo[j] Entonces
				num <- arreglo[i]
				arreglo[i] <- arreglo[j]
				arreglo[j] <- num
				i<-1
				j<-(i+1)
			FinSi
		Fin Para
	Fin Para
	
	escribir "el menor es: " ,arreglo[1]
	escribir "el mayor es: " ,arreglo[total]
FinProceso
