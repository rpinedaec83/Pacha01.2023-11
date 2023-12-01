// 31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
Proceso Ejercicio_31
	
	sumaPares = 0
	sumaImpares = 0
	mediaPares = 0
	mediaImpares = 0
	contPares = 0
	contImpares = 0
	
	Para i <- 1 Hasta 10 Con Paso 1 Hacer
		Escribir "Ingrese un numero entero positivo: "
		Leer numeroIngresado
		
		Si numeroIngresado % 2 = 0 Entonces
			sumaPares = sumaPares + numeroIngresado
			contPares = contPares + 1
		SiNo
			sumaImpares = sumaImpares + numeroIngresado
			contImpares = contImpares + 1
		FinSi
		
	FinPara
	
	mediaPares = sumaPares / contPares
	mediaImpares = sumaImpares / contImpares
	
	Escribir "Pares: ", contPares
	Escribir "Media de numero pares ingresados: ", mediaPares
	Escribir "Media de numeros impares ingresados: ", mediaImpares
	
FinProceso
