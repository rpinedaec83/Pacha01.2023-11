// 1. Hacer un algoritmo en Pseint que lea un número por el teclado y determinar si tiene tres dígitos.

Proceso CantidadDigitos
	
	Escribir "Ingrese un numero: "
	Leer numeroIngresado
	
	resultado = ""
	
	Si numeroIngresado > 99
		Si numeroIngresado < 1000
			resultado = "El numero tiene 3 digitos"
		SiNo
			resultado = "El numero tiene mas de 3 digitos"
		FinSi
	SiNo
		resultado = "El numero tiene menos de 3 digitos"
	FinSi
	
	Escribir resultado
	
FinProceso
