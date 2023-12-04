//Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique 
//y realice las siguientes operaciones:
//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar si el tercero esta 
//comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición,
//calcular la suma de los 4 números.
Proceso ejercicio20
	Definir nuemeros, contador, n, contadorPares, numMayor, sumaTotal Como Entero
	Dimension numeros[4]
	
	Mientras contador < 4 Hacer
		Escribir "ingrese el N?", contador + 1
		leer n
		numeros[contador + 1] = n
		contador = contador + 1
	FinMientras
	numMayor = numeros[1]
	Para i<-1 Hasta 4 Hacer
		si numeros[i] > numMayor Entonces
			numMayor = numeros[i]
		FinSi
		si numeros[i]%2 = 0 Entonces
			contadorPares = contadorPares + 1
		FinSi
		sumaTotal = sumaTotal + numeros[i]
	FinPara
	si contadorPares >= 1 Entonces
		Escribir " hay ", contadorPares," numeros pares"
		si numeros[3]%2 = 0 Entonces
			Escribir "el cuadrado del 2do numero ingresado es: ", numeros[2]^2
		FinSi
	FinSi
	si numeros[1] > numeros[4] Entonces
		Escribir "el promedio de los 4 numeros es: ", sumaTotal/4
	FinSi
	si numeros[1] > numeros[3] y (numeros[3] >= 50 y numeros[3] <=700) Entonces
		Escribir "la suma de los 4 numeros es: ", sumaTotal
	FinSi
	Escribir "el numero ", numMayor," es el mayor"
	
FinProceso
