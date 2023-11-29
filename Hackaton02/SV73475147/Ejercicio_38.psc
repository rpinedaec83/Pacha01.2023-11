// Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto
Proceso Ejercicio_38
	Definir num1, sumaDivisores Como Entero

	Escribir "Ingrese el número: "
	Leer  num1
	
	Para i <- 1 Hasta num1/2 Con Paso 1 Hacer
		Escribir num1
		si num1 % 1 = 0 Entonces
			sumaDivisores <- sumaDivisores + i
			Escribir "Suma de divisores: ",sumaDivisores
		FinSi
	FinPara
	
	si sumaDivisores = num1 Entonces
		Escribir "El número ingresado es un número perfecto."
	SiNo
		Escribir "El número ingresado no es un número perfecto."
	FinSi
FinProceso
