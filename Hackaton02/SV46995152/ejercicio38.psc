// Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
Proceso ejercicio38
	Definir num1, sumaDivisores Como Entero
	
	Escribir "ingrese el numero: "
	leer num1
	
	sumaDivisores <- 0
	
	Para i <- 1 Hasta num1/2 Con Paso 1 Hacer
		si num1 % 1 = 0 Entonces
			sumaDivisores <- sumaDivisores + i
		FinSi
	FinPara
	
	si sumaDivisores = num1 Entonces
		Escribir "el numero ingresado es un numero perfecto"
	SiNo
		Escribir "el numero ingresado no es un numero perfecto"
	FinSi
	
FinProceso