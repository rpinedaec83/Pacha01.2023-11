//Ejercicio31
//	Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.

Algoritmo MediaParesImpares
	Definir num, sumaPares, sumaImpares,contadorPares, contadorImpares, mediaPares, mediaImpares como Real
	
	para i <- 1 hasta 10 con paso 1 Hacer
		Escribir "Ingrese el numero ", num
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
			Escribir "La media de los numeros pares es: ", mediaPares 
		FinSi
		
		
		si contadorImpares > 0 Entonces 
			mediaImpares <- sumaImpares / contadorImpares
			Escribir "La media de los numeros impares es: ", mediaImpares
		FinSi
		
FinAlgoritmo 
