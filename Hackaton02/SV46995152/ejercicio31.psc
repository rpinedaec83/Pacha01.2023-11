//Hacer un algoritmo en Pseint parar calcular la media de los números pares e 
//impares, sólo se ingresará diez números.
Proceso ejercicio31
	Definir num,sumaPares, sumaImpares,contadorPares, contadorImpares, mediaPares, mediaImpares Como Real
	
	Para i <- 1 Hasta 10 Con Paso 1 Hacer
		Escribir "ingrese el numero ", num
		leer num
		si num % 2 = 0 Entonces
			sumaPares =sumaPares + num
			contadorPares <- contadorPares + 1
		SiNo
			sumaImpares <- sumaImpares + num
			contadorImpares <- contadorImpares +1
		FinSi
	FinPara
	si contadorPares > 0 Entonces
		mediaPares <- sumaPares / contadorPares
		Escribir "las mmedia de los numeros pares es: ", mediaPares
	FinSi
	si contadorImpares > 0 Entonces
		mediaImpares <- sumaImpares / contadorImpares
		Escribir "la media de los numeros impares: ", mediaImpares
	FinSi
FinProceso