Proceso Ejercicio20 
	
//Hacer un algoritmo en Pseint que que lea 4 n�meros enteros positivos y verifique y realice las siguientes operaciones:
//			
//			�Cu�ntos n�meros son Pares?
//			
//			�Cu�l es el mayor de todos?
//			
//			Si el tercero es par, calcular el cuadrado del segundo.
//				
//				Si el primero es menor que el cuarto, calcular la media de los 4 n�meros.
//					
//					Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condici�n, calcular la suma de los 4 n�meros.
	

		// Definir variables
		Definir num1, num2, num3, num4 Como Entero
		
		// Solicitar al usuario ingresar 4 n�meros
		Escribir "Ingrese el primer n�mero: "
		Leer num1
		
		Escribir "Ingrese el segundo n�mero: "
		Leer num2
		
		Escribir "Ingrese el tercer n�mero: "
		Leer num3
		
		Escribir "Ingrese el cuarto n�mero: "
		Leer num4
		
		// Contar n�meros pares
		Definir contadorPares Como Entero
		contadorPares <- 0
		
		Si num1 MOD 2 = 0 Entonces
			contadorPares <- contadorPares + 1
		FinSi
		
		Si num2 MOD 2 = 0 Entonces
			contadorPares <- contadorPares + 1
		FinSi
		
		Si num3 MOD 2 = 0 Entonces
			contadorPares <- contadorPares + 1
		FinSi
		
		Si num4 MOD 2 = 0 Entonces
			contadorPares <- contadorPares + 1
		FinSi
		
		Escribir "Cantidad de n�meros pares: ", contadorPares
		
		// Encontrar el mayor
		Definir mayor Como Entero
		mayor <- num1
		
		Si num2 > mayor Entonces
			mayor <- num2
		FinSi
		
		Si num3 > mayor Entonces
			mayor <- num3
		FinSi
		
		Si num4 > mayor Entonces
			mayor <- num4
		FinSi
		
		Escribir "El mayor de todos es: ", mayor
		
		// Si el tercero es par, calcular el cuadrado del segundo
		Si num3 MOD 2 = 0 Entonces
			Escribir "El cuadrado del segundo n�mero es: ", num2 * num2
		FinSi
		
		// Si el primero es menor que el cuarto, calcular la media de los 4 n�meros
		Si num1 < num4 Entonces
			Definir media Como Real
			media <- (num1 + num2 + num3 + num4) / 4
			Escribir "La media de los 4 n�meros es: ", media
		FinSi
		
		// Si el segundo es mayor que el tercero
		Si num2 > num3 Entonces
			// Verificar si el tercero est� entre 50 y 700
			Si num3 >= 50 y num3 <= 700 Entonces
				// Calcular la suma de los 4 n�meros
				Definir suma Como Entero
				suma <- num1 + num2 + num3 + num4
				Escribir "La suma de los 4 n�meros es: ", suma
			FinSi
		FinSi
		
FinProceso

