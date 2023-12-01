// 38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
Proceso Ejercicio_38
	
	Escribir "Ingrese el numero a verificar: "
	Leer numeroIngresado
	
	sumaDivisores = 0
	
	Para i <- 1 Hasta numeroIngresado Con Paso 1 Hacer
		Si numeroIngresado % i = 0 Entonces
			sumaDivisores = sumaDivisores + i
		FinSi
	FinPara
	
	Si sumaDivisores = numeroIngresado Entonces
		Escribir "El numero es perfecto"
	SiNo
		Escribir "El numero no es perfecto"
	FinSi
	
	
FinProceso
