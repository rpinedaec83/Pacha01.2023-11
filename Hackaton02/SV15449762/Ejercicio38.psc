Proceso Ejercicio38
	
	Definir num1, sumaDivisores Como Entero
	
	Escribir "Ingrese el número a evaluar"
	Leer num1
	
	Para i <- 1 Hasta num1/2 Con Paso 1 Hacer
		Si num1 % i = 0 Entonces
			sumaDivisores <- sumaDivisores + i
		FinSi
	FinPara
	
	Si sumaDivisores = num1 Entonces
		Escribir "El numero ingresado es un número perfecto"
	SiNo
		Escribir "El numero ingresado NO es un número perfecto"
	FinSi
	
FinProceso
