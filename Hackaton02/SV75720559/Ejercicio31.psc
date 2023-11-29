//31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
Proceso Ejercicio31
	Definir num , sumaP, sumaI, contadorP, contadorI,mediaP, mediaI Como Real
	para i <- 1 hasta 10 con paso 1 Hacer
		Escribir "Ingre el numero", num
		Leer num
		
		si num % 2 = 0 Entonces
			sumaP <- sumaP + num
			contadorP <- contadorP + 1
		SiNo
			sumaI <- sumaI + num
			contadorI <- contadorI + 1
		FinSi
	FinPara
	si contadorP > 0 Entonces
		mediaP <- sumaP / contadorP
		Escribir "La media de los numeros pares es: ", mediaP
	FinSi
	si contadorI > 0 Entonces
		mediaI <- sumaI / contadorI
		Escribir "La media de los numeros imapres es: ", mediaI
	FinSi
FinProceso
