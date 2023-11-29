//Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo para.
Proceso Ejercicio30
	escribir " Ingrese cantidad de numeros que desea sumar"
	leer fin1
	sum <- 0
	para i <-1 hasta fin1 con paso 1 Hacer
		escribir " Iteracion numero:", i
		leer n
		sum<-sum+n
		
	FinPara
	escribir " La suma es: ", sum
FinProceso
