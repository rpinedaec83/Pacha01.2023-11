//31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
Proceso Ejercicio31
	Definir num, sumaPares, sumaImpares, contadorPares, contadorImpares, mediaPares, mediaImparaes Como Entero
	
	Para i <- 1 Hasta 10 con Paso 1 Hacer
		Escribir "Ingrese el numero ", num
		leer num
		
		si num % 2 = 0 Entonces
			sumaPares <- sumaPares + num
			contadorPares <- contadorPares + 1
		SiNo
			sumaImpares <- sumaImpares + num
			contadorImpares <- contadorImparaes + 1
 		FinSi
	FinPara
	
	si contadorPares > 0 Entonces
		mediaPares <- sumaPares / contadorPares
		Escribir "La media de los numeros pares es: " , mediaPares
	FinSi
	
	si contadorImpares > 0 Entonces
		mediaImpares <- sumaImpares / contadorImpares
		escribir "La media de los numeros impares es: ", mediaImpares
	FinSi
	
FinProceso
