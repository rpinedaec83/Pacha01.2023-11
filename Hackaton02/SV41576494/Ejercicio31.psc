//31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
Algoritmo ejercicio31
	Definir num, sumapares, sumaimpares, contadorpares, contadorimpares, promediopares, promedioimpares Como Real
	sumapares = 0
	contadorpares = 0
	para i <- 1 hasta 10 con paso 1 Hacer
		escribir "Ingrese el numero: "
		leer num
		si num% 2=0 entonces
			sumapares = sumapares + num
			contadorpares = contadorpares + 1
		sino
			sumaimpares = sumaimpares + num
			contadorimpares = contadorimpares + 1
		FinSi
	FinPara
	promediopares = sumapares/contadorpares
	promedioimpares = sumaimpares/contadorimpares
	Escribir "El promedio de la suma de pares es: ",promediopares
	Escribir "El promedio de la suma de impares es: ",promedioimpares
FinAlgoritmo
