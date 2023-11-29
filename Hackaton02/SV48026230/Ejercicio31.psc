//31 Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.

Proceso Ejercicio31
	
	numero = 0
	total = 10
	Dimension  arreglo[total]
	
	Para i<-1 Hasta total Con Paso 1 Hacer
		Escribir "Ingresa numero"
		leer numero
		arreglo[i] = numero
	Fin Para
	
	media_par = 0
	cant_par = 0
	media_impar = 0
	cant_impar = 0
	
	Para i<-1 Hasta total Con Paso 1 Hacer
		si arreglo[i]%2 =0 entonces
			cant_par = cant_par + 1
			media_par = media_par + arreglo[i]
		SiNo
			cant_impar = cant_impar + 1
			media_impar = media_impar + arreglo[i]
		FinSi
	Fin Para
	
	Escribir "La media par es " , (media_par/cant_par)
	Escribir "La media impar es " , (media_impar/cant_impar)
FinProceso