// 1. Hacer un algoritmo en Pseint que lea un n�mero por el teclado y determinar si tiene tres d�gitos.

Proceso CantidadDigitos
	
	Escribir "Ingrese un numero: "
	Leer numeroIngresado
	
	resultado = ""
	
	Si numeroIngresado > 99 Y numeroIngresado < 1000
		resultado = "El numero tiene 3 digitos"
	SiNo
		Si numeroIngresado > 99
			resultado = "El numero tiene mas de 3 digitos"
		SiNo
			resultado = "El numero tiene menos de 3 digitos"
	FinSi
	
	Escribir resultado
	
FinProceso
