// Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números
Proceso Ejercicio_31
	Definir num, sumaPares, sumaImpares, contadorPares, contadorImpares, mediaPares, mediaImpares Como Real
	para i <- 1 Hasta 10 Con Paso 1 Hacer
		Escribir "Ingrese el número :", num
		Leer num
		
		si num % 2 = 0 Entonces
			sumaPares <- sumaPares + num
			contadorPares <- contadorPares + 1
		SiNo
			sumaImpares <- sumaImpares + num
			contadorImpares <- contadorImpares + 1
		FinSi
	FinPara
	
	si contadorPares > 0 Entonces
		mediaPares <- sumaPares / contadorPares
		Escribir "La media de los números pares es: ", mediaPares
	FinSi
	
	si contadorImpares > 0 Entonces
		mediaImpares <- sumaImpares / contadorImpares
		Escribir "La media de los número impares es: ", mediaImpares
	FinSi
FinProceso
