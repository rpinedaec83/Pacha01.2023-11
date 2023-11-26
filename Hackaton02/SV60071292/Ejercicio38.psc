//Ejercicio38
//Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.

Algoritmo NumeroPerfecto
	Definir num1, sumaDivisores como Entero 
	
	num1 <- 6
	
	Escribir "Ingrese el numero: "
	
	
	Para i <- 1 Hasta num1/2 Con Paso 1 Hacer
		Escribir num1
		Si num1 % i = 0 Entonces
			Escribir "Entra al if", num1 
			Escribir "Este es el i", i 
			sumaDivisores <- sumaDivisores + i 
		
			Escribir "Suma de divisores.", sumaDivisores
		FinSi
	FinPara
	
	si sumaDivisores = num1 Entonces
		Escribir "El numero ingresado es un numero perfecto."
	SiNo
		Escribir "El numero ingresado no es un numero perfecto."
	FinSi
FinAlgoritmo
	