//20 Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

//¿Cuántos números son Pares?

//¿Cuál es el mayor de todos?

//Si el tercero es par, calcular el cuadrado del segundo.
	
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
		
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. 
//Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

Algoritmo Ejercicio20
	total = 4
	Dimension  arreglo[total]
	Dimension  arreglo2[total]
	bandera = Verdadero
	contador = 0
	Mientras bandera Hacer
		si contador = total entonces
			bandera = falso
		sino
			Escribir "Ingrese número enteros positivos ", (contador+1)
			Leer numero
			si numero < 0 entonces
				Escribir "solo ingrese número enteros positivos"
			sino
				contador = contador + 1
				arreglo[contador] = numero
				arreglo2[contador] = numero
			FinSi
		FinSi
	FinMientras
	//ordenar de menor a mayor
	Para i<-1 Hasta (total-1) Con Paso 1 Hacer
		Para j<-(i+1) Hasta total Con Paso 1 Hacer
			si arreglo[i] > arreglo[j] Entonces
				num <- arreglo[i]
				arreglo[i] <- arreglo[j]
				arreglo[j] <- num
				i<-1
				j<-(i+1)
			FinSi
		Fin Para
	Fin Para
	
	//
	cant_pares = 0
	Para i<-1 Hasta (total) Con Paso 1 Hacer
		si arreglo[i] % 2 = 0 Entonces
			cant_pares = cant_pares + 1
		FinSi
	Fin Para
	
	Escribir "Hay ",cant_pares," numeros pares"
	Escribir "El numero mayor es  ",arreglo[total]
	
	si arreglo2[3]%2 = 0 entonces
		Escribir "El tercer numero es par, por lo tanto el cuadrado del segundo numero es ",(arreglo2[2]*arreglo2[2])
	FinSi
	si arreglo2[1]  < arreglo2[4] entonces
		Escribir "La media de los 4 números es ",((arreglo2[1]+arreglo2[2]+arreglo2[3]+arreglo2[4])/4)
	FinSi
	si arreglo2[2]  > arreglo2[3] entonces
		si arreglo2[3] >=50 y arreglo2[3] <= 700 Entonces
			Escribir "La suma de todos los numeros es ",(arreglo2[1]+arreglo2[2]+arreglo2[3]+arreglo2[4])
		FinSi
	FinSi
	
FinAlgoritmo
